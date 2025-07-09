
import { convert_sec_to_time } from './../../../helpers/convert_sec_to_time.js';

export class TimePointClass {
    constructor( props ){
        let {
            time_sec,
            grid_event_id = null,
            duration = null,
        } = props;

        this.time = convert_sec_to_time( time_sec );
        this.sec = time_sec;
        this.grid_event_id = grid_event_id;
        this.duration = duration;


        let arr = this.time.split( ':' );
        this.title = `${arr[0]}:${arr[1]}`;

        this.GetData = this.GetData.bind(this);
    }

    GetData(){
        return {
            time: this.time,
            sec: this.sec,
            title: this.title,
            grid_event_id: this.grid_event_id,
            duration: this.duration,

        };

    }
}