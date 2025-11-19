

import store from './../../../redux/store.js';

import { EVENT_TYPE } from './../../../config/layout.js';

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



    }

    GetGridEventsList(){
        let { layout, scheduleResult } = store.getState();
        let { gridDayEventsList } = layout;
        let { currentDayNum } = scheduleResult;
        let result = [];
        for( let i = 0; i < gridDayEventsList[ currentDayNum ].length; i++ ){
            result.push({ ...gridDayEventsList[ currentDayNum ][ i ] });
        };
        return result;
    }

    GetScheduleEventsList(){

        this.SortList();
        let result = [];
        for( let i = 0; i < this.list.length; i++ ){
            result.push( this.list[ i ].GetData() );
        };
        return result
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