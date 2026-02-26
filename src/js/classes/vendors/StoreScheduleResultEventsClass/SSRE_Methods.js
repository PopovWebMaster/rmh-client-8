

import store from './../../../redux/store.js';

import { EVENT_TYPE } from './../../../config/layout.js';
import { setInfoMessageText } from './../../../redux/scheduleResultSlise.js';
import { RELEASE_TYPE } from './../../../config/scheduleResult.js';

import { add_push_it_data_to_list } from './add_push_it_data_to_list.js';

import { get_space_data_before } from './get_space_data_before.js';
import { get_space_data_after } from './get_space_data_after.js';
import { calculate_remaining_duration_for_space } from './calculate_remaining_duration_for_space.js';

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

        // this.AddReleaseForAnUncutEvent = this.AddReleaseForAnUncutEvent.bind(this);


        this.AddAppReleaseToUncutEvent = this.AddAppReleaseToUncutEvent.bind(this);
        this.AddFreeReleaseToUncutEvent = this.AddFreeReleaseToUncutEvent.bind(this);
        this.GetReleaseType = this.GetReleaseType.bind(this);
        this.ChackPlaceForReleaseDuration = this.ChackPlaceForReleaseDuration.bind(this);











    



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

        if( result.length === 1 ){
            if( result[ 0 ].firstSegmentId !== null ){
                result[ 0 ].SetFirstSegmentIdAsNull();
                // result[ 0 ].firstSegmentId = null;
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


    // AddReleaseForAnUncutEvent( params ){

    //     let {
    //         //для всех релизов
    //         Event,
    //         releaseId,

    //         //для всех free релизов 
    //         eventId = null,
    //         name = '',
    //         duration = 0,
    //         startTime = 0,
    //     } = params;

    //     let type = this.GetEventType( Event.eventId );

    //     if( typeof releaseId === 'string' ){
    //         if( type === EVENT_TYPE.BLOCK ){
    //             Event.AddLinkedFileToRelease({
    //                 category_id,
    //                 eventId,
    //                 name,
    //                 duration,
    //                 startTime,
    //             });
    //             Event.UpdateEventData();
    //         }else{
    //             if( Event.releases.length === 0 ){
    //                 Event.AddLinkedFileToRelease({
    //                     category_id,
    //                     eventId,
    //                     name,
    //                     duration,
    //                     startTime,
    //                 });

    //                 console.dir( Event );
    //                 Event.UpdateEventData();
    //             };
    //         };
    //     }else{
    //         if( type === EVENT_TYPE.BLOCK ){
    //             Event.AddRelease( releaseId );
    //             Event.UpdateEventData();
    //         }else{
    //             if( Event.releases.length === 0 ){
    //                 Event.AddRelease( releaseId );
    //                 Event.UpdateEventData();
    //             };
    //         };
    //     };

    // }

    AddAppReleaseToUncutEvent( params ){
        let {
            Event,
            releaseId,
        } = params;
        let type = this.GetEventType( Event.eventId );
        if( type === EVENT_TYPE.BLOCK ){
            Event.AddRelease( releaseId );
            Event.UpdateEventData();
        }else{

            if( Event.releases.length === 0 ){
                Event.AddRelease( releaseId );
                Event.UpdateEventData();
            };
        };
    }

    AddFreeReleaseToUncutEvent( params ){
        let {
            Event,
            eventId,
            category_id,
            name,
            duration,
            startTime,
        } = params;

        let type = this.GetEventType( Event.eventId );

        if( type === EVENT_TYPE.BLOCK ){
            Event.AddLinkedFileToRelease({
                category_id,
                eventId,
                name,
                duration,
                startTime,
            });
            Event.UpdateEventData();
        }else{
            if( Event.releases.length === 0 ){
                Event.AddLinkedFileToRelease({
                    category_id,
                    eventId,
                    name,
                    duration,
                    startTime,
                });
                Event.UpdateEventData();
            };
        };
    }

    GetReleaseType( releaseId ){
        let result = RELEASE_TYPE.APP;
        if( typeof releaseId === 'string' ){
            result = RELEASE_TYPE.FREE;
        };
        return result;
    }





    ChackPlaceForReleaseDuration( gridEventId, releaseDuration ){

        let isEnoughSpace = true;

        let first_segment_id = null;
        let allEvents = {};
        let rest_duration = releaseDuration;

        for( let i = 0; i < this.list.length; i++ ){

            if( this.list[ i ].id === gridEventId || this.list[ i ].firstSegmentId === gridEventId ){
                let { firstSegmentId, durationTime, startTime } = this.list[ i ].GetData();

                let item = this.list[ i ].GetData();

                if( first_segment_id === null ){ // запишет только первое событие
                    first_segment_id = firstSegmentId;
                };

                let space_before = get_space_data_before( this.list, i );
                let space_after = get_space_data_after( this.list, i );

                let spaceFrom = space_before.startTimeFrom;
                let spaceTo = space_after.startTimeTo;

                allEvents[ gridEventId ] = {
                    gridEventId,
                    allocatedDuration: 0,
                    durationTime,
                    spaceFrom,
                    spaceTo,
                    startTime,
                };

                if( first_segment_id === null ){// событие не резанное
                    allEvents[ gridEventId ].allocatedDuration = releaseDuration; 
                }else{
                    allEvents[ gridEventId ].allocatedDuration = durationTime; 

                    rest_duration = rest_duration - durationTime;
                    if( rest_duration < 0 ){
                        rest_duration = 0;
                    };
                };

                let remaining_duration = calculate_remaining_duration_for_space( space_before, space_after, allEvents ); 

                if( remaining_duration > 0 ){
                    
                }else{

                        //                     console.dir( {
                        //     remaining_duration,
                        //     rest_duration,
                        //     item
                        // } );
                    if( remaining_duration === 0 ){


                        if( this.list[ i + 1 ] ){

                        }else{

                        };

                    }else{
                        isEnoughSpace = false;
                        break;
                    }
                    
                };

                if( first_segment_id === null ){ 
                    break;
                };

            };
        };

        return isEnoughSpace;

    }


}