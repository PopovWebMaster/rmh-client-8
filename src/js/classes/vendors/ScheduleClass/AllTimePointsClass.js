
import { TimePointClass } from './TimePointClass.js';

export class AllTimePointsClass {
    constructor(){
    
        this.list = [];
        this.list_sec = [];

        this.AddPoint = this.AddPoint.bind(this);
        this.GetTimePointList = this.GetTimePointList.bind(this);


    }

    AddPoint( time_sec ){

        let list = [ ...this.list_sec ];

        if( list.indexOf( time_sec ) === -1){

            let TimePoint = new TimePointClass({ time_sec: time_sec });
            this.list.push( TimePoint.GetData() );
            this.list_sec.push( time_sec );

        };
    }

    GetTimePointList(){
        // let arr = [];

        // for( let i = 0; i < this.list.length; i++ ){
        //     arr.push( this.list[ i ].GetData() );
        // };

        let result = [];

        let last_blind_grid_event_id = 1;
        
        result = this.list.sort( ( a, b ) => {
            if( a.sec === b.sec ){ return 0 }
            if( a.sec > b.sec ){ return 1 };
            if( a.sec < b.sec ){ return -1 };
        } );



        let res_2 = [];

        for( let i = 0; i < result.length; i++ ){
            if( result[ i ].grid_event_id === null  ){
                let obj = { ...result[ i ] };
                obj.grid_event_id = `blind_${last_blind_grid_event_id}`;
                last_blind_grid_event_id++;
                res_2.push( obj );
            }else{
                res_2.push( result[ i ] );
            };

        };

        return res_2;
    }
    
}