import store from './../redux/store.js';
import { setCounterList, setCounterListHours, setCounterListFiles } from './../redux/countersSlise.js';
import { get_category_by_event_id } from './../helpers/get_category_by_event_id.js';
import { HoursClass } from './vendors/EventsDayCountersClass/HoursClass.js';

export class EventsDayCountersClass{
    constructor(){

        this.counter_list = [];
        this.counter_list_hours = [];
        this.counter_list_files = [];



        this.CreateTypeDay = this.CreateTypeDay.bind(this);
        this.CreateTypeHour = this.CreateTypeHour.bind(this);
        this.CreateTypeFiles = this.CreateTypeFiles.bind(this);

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

    CreateTypeFiles( dayList ){

        // console.dir( 'dayList' );
        // console.dir( dayList );


        let obj = {};
        for( let i = 0; i < dayList.length; i++ ){
            let { 
                eventId,
                // durationTime,
                // is_premiere,
                // category_id,
                firstSegmentId,
                gridEventId,
                releases,
            } = dayList[ i ];

            let category = get_category_by_event_id( eventId );
            let category_id = category.id;


            let isCounted = false;
            if( firstSegmentId === null ){
                isCounted = true;
            }else{
                if( firstSegmentId === gridEventId ){
                    isCounted = true;
                };
            };

            if( obj[ category_id ] ){
                obj[ category_id ].count = obj[ category_id ].count + 1;
            }else{
                obj[ category_id ] = {
                    count: 1,
                    events: {},
                    category,
                };
            };

            if( obj[ category_id ].events[ eventId ] ){

                if( isCounted ){
                    obj[ category_id ].events[ eventId ].count = obj[ category_id ].events[ eventId ].count + 1;
                };

            }else{
                obj[ category_id ].events[ eventId ] = {
                    count: 1,
                    files: {},
                };
            };


            if( releases ){
                for( let y = 0; y < releases.length; y++ ){
                    let { file_list, releaseName, releaseDuration } = releases[ y ];
                    let fileName = releaseName;
                    if( file_list.length > 0 ){
                        fileName = file_list[ file_list.length - 1 ];
                    };

                    if( obj[ category_id ].events[ eventId ].files[ fileName ] ){

                        if( isCounted ){
                            obj[ category_id ].events[ eventId ].files[ fileName ].count =      obj[ category_id ].events[ eventId ].files[ fileName ].count + 1;
                            obj[ category_id ].events[ eventId ].files[ fileName ].duration =   obj[ category_id ].events[ eventId ].files[ fileName ].duration + releaseDuration;
                        };

                    }else{
                        obj[ category_id ].events[ eventId ].files[ fileName ] = {
                            count: 1,
                            duration: releaseDuration,
                        };
                    };

                };
            };




        };

        this.counter_list_files = obj;


    }

    SetToStore(){

        store.dispatch( setCounterList( this.counter_list ) );
        store.dispatch( setCounterListHours( this.counter_list_hours ) );
        store.dispatch( setCounterListFiles( this.counter_list_files ) );



    }

}