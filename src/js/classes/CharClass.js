
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
        this.ClickTimePoint = this.ClickTimePoint.bind(this);
        this.GetTimePointList = this.GetTimePointList.bind(this);
        this.SetCharType = this.SetCharType.bind(this);
        this.GetDayList = this.GetDayList.bind(this);

        this.ReleaseInDayToggle = this.ReleaseInDayToggle.bind(this);
        this.AllDayReleaseToggle = this.AllDayReleaseToggle.bind(this);
        this.TimePointReleaseToggle = this.TimePointReleaseToggle.bind(this);









        this.SetCharType();

        this.Days.Bind({
            SubApplication: this.SubApplication,
            TimePoints: this.TimePoints,
            charType: this.charType,
        });

        this.Days.CreateList();

        

        // this.Days.GetDayList();
        // this.Days.UpdateDayList();


        console.dir( this );



    }



    AddTimePoint( sec ){
        this.TimePoints.AddPoint( sec );
        this.Days.CreateList();

        console.dir( this );

    }

    ClickTimePoint( sec ){
        // console.dir( sec );
        // this.Days.GetDayList();


    }

    GetTimePointList(){
        return this.TimePoints.GetTimePointList();
    }

    GetDayList(){
        return this.Days.GetDayList();
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
        console.dir( data );
        console.dir( this );

        this.Days.ToggleRelease( data );

    }

    AllDayReleaseToggle( YYYY_MM_DD ){
        this.Days.AllDayReleaseToggle( YYYY_MM_DD );
    }

    TimePointReleaseToggle( sec ){
        this.Days.TimePointReleaseToggle( sec );
    }


}