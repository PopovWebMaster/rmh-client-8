

import store from './../../../redux/store.js';

import { EVENT_TYPE } from './../../../config/layout.js';
import { setInfoMessageText } from './../../../redux/scheduleResultSlise.js';

import { add_push_it_data_to_list } from './add_push_it_data_to_list.js';

export class SSRE_Methods{
    constructor( props ){

        this.GetGridEventsList = this.GetGridEventsList.bind(this);
        this.GetScheduleEventsList = this.GetScheduleEventsList.bind(this);
        this.SetLastGridEventId = this.SetLastGridEventId.bind(this);
        this.SortList = this.SortList.bind(this);
        this.GetEventData = this.GetEventData.bind(this);
        this.GetEventParts = this.GetEventParts.bind(this);
        this.GetEventType = this.GetEventType.bind(this);
        this.GetReleaseData = this.GetReleaseData.bind(this);
        this.GetIdForNewGridEvent = this.GetIdForNewGridEvent.bind(this);

        this.AddPushIt = this.AddPushIt.bind(this);

        this.AlertMessage = this.AlertMessage.bind(this);
        this.GetScheduleEventsListFromStore = this.GetScheduleEventsListFromStore.bind(this);







    }

    AlertMessage( messsage ){
        store.dispatch( setInfoMessageText( messsage ) );  
    }

    GetGridEventsList(){
        let { layout, scheduleResult } = store.getState();
        let { gridDayEventsList } = layout;
        let { currentDayNum } = scheduleResult;

        let result = this.AddPushIt( gridDayEventsList[ currentDayNum ] );

        return result;
    }

    AddPushIt( list ){
        let result = add_push_it_data_to_list( list );
        return result;

    }

    GetScheduleEventsList( makePushIt = true){
        this.SortList();

        let result = [];
        let list = [];

        for( let i = 0; i < this.list.length; i++ ){
            let data = this.list[ i ].GetData();
            list.push( data );
        };

        if( makePushIt ){
            result = this.AddPushIt( list );
        }else{
            result = list;
        };

        return list;
    }
    GetScheduleEventsListFromStore(){

        let { scheduleResult } = store.getState();
        let { scheduleEventsList } = scheduleResult;
        let result = this.AddPushIt( scheduleEventsList );
        return result;

    }

    GetIdForNewGridEvent( id = null ){
        if( id === null ){
            this.lastGridEventId = this.lastGridEventId + 1;
            return this.lastGridEventId;
        }else{
            return id;
        };
    }

    SetLastGridEventId( ScheduleEvent ){
        let id =            ScheduleEvent.id;
        let gridEventId =   ScheduleEvent.gridEventId;

        if( id !== null ){
            if( this.lastGridEventId < id ){
                this.lastGridEventId = id;
            };
        }else{
            if( gridEventId !== null ){
                if( this.lastGridEventId < gridEventId ){
                    this.lastGridEventId = gridEventId;
                };
            };
        };
    }

    SortList(){
        let sortList = this.list.sort( ( a, b ) => {
            if( a.startTime > b.startTime ){ return 1 }else{ return -1 };
        }  );
        this.list = sortList;
    }

    GetEventData( gridEventId ){
        let result = null;
        for( let i = 0; i < this.list.length; i++ ){
            
            if( this.list[ i ].gridEventId === gridEventId ){
                result = this.list[ i ];
                break;
            };
        };


        return result;
    }

    GetReleaseData( releaseId ){
        let result = null;
        let { scheduleResult } = store.getState();
        let { releaseListById } = scheduleResult;
        if( releaseListById[ releaseId ] ){
            result = releaseListById[ releaseId ];
        };
        return result;
    }


    GetEventParts( gridEventId ){

        let result = [];

        for( let i = 0; i < this.list.length; i++ ){
            if( this.list[ i ].firstSegmentId === gridEventId ){
                result.push( this.list[ i ] );
            };
        };

        return result;

    }

    GetEventType( eventId ){
        let result = EVENT_TYPE.FILE
        let { layout } = store.getState();
        let { eventListById } = layout;
        if( eventListById[ eventId ] ){
            let { type } = eventListById[ eventId ];
            result = type;
        };
        return result;

    }


}