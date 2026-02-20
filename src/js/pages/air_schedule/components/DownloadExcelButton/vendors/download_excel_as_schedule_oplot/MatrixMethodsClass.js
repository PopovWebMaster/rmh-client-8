
import { MatrixRowClass } from './MatrixRowClass.js';

export class MatrixMethodsClass {
    constructor( props ){
        // super( props );


        this.GetRowsDataFromScheduleEvent =        this.GetRowsDataFromScheduleEvent.bind(this);
        this.AddPreviewEmptyRowIfIsset =        this.AddPreviewEmptyRowIfIsset.bind(this);
        this.SetLastStartTime =        this.SetLastStartTime.bind(this);
        this.MakeTimeCorrects =        this.MakeTimeCorrects.bind(this);

        this.MakePushToKeyPointsBefor =        this.MakePushToKeyPointsBefor.bind(this);
        this.MakePushToKeyPointsAfter =        this.MakePushToKeyPointsAfter.bind(this);

        this.SortMatrix =        this.SortMatrix.bind(this);
        this.MakePushToNoKeyPoint =        this.MakePushToNoKeyPoint.bind(this);
        this.FillEmptyDuration =        this.FillEmptyDuration.bind(this);








        



    }

    GetRowsDataFromScheduleEvent( scheduleEvent ){
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
            cellBackground,
            textColor
        } = scheduleEvent;

        // console.dir( 'scheduleEvent' );
        // console.dir( scheduleEvent );


        let result = [];

        if( releases.length > 0 ){
            let last_startTime = startTime;

            for( let i = 0; i < releases.length; i++ ){
                let {
                    releaseDuration,
                } = releases[ i ];

                let MatrixRow = new MatrixRowClass();

                if( i === 0 ){
                    MatrixRow.SetIsKeyPoint( isKeyPoint );
                    MatrixRow.SetNotesFromScheduleEvent( scheduleEvent );
                };

                

                MatrixRow.SetHighlightFiles( this.highlight_files );
                MatrixRow.SetCellBackground( cellBackground );
                MatrixRow.SetTextColor( textColor );

                MatrixRow.SetStartTime( last_startTime );
                MatrixRow.SetDuration( releaseDuration );
                MatrixRow.SetReleaseInfoFromRelease( releases[ i ], eventId );
                MatrixRow.SetNotesFromRelease( releases[ i ] );

                
                last_startTime = last_startTime + releaseDuration;

                result.push( MatrixRow.GetData() );
            }

        }else{

            let MatrixRow = new MatrixRowClass();
            MatrixRow.SetIsKeyPoint( isKeyPoint );
            MatrixRow.SetStartTime( startTime );
            MatrixRow.SetDuration( durationTime );
            MatrixRow.SetReleaseInfoFromEvent( eventId );
            MatrixRow.SetNotesFromScheduleEvent( scheduleEvent );
            MatrixRow.SetCellBackground( cellBackground );
            MatrixRow.SetTextColor( textColor );
            
            result.push( MatrixRow.GetData() );

        };

        return result;

    }

    AddPreviewEmptyRowIfIsset( rowsList ){
        if( rowsList[ 0 ] ){

            // console.dir( 'AddPreviewEmptyRowIfIsset' );
            // console.dir( rowsList[ 0 ] );

            
            let { startTime } = rowsList[ 0 ];

            

            if( startTime > this.last_startTime ){
                let MatrixRow = new MatrixRowClass();
                MatrixRow.SetStartTime( this.last_startTime );
                this.matrix.push( MatrixRow.GetDataForEmpty() );
            };  

            // console.dir( '>>>>>>>>>> END >>>>>>>>>> AddPreviewEmptyRowIfIsset ' );
        };

    }

    SetLastStartTime( rowsList ){
        // console.dir( 'SetLastStartTime' );
        //     console.dir( rowsList );

        let { startTime, duration } = rowsList[ rowsList.length - 1 ];
        this.last_startTime = startTime + duration + 1;

        // console.dir( '>>>>>>>>>> END >>>>>>>>>> SetLastStartTime ' );
    }

    MakeTimeCorrects(){

        this.MakePushToKeyPoints();
        this.MakePushToNoKeyPoint();
        this.FillEmptyDuration();

    }

    MakePushToKeyPoints(){

        for( let i = 0; i < this.matrix.length; i++ ){
            let { isKeyPoint } = this.matrix[ i ];
            if( isKeyPoint ){
                this.MakePushToKeyPointsBefor( i );
                this.MakePushToKeyPointsAfter( i );
            };
        };

    }

    MakePushToKeyPointsBefor( i ){
        let shifting_is_allowed = false; // проверяем, можно ли сдвигать до
        let offset_ = 1;
        while( true ){
            if( this.matrix[ i - offset_ ] ){
                let { isEmpty, isKeyPoint } = this.matrix[ i - offset_ ];
                if( isEmpty === true ){
                    shifting_is_allowed = true;
                    break;
                }else{
                    if( isKeyPoint === true ){
                        break;
                    };
                };
            }else{
                break;
            };
            offset_++;
        };

        if( shifting_is_allowed ){
            // console.dir( 'MakePushToKeyPointsBefor' );
            // console.dir( this.matrix[ i ] );

            let last_startTime = this.matrix[ i ].startTime;
            let offset = 1;
            while( true ){
                if( this.matrix[ i - offset ] ){
                    let { isEmpty, duration, startTime } = this.matrix[ i - offset ];
                    if( isEmpty ){
                        break;
                    }else{
                        last_startTime = last_startTime - duration;
                        this.matrix[ i - offset ].startTime = last_startTime;
                    };
                    offset++;
                }else{
                    break;
                };
            };
        };

        // console.dir( '>>>>>>>>>> END >>>>>>>>>> MakePushToKeyPointsBefor ' );

    }

    MakePushToKeyPointsAfter( i ){

        // console.dir( 'MakePushToKeyPointsAfter' );
        //     console.dir( this.matrix[ i ] );

        let last_duration = this.matrix[ i ].duration;
        let last_startTime = this.matrix[ i ].startTime;
        let offset = 1;

        while( true ){
            if( this.matrix[ i + offset ] ){
                let { isEmpty, duration, startTime, isKeyPoint } = this.matrix[ i + offset ];
                if( isEmpty ){
                    if( offset === 1 ){
                        this.matrix[ i + offset ].startTime = last_startTime + last_duration;
                    }else{
                        this.matrix[ i + offset ].startTime = last_startTime;
                    };
                    
                    break;
                }else{
                    
                    if( isKeyPoint ){
                        if( startTime > last_startTime ){
                            let MatrixRow = new MatrixRowClass();
                            MatrixRow.SetStartTime( last_startTime );
                            this.matrix.push( MatrixRow.GetDataForEmpty() );
                            this.SortMatrix();
                        };
                        break;
                    }else{
                        if( offset === 1 ){
                            last_startTime = last_startTime + last_duration;
                        };

                        this.matrix[ i + offset ].startTime = last_startTime;

                        last_startTime = last_startTime + duration;

                    };
                };

                offset++;

            }else{
                break;
            };

        };

        // console.dir( '>>>>>>>>>> END >>>>>>>>>> MakePushToKeyPointsAfter ' );
    }

    MakePushToNoKeyPoint(){
        let preview_isEmpty = false;
        for( let i = 0; i < this.matrix.length; i++ ){
            let { isKeyPoint, isEmpty } = this.matrix[ i ];
            if( preview_isEmpty ){
                if( isEmpty === false ){
                    if( isKeyPoint === false ){

                        let is_between = false;

                        let offset = 1;
                        while( true ){
                            if( this.matrix[ i + offset ] ){
                                if( this.matrix[ i + offset ].isEmpty ){
                                    is_between = true;
                                    break;
                                }else{
                                    if( this.matrix[ i + offset ].isKeyPoint ){
                                        break;
                                    };
                                };
                                offset++;
                            }else{
                                is_between = true;
                                break;
                            };


                        };

                        if( is_between ){

                            // console.dir( 'MakePushToNoKeyPoint' );
                            // console.dir( this.matrix[ i ] );

                            let last_duration = this.matrix[ i ].duration;
                            let last_startTime = this.matrix[ i ].startTime;
   
                            let offset_ = 1;

                            while( true ){
                                if( offset_ > offset ){
                                    break;
                                };
                                if( offset_ === 1 ){

                                    // console.dir( 'this.matrix[ i + offset_ ]' );
                                    // console.dir( this.matrix[ i + offset_ ] );
                                    if( this.matrix[ i + offset_ ] ){
                                        this.matrix[ i + offset_ ].startTime = last_startTime + last_duration;
                                        last_startTime = last_startTime + this.matrix[ i + offset_ ].duration + last_duration;
                                    }else{
                                        break;
                                    };

                                }else{
                                    this.matrix[ i + offset_ ].startTime = last_startTime;
                                    last_startTime = last_startTime + this.matrix[ i + offset_ ].duration;
                                }
                                
                                // this.matrix[ i + offset_ ].startTime = last_startTime;
                                // last_startTime = last_startTime + this.matrix[ i + offset_ ].duration;

                                offset_++;

                            };

                        };


                    };
                };
            };

            preview_isEmpty = isEmpty;

        };

        // console.dir( '>>>>>>>>>> END >>>>>>>>>> MakePushToNoKeyPoint ' );
    }

    FillEmptyDuration(){
        let matrix = [];
        for( let i = 0; i < this.matrix.length; i++ ){
            let item = structuredClone( this.matrix[ i ] );
            if( item.isEmpty === true ){
                if( this.matrix[ i + 1 ] ){
                    // console.dir( 'FillEmptyDuration' );
                    // console.dir( this.matrix[ i + 1 ] );
                    item.duration = this.matrix[ i + 1 ].startTime - item.startTime;
                };
            };
            matrix.push( item );
        };

        // console.dir( '>>>>>>>>>> END >>>>>>>>>> FillEmptyDuration ' );

        this.matrix = matrix;

    }

    SortMatrix(){
        let arr = structuredClone( this.matrix );

        // console.dir( 'SortMatrix <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<' );
        // console.dir( arr );


        let matrix = arr.sort( ( a, b ) => {
            if( a.startTime > b.startTime ){
                return 1;

            }else{
                return -1;
            };

        } );
        // console.dir( '>>>>>>>>>> END >>>>>>>>>> SortMatrix ' );
        this.matrix = matrix;

    }
}