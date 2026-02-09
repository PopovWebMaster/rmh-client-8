
import { get_event_by_id } from './../../../../../../../../../helpers/get_event_by_id.js';

export const get_alt_event_data = ( altGroup ) => {

    let result = {
        style: {},
        name: '',
        duration: 0,
        id: null,
        gridEventsGroup: [],
        eventId: null,
    };

    if( altGroup.length === 1 ){
        let { eventId, durationTime } = altGroup[ 0 ];

        let { style, name } = get_event_by_id( eventId );

        let sec = `${ Math.floor( new Date().getTime() / 1000 )  }`;
        let uniq_id = sec.slice(-5);

        result.style =      { ...style };
        result.name =       name;
        result.id =         Number( uniq_id );
        result.duration =   durationTime;
        result.gridEventsGroup = structuredClone( altGroup );
        result.eventId = eventId;

    }else{

    };

    return result;

};