

import { CommentMatrixRowClass } from './CommentMatrixRowClass.js';

export class CommentsMatrixClass {

    constructor(){

        this.first_startTime = null;
        this.last_startTime = null;
        this.matrix = [];

        this.AddGridEvent = this.AddGridEvent.bind(this);
        this.GetMatrix = this.GetMatrix.bind(this);
        this.GetRowsDataFromScheduleEvent = this.GetRowsDataFromScheduleEvent.bind(this);

    };

    AddGridEvent( gridEvent ){

        let rowsList = this.GetRowsDataFromScheduleEvent( gridEvent );

        for( let i = 0; i < rowsList.length; i++ ){
            this.matrix.push( rowsList[ i ] );
        };

        this.SetLastStartTime( rowsList );

        
    }

    GetMatrix(){
        let matrix = [];
        for( let i = 0; i < this.matrix.length; i++ ){
            let item = structuredClone( this.matrix[ i ] );
            matrix.push( item );
        };

        return matrix;

    }


    GetRowsDataFromScheduleEvent(scheduleEvent){
        let {
            durationTime,
            finalNotes,
            eventId,
            firstSegmentId,
            gridEventId,
            id,
            isKeyPoint,
            is_premiere,
            startTime,
            releases,
        } = scheduleEvent;

        let result = [];

        if( releases.length > 0 ){
            let last_startTime = startTime;

            for( let i = 0; i < releases.length; i++ ){
                let {
                    releaseDuration,
                } = releases[ i ];

                let MatrixRow = new CommentMatrixRowClass();

                if( i === 0 ){
                    MatrixRow.SetIsKeyPoint( isKeyPoint );
                    MatrixRow.SetNotesFromScheduleEvent( scheduleEvent );
                };

                MatrixRow.SetStartTime( last_startTime );

                if( firstSegmentId === null ){
                    MatrixRow.SetDuration( releaseDuration );
                }else{
                    MatrixRow.SetDuration( durationTime );
                };

                MatrixRow.SetReleaseInfoFromRelease( releases[ i ], eventId );
                MatrixRow.SetNotesFromRelease( releases[ i ] );

                last_startTime = last_startTime + releaseDuration;

                result.push( MatrixRow.GetData() );
            }

        }else{

            let MatrixRow = new CommentMatrixRowClass();
            MatrixRow.SetIsKeyPoint( isKeyPoint );
            MatrixRow.SetStartTime( startTime );
            MatrixRow.SetDuration( durationTime );
            MatrixRow.SetReleaseInfoFromEvent( eventId );
            MatrixRow.SetNotesFromScheduleEvent( scheduleEvent );
            
            result.push( MatrixRow.GetData() );

        };

        return result;
    }


    SetLastStartTime( rowsList ){
        let { startTime, duration } = rowsList[ rowsList.length - 1 ];
        this.last_startTime = startTime + duration + 1;
    }

}