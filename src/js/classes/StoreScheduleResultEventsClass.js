
import { SSRE_Methods } from './vendors/StoreScheduleResultEventsClass/SSRE_Methods.js';
import { ScheduleEventClass } from './vendors/StoreScheduleResultEventsClass/ScheduleEventClass.js';

import store from './../redux/store.js';
import { setScheduleEventsList } from './../redux/scheduleResultSlise.js';

import { divide_day_into_sectors } from './vendors/StoreScheduleResultEventsClass/divide_day_into_sectors.js';
import { add_empty_segments_and_types } from './vendors/StoreScheduleResultEventsClass/add_empty_segments_and_types.js';
import { get_category_by_event_id } from './vendors/StoreScheduleResultEventsClass/get_category_by_event_id.js';

import { adjust_startTime_in_day_list } from './vendors/StoreScheduleResultEventsClass/adjust_startTime_in_day_list.js';

// import { setCounterList } from './../redux/countersSlise.js';

import { EVENT_TYPE } from './../config/layout.js';

import { EventsDayCountersClass } from './EventsDayCountersClass.js';

export class StoreScheduleResultEventsClass extends SSRE_Methods{
    constructor( props ){
        super( props );

        this.list = [];

        this.lastGridEventId = 0;



        this.CreateFromGridEvents = this.CreateFromGridEvents.bind(this);
        this.SetListToStore = this.SetListToStore.bind(this);
        this.CreateFromScheduleEventsList = this.CreateFromScheduleEventsList.bind(this);
        this.GetListBySectors = this.GetListBySectors.bind(this);
        this.AddRelease = this.AddRelease.bind(this);
        this.RemoveRelease = this.RemoveRelease.bind(this);
        this.AddAllReleases = this.AddAllReleases.bind(this);
        this.RemoveEvent = this.RemoveEvent.bind(this);
        this.AddEvent = this.AddEvent.bind(this);
        this.GetAllUsedEvents = this.GetAllUsedEvents.bind(this);
        this.SetCounterDataToStore = this.SetCounterDataToStore.bind(this);


        
        


    }

    CreateFromGridEvents(){
        let gridEventsList = this.GetGridEventsList();
        for( let i = 0; i < gridEventsList.length; i++ ){
            let ScheduleEvent = new ScheduleEventClass();
            ScheduleEvent.SetDataFromGridEvent( gridEventsList[ i ] );
            this.list.push( ScheduleEvent );
            this.SetLastGridEventId( ScheduleEvent );
        };
    }

    CreateFromScheduleEventsList( arr, withReleses = true ){
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

    AddEvent( params ){
        let {
            gridCurrentDay,
            isAKeyPoint,
            startTime,
            eventId,
            durationTime,
        } = params;
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

    SetListToStore(){
        let scheduleEventsList = this.GetScheduleEventsList();
        let arr_2 = adjust_startTime_in_day_list( scheduleEventsList );
        store.dispatch( setScheduleEventsList( arr_2 ) );
        this.SetCounterDataToStore( arr_2 );
    }

    AddRelease( gridEventId, releaseId ){

        let Event = this.GetEventData( gridEventId );
        
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

                let releaseData = this.GetReleaseData( releaseId );
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
                            let data = { ...releaseData };
                            data.releaseDuration = duration;
                            data.releaseName = `${releaseName} (Порезка ${i+1})`;
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

    }

    RemoveRelease(  gridEventId, releaseId ){
        for( let i = 0; i < this.list.length; i++ ){
            if( this.list[ i ].gridEventId === gridEventId ){
                this.list[ i ].RemoveRelease( releaseId );
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