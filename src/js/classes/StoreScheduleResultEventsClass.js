
import { SSRE_Methods } from './vendors/StoreScheduleResultEventsClass/SSRE_Methods.js';
import { ScheduleEventClass } from './vendors/StoreScheduleResultEventsClass/ScheduleEventClass.js';

import store from './../redux/store.js';
import { setScheduleEventsList, setScheduleEventsListIsChanged, setScheduleEventBySectors, setInfoMessageText } from './../redux/scheduleResultSlise.js';

import { divide_day_into_sectors } from './vendors/StoreScheduleResultEventsClass/divide_day_into_sectors.js';
import { add_empty_segments_and_types } from './vendors/StoreScheduleResultEventsClass/add_empty_segments_and_types.js';
// import { get_category_by_event_id } from './vendors/StoreScheduleResultEventsClass/get_category_by_event_id.js';

// import { adjust_startTime_in_day_list } from './vendors/StoreScheduleResultEventsClass/adjust_startTime_in_day_list.js';
import { adjust_startTime_in_list_v2 } from './vendors/StoreScheduleResultEventsClass/adjust_startTime_in_list_v2.js';
import { get_remaining_place_for_key_block } from './vendors/StoreScheduleResultEventsClass/get_remaining_place_for_key_block.js';

import { get_last_grid_event_id_from_store } from './vendors/StoreScheduleResultEventsClass/get_last_grid_event_id_from_store.js';

import { setDailyEventsList } from './../redux/dailySchaduleEditorSlice.js';


// import { setCounterList } from './../redux/countersSlise.js';

import { EVENT_TYPE, MIN_EVENT_DURATION_SEC } from './../config/layout.js';

import { EventsDayCountersClass } from './EventsDayCountersClass.js';
import { NewGridEventGroupClass } from './vendors/StoreScheduleResultEventsClass/NewGridEventGroupClass.js';
import { add_new_grid_event_group_to_list } from './vendors/StoreScheduleResultEventsClass/add_new_grid_event_group_to_list.js';




export class StoreScheduleResultEventsClass extends SSRE_Methods{
    constructor( props ){
        super( props );

        this.list = [];

        this.NewGridEventGroup = null;


        this.lastGridEventId = get_last_grid_event_id_from_store();

        this.CreateFromGridEvents = this.CreateFromGridEvents.bind(this);
        this.CreateList = this.CreateList.bind(this);

        this.SetListToStore = this.SetListToStore.bind(this);
        this.SetListToStoreOnlySaccess = this.SetListToStoreOnlySaccess.bind(this);


        
        this.CreateFromScheduleEventsList = this.CreateFromScheduleEventsList.bind(this);
        this.GetListBySectors = this.GetListBySectors.bind(this);
        this.AddRelease = this.AddRelease.bind(this);
        this.RemoveRelease = this.RemoveRelease.bind(this);
        this.AddAllReleases = this.AddAllReleases.bind(this);
        this.AddAllRemainingReleases = this.AddAllRemainingReleases.bind(this);

        this.RemoveEvent = this.RemoveEvent.bind(this);
        this.AddEvent = this.AddEvent.bind(this);
        this.GetAllUsedEvents = this.GetAllUsedEvents.bind(this);
        this.SetCounterDataToStore = this.SetCounterDataToStore.bind(this);

        this.ReleaseMoveUp = this.ReleaseMoveUp.bind(this);
        this.ReleaseMoveDown = this.ReleaseMoveDown.bind(this);
        this.UpdateData = this.UpdateData.bind(this);
        this.AddReleaseAsLinkedFile = this.AddReleaseAsLinkedFile.bind(this);
        this.AddReleaseAsLinkedFile = this.AddReleaseAsLinkedFile.bind(this);

        this.AddReleaseByReleaseData = this.AddReleaseByReleaseData.bind(this);
        this.CreateNewGridEvent = this.CreateNewGridEvent.bind(this);
        this.AddReleaseAsLinkedFileToNewGridEvents = this.AddReleaseAsLinkedFileToNewGridEvents.bind(this);
        this.AddLinkedFileReleasesToNewGridEvent = this.AddLinkedFileReleasesToNewGridEvent.bind(this);
        this.AddNewGridEvent = this.AddNewGridEvent.bind(this);
        this.AddReleaseAsFreeApp = this.AddReleaseAsFreeApp.bind(this);


        this.AddAppRelease = this.AddAppRelease.bind(this);
        this.AddFreeRelease = this.AddFreeRelease.bind(this);
        this.AddReleasesFromNewGridEvent = this.AddReleasesFromNewGridEvent.bind(this);









    }

    CreateFromGridEvents(){
        let gridEventsList = this.GetGridEventsList();

        for( let i = 0; i < gridEventsList.length; i++ ){
            let ScheduleEvent = new ScheduleEventClass();
            ScheduleEvent.SetDataFromGridEvent( gridEventsList[ i ] );
            this.list.push( ScheduleEvent );
            this.SetLastGridEventId( ScheduleEvent );
        };

        let list = this.GetScheduleEventsList( false );

        let { isError, newList } = adjust_startTime_in_list_v2( list );
        let list_2 = [];
        for( let i = 0; i < newList.length; i++ ){
            let ScheduleEvent = new ScheduleEventClass();
            ScheduleEvent.SetDataFromGridEvent( newList[ i ] );
            ScheduleEvent.UpdateEventData();
            list_2.push( ScheduleEvent );
        };
        this.list = list_2;
    }

    CreateFromScheduleEventsList( arr, withReleses = true ){ // не использовать!

        for( let i = 0; i < arr.length; i++ ){
            let ScheduleEvent = new ScheduleEventClass();
            ScheduleEvent.SetDataFromScheduleEvent( arr[ i ], withReleses );

            this.list.push( ScheduleEvent );
            this.SetLastGridEventId( ScheduleEvent );
        };

        for( let i = 0; i < this.list.length; i++ ){
            this.list[ i ].SetIdIfNull( this.lastGridEventId + 1 );
            this.SetLastGridEventId( this.list[ i ] );
        }
    }

    CreateList( params = {} ){
        let {
            gridEventsList = null,
            withReleses = true,
        } = params;

        if( gridEventsList === null ){
            gridEventsList = this.GetScheduleEventsListFromStore();
        }else{
            gridEventsList = this.AddPushIt( gridEventsList );
        };

        let list = [];

        for( let i = 0; i < gridEventsList.length; i++ ){
            let ScheduleEvent = new ScheduleEventClass();
            ScheduleEvent.SetDataFromScheduleEvent( gridEventsList[ i ], withReleses );

            list.push( ScheduleEvent );
            this.SetLastGridEventId( ScheduleEvent );
        };

        for( let i = 0; i < list.length; i++ ){
            list[ i ].SetIdIfNull( this.lastGridEventId + 1 );
            this.SetLastGridEventId( list[ i ] );
        };

        this.list = list;

    }

    

    CreateNewGridEvent( params ){
        let {
            startTime,
            eventId,
            durationTime = MIN_EVENT_DURATION_SEC,
        } = params;

        this.NewGridEventGroup = new NewGridEventGroupClass();
        this.NewGridEventGroup.AddNewEvent({
            durationTime,
            id: this.GetIdForNewGridEvent(),
            eventId,
            startTime,
        });
    }

    AddLinkedFileReleasesToNewGridEvent(){
        this.NewGridEventGroup.AddLinkedFilesFromEvent();
        // this.NewGridEventGroup.Update();
    }

    AddAppRelease( params ){
        let {
            releaseId
        } = params;
        this.NewGridEventGroup.AddAppRelease( releaseId );
    }

    AddReleaseAsFreeApp( params ){
        let {
            name,
            duration,
            startTime,
        } = params;
        this.NewGridEventGroup.AddReleaseAsLinkedFile({ name, duration, startTime });
    }

    AddFreeRelease( params ){
        let {
            name,
            duration,
            startTime,
        } = params;
        this.NewGridEventGroup.AddFreeRelease({ name, duration, startTime });
    }

    AddReleasesFromNewGridEvent( gridEventId ){
        for( let i = 0; i < this.list.length; i++ ){
            if( this.list[ i ].id === gridEventId ){
                let newEventData = this.NewGridEventGroup.scheduleEventsGroup[ 0 ].GetData();
                for( let y = 0; y < newEventData.releases.length; y++ ){
                    this.list[ i ].AddReleaseByData( newEventData.releases[ y ] );
                };
                break;
            };
        };
    }


    AddNewGridEvent( isChanged = true ){

        let list = this.GetScheduleEventsList();

        let result = add_new_grid_event_group_to_list( list, this.NewGridEventGroup );

        if( result.isError ){
            this.AlertMessage( 'Событие не может быть добавлено, не достаточно места' );
        }else{
            let list = [];

            for( let i = 0; i < result.newList.length; i++ ){
                let ScheduleEvent = new ScheduleEventClass();
                ScheduleEvent.SetData( result.newList[ i ] );
                list.push( ScheduleEvent );
                this.SetLastGridEventId( ScheduleEvent );
            };

            this.list = list;

            this.SetListToStore( isChanged );
            this.NewGridEventGroup = null;
        };
    }

    AddReleaseAsLinkedFileToNewGridEvents( params ){
        let {
            name,
            duration,
        } = params;
    }



    AddEvent( params ){
        let {
            gridCurrentDay,
            isAKeyPoint,
            startTime,
            eventId,
            durationTime,
        } = params;
        // console.dir( ' !!!!!!');

        let newId = this.lastGridEventId + 1;
        let ScheduleEvent = new ScheduleEventClass();
        ScheduleEvent.SetDataFromGridEvent( {
            cutPart: null,
            dayNum: gridCurrentDay,
            durationTime,
            eventId,
            firstSegmentId: null,
            id: newId,
            isKeyPoint: isAKeyPoint,
            is_premiere: false,
            notes: '',
            pushIt: null,
            startTime,
        } );

        this.list.push( ScheduleEvent );
        this.SetLastGridEventId( ScheduleEvent );
        this.SortList();

        return ScheduleEvent;

    }

    GetListBySectors(){
        let schedule_events_list = this.GetScheduleEventsList();
        let arr = divide_day_into_sectors( schedule_events_list );
        let result = add_empty_segments_and_types( arr );
        return result;
    }

    SetCounterDataToStore( list ){
        let EventsDayCounters = new EventsDayCountersClass();
        EventsDayCounters.CreateTypeDay( list );
        EventsDayCounters.CreateTypeHour( list );
        EventsDayCounters.SetToStore();
    }

    SetListToStore( isChanged = null ){
        let scheduleEventsList = this.GetScheduleEventsList();
        // let scheduleEventsList = this.GetScheduleEventsList();


        // GetScheduleEventsListFromStore

        // console.dir( 'scheduleEventsList' );
        // console.dir( scheduleEventsList );


        // let arr_2 = adjust_startTime_in_day_list( scheduleEventsList );
        // let { isError, newList } = adjust_startTime_in_list_v2( scheduleEventsList );
        let { isError, newList } = adjust_startTime_in_list_v2( scheduleEventsList );

        let arr = divide_day_into_sectors( scheduleEventsList );
        let listByectors = add_empty_segments_and_types( arr );
        store.dispatch( setScheduleEventBySectors( listByectors ) );


        store.dispatch( setScheduleEventsList( newList ) );
        if( isChanged !== null ){
            store.dispatch( setScheduleEventsListIsChanged( isChanged ) );
        };
        
        this.SetCounterDataToStore( newList );
    }

    SetListToStoreOnlySaccess( isChanged = null ){
         let scheduleEventsList = this.GetScheduleEventsList();

        let { isError, newList } = adjust_startTime_in_list_v2( scheduleEventsList );

        if( isError ){
            store.dispatch( setInfoMessageText( 'Не может быть добавлено. Не достаточно места') );

        }else{
            let arr = divide_day_into_sectors( scheduleEventsList );
            let listByectors = add_empty_segments_and_types( arr );
            store.dispatch( setScheduleEventBySectors( listByectors ) );
            store.dispatch( setScheduleEventsList( newList ) );
            if( isChanged !== null ){
                store.dispatch( setScheduleEventsListIsChanged( isChanged ) );
            };
            this.SetCounterDataToStore( newList );
        };
    }

    

    AddReleaseByReleaseData( gridEventId, release ){
        let Event = this.GetEventData( gridEventId );

        // console.dir( Event );
    }

     

    AddRelease( gridEventId, releaseId ){

        let Event = this.GetEventData( gridEventId );

        let releaseData = this.GetReleaseData( releaseId );

        let rest_sec = get_remaining_place_for_key_block({
            Event,
            releaseData,
            list: this.list
        });

        if( rest_sec >= releaseData.releaseDuration ){
            if( Event ){
                if( Event.firstSegmentId === null ){
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
                }else if( Event.gridEventId === gridEventId ){

                    let EventParts = this.GetEventParts( gridEventId );

                    // let releaseData = this.GetReleaseData( releaseId );
                    let { releaseDuration, applicationName, releaseName } = releaseData;
                    let rest_duration = releaseDuration;

                    let removeEventList = [];

                    for( let i = 0; i < EventParts.length; i++ ){
                        let { durationTime, releases } = EventParts[ i ];
                        if( releases.length === 0 ){
                            let duration = 0;

                            if( rest_duration >= durationTime ){
                                if( EventParts[ i + 1 ] ){
                                    duration = durationTime;
                                    // duration = rest_duration;

                                    rest_duration = rest_duration - durationTime;
                                }else{

                                    // console.dir({
                                    //     rest_duration,
                                    //     duration,
                                    //     durationTime
                                    // });

                                    // if( durationTime >= rest_duration ){

                                    // }else{
                                    //     duration = rest_duration;
                                    //     durationTime = rest_duration;
                                    // }
                                    

                                    duration = rest_duration;
                                    // rest_duration = rest_duration - durationTime;
                                    // rest_duration = rest_duration - durationTime;

                                };
                            }else{
                                duration = rest_duration;
                                rest_duration = 0
                            };

                            // console.dir( 'duration' );
                            // console.dir( duration );


                            if( duration > 0 ){
                                let data = { ...releaseData };
                                // data.releaseDuration = duration;
                                data.releaseName = `${releaseName} (Порезка ${i+1})`;
                                EventParts[ i ].durationTime = duration;
                                EventParts[ i ].AddReleaseByData( data );
                                EventParts[ i ].UpdateEventData();

                            }else{
                                let { gridEventId } = EventParts[ i ];
                                removeEventList.push( gridEventId );
                            };
                        };
                    };

                    for( let i = 0; i < removeEventList.length; i++ ){
                        this.RemoveEvent( removeEventList[ i ] )
                    };

                };

            };

        };

    }


    AddReleaseAsLinkedFile( params ){
        let {
            gridEventId,
            category_id,
            eventId,
            name,
            duration,
            startTime,
        } = params;

        let Event = this.GetEventData( gridEventId );

        let rest_sec = get_remaining_place_for_key_block({
            Event,
            releaseData: {},
            list: this.list
        });

        console.dir({
            rest_sec,
            duration: duration
        });


        if( rest_sec >= duration ){
            if( Event ){
                if( Event.firstSegmentId === null ){
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

                            console.dir( Event );
                            Event.UpdateEventData();
                        };
                    };
                }else if( Event.gridEventId === gridEventId ){

                    let EventParts = this.GetEventParts( gridEventId );

                    // let releaseData = this.GetReleaseData( releaseId );
                    // let { releaseDuration, applicationName, releaseName } = releaseData;
                    let rest_duration = duration;

                    let removeEventList = [];

                    for( let i = 0; i < EventParts.length; i++ ){
                        let { durationTime, releases } = EventParts[ i ];
                        if( releases.length === 0 ){
                            let duration = 0;

                            if( rest_duration >= durationTime ){
                                if( EventParts[ i + 1 ] ){
                                    duration = durationTime;
                                    rest_duration = rest_duration - durationTime;
                                }else{
                                    duration = rest_duration;
                                    rest_duration = 0;
                                };
                            }else{
                                duration = rest_duration;
                                rest_duration = 0
                            };

                            if( duration > 0 ){
                                // let data = { ...releaseData };
                                // data.releaseDuration = duration;
                                // data.releaseName = `${releaseName} (Порезка ${i+1})`;
                                // EventParts[ i ].AddReleaseByData( data );
                                // EventParts[ i ].UpdateEventData();

                                EventParts[ i ].AddLinkedFileToRelease({
                                    category_id,
                                    eventId,
                                    name: `${name} (Порезка ${i+1})`,
                                    duration,
                                    startTime,
                                });
                                EventParts[ i ].UpdateEventData();

                            }else{
                                let { gridEventId } = EventParts[ i ];
                                removeEventList.push( gridEventId );
                            };
                        };
                    };

                    for( let i = 0; i < removeEventList.length; i++ ){
                        this.RemoveEvent( removeEventList[ i ] )
                    };

                };

            };

        };

    }












































    RemoveRelease(  gridEventId, releaseId ){

        let firstSegmentId = null;

        for( let i = 0; i < this.list.length; i++ ){
            if( this.list[ i ].gridEventId === gridEventId ){
                firstSegmentId = this.list[ i ].firstSegmentId;
                this.list[ i ].RemoveRelease( releaseId );
                this.list[ i ].UpdateEventData();
                break;
            };
        };

        if( firstSegmentId !== null ){
            for( let i = 0; i < this.list.length; i++ ){
                if( this.list[ i ].gridEventId !== gridEventId ){
                    if( this.list[ i ].firstSegmentId === firstSegmentId ){
                        this.list[ i ].RemoveRelease( releaseId );
                        this.list[ i ].UpdateEventData();
                    };
                };
            };
        };
    }

    ReleaseMoveUp(  gridEventId, releaseId ){

        for( let i = 0; i < this.list.length; i++ ){
            if( this.list[ i ].gridEventId === gridEventId ){
                this.list[ i ].MoveUp( releaseId );
                this.list[ i ].UpdateEventData();
                break;
            };
        };

    }

    ReleaseMoveDown(  gridEventId, releaseId ){

        for( let i = 0; i < this.list.length; i++ ){
            if( this.list[ i ].gridEventId === gridEventId ){
                this.list[ i ].MoveDown( releaseId );
                this.list[ i ].UpdateEventData();
                break;
            };
        };

    }




    AddAllReleases( allReleases ){

        let allByGEId = {};
        for( let i = 0; i < allReleases.length; i++ ){
            let { grid_event_id, id } = allReleases[ i ];
            if( grid_event_id !== null ){
                if( allByGEId[ grid_event_id ] ){
                    allByGEId[ grid_event_id ].push( id );
                }else{
                    allByGEId[ grid_event_id ] = [ id ];
                };
            };
        };
        for( let i = 0; i < this.list.length; i++ ){
            let gridEventId = this.list[ i ].gridEventId;
            if( gridEventId !== null ){
                if( allByGEId[ gridEventId ] ){
                    for( let y = 0; y < allByGEId[ gridEventId ].length; y++ ){
                        let releaseId = allByGEId[ gridEventId ][ y ];
                        this.AddRelease( gridEventId, releaseId );
                        this.list[ i ].UpdateEventData();
                    };
                };
            };
        };
    }

    UpdateData(){
        for( let i = 0; i < this.list.length; i++ ){
            this.list[ i ].UpdateEventData();
        };
    }

    AddAllRemainingReleases( allReleases, usedReleasesById ){

        let unusedByGEId = {};
        for( let i = 0; i < allReleases.length; i++ ){
            let { grid_event_id, id } = allReleases[ i ];
            if( grid_event_id !== null ){
                if( usedReleasesById[ id ] ){
                    // не трогаем
                }else{
                    if( unusedByGEId[ grid_event_id ] ){
                        unusedByGEId[ grid_event_id ].push( id );
                    }else{
                        unusedByGEId[ grid_event_id ] = [ id ];
                    };
                };
            }{
                /*
                    те что с null не трогаем, если их вручную уже расставили то их не зацепит, 
                    а те что ещё не расставлены пускай будет видно в буфере
                */
            };
        };

        // console.dir( 'usedReleasesById' );
        // console.dir( usedReleasesById );

        // console.dir( 'unusedByGEId' );
        // console.dir( unusedByGEId );

        for( let i = 0; i < this.list.length; i++ ){
            let gridEventId = this.list[ i ].gridEventId;
            if( gridEventId !== null ){
                if( unusedByGEId[ gridEventId ] ){
                    for( let y = 0; y < unusedByGEId[ gridEventId ].length; y++ ){
                        let releaseId = unusedByGEId[ gridEventId ][ y ];
                        this.AddRelease( gridEventId, releaseId );
                        this.list[ i ].UpdateEventData();
                    };
                };
            };
        };
        
    }


    

    RemoveEvent( gridEventId ){
        let newList = [];
        for( let i = 0; i < this.list.length; i++ ){

            if( this.list[ i ].gridEventId === gridEventId ){

            }else{
                newList.push( this.list[ i ] );
            };
        };
        this.list = newList;
    }

    GetAllUsedEvents(){

        let obj = {};

        for( let i = 0; i < this.list.length; i++ ){
            let { eventId } = this.list[ i ];
            obj[ eventId ] = true;
        };

        let result = [];
        for( let key in obj ){
            result.push( key );
        };
        return result;

    }
    
}