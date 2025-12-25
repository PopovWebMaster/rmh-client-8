

import { get_full_day_info_from_day_seconds } from './../../../helpers/get_full_day_info_from_day_seconds.js';
import { MOUNTH_NAME } from './../../../config/mounth.js';
import { DAY_LENGTH } from './/excel_config.js';


export class MatrixClass {
    constructor(){

        this.SubAppList = null;

        this.FirstRowDays = null;
        this.rows = [];

        this.dayNamesList = [];
        this.datesList = [];
        this.YYYY_MM_DD_list = [];

        this.Bind = this.Bind.bind(this);
        this.Create = this.Create.bind(this);
        this.GetDayNamesList = this.GetDayNamesList.bind(this);
        this.GetDatesList = this.GetDatesList.bind(this);
        this.SetHeaderData = this.SetHeaderData.bind(this);
        this.SetRowsData = this.SetRowsData.bind(this);
        this.GetRowsList = this.GetRowsList.bind(this);





        







    }

    Bind( params ){
        let {
            SubAppList
        } = params;
        this.SubAppList = SubAppList;
    }

    Create( matrix ){

        this.SetHeaderData( matrix );
        this.SetRowsData( matrix );

    }

    SetHeaderData( matrix ){
        for( let i = 0; i < matrix.length; i++ ){
            let {
                YYYY_MM_DD,
                // rows,
            } = matrix[ i ];

            let date_class = new Date( YYYY_MM_DD );
            let date_seconds = date_class.getTime() / 1000;
            let { 
                mounth,
                date,
                dayNameShort,
            } = get_full_day_info_from_day_seconds( date_seconds );

            let mounthName = MOUNTH_NAME[ mounth ];

            let dateName = `${ date } ${ mounthName.toLowerCase() }`;
            let dayName = dayNameShort.toLowerCase();

            this.dayNamesList.push( dayName );
            this.datesList.push( dateName );

            this.YYYY_MM_DD_list.push( YYYY_MM_DD );

        }
    }

    SetRowsData( matrix ){

        let rows_length = 0;
        if( matrix[ 0 ] ){
            rows_length = matrix[ 0 ].rows.length;
        };

        let martix_obj = {};
        for( let i = 0; i < matrix.length; i++ ){
            let { YYYY_MM_DD, rows } = matrix[ i ];
            martix_obj[ YYYY_MM_DD ] = rows;
        };

        for( let row_i = 0; row_i < rows_length; row_i++ ){
            let title = '';
            let sub_app_id = null;
            let values = [];
            let index = row_i;
            let name = '';
            let duration = 0;

            for( let i = 0; i < DAY_LENGTH; i++ ){
                values.push( null );
            };

            for( let date_i = 0; date_i < this.YYYY_MM_DD_list.length; date_i++ ){

                let YYYY_MM_DD = this.YYYY_MM_DD_list[ date_i ];
                let item = martix_obj[YYYY_MM_DD][row_i];

                if( item.sub_app_id !== null ){

                    /*
                        Тупенько, да, но это работает. Дело в том, что, по логике создания матрицы, не должно быть строк со всеми sub_app_id равными null
                        хотя бы один, но должен быть. На него здесь и ориентируемся.
                        На всякий случай перезаписываем duration_sec, вдруг он будет другим по ошибке - это хотя бы будет видно в готовом графике
                    */

                    title =         item.title;
                    sub_app_id =    item.sub_app_id;
                    let subApp  =   this.SubAppList.GetItemById( sub_app_id );
                    name =          subApp.name;
                    duration =      subApp.duration_sec;

                    values[ date_i ] = duration;

                };

            };

            this.rows.push({
                title,
                values,
                index,
                name,
                duration,
            });
        };



    }

    GetDayNamesList(){
        return this.dayNamesList;
    }

    GetDatesList(){
        return this.datesList;
    }

    GetRowsList(){
        return this.rows;
    }

}