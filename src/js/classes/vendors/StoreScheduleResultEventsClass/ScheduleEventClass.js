

export class ScheduleEventClass{
    constructor(){

        this.cutPart =          null;
        this.dayNum =           null;
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

        this.GetData = this.GetData.bind(this);
        this.SetDataFromGridEvent = this.SetDataFromGridEvent.bind(this);



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

        this.cutPart =          cutPart;
        this.dayNum =           dayNum;
        this.durationTime =     durationTime;
        this.eventId =          eventId;
        this.firstSegmentId =   firstSegmentId;
        this.gridEventId =      id;
        this.isKeyPoint =       isKeyPoint;
        this.is_premiere =      is_premiere;
        this.notes =            notes;
        this.pushIt =           pushIt;
        this.startTime =        startTime;
        this.releases =         [];
    }

    GetData(){
        return {
            cutPart:        this.cutPart,
            dayNum:         this.dayNum,
            durationTime:   this.durationTime,
            eventId:        this.eventId,
            firstSegmentId: this.firstSegmentId,
            gridEventId:    this.gridEventId,
            isKeyPoint:     this.isKeyPoint,
            is_premiere:    this.is_premiere,
            notes:          this.notes,
            pushIt:         this.pushIt,
            startTime:      this.startTime,
            releases:       this.releases,
        };
    }
}