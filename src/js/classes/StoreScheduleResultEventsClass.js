
import { SSRE_Methods } from './vendors/StoreScheduleResultEventsClass/SSRE_Methods.js';
import { ScheduleEventClass } from './vendors/StoreScheduleResultEventsClass/ScheduleEventClass.js';

import store from './../redux/store.js';
import { setScheduleEventsList } from './../redux/scheduleResultSlise.js';

import { divide_day_into_sectors } from './vendors/StoreScheduleResultEventsClass/divide_day_into_sectors.js';
import { add_empty_segments_and_types } from './vendors/StoreScheduleResultEventsClass/add_empty_segments_and_types.js';
import { get_category_by_event_id } from './vendors/StoreScheduleResultEventsClass/get_category_by_event_id.js';



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

    CreateFromScheduleEventsList( arr ){
        for( let i = 0; i < arr.length; i++ ){
            let ScheduleEvent = new ScheduleEventClass();
            ScheduleEvent.SetDataFromScheduleEvent( arr[ i ] );
            this.list.push( ScheduleEvent );
            this.SetLastGridEventId( ScheduleEvent );
        };
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

            counter_list.push({
                category,
                duration: durationTime,
                is_premiere,
            });

        };

        return counter_list;


    }

    SetListToStore(){
        let scheduleEventsList = this.GetScheduleEventsList();
        store.dispatch( setScheduleEventsList( scheduleEventsList ) );
    }
    
}