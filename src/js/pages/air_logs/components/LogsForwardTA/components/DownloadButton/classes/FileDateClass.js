
import { DateClass } from './../../../../.././../../classes/DateClass.js';

export class FileDateClass {
    constructor(){
        this.date_list = {};

        this.Date = null;

        this.AddItem = this.AddItem.bind(this);
        this.CreateLogFileDate = this.CreateLogFileDate.bind(this);
        this.GetDataAsObject = this.GetDataAsObject.bind(this);



        


    }

    AddItem( item ){

        let date = item.attributes.date;

        if( this.date_list[ date ] ){
            this.date_list[ date ] = this.date_list[ date ] + 1;
        }else{
            this.date_list[ date ] = 1;
        };
    }

    CreateLogFileDate(){
        let data_arr = [];
        for( let key in this.date_list ){
            data_arr.push( {
                data: key,
                count: this.date_list[ key ],
            } );
        }

        let sort_arr = data_arr.sort( ( a, b ) => {
            if( a.count < b.count ) return 1;
            if( a.count > b.count ) return -1;
            if( a.count == b.count ) return 0;
        } );

        let result = null;

        if( sort_arr[0] ){
            result = sort_arr[ 0 ].data;
            this.Date = new DateClass( sort_arr[ 0 ].data );

        };

        // this.file_date = result;
    }

    GetDataAsObject(){
        return this.Date.GetDataAsObject();
    }


}