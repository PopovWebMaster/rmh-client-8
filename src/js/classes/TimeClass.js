
import { convert_duration_to_ms } from './../helpers/convert_duration_to_ms.js';
import { convert_ms_to_time } from './../helpers/convert_ms_to_time.js';

export class TimeClass {
    constructor( time ){

        this.time = '';
        this.ms = 0;

        if( typeof time === 'string' ){
            this.time = time;
            this.ms = convert_duration_to_ms( time );
        }else if( typeof time === 'number' ){
            this.time = convert_ms_to_time( time );
            this.ms = time;
        };

        this.GetDataAsObject = this.GetDataAsObject.bind(this);

    }

    GetDataAsObject(){
        return {
            time:   this.time,
            ms:     this.ms,
        };

    }

    


}