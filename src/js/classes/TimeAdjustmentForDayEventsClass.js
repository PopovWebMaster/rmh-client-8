
import { SegmentClass } from './vendors/TimeAdjustmentForDayEvents/SegmentClass.js';

export class TimeAdjustmentForDayEventsClass{

    constructor(){

        this.segments = [];

        this.CurrentSegment = new SegmentClass();

        this.AddEvent = this.AddEvent.bind(this);
        this.Make = this.Make.bind(this);
        this.AddDayEventList = this.AddDayEventList.bind(this);

        this.ResetDurationForEvents = this.ResetDurationForEvents.bind(this);
        this.GetNewEventsList = this.GetNewEventsList.bind(this);
        this.ResetDurationForGridEvent = this.ResetDurationForGridEvent.bind(this);



        



        
    }

    AddEvent( event ){

        let { isKeyPoint, startTime } = event;

        if( this.CurrentSegment.IsListEmpty() ){
            if( isKeyPoint ){
                this.CurrentSegment.SetStartTime( startTime );
            };
            this.CurrentSegment.AddEvent( event );

        }else{
            if( isKeyPoint ){
                this.CurrentSegment.SetLimitTimePoint( startTime );
                this.segments.push( this.CurrentSegment );
                this.CurrentSegment = new SegmentClass();
                this.CurrentSegment.SetStartTime( startTime );
            };
            this.CurrentSegment.AddEvent( event );
        };

    }

    AddDayEventList( list ){

        for( let i = 0; i < list.length; i++ ){
            this.AddEvent( list[ i ] );
        };
        this.segments.push( this.CurrentSegment );
        
    }

    ResetDurationForEvents( eventId, duration ){
        let result = {
            isErrors: false,
            message: '',
        };

        for( let i = 0; i < this.segments.length; i++ ){
            let offsetReport = this.segments[ i ].SetDurationForEvent( eventId, duration );
            if( offsetReport.isErrors ){
                result = offsetReport;
                break;
            };
        };

        return result;
    }

    ResetDurationForGridEvent( gridEventId, duration ){

        let result = {
            isErrors: false,
            message: '',
        };

        for( let i = 0; i < this.segments.length; i++ ){

            // console.dir( {
            //     gridEventId, 
            //     duration,
            //     segments_i: this.segments[ i ],
            // } );
            let offsetReport = this.segments[ i ].SetDurationForGridEvent( gridEventId, duration );
            if( offsetReport.isErrors ){
                result = offsetReport;
                break;
            };
        };

        return result;

    }



    GetNewEventsList(){
        let result = [];
        for( let i = 0; i < this.segments.length; i++ ){
            let list = this.segments[ i ].EventList.GetEventsList();
            for( let y = 0; y < list.length; y++ ){
                list[y].pushIt = null;
                result.push( list[y] );
            };
        };
        return result;
    };

    Make(){

        // console.dir( this );

    }

}


// cutPart: null
// dayNum: 0
// durationTime: 3000
// eventId: 7
// firstSegmentId: null
// id: 20
// isKeyPoint: true
// notes: ""
// pushIt: null
// startTime: 25200