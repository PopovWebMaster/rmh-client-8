

import { get_date_list } from './vendors/get_date_list.js';

import { WeekPointsTemplateClass } from './WeekPointsTemplateClass.js';
import { DayClass } from './DayClass.js';


export class DaysClass {
    constructor(){

        this.list = []; // не использовать
        this.list_as_object = [];


        this.SubApplication = null;
        this.TimePoints = null;
        this.charType = null;
        this.WeekPointsTemplate = new WeekPointsTemplateClass();


        this.CreateList = this.CreateList.bind(this);

        this.Bind = this.Bind.bind(this);
        this.GetDayList = this.GetDayList.bind(this);
        this.UpdateDayList = this.UpdateDayList.bind(this);
        this.ToggleRelease = this.ToggleRelease.bind(this);
        this.AllDayReleaseToggle = this.AllDayReleaseToggle.bind(this);
        this.TimePointReleaseToggle = this.TimePointReleaseToggle.bind(this);




        


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
            let { dayNum, YYYY_MM_DD } = dayList[ i ];
            let Day = new DayClass( { ...dayList[ i ] } );
            Day.AddTimePoints( this.WeekPointsTemplate.GetPoints( dayNum ) );
            // this.list.push( Day );
            this.list_as_object[ YYYY_MM_DD ] = Day;
        };


    }

    UpdateDayList(){



        let { period_from, period_to } = this.SubApplication;

        get_date_list( period_from, period_to );



    }

    GetDayList(){
        // let arr = [];
        // for( let i = 0; i < this.list.length; i++ ){
        //     arr.push( this.list[ i ].GetData() );
        // };
        // return arr;

        let arr = [];
        for( let YYYY_MM_DD in this.list_as_object ){
            arr.push( this.list_as_object[ YYYY_MM_DD ].GetData() );
        };

        return arr;
    }

    ToggleRelease( data ){
        // for( let i = 0; i < this.list.length; i++ ){
        //     if( this.list[ i ].YYYY_MM_DD === data.YYYY_MM_DD ){
        //         this.list[ i ].ToggleRelease( data.sec );
        //         break;
        //     };
        // };

        this.list_as_object[ data.YYYY_MM_DD ].ToggleRelease( data.sec );

    }

    AllDayReleaseToggle( YYYY_MM_DD ){
        this.list_as_object[ YYYY_MM_DD ].AllDayReleaseToggle();
    }

    TimePointReleaseToggle( sec ){

        let onCount = 0;
        let offCount = 0;

        for( let YYYY_MM_DD in this.list_as_object ){
            let fill_count = this.list_as_object[ YYYY_MM_DD ].GetFillCountBySecond( sec );
            if( fill_count !== null ){
                if( fill_count === 0 ){
                    offCount++;
                }else{
                    onCount++;
                };
            };
        };

        let all = 0;

        if( onCount === offCount ){
            all = 0;
        }else{
            if( onCount > offCount ){
                all = 0;
            }else{
                all = 1
            };
        };

        for( let YYYY_MM_DD in this.list_as_object ){
            this.list_as_object[ YYYY_MM_DD ].SetFillCountInPoint( sec, all  );

        };


    }
}