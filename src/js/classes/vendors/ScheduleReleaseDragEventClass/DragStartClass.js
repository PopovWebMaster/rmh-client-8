
import { START_FROM } from './../../../config/scheduleResult.js';

import store from './../../../redux/store.js';
import { 
    setDragStartFrom,
    setDragStartFileName,
    setDragStartDuration,
    setDragStartEventId,
    setDragStartStartTime,
    setDragStartGridEventId,
    setDragStartCategoryId,
    setDragStartReleaseId,

} from './../../../redux/scheduleResultDragEventSlise.js';

import { get_event_by_id } from './../../../helpers/get_event_by_id.js';

export class DragStartClass {
    constructor(){

        this.startFrom = '';

        this.fileName = '';
        this.duration = 0;
        this.eventId = null;
        this.startTime = 0;
        this.gridEventId = null;
        this.categoryId = null;
        this.releaseId = null;

        this.SetFileName = this.SetFileName.bind(this);
        this.SetDuration = this.SetDuration.bind(this);
        this.SetEventId = this.SetEventId.bind(this);
        this.SetStartFrom = this.SetStartFrom.bind(this);
        this.SetToStore = this.SetToStore.bind(this);
        this.SetStartTime = this.SetStartTime.bind(this);
        this.SetGridEventId = this.SetGridEventId.bind(this);
        this.SetReleaseId = this.SetReleaseId.bind(this);

        



    }

    SetStartFrom( value ){
        this.startFrom = value;     
    }

    SetFileName( fileName ){
        this.fileName = fileName;
    }

    SetDuration( duration ){
        this.duration = duration;
    }

    SetEventId( eventId ){
        this.eventId = eventId;

        if( eventId !== null ){
            let event = get_event_by_id( eventId );
            if( event ){
                this.categoryId = event.category_id;
            };
        }
        
    }

    SetStartTime( startTime ){
        this.startTime = startTime;
    }

    SetGridEventId( gridEventId ){
        this.gridEventId = gridEventId;

    }

    SetReleaseId( releaseId ){
        this.releaseId = releaseId;

    }


    SetToStore(){

        store.dispatch( setDragStartFrom( this.startFrom ) );
        store.dispatch( setDragStartDuration( this.duration ) );
        store.dispatch( setDragStartEventId( this.eventId ) );
        store.dispatch( setDragStartCategoryId( this.categoryId ) );

        if( this.startFrom === START_FROM.RELEASE_FREE ){
            store.dispatch( setDragStartFileName( this.fileName ) );
            
        }else if( this.startFrom === START_FROM.RELEASE_APPLICATION ){
            store.dispatch( setDragStartReleaseId( this.releaseId ) );

        }else if( this.startFrom === START_FROM.SCHEDULE_EVENT ){
            store.dispatch( setDragStartStartTime( this.startTime ) );
            store.dispatch( setDragStartGridEventId( this.gridEventId ) );
        }else{
            /*
                Это мест используется для того, чтоб записать в стор всё что выше в if
                чтоб можно было создать эекземпляр класса, просто вызвать .SetToStore()
                и в store всё очистилось
            */

        };
    }
}