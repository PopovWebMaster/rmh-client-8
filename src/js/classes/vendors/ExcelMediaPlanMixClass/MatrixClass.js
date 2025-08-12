
import { MatrixRowClass } from './MatrixRowClass.js';
import { MatrixFirstRowDaysClass } from './MatrixFirstRowDaysClass.js';

import { get_full_day_info_from_day_seconds } from './../../../helpers/get_full_day_info_from_day_seconds.js';
import { MOUNTH_NAME } from './../../../config/mounth.js';

export class MatrixClass {
    constructor(){

        this.SubAppList = null;

        this.FirstRowDays = null;
        this.rows = [];

        this.dayNamesList = [];
        this.datesList = [];

        this.Bind = this.Bind.bind(this);
        this.Create = this.Create.bind(this);
        this.GetDayNamesList = this.GetDayNamesList.bind(this);
        this.GetDatesList = this.GetDatesList.bind(this);







    }

    Bind( params ){
        let {
            SubAppList
        } = params;
        this.SubAppList = SubAppList;
    }

    Create( matrix ){

        console.dir( 'matrix' );
        console.dir( matrix );

        for( let i = 0; i < matrix.length; i++ ){
            let {
                YYYY_MM_DD,
                rows,
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


        }

    }

    GetDayNamesList(){
        return this.dayNamesList;
    }

    GetDatesList(){
        return this.datesList;
    }

}