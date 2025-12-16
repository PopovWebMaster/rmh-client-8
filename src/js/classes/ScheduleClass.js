
import { ScheduleMethodsClass } from './vendors/ScheduleClass/ScheduleMethodsClass.js'

import { CategoryClass } from './vendors/ScheduleClass/CategoryClass.js';
import { SubApplicationClass } from './vendors/ScheduleClass/SubApplicationClass.js';
import { ApplicationClass } from './vendors/ScheduleClass/ApplicationClass.js';
import { EventClass } from './vendors/ScheduleClass/EventClass.js';
import { WeekPointsTemplateClass } from './vendors/ScheduleClass/WeekPointsTemplateClass.js';
import { DaysClass } from './vendors/ScheduleClass/DaysClass.js';
import { GridEventsTableClass } from './vendors/ScheduleClass/GridEventsTableClass.js';

import { set_to_store } from './vendors/ScheduleClass/set_to_store.js';

import store from './../redux/store.js';



export class ScheduleClass extends ScheduleMethodsClass {

    constructor( props ){
        super( props );

        // this.Category =             new CategoryClass();
        // this.SubApplication =       new SubApplicationClass();
        // this.Application =          new ApplicationClass();
        // this.Event =                new EventClass();
        // this.WeekPointsTemplate =   new WeekPointsTemplateClass();
        // this.Days =                 new DaysClass();
        // this.GridEventsTable =      new GridEventsTableClass();

        this.Category =             null;
        this.SubApplication =       null;
        this.Application =          null;
        this.Event =                null;
        this.WeekPointsTemplate =   null;
        this.Days =                 null;
        this.GridEventsTable =      null;

        this.charType = null;

        this.Create = this.Create.bind(this);
        this.Remove = this.Remove.bind(this);
        this.GetReseaseData = this.GetReseaseData.bind(this);
        this.AddTimePoint = this.AddTimePoint.bind(this);
        this.AllTimePointsToggle = this.AllTimePointsToggle.bind(this);
        this.ReleaseToggle = this.ReleaseToggle.bind(this);

        this.GetDataForDownloadExcelFormatTable = this.GetDataForDownloadExcelFormatTable.bind(this);


    }

    Create(){

        this.Category =         new CategoryClass();
        this.SubApplication =   new SubApplicationClass();
        this.Application =      new ApplicationClass();
        this.Event =            new EventClass();

        this.WeekPointsTemplate =   new WeekPointsTemplateClass();
        this.Days =   new DaysClass();

        this.GridEventsTable = new GridEventsTableClass();

        this.SetCharType();
        this.SetReleaseNameToStore();
        this.SetReleaseDurationToStore();
        this.SetCategoryDataToStore();
        this.SetEventDataToStore();
        this.SetPeriodFromToStore();
        this.SetPeriodToToStore();

        this.WeekPointsTemplate.Bind({
            SubApplication: this.SubApplication,
            charType: this.charType,
            Event: this.Event,
        });

        this.WeekPointsTemplate.CreateTemplate();

        this.SetAllTimePointsListToStore();
        
        this.Days.Bind({
            Application: this.Application,
            SubApplication: this.SubApplication,
            Event: this.Event,
            charType: this.charType,
            WeekPointsTemplate: this.WeekPointsTemplate,
        });
        this.Days.CreateEmptyList();
        this.Days.FillDaysWithReleases();
        this.Days.FillDaysWithReservedReleases();

        this.GridEventsTable.Bind({
            SubApplication:     this.SubApplication,
            Event:              this.Event,
            WeekPointsTemplate: this.WeekPointsTemplate,
            charType:           this.charType,
        });
        this.GridEventsTable.CreateEmptyTable();
        this.GridEventsTable.FillTableWithReleases();

        this.SetDayListToStore();

        // console.dir( this );
        

    }

    Remove(){
        this.ClearStore();
    }

    AddTimePoint( sec ){
        this.AddNewTimePoint( sec );
    }

    AllTimePointsToggle( sec ){
        this.Days.TimePointReleaseToggle( sec );
        this.SetDayListToStore();
        set_to_store( 'isChanged', true );
    }

    ReleaseToggle( YYYY_MM_DD, sec ){
        this.Days.ToggleRelease( YYYY_MM_DD, sec );
        this.SetDayListToStore();
        set_to_store( 'isChanged', true );
    }

    AllDayReleaseToggle( YYYY_MM_DD ){
        this.Days.AllDayReleaseToggle( YYYY_MM_DD );
        this.SetDayListToStore();
        set_to_store( 'isChanged', true );
    }

    GetReseaseData(){
        return {
            application_id:         this.SubApplication.application_id,
            sub_application_id:     this.SubApplication.id,
            release_list:           this.Days.GetReleaseListForServer(),
        };
    }

    GetDataForDownloadExcelFormatTable(){

        let { company } = store.getState();
        let { companyLegalName } = company;

        let result = {
            
            releaseName:        this.SubApplication.name,
            releaseDuration:    this.SubApplication.duration_sec,
            releaseDescription: this.SubApplication.description,
            releaseList:        this.Days.GetReleaseListForServer(),
            colintitul: 'Приложение 1 к Договору №_01-61/02 от 14.01.2025  на оказание услуг (выполнения работ) в сфере телевещания',
            executor:   'ГУП ДНР  "РМХ"',
            customer:   this.Application.name,
            price: 28,
            // mediaName: 'ПЕРВЫЙ РЕСПУБЛИКАНСКИЙ КАНАЛ ДОНЕЦКОЙ НАРОДНОЙ РЕСПУБЛИКИ',
            mediaName: companyLegalName,
            

            

        };

        // console.dir( this );
        // console.dir( 'result' );
        // console.dir( result );

        return result;

    }

}