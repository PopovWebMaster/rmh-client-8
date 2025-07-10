
import { TimePointsClass } from './vendors/CharClass/TimePointsClass.js';
import { SubApplicationClass } from './vendors/CharClass/SubApplicationClass.js';
import { CategoryClass } from './vendors/CharClass/CategoryClass.js';
import { ApplicationClass } from './vendors/CharClass/ApplicationClass.js';
import { EventClass } from './vendors/CharClass/EventClass.js';
import { DaysClass } from './vendors/CharClass/DaysClass.js';

import { CHAR_TYPE } from './../config/application.js';

export class CharClass {
    constructor(){

        this.Category =         new CategoryClass();
        this.TimePoints =       new TimePointsClass();
        this.SubApplication =   new SubApplicationClass();
        this.Application =      new ApplicationClass();
        this.Event =            new EventClass();
        this.Days =             new DaysClass();

        this.charType = CHAR_TYPE.BLIND;
        
        this.AddTimePoint = this.AddTimePoint.bind(this);
        this.GetTimePointList = this.GetTimePointList.bind(this);
        this.SetCharType = this.SetCharType.bind(this);
        this.ReleaseInDayToggle = this.ReleaseInDayToggle.bind(this);
        this.AllDayReleaseToggle = this.AllDayReleaseToggle.bind(this);
        this.TimePointReleaseToggle = this.TimePointReleaseToggle.bind(this);
        this.GetReseaseData = this.GetReseaseData.bind(this);
        this.AddTimePointsGroupe = this.AddTimePointsGroupe.bind(this);
        this.FillCharWithReleases = this.FillCharWithReleases.bind(this);



        this.SetCharType();

        this.Days.Bind({
            SubApplication: this.SubApplication,
            TimePoints: this.TimePoints,
            Event: this.Event,
            charType: this.charType,
        });


        this.AddTimePointsGroupe();

        this.FillCharWithReleases();
        

        console.dir( this );

        

    }



    AddTimePoint( sec ){
        this.TimePoints.AddPoint( sec );
        this.Days.CreateList();
    }

    AddTimePointsGroupe(){

        if( this.charType === CHAR_TYPE.BLIND ){
            let arr = this.SubApplication.GetAllTimePointsSecList();
            for( let i = 0; i < arr.length; i++ ){
                this.TimePoints.AddPoint( arr[ i ] );
            };
            this.Days.CreateList();
        }else{

            this.Days.CreateList();
        }

        
    }


    GetTimePointList(){
        return this.TimePoints.GetTimePointList();
    }

    SetCharType(){
        if( this.Application.id !== null ){
            if( this.Event.id !== null ){
                if( this.Event.type === CHAR_TYPE.BLOCK || this.Event.type === CHAR_TYPE.FILE ){
                    this.charType = this.Event.type;
                };
            };
        };
    }

    ReleaseInDayToggle( data ){
        this.Days.ToggleRelease( data );
    }

    AllDayReleaseToggle( YYYY_MM_DD ){
        this.Days.AllDayReleaseToggle( YYYY_MM_DD );
    }

    TimePointReleaseToggle( sec ){
        this.Days.TimePointReleaseToggle( sec );
    }

    GetReseaseData(){
        return {
            application_id: this.SubApplication.application_id,
            sub_application_id: this.SubApplication.id,
            release_list: this.Days.GetReleaseListForServer(),
        };

    }

    FillCharWithReleases(){ // предназначен вызываться только один раз

        let release_list = this.SubApplication.GetReleaseList();
        for( let i = 0; i < release_list.length; i++ ){
            let {
                date,
                grid_event_id,
                time_sec,
            } = release_list[ i ];

            this.Days.AddFillCount( date, grid_event_id, time_sec );

        };


    }


}