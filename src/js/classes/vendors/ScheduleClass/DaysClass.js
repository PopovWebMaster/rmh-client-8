

import { get_date_list } from './vendors/get_date_list.js';

import { DayClass } from './DayClass.js';


export class DaysClass {
    constructor(){

        this.days = {};

        this.SubApplication = null;
        this.WeekPointsTemplate = null;
        this.charType = null;
        this.allReleaseLength = 0; //  обновляется в GetDayList()
        this.allReleaseDuration = 0;//  обновляется в GetDayList()

        this.Bind = this.Bind.bind(this);
        this.CreateEmptyList = this.CreateEmptyList.bind(this);
        this.AddFillCount = this.AddFillCount.bind(this);
        this.FillDaysWithReleases = this.FillDaysWithReleases.bind(this);
        this.GetDayList = this.GetDayList.bind(this);
        this.GetAllReleaseLength = this.GetAllReleaseLength.bind(this);
        this.GetAllReleaseDuration = this.GetAllReleaseDuration.bind(this);
        this.AddTimePointInAllDays = this.AddTimePointInAllDays.bind(this);
        this.TimePointReleaseToggle = this.TimePointReleaseToggle.bind(this);
        this.ToggleRelease = this.ToggleRelease.bind(this);
        this.AllDayReleaseToggle = this.AllDayReleaseToggle.bind(this);
        


        // this.list = []; // не использовать
        // this.list_as_object = [];


        // this.SubApplication = null;
        // this.TimePoints = null;
        // this.Event = null;
        // this.charType = null;
        // this.WeekPointsTemplate = new WeekPointsTemplateClass();
        
        


        // 

        // 
        // 

        // 

        
        // this.GetReleaseListForServer = this.GetReleaseListForServer.bind(this);
        // 



    }

    Bind( data ){
        let {
            SubApplication,
            charType,
            WeekPointsTemplate
        } = data;

        this.SubApplication = SubApplication;
        this.charType = charType;
        this.WeekPointsTemplate = WeekPointsTemplate;
    }

    CreateEmptyList(){

        this.list = [];

        let { period_from, period_to } = this.SubApplication;
        let dayList = get_date_list( period_from, period_to );

        for( let i = 0; i < dayList.length; i++ ){
            let { dayNum, YYYY_MM_DD } = dayList[ i ];
            let Day = new DayClass( { ...dayList[ i ] } );
            Day.Bind( { SubApplication: this.SubApplication } )
            Day.AddTimePoints( this.WeekPointsTemplate.GetPoints( dayNum ) );
            this.days[ YYYY_MM_DD ] = Day;
        };

    }

    AddFillCount( YYYY_MM_DD, grid_event_id, sec ){
        if( this.days[ YYYY_MM_DD ] ){
            this.days[ YYYY_MM_DD ].AddFillCount( grid_event_id, sec );
        };
    }

    FillDaysWithReleases(){ // предназначен вызываться только один раз
        let release_list = this.SubApplication.GetReleaseList();
        for( let i = 0; i < release_list.length; i++ ){
            let {
                date,
                grid_event_id,
                time_sec,
            } = release_list[ i ];
            this.AddFillCount( date, grid_event_id, time_sec );
        };
    }

    GetDayList(){
        let arr = [];

        let allReleaseLength = 0;
        let allReleaseDuration = 0;


        for( let YYYY_MM_DD in this.days ){
            let data = this.days[ YYYY_MM_DD ].GetData();
            allReleaseLength = allReleaseLength + data.releaseLength;
            allReleaseDuration = allReleaseDuration + data.dayDuration;
            arr.push( data );
        };

        this.allReleaseLength = allReleaseLength;
        this.allReleaseDuration = allReleaseDuration;

        return arr;
    }

    GetAllReleaseLength(){
        return this.allReleaseLength;
    }

    GetAllReleaseDuration(){
        return this.allReleaseDuration;
    }

    GetReleaseListForServer(){
        let result = [];
        for( let YYYY_MM_DD in this.days ){
            let arr = this.days[ YYYY_MM_DD ].GetReleaseListForServer();
            result = [ ...result, ...arr ];
        };
        return result;
    }

    AddTimePointInAllDays( time_sec, grid_event_id = null, duration = null ){

        for( let YYYY_MM_DD in this.days ){
            this.days[ YYYY_MM_DD ].AddTimePoint( time_sec, grid_event_id = null, duration = null );
        };

    }

    ToggleRelease( YYYY_MM_DD, sec ){
        this.days[ YYYY_MM_DD ].ToggleRelease( sec );

    }

    AllDayReleaseToggle( YYYY_MM_DD ){
        this.days[ YYYY_MM_DD ].AllDayReleaseToggle();
    }

    TimePointReleaseToggle( sec ){

        let onCount = 0;
        let offCount = 0;

        for( let YYYY_MM_DD in this.days ){
            let fill_count = this.days[ YYYY_MM_DD ].GetFillCountBySecond( sec );
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

        for( let YYYY_MM_DD in this.days ){
            this.days[ YYYY_MM_DD ].SetFillCountInPoint( sec, all  );

        };


    }











}