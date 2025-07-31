
import { convert_sec_to_time } from './../../../helpers/convert_sec_to_time.js';
import { round_to_number } from './../../../helpers/round_to_number.js';

export class HoursClass{
    constructor(){

        this.hours = {};

        this.Create = this.Create.bind(this);
        this.Add = this.Add.bind(this);
        this.GetList = this.GetList.bind(this);



    }

    Create(){
        for( let i = 0; i < 24; i++ ){
            this.hours[ i ] = 0;
        };
    }

    Add( startTime, durationTime ){
        let hour = Math.floor( startTime / 3600 );
        let hour_sec = hour * 3600;
        let next_hour = ( hour + 1 ) * 3600;
        if( ( startTime + durationTime ) < next_hour ){
            this.hours[ hour ] = this.hours[ hour ] + durationTime;
        }else{
            let h_next__dur = ( startTime + durationTime ) - next_hour;
            let h_dur = durationTime - h_next__dur;
            this.hours[ hour ] = this.hours[ hour ] + h_dur;
            if( this.hours[ hour + 1 ] ){
                this.hours[ hour + 1 ] = this.hours[ hour + 1 ] + h_next__dur;
            };
        }

    }

    GetList(){
        let list = [];
        for( let key in this.hours ){
            let timeNum = Number( key );
            let time = convert_sec_to_time( timeNum * 3600, true );
            let duration_sec = this.hours[ key ];
            let duration_time = convert_sec_to_time( this.hours[ key ] );
            let duration_proc = round_to_number( (duration_sec * 100) / 3600, 3 );
            list.push({
                hour: key,
                time,
                duration_sec,
                duration_time,
                duration_proc,
            });
        };

        return list;
    }
}