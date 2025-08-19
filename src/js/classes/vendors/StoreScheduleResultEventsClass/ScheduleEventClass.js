
import { ReleaseClass } from './ReleaseClass.js';
import { get_grid_event_by_id } from './get_grid_event_by_id.js';
import { get_event_by_id } from './../StoreScheduleResultEventsClass/get_event_by_id.js';
import { EVENT_TYPE, MIN_EVENT_DURATION_SEC } from './../../../config/layout.js';

export class ScheduleEventClass{
    constructor(){

        this.cutPart =          null;
        this.dayNum =           null;
        this.durationTime =     null;
        this.durationTime =     null;
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
        this.durationTime =         durationTime;
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

        // this.finalNotes = this.notes;


        let { type } = get_event_by_id( this.eventId );
        if( type ){
            if( type === EVENT_TYPE.BLOCK ){
                this.durationTime  = MIN_EVENT_DURATION_SEC
            };
        }
       
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
                let releases_id = releases[ i ].id;
                let data = { ...releases[ i ] };
                this.AddReleaseByData( data );




                // this.AddRelease( releases_id );
            };
        }else{

        };

        this.cutPart =              cutPart;
        this.dayNum =               dayNum;
        this.durationTime =         durationTime;
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

    RemoveRelease( release_id ){
        let arr = [];

        for( let i = 0; i < this.releaseList.length; i++ ){
            if( this.releaseList[ i ].id === release_id ){
            }else{
                arr.push( this.releaseList[ i ] );
            };
        };
        this.releaseList = arr;
    }

    UpdateDurationTime(){
        let { type } = get_event_by_id( this.eventId );
        if( type ){

            let durationTime = 0;
            if( this.releaseList.length > 0 ){
                for( let i = 0; i < this.releaseList.length; i++ ){
                    durationTime = durationTime + this.releaseList[ i ].GetDurationTime();
                };
            }else{
                if( type === EVENT_TYPE.BLOCK ){
                    durationTime = MIN_EVENT_DURATION_SEC
                }else{
                    if( this.gridEventId !== null ){
                        let event = get_grid_event_by_id( this.gridEventId );
                        durationTime = event.durationTime;
                    }else{
                        durationTime = this.durationTime;
                    }
                };
            };
            this.durationTime = durationTime;
        }
    }

    UpdateEventData(){
        this.UpdateDurationTime();
        this.UpdateFinalNotes();
    }

    UpdateFinalNotes(){
        let { type } = get_event_by_id( this.eventId );
        if( type ){
            if( type === EVENT_TYPE.BLOCK ){
                this.finalNotes = this.notes;
            }else{
                let releaseNotes = '';
                for( let i = 0; i < this.releaseList.length; i++ ){
                    releaseNotes = `${releaseNotes} ${this.releaseList[ i ].air_notes}`;
                };
                this.finalNotes = `${this.notes} ${ releaseNotes }`;
            };
        }

    }

    SetIdIfNull( newId ){
        if( this.gridEventId === null || this.id === null ){
            this.gridEventId =      newId;
            this.id =               newId;
        };
    }


}


// cutPart: null
// dayNum: 3
// durationTime: 180
// eventId: 11
// firstSegmentId: null
// gridEventId: 311
// isKeyPoint: false
// is_premiere: false
// notes: ""
// pushIt: null
// releases: []
// startTime: 62343
// totalDurationTime
