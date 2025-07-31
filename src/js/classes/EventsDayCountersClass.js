import store from './../redux/store.js';
import { setCounterList, setCounterListHours } from './../redux/countersSlise.js';
import { get_category_by_event_id } from './../helpers/get_category_by_event_id.js';
import { HoursClass } from './vendors/EventsDayCountersClass/HoursClass.js';

export class EventsDayCountersClass{
    constructor(){

        this.counter_list = [];
        this.counter_list_hours = [];


        this.CreateTypeDay = this.CreateTypeDay.bind(this);
        this.CreateTypeHour = this.CreateTypeHour.bind(this);
        this.SetToStore = this.SetToStore.bind(this);



    }

    CreateTypeDay( dayList ){
        let counter_list = [];
        for( let i = 0; i < dayList.length; i++ ){
            let { 
                eventId,
                durationTime,
                is_premiere,
            } = dayList[ i ];
            let category = get_category_by_event_id( eventId );
            counter_list.push({
                category,
                duration: durationTime,
                is_premiere,
            });
        };
        this.counter_list = counter_list;

    }

    CreateTypeHour( dayList ){
        let list_obj = {};
        for( let i = 0; i < dayList.length; i++ ){
            let { eventId, startTime, durationTime } = dayList[ i ];
            let category = get_category_by_event_id( eventId );
            let { id } = category;
            if( list_obj[ id ] ){
                list_obj[ id ].Hours.Add( startTime, durationTime );
            }else{
                list_obj[ id ] = {};
                list_obj[ id ].category = category;
                list_obj[ id ].Hours = new HoursClass();
                list_obj[ id ].Hours.Create();
                list_obj[ id ].Hours.Add( startTime, durationTime );
            };
        };

        let list = [];
        for( let key in list_obj ){
            let { category } = list_obj[ key ];
            let hours = list_obj[ key ].Hours.GetList();
            list.push({
                category,
                hours,
            });
        };

        this.counter_list_hours = list;

    }

    SetToStore(){

        store.dispatch( setCounterList( this.counter_list ) );
        store.dispatch( setCounterListHours( this.counter_list_hours ) );

    }

}