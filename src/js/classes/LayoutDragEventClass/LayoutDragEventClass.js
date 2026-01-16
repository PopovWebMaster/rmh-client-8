
import { DRAG_START, MIN_EVENT_DURATION_SEC } from './../../config/layout.js';

import { get_grid_event_data } from './get_grid_event_data.js';
import { get_event_by_id } from './../../helpers/get_event_by_id.js';
import { convert_time_str_to_sec } from './../../helpers/convert_time_str_to_sec.js';

import { get_start_time_limit } from './get_start_time_limit.js';
import store from './../../redux/store.js';

import {
    setDragStartFrom,
    setDragStartDuration,
    setDragStartEventId,
    setDragStartCategoryId,
    setDragStartMinStartTime,
    setDragStartMaxStartTime,
    setDragStartStartTime,
    setDragStartGridEventId,
    clearAll,
} from './../../redux/layoutDragEventSlise.js';

export class LayoutDragEventClass {
    constructor(){

        this.startFrom = '';

        this.gridEventId = null;

        this.firstSegmentId = null;
        this.isKeyPoint = false;
        this.eventId = null;
        this.startTime = null;
        this.durationTime = null;

        this.categoryId = null;
        this.eventDurationTime = MIN_EVENT_DURATION_SEC;
        this.eventLinkedFile = null;
        this.eventName = '';
        this.eventStyle = {};
        this.eventType = '';

        this.minStartTime = 0;
        this.maxStartTime = 24*60*60;




        this.ClearAll = this.ClearAll.bind(this);


        this.SetStartFrom = this.SetStartFrom.bind(this);
        this.SetGridEvent = this.SetGridEvent.bind(this);

        this.SetEvent = this.SetEvent.bind(this);
        this.SetToStore = this.SetToStore.bind(this);

        this.SetStartTimeLimit = this.SetStartTimeLimit.bind(this);
        // this.SetMaxStartTime = this.SetMaxStartTime.bind(this);






    }

    SetStartFrom( startFrom ){
        this.startFrom = startFrom;
    }

    SetGridEvent( gridEventId ){
        let {
            firstSegmentId,
            isKeyPoint,
            eventId,
            startTime,
            durationTime,
        } = get_grid_event_data( gridEventId );

        this.gridEventId = gridEventId;

        this.firstSegmentId =   firstSegmentId;
        this.isKeyPoint =       isKeyPoint;
        // this.eventId =          eventId;
        this.startTime =        startTime;
        this.durationTime =     durationTime;

        this.SetEvent( eventId );

    }

    SetEvent( eventId ){

        let {
            category_id,
            durationTime,
            linked_file,
            name,
            style,
            type,
        } = get_event_by_id( eventId );

        this.eventId =          eventId;
        this.categoryId = category_id;
        this.eventDurationTime = convert_time_str_to_sec( durationTime );
        this.eventLinkedFile = linked_file;
        this.eventName = name;
        this.eventStyle = style;
        this.eventType = type;

    }

    SetStartTimeLimit(){
        if( this.startFrom === DRAG_START.GRID_EVENT ){
            let {
                minStartTime,
                maxStartTime,
            } = get_start_time_limit( this.gridEventId );

            this.minStartTime = minStartTime;
            this.maxStartTime = maxStartTime;

        };
    }

    SetToStore(){

        store.dispatch( setDragStartFrom( this.startFrom ) );
        store.dispatch( setDragStartEventId( this.eventId ) );
        store.dispatch( setDragStartCategoryId( this.categoryId ) );

        store.dispatch( setDragStartMinStartTime( this.minStartTime ) );
        store.dispatch( setDragStartMaxStartTime( this.maxStartTime ) );

        // console.dir( this );

        if( this.startFrom === DRAG_START.GRID_EVENT ){
            store.dispatch( setDragStartDuration( this.durationTime ) );
            store.dispatch( setDragStartStartTime( this.startTime ) );
            store.dispatch( setDragStartGridEventId( this.gridEventId ) );

        }else if( this.startFrom === DRAG_START.NEW_EVENT ){
            store.dispatch( setDragStartDuration( this.eventDurationTime ) );

        };


        
    }

    ClearAll(){
        store.dispatch( clearAll() );
    }
}