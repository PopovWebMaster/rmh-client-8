
import { convert_sec_to_time } from './../../../helpers/convert_sec_to_time.js';

export class TimePointClass {
    constructor( sec ){
        this.time = convert_sec_to_time( sec );
        this.sec = sec;
        let arr = this.time.split( ':' );
        this.title = `${arr[0]}:${arr[1]}`;

        this.GetData = this.GetData.bind(this);
    }

    GetData(){
        return {
            time: this.time,
            sec: this.sec,
            title: this.title,
        };

    }
}