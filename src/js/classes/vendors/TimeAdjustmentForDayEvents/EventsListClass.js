
import { convert_sec_to_time } from './../../../helpers/convert_sec_to_time.js';

export class EventsListClass{

    constructor(){
        this.PUSH_UP = 'up';
        this.PUSH_DOWN = 'down';

        this.list = [];

        this.offsetReport = {
            isErrors: false,
            message: '',
        };

        this.AddEvent = this.AddEvent.bind(this);
        this.GetList = this.GetList.bind(this);
        this.ListIsEmpty = this.ListIsEmpty.bind(this);
        this.MakePushAnalysis = this.MakePushAnalysis.bind(this);
        this.GetOffsetReport = this.GetOffsetReport.bind(this);
        this.SetDurationForEvent = this.SetDurationForEvent.bind(this);
        this.MakeOffset = this.MakeOffset.bind(this);

        this.MakeOffsetDown = this.MakeOffsetDown.bind(this);
        this.MakeOffsetUp = this.MakeOffsetUp.bind(this);
        this.GetEventsList = this.GetEventsList.bind(this);


        

    }

    AddEvent( event ){
        this.list.push( event );
    }

    GetList(){
        return [ ...this.list ];
    }

    ListIsEmpty(){
        return this.list.length === 0;
    }

    MakePushAnalysis( timeFrom, timeTo ){

        let point_from = timeFrom;
        for( let i = 0; i < this.list.length; i++ ){
            let { startTime, durationTime } = this.list[ i ];

            if( point_from === startTime ){
                this.list[ i ].pushIt = this.PUSH_UP;
                point_from = point_from + durationTime + 1;
            }else{
                this.list[ i ].pushIt = null;
                point_from = startTime + durationTime + 1;
            };
        };

        let point_to = timeTo;

        for( let i = this.list.length - 1; i >=0; i-- ){
            let { startTime, durationTime } = this.list[ i ];
            if( point_to - durationTime - 1 === startTime ){
                this.list[ i ].pushIt = this.PUSH_DOWN;
                point_to = point_to - durationTime - 1;
            }else{
                break;
            };
            
        };
    }

    SetDurationForEvent( eventId, duration ){
        for( let i = 0; i < this.list.length; i++ ){
            if( this.list[ i ].eventId === eventId ){
                this.list[ i ].durationTime = duration;
            };
        };
    }

    MakeOffset( timeFrom, timeTo ){
        this.MakeOffsetDown();
        this.MakeOffsetUp( timeFrom, timeTo );

    }

    MakeOffsetDown(){

        let lastST = 0;
        let lastDur = 0;

        for( let i = 0; i < this.list.length; i++ ){
            if( i === 0 ){
                let { startTime, durationTime } = this.list[ i ];
                lastST = startTime;
                lastDur = durationTime;
            }else{
                let { startTime, durationTime, pushIt } = this.list[ i ];
                let pointFromST = lastST + lastDur + 1;

                if( pushIt === this.PUSH_UP ){
                    this.list[ i ].startTime = pointFromST;
                    lastST = pointFromST;
                    lastDur = durationTime;

                }else{
                    if( startTime >= pointFromST ){
                        lastST = startTime;
                        lastDur = durationTime;
                    }else{
                        this.list[ i ].startTime = pointFromST;
                        lastST = pointFromST;
                        lastDur = durationTime;
                    };
                };

            };
        };

    }

    MakeOffsetUp( timeFrom, timeTo ){
        let lastST = timeTo;
        let lastDur = 0;

        for( let i = this.list.length - 1; i >= 0; i-- ){

            let { startTime, durationTime, pushIt } = this.list[ i ];
            let pointFromST = lastST - durationTime - 1;
            if( pushIt === this.PUSH_DOWN ){
                this.list[ i ].startTime = pointFromST;
                lastST = pointFromST;
                lastDur = durationTime;
            }else{
                if( startTime <= pointFromST ){
                    lastST = startTime;
                    lastDur = durationTime;
                }else{
                    this.list[ i ].startTime = pointFromST;
                    lastST = pointFromST;
                    lastDur = durationTime;
                };
            };

        };

        if( this.list[ 0 ] ){
            let { startTime, durationTime, isKeyPoint } = this.list[ 0 ];
            if( isKeyPoint ){
                if( startTime !== timeFrom ){
                    this.offsetReport = {
                        isErrors: true,
                        message: `Конфликт во временном промежутке с ${ convert_sec_to_time( timeFrom ) } до ${ convert_sec_to_time( timeTo ) }`,
                    };
                };
            }else{
                if( startTime < timeFrom ){
                    this.offsetReport = {
                        isErrors: true,
                        message: `Конфликт во временном промежутке с ${ convert_sec_to_time( timeFrom ) } до ${ convert_sec_to_time( timeTo ) }`,
                    };
                };
            };
        };
    }

    GetOffsetReport(){
        return this.offsetReport;
    }

    GetEventsList(){
        return [ ...this.list ];
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