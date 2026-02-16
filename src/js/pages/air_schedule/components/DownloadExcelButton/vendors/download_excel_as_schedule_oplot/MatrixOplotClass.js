
import { MatrixMethodsClass } from './MatrixMethodsClass.js';

export class MatrixOplotClass extends MatrixMethodsClass {

    constructor(){
        super();

        this.last_startTime = null;
        this.matrix = [];

        this.highlight_files = {};
        this.used_events = {};

        this.AddScheduleEvent =     this.AddScheduleEvent.bind(this);
        this.SetHighlightFiles =    this.SetHighlightFiles.bind(this);
        this.SetUsedEvents =        this.SetUsedEvents.bind(this);
        this.GetMatrix =        this.GetMatrix.bind(this);



        


    }

    AddScheduleEvent( scheduleEvent ){

        let rowsList = this.GetRowsDataFromScheduleEvent( scheduleEvent );

        this.AddPreviewEmptyRowIfIsset( rowsList );

        for( let i = 0; i < rowsList.length; i++ ){
            this.matrix.push( rowsList[ i ] );
        };

        this.SetLastStartTime( rowsList );

        

    }

    SetHighlightFiles( highlight_files_by_name ){
        this.highlight_files = highlight_files_by_name;
    }

    SetUsedEvents( used_events_by_id ){
        this.used_events = used_events_by_id;
    }

    GetMatrix(){

        this.MakeTimeCorrects();

        let matrix = [];
        for( let i = 0; i < this.matrix.length; i++ ){
            let item = structuredClone( this.matrix[ i ] );
            matrix.push( item );
        };

        return matrix;

    }



}