

export const add_cut_group_into_day_list = ( dayList, cutGroup ) => {
    let result = [];
    let first_segment_id = cutGroup[ 0 ].id;

    let day_list_without_CG = [];
    let old_CG = [];

    let merge_CG = [];

    for( let i = 0; i < dayList.length; i++ ){
        if( dayList[ i ].id === first_segment_id || dayList[ i ].firstSegmentId === first_segment_id ){
            old_CG.push( dayList[ i ] );
        }else{
            day_list_without_CG.push( dayList[ i ] );
        };
    };

    for( let i = 0; i < cutGroup.length; i++ ){
        let { id } = cutGroup[ i ];
        if( id === null ){
            merge_CG.push( { ...cutGroup[ i ] } );
        }else{
            for( let y = 0; y < old_CG.length; y++ ){
                if( old_CG[ y ].id === id ){
                    let { startTime } = old_CG[ y ];
                    let part = { ...cutGroup[ i ] };
                    part.startTime = startTime;
                    merge_CG.push( part );
                };
            };

        };
    };

    let noSortArr = [ ...day_list_without_CG, ...merge_CG ]; 

    result = noSortArr.sort( ( a, b ) => {
        let res = 0;
        if( a.startTime > b.startTime ){ res = 1 };
        if( a.startTime < b.startTime ){ res = -1 };
        return res;

    } );

    return result;
};