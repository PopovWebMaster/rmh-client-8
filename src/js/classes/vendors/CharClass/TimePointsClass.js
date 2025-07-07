
import { convert_sec_to_time } from './../../../helpers/convert_sec_to_time.js';

import { TimePointClass } from './TimePointClass.js';

export class TimePointsClass{

    constructor(){

        this.list = [];

        this.AddPoint = this.AddPoint.bind(this);
        this.GetTimePointList = this.GetTimePointList.bind(this);


    }

    AddPoint( time_sec ){
        this.list.push( new TimePointClass( time_sec ) );

    }

    GetTimePointList(){
        let arr = [];

        for( let i = 0; i < this.list.length; i++ ){
            arr.push( this.list[ i ].GetData() );
        };

        let result = [];
        
        result = arr.sort( ( a, b ) => {
            if( a.sec === b.sec ){ return 0 }
            if( a.sec > b.sec ){ return 1 };
            if( a.sec < b.sec ){ return -1 };
        } );

        return result;
    }



}