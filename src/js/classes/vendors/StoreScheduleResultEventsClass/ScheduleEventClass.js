
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
        this.gridEventId =      null;
        this.isKeyPoint =       null;
        this.is_premiere =      null;
        this.notes =            null;
        this.pushIt =           null;
        this.startTime =        null;
        this.releases =         null;

        this.releaseList = []; // при выводе данных не использовать !!!!!!!

        this.GetData = this.GetData.bind(this);
        this.SetDataFromGridEvent = this.SetDataFromGridEvent.bind(this);
        this.SetDataFromScheduleEvent = this.SetDataFromScheduleEvent.bind(this);
        this.AddRelease = this.AddRelease.bind(this);
        this.UpdateDurationTime = this.UpdateDurationTime.bind(this);


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
        this.gridEventId =          id;
        this.isKeyPoint =           isKeyPoint;
        this.is_premiere =          is_premiere;
        this.notes =                notes;
        this.pushIt =               pushIt;
        this.startTime =            startTime;
        this.releases =             [];
        this.releaseList = [];


        // this.SetListToStore();
        // this.UpdateDurationTime()

        let { type } = get_event_by_id( this.eventId );
        if( type ){
            if( type === EVENT_TYPE.BLOCK ){
                this.durationTime  = MIN_EVENT_DURATION_SEC
            };
        }
       
    }

    SetDataFromScheduleEvent( data ){
        let {
            cutPart,
            dayNum,
            durationTime,
            eventId,
            firstSegmentId,
            gridEventId,
            isKeyPoint,
            is_premiere,
            notes,
            pushIt,
            startTime,
            releases,
        } = data;

        this.cutPart =              cutPart;
        this.dayNum =               dayNum;
        this.durationTime =         durationTime;
        this.eventId =              eventId;
        this.firstSegmentId =       firstSegmentId;
        this.gridEventId =          gridEventId;
        this.isKeyPoint =           isKeyPoint;
        this.is_premiere =          is_premiere;
        this.notes =                notes;
        this.pushIt =               pushIt;
        this.startTime =            startTime;
        this.releases =             [ ...releases ];

        for( let i = 0; i < releases.length; i++ ){
            this.AddRelease( releases[ i ] );
        };

        this.UpdateDurationTime();

    }

    GetData(){
        return {
            cutPart:            this.cutPart,
            dayNum:             this.dayNum,
            durationTime:       this.durationTime,
            eventId:            this.eventId,
            firstSegmentId:     this.firstSegmentId,
            gridEventId:        this.gridEventId,
            isKeyPoint:         this.isKeyPoint,
            is_premiere:        this.is_premiere,
            notes:              this.notes,
            pushIt:             this.pushIt,
            startTime:          this.startTime,
            releases:           this.releases,
        };
    }
    AddRelease( release_id ){
        let Release = new ReleaseClass( release_id );
        this.releaseList.push( Release );
    }

    UpdateDurationTime(){
        let { type } = get_event_by_id( this.eventId );
        if( type ){
            let { durationTime } = get_grid_event_by_id( this.gridEventId );
            if( this.releaseList.length > 0 ){
                durationTime = 0;
                for( let i = 0; i < this.releaseList.length; i++ ){
                    durationTime = durationTime + this.releaseList[ i ].GetDurationTime();
                };
            }else{
                if( type === EVENT_TYPE.BLOCK ){
                    durationTime = MIN_EVENT_DURATION_SEC
                };
            };
            this.durationTime = durationTime;
        }
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
