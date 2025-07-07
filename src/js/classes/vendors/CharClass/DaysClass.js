

import { get_date_list } from './vendors/get_date_list.js';

import { WeekPointsTemplateClass } from './WeekPointsTemplateClass.js';
import { DayClass } from './DayClass.js';


export class DaysClass {
    constructor(){

        this.list = [];

        this.SubApplication = null;
        this.TimePoints = null;
        this.charType = null;
        this.WeekPointsTemplate = new WeekPointsTemplateClass();


        this.CreateList = this.CreateList.bind(this);

        this.Bind = this.Bind.bind(this);
        this.GetDayList = this.GetDayList.bind(this);
        this.UpdateDayList = this.UpdateDayList.bind(this);


    }

    Bind( data ){
        let {
            SubApplication,
            TimePoints,
            charType,
        } = data;
        this.SubApplication = SubApplication;
        this.TimePoints = TimePoints;
        this.charType = charType;
    }

    CreateList(){

        this.list = [];


        this.WeekPointsTemplate.Create({
            charType: this.charType,
            TimePoints: this.TimePoints,
        });

        let { period_from, period_to } = this.SubApplication;
        let dayList = get_date_list( period_from, period_to );

        for( let i = 0; i < dayList.length; i++ ){
            let { dayNum } = dayList[ i ];
            let Day = new DayClass( { ...dayList[ i ] } );
            Day.AddTimePoints( this.WeekPointsTemplate.GetPoints( dayNum ) );
            this.list.push( Day );
        };


    }

    UpdateDayList(){



        let { period_from, period_to } = this.SubApplication;

        get_date_list( period_from, period_to );



    }

    GetDayList(){
        let arr = [];
        for( let i = 0; i < this.list.length; i++ ){
            arr.push( this.list[ i ].GetData() );
        };
        return arr;
    }
}