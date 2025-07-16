

import { get_date_list } from './vendors/get_date_list.js';

import { DayClass } from './DayClass.js';

import store from './../../../redux/store.js';
import { CHAR_TYPE } from './../../../config/application.js';


export class DaysClass {
    constructor(){

        this.days = {};
        this.Application = null;
        this.SubApplication = null;
        this.Event = null;
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
        this.FillDaysWithReservedReleases = this.FillDaysWithReservedReleases.bind(this);




    }

    Bind( data ){
        let {
            Application,
            SubApplication,
            charType,
            WeekPointsTemplate,
            Event,
        } = data;

        this.SubApplication = SubApplication;
        this.Application = Application;
        this.charType = charType;
        this.WeekPointsTemplate = WeekPointsTemplate;
        this.Event = Event;

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

    FillDaysWithReservedReleases(){


        if( this.charType === CHAR_TYPE.FILE ){
            console.dir( this );

            let current_sub_app_id = this.SubApplication.id;


            let period_from = this.SubApplication.period_from;
            let period_to = this.SubApplication.period_to;


            let { application } = store.getState();
            let { applicationList } = application;

            for( let i = 0; i < applicationList.length; i++ ){
                if( applicationList[ i ].event_id  === this.Event.id ){
                    let { sub_application_list } = applicationList[ i ];

                    for( let y = 0; y < sub_application_list.length; y++ ){
                        let { release_list } = sub_application_list[ y ];
                        for( let index = 0; index < release_list.length; index++ ){
                            let {
                                date,
                                duration_sec,
                                file_name,
                                grid_event_id,
                                name,
                                sub_application_id,
                                time_sec,
                                type,
                            } = release_list[ index ];

                            if( sub_application_id !== current_sub_app_id ){
                                if( this.days[ date ] ){
                                    this.days[ date ].AddReservedFillCount( grid_event_id, name );
                                    // AddReservedFillCount( grid_event_id, name )

                                };
                            };

                        };
                    };
                };
            };
            // date: "2025-07-11"
            // duration_sec: 35
            // file_name: ""
            // grid_event_id: 171
            // name: "Трусы"
            // sub_application_id: 57
            // time_sec: 25019
            // type: "release"
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