
import store from './../../../redux/store.js'

export const create_new_cut_putrs = ( cut_point ) => {

    let { cutEventEditor } = store.getState();
    let { eventsPartsList } = cutEventEditor;

    let next_cut_part = 1;
    let dirationTimeCount = 0;
    let first_segment_id = eventsPartsList[ 0 ].id;

    let new_group = [];

    for( let i = 0; i < eventsPartsList.length; i++ ){
        let { 
            startTime,
            durationTime,
        } = { ...eventsPartsList[ i ] };

        let cut_point_in_day = startTime + cut_point - dirationTimeCount;

        let cut_here = startTime < cut_point_in_day && cut_point_in_day < startTime + durationTime;

        if( cut_here ){

            let dutationTime_0 = cut_point - dirationTimeCount;
            let dutationTime_1 = durationTime - dutationTime_0;

            let startTime_0 = startTime;
            let startTime_1 = startTime + dutationTime_0 + 1;

            let cuted_item =            { ...eventsPartsList[ i ] };
            cuted_item.startTime =      startTime_0;
            cuted_item.durationTime =   dutationTime_0;
            cuted_item.cutPart =        next_cut_part;
            cuted_item.firstSegmentId = first_segment_id;
            new_group.push( cuted_item );

            let new_item = { ...eventsPartsList[ i ] };
            next_cut_part = next_cut_part + 1;
            new_item.id = null;
            new_item.gridEventId = null;

            new_item.startTime = startTime_1;
            new_item.durationTime = dutationTime_1;
            new_item.cutPart = next_cut_part;
            new_item.firstSegmentId = first_segment_id;
            new_item.isKeyPoint = false;

            new_group.push( new_item );


        }else{
            let item = { ...eventsPartsList[ i ] }
            item.cutPart = next_cut_part;
            new_group.push( item );
        };

        dirationTimeCount = dirationTimeCount + durationTime;
        next_cut_part = next_cut_part + 1;
    };

    let result = new_group.sort((a, b) => { 
        let res = 0;
        if( a.startTime > b.startTime ){ res = 1 };
        if( a.startTime < b.startTime ){ res = -1 };
        return res          
    });

    return result;
};