

import { get_date_list } from './vendors/get_date_list.js';

import { WeekPointsTemplateClass } from './WeekPointsTemplateClass.js';
import { DayClass } from './DayClass.js';


export class DaysClass {
    constructor(){

        this.list = []; // не использовать
        this.list_as_object = [];


        this.SubApplication = null;
        this.TimePoints = null;
        this.Event = null;
        this.charType = null;
        this.WeekPointsTemplate = new WeekPointsTemplateClass();
        
        this.allReleaseLength = 0; //  обновляется в GetDayList()
        this.allReleaseDuration = 0;//  обновляется в GetDayList()


        this.CreateList = this.CreateList.bind(this);

        this.Bind = this.Bind.bind(this);
        this.GetDayList = this.GetDayList.bind(this);
        this.ToggleRelease = this.ToggleRelease.bind(this);
        this.AllDayReleaseToggle = this.AllDayReleaseToggle.bind(this);
        this.TimePointReleaseToggle = this.TimePointReleaseToggle.bind(this);

        this.GetAllReleaseLength = this.GetAllReleaseLength.bind(this);
        this.GetAllReleaseDuration = this.GetAllReleaseDuration.bind(this);
        this.GetReleaseListForServer = this.GetReleaseListForServer.bind(this);
        this.AddFillCount = this.AddFillCount.bind(this);



    }

    Bind( data ){
        let {
            SubApplication,
            TimePoints,
            Event,
            charType,
        } = data;

        this.SubApplication = SubApplication;
        this.TimePoints = TimePoints;
        this.Event = Event;

        this.charType = charType;
    }

    CreateList(){

        this.list = [];

        this.WeekPointsTemplate.Create({
            charType: this.charType,
            TimePoints: this.TimePoints,
            Event: this.Event,
        });

        let { period_from, period_to } = this.SubApplication;
        let dayList = get_date_list( period_from, period_to );

        for( let i = 0; i < dayList.length; i++ ){
            let { dayNum, YYYY_MM_DD } = dayList[ i ];
            let Day = new DayClass( { ...dayList[ i ] } );

            Day.Bind( { SubApplication: this.SubApplication } )
            Day.AddTimePoints( this.WeekPointsTemplate.GetPoints( dayNum ) );
            this.list_as_object[ YYYY_MM_DD ] = Day;


        };


    }

    GetDayList(){
        let arr = [];

        let allReleaseLength = 0;
        let allReleaseDuration = 0;


        for( let YYYY_MM_DD in this.list_as_object ){
            let data = this.list_as_object[ YYYY_MM_DD ].GetData();
            allReleaseLength = allReleaseLength + data.releaseLength;
            allReleaseDuration = allReleaseDuration + data.dayDuration;
            arr.push( data );
        };

        this.allReleaseLength = allReleaseLength;
        this.allReleaseDuration = allReleaseDuration;

        return arr;
    }

    ToggleRelease( data ){
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

    GetAllReleaseLength(){
        return this.allReleaseLength;
    }

    GetAllReleaseDuration(){
        return this.allReleaseDuration;
    }


    GetReleaseListForServer(){

        let result = [];

        for( let YYYY_MM_DD in this.list_as_object ){
            let arr = this.list_as_object[ YYYY_MM_DD ].GetReleaseListForServer();
            result = [ ...result, ...arr ];
        };


        return result;

    }

    AddFillCount( YYYY_MM_DD, grid_event_id, sec ){
        if( this.list_as_object[ YYYY_MM_DD ] ){
            this.list_as_object[ YYYY_MM_DD ].AddFillCount( grid_event_id, sec );
        };
        

    }




}