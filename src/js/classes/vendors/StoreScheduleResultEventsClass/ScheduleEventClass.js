
import { ReleaseClass } from './ReleaseClass.js';
import { get_grid_event_by_id } from './get_grid_event_by_id.js';
import { get_event_by_id } from './../StoreScheduleResultEventsClass/get_event_by_id.js';
import { EVENT_TYPE, MIN_EVENT_DURATION_SEC } from './../../../config/layout.js';

import { convert_time_str_to_sec } from './../../../helpers/convert_time_str_to_sec.js';
import { get_date_now_YYYY_MM_DD } from './../../../helpers/get_date_now_YYYY_MM_DD.js';
import { get_dayNum_from_store } from './get_dayNum_from_store.js';

export class ScheduleEventClass{
    constructor(){

        this.cutPart =          null;
        this.dayNum =           null;
        this.durationTime =     null;
        // this.durationTime =     null;
        this.eventId =          null;
        this.firstSegmentId =   null;
        this.id =               null;
        this.gridEventId =      null;  // this.gridEventId и this.id - это одно и тоже, так надо.
        this.isKeyPoint =       null;
        this.is_premiere =      null;
        this.notes =            null;
        this.pushIt =           null;
        this.startTime =        null;
        this.releases =         null;

        this.releaseList = []; // при выводе данных не использовать !!!!!!!
        this.finalNotes = '';

        this.GetData = this.GetData.bind(this);
        this.SetDataFromGridEvent = this.SetDataFromGridEvent.bind(this);
        this.SetDataFromScheduleEvent = this.SetDataFromScheduleEvent.bind(this);
        this.AddRelease = this.AddRelease.bind(this);
        this.UpdateDurationTime = this.UpdateDurationTime.bind(this);
        this.SetIdIfNull = this.SetIdIfNull.bind(this);
        this.RemoveRelease = this.RemoveRelease.bind(this);
        this.AddReleaseByData = this.AddReleaseByData.bind(this);
        this.UpdateEventData = this.UpdateEventData.bind(this);
        this.UpdateFinalNotes = this.UpdateFinalNotes.bind(this);



        this.MoveUp = this.MoveUp.bind(this);
        this.MoveDown = this.MoveDown.bind(this);
        this.AddLinkedFileToRelease = this.AddLinkedFileToRelease.bind(this);



        this.GetDayNum = this.GetDayNum.bind(this);
        this.GetDutationTime = this.GetDutationTime.bind(this);





    }

    GetDayNum( dayNum = null ){
        let result = dayNum;
        if( dayNum === null ){
            result = get_dayNum_from_store();
        };
        return result;
    }
    GetDutationTime( durationTime ){
        /*
            Это костыль. Почему-то иногда в durationTime записывается строка вокмата HH:MM:SS
        */
        return Number( durationTime )? durationTime: typeof durationTime === 'string'? convert_time_str_to_sec( durationTime ): 0;
    }

    SetData( params ){
        let {
            durationTime,   // обязательно !!!
            eventId,        // обязательно !!!
            id,             // обязательно !!!
            startTime,      // обязательно !!!
            cutPart = null,
            dayNum = null,
            firstSegmentId = null,
            gridEventId = null,
            isKeyPoint = false,
            is_premiere = false,
            notes = '',
            finalNotes = '',
            pushIt = null,
            releases = [],

        } = params;

        this.cutPart =          cutPart;
        this.dayNum =           this.GetDayNum( dayNum );
        this.durationTime =     this.GetDutationTime( durationTime );
        this.eventId =          eventId;
        this.firstSegmentId =   firstSegmentId;
        this.id =               id;
        this.gridEventId =      gridEventId === null? id: gridEventId;  
        this.isKeyPoint =       isKeyPoint;
        this.is_premiere =      is_premiere;
        this.notes =            notes;
        this.finalNotes =       finalNotes;
        this.pushIt =           pushIt;
        this.startTime =        startTime;
        this.releases =         null;

        for( let i = 0; i < releases.length; i++ ){
            let data = { ...releases[ i ] };
            this.AddReleaseByData( data );
        };



    }

    SetDataFromGridEvent( data ){
        
        let {
            cutPart,
            dayNum,
            durationTime,
            eventId,
            firstSegmentId,
            id,
            isKeyPoint,
            is_premiere,
            notes,
            pushIt,
            startTime,

        } = data;
  

        this.cutPart =              cutPart;
        this.dayNum =               dayNum;
        this.durationTime =         Number( durationTime )? durationTime: typeof durationTime === 'string'? convert_time_str_to_sec( durationTime ): 0;
        this.eventId =              eventId;
        this.firstSegmentId =       firstSegmentId;
        this.id =                   id;
        this.gridEventId =          id;
        this.isKeyPoint =           isKeyPoint;
        this.is_premiere =          is_premiere;
        this.notes =                notes;
        this.pushIt =               pushIt;
        this.startTime =            startTime;
        this.releases =             [];
        this.releaseList = [];

        let eventData = get_event_by_id( this.eventId );

        // console.dir( 'eventData' );
        // console.dir( eventData );


        this.notes = eventData.notes;
        this.finalNotes = eventData.notes;

        if( eventData.type ){
            if( eventData.type === EVENT_TYPE.BLOCK ){
                this.durationTime  = MIN_EVENT_DURATION_SEC
            };
        };


        if( eventData.linked_file ){
            if( eventData.linked_file !== null ){
                let { linked_file, category_id } = eventData;
                for( let i = 0; i < linked_file.length; i++ ){
                    let { name, duration } = linked_file[ i ];
                    this.AddLinkedFileToRelease( {
                        category_id,
                        eventId,
                        name,
                        duration,
                        startTime,
                    } );

                };
            };
        };

       
    }


    SetDataFromScheduleEvent( data, withReleses = true ){
        let {
            cutPart,
            dayNum,
            durationTime,
            eventId,
            firstSegmentId,
            id,
            gridEventId,
            isKeyPoint,
            is_premiere,
            notes,
            pushIt,
            startTime,
            releases,
            finalNotes,
        } = data;







        if( withReleses ){
            for( let i = 0; i < releases.length; i++ ){
                // let releases_id = releases[ i ].id;
                let data = { ...releases[ i ] };
                this.AddReleaseByData( data );
            };
        }else{

        };

        this.cutPart =              cutPart;
        this.dayNum =               dayNum;
        // this.durationTime =         durationTime;
        this.durationTime =         Number( durationTime )? durationTime: typeof durationTime === 'string'? convert_time_str_to_sec( durationTime ): 0;
        this.eventId =              eventId;
        this.firstSegmentId =       firstSegmentId;
        this.id =                   id;
        this.gridEventId =          gridEventId;
        this.isKeyPoint =           isKeyPoint;
        this.is_premiere =          is_premiere;
        this.notes =                notes;
        this.pushIt =               pushIt;
        this.startTime =            startTime;
        this.releases =             [];
        this.finalNotes =           finalNotes;


    }

    GetData(){

        let releases = [];

        for( let i = 0; i < this.releaseList.length; i++ ){
            releases.push( this.releaseList[ i ].GetData() );
        };

        return {
            cutPart:            this.cutPart,
            dayNum:             this.dayNum,
            durationTime:       this.durationTime,
            eventId:            this.eventId,
            firstSegmentId:     this.firstSegmentId,
            id:                 this.id,
            gridEventId:        this.gridEventId,
            isKeyPoint:         this.isKeyPoint,
            is_premiere:        this.is_premiere,
            notes:              this.notes,
            pushIt:             this.pushIt,
            startTime:          this.startTime,
            releases:           releases,
            finalNotes:         this.finalNotes,
        };
    }
    AddRelease( release_id ){
        let Release = new ReleaseClass();
        Release.AddRelease( release_id );
        this.releaseList.push( Release );
    }
    AddReleaseByData( data ){
        let Release = new ReleaseClass();
        Release.AddReleaseByData( data );
        this.releaseList.push( Release );
    }

    AddLinkedFileToRelease( params ){
        let {
            category_id,
            eventId,
            name,
            duration,
            startTime
        } = params;

        let YYYY_MM_DD = get_date_now_YYYY_MM_DD();

        let relData = {
            YYYY_MM_DD,
            air_notes: '',
            applicationName: 'no name',
            application_id: null,
            category_id,
            event_id: eventId,
            file_list: [ name ],
            grid_event_id: null,
            id: null,
            manager_id: null,
            releaseDuration: duration,
            releaseName: name,
            startTime,
            sub_application_id: null,
            force_event_id: null,
        };
        this.AddReleaseByData( relData );

    }

    RemoveRelease( release_id ){

        // console.dir( 'release_id' );
        // console.dir( release_id );




        let arr = [];

        for( let i = 0; i < this.releaseList.length; i++ ){
            if( this.releaseList[ i ].id === release_id ){
            }else{
                arr.push( this.releaseList[ i ] );
            };
        };
        this.releaseList = arr;
    }

    MoveUp( release_id ){
        let arr = [];

        for( let i = 0; i < this.releaseList.length; i++ ){
            if( this.releaseList[ i ].id === release_id ){

                if( i > 0 ){
                    let prevewItem = { ...arr[ i - 1 ] };
                    arr.pop();
                    arr.push( this.releaseList[ i ] );
                    arr.push( prevewItem );

                }else{
                    arr.push( this.releaseList[ i ] );
                };

            }else{
                arr.push( this.releaseList[ i ] );
            };
        };
        this.releaseList = arr;
    }

    MoveDown( release_id ){
        let arr = [];

        let pushed_I = null;

        for( let i = 0; i < this.releaseList.length; i++ ){
            if( pushed_I !== i ){
                if( this.releaseList[ i ].id === release_id ){
                    if( this.releaseList[ i + 1 ] ){
                        pushed_I = i + 1;
                        arr.push( this.releaseList[ i + 1 ] );
                        arr.push( this.releaseList[ i ] );
                    }else{
                        arr.push( this.releaseList[ i ] );
                    };
                }else{
                    arr.push( this.releaseList[ i ] );
                };
            }
            
        };
        this.releaseList = arr;
    }

    UpdateDurationTime(){
        let { type } = get_event_by_id( this.eventId );  

        // if( type ){
            // let durationTime = 0;
            let allReleaseDuration = null;

            if( this.releaseList.length > 0 ){
                if( type === EVENT_TYPE.BLOCK ){
                    for( let i = 0; i < this.releaseList.length; i++ ){
                        allReleaseDuration = allReleaseDuration + this.releaseList[ i ].GetDurationTime();
                    };
                }else{

                    if( this.firstSegmentId === null ){
                        allReleaseDuration = this.releaseList[ 0 ].GetDurationTime();
                    }else{
                        /*
                            никогда не выполнится, так как нельзя резать события с релизами больше одного
                        */
                        allReleaseDuration = this.durationTime;
                    };
                }

            }else{
                if( type === EVENT_TYPE.BLOCK ){
                    // durationTime = MIN_EVENT_DURATION_SEC;
                    allReleaseDuration = MIN_EVENT_DURATION_SEC;

                }else{
                    allReleaseDuration = this.durationTime;
                    // if( this.gridEventId !== null ){
                    //     let event = get_grid_event_by_id( this.gridEventId );

                    //     if( event === null ){
                    //         durationTime = this.durationTime;
                    //     }else{
                    //         durationTime = event.durationTime;
                    //     };

                    // }else{
                    //     durationTime = this.durationTime;
                    // }
                };
            };
            // this.durationTime = durationTime;
            if( allReleaseDuration !== null ){
                this.durationTime = allReleaseDuration;
            };
            

        // }

    }

    UpdateEventData(){
        this.UpdateDurationTime();
    }

    UpdateFinalNotes(){

    }

    SetIdIfNull( newId ){
        if( this.gridEventId === null || this.id === null ){
            this.gridEventId =      newId;
            this.id =               newId;
        };
    }


}


