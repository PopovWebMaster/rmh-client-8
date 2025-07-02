
import { EventsListClass } from './EventsListClass.js'

export class SegmentClass{
    constructor(){

        this.startTime = 0;
        this.EventList = new EventsListClass();
        this.limitTimePoint = 24 * 60 * 60;


        this.AddEvent = this.AddEvent.bind(this);
        this.IsListEmpty = this.IsListEmpty.bind(this);
        this.SetStartTime = this.SetStartTime.bind(this);
        this.GetSegmentData = this.GetSegmentData.bind(this);
        this.SetLimitTimePoint = this.SetLimitTimePoint.bind(this);
        this.SetDurationForEvent = this.SetDurationForEvent.bind(this);
        this.SetDurationForGridEvent = this.SetDurationForGridEvent.bind(this);





        


    }

    AddEvent( event ){
        this.EventList.AddEvent( event )

    }

    IsListEmpty(){
        return this.EventList.ListIsEmpty();
    }

    SetStartTime( startTime ){
        this.startTime = startTime;
    }
    SetLimitTimePoint( point ){
        this.limitTimePoint = point;
    }

    GetSegmentData(){
        return {
            startTime:      this.startTime,
            limitTimePoint: this.limitTimePoint,
            eventList:      this.EventList.GetList(),
        };
    }

    // MakePushItAnalysis(){
        
    // }

    SetDurationForEvent( eventId, duration ){
        this.EventList.MakePushAnalysis( this.startTime, this.limitTimePoint );
        this.EventList.SetDurationForEvent( eventId, duration );
        this.EventList.MakeOffset( this.startTime, this.limitTimePoint );
        return this.EventList.GetOffsetReport();
    }

    SetDurationForGridEvent( gridEventId, duration ){
        this.EventList.MakePushAnalysis( this.startTime, this.limitTimePoint );
        this.EventList.SetDurationForGridEvent( gridEventId, duration );
        this.EventList.MakeOffset( this.startTime, this.limitTimePoint );
        return this.EventList.GetOffsetReport();
    }

    // MakeOffset(){
        
    // }

    // GetOffsetReport(){
    //     return this.EventList.GetOffsetReport();
    // }

}