

export class MatrixOplotClass {

    constructor(){
        this.last_startTime = 0;
        this.matrix = [];

        this.highlight_files = {};
        this.used_events = {};

        this.AddScheduleEvent =     this.AddScheduleEvent.bind(this);
        this.SetHighlightFiles =    this.SetHighlightFiles.bind(this);
        this.SetUsedEvents =        this.SetUsedEvents.bind(this);


    }

    AddScheduleEvent( scheduleEvent ){

        console.dir( scheduleEvent );

    }

    SetHighlightFiles( highlight_files_by_name ){
        this.highlight_files = highlight_files_by_name;
    }

    SetUsedEvents( used_events_by_id ){
        this.used_events = used_events_by_id;
    }



}