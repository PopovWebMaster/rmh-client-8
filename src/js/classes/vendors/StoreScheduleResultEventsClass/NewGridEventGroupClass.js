import store from './../../../redux/store.js';


import { ScheduleEventClass } from './ScheduleEventClass.js';

import { get_event_by_id } from './../../../helpers/get_event_by_id.js';
import { convert_time_str_to_sec } from './../../../helpers/convert_time_str_to_sec.js';
import { EVENT_TYPE } from './../../../config/layout.js';

export class NewGridEventGroupClass {
    constructor(){

        this.scheduleEventsGroup = [];

        this.category_id =          null;
        this.event_durationTime =   0;
        this.event_name =           '';
        this.event_notes =          '';
        this.event_style =          {};
        this.event_type =           null;
        this.eventId =              null;
        this.linked_file =          [];

        this.firstSegmentId =   null;

        


        this.AddNewEvent = this.AddNewEvent.bind(this);
        this.AddLinkedFilesFromEvent = this.AddLinkedFilesFromEvent.bind(this);
        this.AddReleaseAsLinkedFile = this.AddReleaseAsLinkedFile.bind(this);

        this.SetEventData = this.SetEventData.bind(this);
        this.Update = this.Update.bind(this);
        this.AddAppRelease = this.AddAppRelease.bind(this);



        




    }

    AddNewEvent( gridEventData ){
        /*
            Содержимое gridEventData смотри в ScheduleEventClass.SetData( gridEventData )

            
        */

        let ScheduleEvent = new ScheduleEventClass();
        ScheduleEvent.SetData( gridEventData );
        this.scheduleEventsGroup.push( ScheduleEvent );

        if( this.scheduleEventsGroup.length === 1 ){
            this.SetEventData();
            let { firstSegmentId } = this.scheduleEventsGroup[ 0 ];
            this.firstSegmentId = firstSegmentId;
        };

    }

    SetEventData(){
        if( this.scheduleEventsGroup[0] ){
            let { eventId } = this.scheduleEventsGroup[0];
            let event = get_event_by_id( eventId );
            if( event ){
                let {
                    category_id,
                    durationTime,
                    // id,
                    linked_file,
                    name,
                    notes,
                    style,
                    type,
                } = event

                this.category_id =          category_id;
                this.event_durationTime =   Number( durationTime )? durationTime: typeof durationTime === 'string'? convert_time_str_to_sec( durationTime ): 0;
                this.event_name =           name;
                this.event_notes =          notes;
                this.event_style =          style;
                this.event_type =           type;
                this.eventId =              eventId;
                this.linked_file =          linked_file === null? []: linked_file;

            };
        };
    }

    SetAllDuration(){

    }

    AddLinkedFilesFromEvent(){
        if( this.firstSegmentId === null ){  // событие не является порезаным на части
            if( this.event_type === EVENT_TYPE.BLOCK ){
                if( this.linked_file !== null ){
                    for( let i = 0; i < this.linked_file.length; i++ ){
                        let {
                            duration,
                            name,
                        } = this.linked_file[ i ];
                        let { startTime } = this.scheduleEventsGroup[ 0 ];
                        this.scheduleEventsGroup[ 0 ].AddLinkedFileToRelease({
                            category_id: this.category_id,
                            eventId: this.eventId,
                            name,
                            duration,
                            startTime
                        });
                        this.scheduleEventsGroup[ 0 ].UpdateEventData();
                    };
                }
                
            }else{

                let { releases } = this.scheduleEventsGroup[ 0 ];
                if( releases ){
                    if( releases.length === 0 ){
                        if( this.linked_file[ 0 ] ){
                            let {
                                duration,
                                name,
                            } = this.linked_file[ 0 ];
                            let { startTime } = this.scheduleEventsGroup[ 0 ];
                            this.scheduleEventsGroup[ 0 ].AddLinkedFileToRelease({
                                category_id: this.category_id,
                                eventId: this.eventId,
                                name,
                                duration,
                                startTime
                            });
                            this.scheduleEventsGroup[ 0 ].UpdateEventData();
                        };
                    };
                };

            };
        }else{
            console.dir('Здесь часть по добавлению привязанного файла к порезанному событию');
        };
        
    }

    AddReleaseAsLinkedFile( params ){
        let {
            name,
            duration,
            startTime,
        } = params;
        if( this.firstSegmentId === null ){
            if( this.event_type === EVENT_TYPE.BLOCK ){
                this.scheduleEventsGroup[ 0 ].AddLinkedFileToRelease({
                    category_id:    this.category_id,
                    eventId:        this.eventId,
                    name,
                    duration,
                    startTime
                });
                this.scheduleEventsGroup[ 0 ].UpdateEventData();
            }else{


                if( releases.length === 0 ){
                    this.scheduleEventsGroup[ 0 ].AddLinkedFileToRelease({
                        category_id:    this.category_id,
                        eventId:        this.eventId,
                        name,
                        duration,
                        startTime
                    });
                    this.scheduleEventsGroup[ 0 ].UpdateEventData();
                };
            };
        }else{
            console.dir('Здесь часть по добавлению межпрограммки к порезанному событию');
        };
    }
    // AddLinkedFilesFromEvent

    AddAppRelease( releaseId ){

        if( this.firstSegmentId === null ){
            for( let i = 0; i < this.scheduleEventsGroup.length; i++ ){
                console.dir(  '!!!!!!!!!!!!!!!!!');
                this.scheduleEventsGroup[ i ].AddRelease( releaseId );
                this.scheduleEventsGroup[ i ].UpdateEventData();
            };
        }else{
            console.dir( 'для порезанных файлов не прописана NewGridEventGroup.AddAppReleaseFromDrag()' )
        };

        console.dir( this );

    }

    Update(){// дучше не использовать
        if( this.firstSegmentId === null ){
            for( let i = 0; i < this.scheduleEventsGroup.length; i++ ){
                this.scheduleEventsGroup[ i ].UpdateEventData();
            };
        }else{
            console.dir( 'для порезанных файлов не прописана NewGridEventGroup.Update()' )
        }

    }


}