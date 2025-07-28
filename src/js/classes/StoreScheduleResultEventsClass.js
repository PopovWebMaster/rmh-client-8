
import { SSRE_Methods } from './vendors/StoreScheduleResultEventsClass/SSRE_Methods.js';
import { ScheduleEventClass } from './vendors/StoreScheduleResultEventsClass/ScheduleEventClass.js';

import store from './../redux/store.js';
import { setScheduleEventsList } from './../redux/scheduleResultSlise.js';

import { divide_day_into_sectors } from './vendors/StoreScheduleResultEventsClass/divide_day_into_sectors.js';
import { add_empty_segments_and_types } from './vendors/StoreScheduleResultEventsClass/add_empty_segments_and_types.js';
import { get_category_by_event_id } from './vendors/StoreScheduleResultEventsClass/get_category_by_event_id.js';

import { adjust_startTime_in_day_list } from './vendors/StoreScheduleResultEventsClass/adjust_startTime_in_day_list.js';



export class StoreScheduleResultEventsClass extends SSRE_Methods{
    constructor( props ){
        super( props );

        this.list = [];

        this.lastGridEventId = 0;



        this.CreateFromGridEvents = this.CreateFromGridEvents.bind(this);
        this.SetListToStore = this.SetListToStore.bind(this);
        this.CreateFromScheduleEventsList = this.CreateFromScheduleEventsList.bind(this);
        this.GetListBySectors = this.GetListBySectors.bind(this);
        this.GetCounterList = this.GetCounterList.bind(this);
        this.AddRelease = this.AddRelease.bind(this);
        this.RemoveRelease = this.RemoveRelease.bind(this);
        this.AddAllReleases = this.AddAllReleases.bind(this);


        

        



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

    GetListBySectors(){
        let schedule_events_list = this.GetScheduleEventsList();
        let arr = divide_day_into_sectors( schedule_events_list );
        let result = add_empty_segments_and_types( arr );
        return result;
    }

    GetCounterList(){
        let schedule_events_list = this.GetScheduleEventsList();

        let counter_list = [];

        for( let i = 0; i < schedule_events_list.length; i++ ){
            let { 
                eventId,
                durationTime,
                is_premiere,
            } = schedule_events_list[ i ];

            let category = get_category_by_event_id( eventId );

        };

        return counter_list;


    }

    SetListToStore(){
        let scheduleEventsList = this.GetScheduleEventsList();
        let arr_2 = adjust_startTime_in_day_list( scheduleEventsList );
        store.dispatch( setScheduleEventsList( arr_2 ) );
    }

    AddRelease( gridEventId, releaseId ){

        for( let i = 0; i < this.list.length; i++ ){
            if( this.list[ i ].gridEventId === gridEventId ){
                this.list[ i ].AddRelease( releaseId );
                this.list[ i ].UpdateDurationTime();
                break;
            };
        };

    }

    RemoveRelease(  gridEventId, releaseId ){
        for( let i = 0; i < this.list.length; i++ ){
            if( this.list[ i ].gridEventId === gridEventId ){
                this.list[ i ].RemoveRelease( releaseId );

                this.list[ i ].UpdateDurationTime();
                break;
            };
        };
    }

    AddAllReleases( allReleases ){

        console.dir( 'allReleases' );
        console.dir( allReleases );
        console.dir( this );

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
                    for(let y = 0; y < allByGEId[ gridEventId ].length; y++ ){
                        this.list[ i ].AddRelease( allByGEId[ gridEventId ][ y ] );
                        this.list[ i ].UpdateDurationTime();
                    };
                };
            };
        };



    }
    
}