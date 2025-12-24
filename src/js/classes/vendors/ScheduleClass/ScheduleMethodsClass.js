

import { CHAR_TYPE } from './../../../config/application.js';

import { set_to_store } from './set_to_store.js';
// import { TimePointClass } from './TimePointClass.js';


export class ScheduleMethodsClass {
    constructor( props ){

        // console.dir( 'ScheduleMethodsClass' );
        // console.dir( this );

        this.SetCharType = this.SetCharType.bind(this);
        this.ClearStore = this.ClearStore.bind(this);

        this.SetReleaseNameToStore = this.SetReleaseNameToStore.bind(this);
        this.SetReleaseDurationToStore = this.SetReleaseDurationToStore.bind(this);
        this.SetCategoryDataToStore = this.SetCategoryDataToStore.bind(this);
        this.SetEventDataToStore = this.SetEventDataToStore.bind(this);
        this.SetPeriodFromToStore = this.SetPeriodFromToStore.bind(this);
        this.SetPeriodToToStore = this.SetPeriodToToStore.bind(this);
        this.SetAllTimePointsListToStore = this.SetAllTimePointsListToStore.bind(this);
        this.SetDayListToStore = this.SetDayListToStore.bind(this);
        this.AddNewTimePoint = this.AddNewTimePoint.bind(this);

        this.AddDOMWait = this.AddDOMWait.bind(this);
        this.RemoveDOMWait = this.RemoveDOMWait.bind(this);



    }

    AddDOMWait(){

        // let elem = document.getElementById( 'scheduleWait' );
        // if( elem ){
            
        // }else{
        //     let curtElem = document.createElement( 'div' );
        //     curtElem.id = 'scheduleWait';
        //     curtElem.style.position = 'fixed';
        //     curtElem.style.top = '0';
        //     curtElem.style.left = '0';
        //     curtElem.style.width = '100vw';
        //     curtElem.style.height = '100vh';
        //     curtElem.style.backgroundColor = '#ffffff00';
        //     curtElem.style.zIndex = '3000';
        //     curtElem.style.cursor = 'wait';

        //     let body = document.querySelector( 'body' );
        //     body.prepend( curtElem );
        // };



    }

    RemoveDOMWait(){
        // let elem = document.getElementById( 'scheduleWait' );
        // if( elem ){
        //     elem.remove();
        // };
    }

    SetCharType(){
        let charType = CHAR_TYPE.BLIND
        if( this.Application.id !== null ){
            if( this.Event.id !== null ){
                if( this.Event.type === CHAR_TYPE.BLOCK || this.Event.type === CHAR_TYPE.FILE ){
                    
                    charType = this.Event.type;
                };
            };
        };
        this.charType = charType;
        set_to_store( 'charType', charType );
    }

    SetReleaseNameToStore(){
        let releaseName = this.SubApplication.name;
        set_to_store( 'releaseName', releaseName );
    }

    SetReleaseDurationToStore(){
        let releaseDuration = this.SubApplication.duration_sec;
        set_to_store( 'releaseDuration', releaseDuration );
    }

    SetCategoryDataToStore(){

        let {
            id,
            colorBg,
            colorText,
            name,
            prefix,

        } = this.Category.GetData();

        set_to_store( 'categoryId', id );
        set_to_store( 'categoryColorBg', colorBg );
        set_to_store( 'categoryColorText', colorText );
        set_to_store( 'categoryName', name );
        set_to_store( 'categoryPrefix', prefix );

    }

    SetEventDataToStore(){
        let {
            id,
            category_id,
            name,
            durationTime,
            notes,
            type,

        } = this.Event.GetData();

        set_to_store( 'eventId', id );
        set_to_store( 'eventCategoryId', category_id );
        set_to_store( 'eventName', name );
        set_to_store( 'eventDurationTime', durationTime );
        set_to_store( 'eventNotes', notes );
        set_to_store( 'eventType', type );

    }

    SetPeriodFromToStore(){
        let period_from = this.SubApplication.period_from;
        set_to_store( 'period_from', period_from );
    }

    SetPeriodToToStore(){
        let period_to = this.SubApplication.period_to;
        set_to_store( 'period_to', period_to );
    }

    SetAllTimePointsListToStore(){
        let list = this.WeekPointsTemplate.GetAllTimePointsList();

        let list_groupe = [];

        // console.dir( 'his.charType' );
        // console.dir( this.charType );


        if( this.charType === CHAR_TYPE.FILE || this.charType === CHAR_TYPE.BLOCK ){
            list_groupe = this.WeekPointsTemplate.GetAllTimePointsGroupList();
        }else if( this.charType === CHAR_TYPE.BLIND ){
            list_groupe = this.WeekPointsTemplate.GetAllTimePointsGroupList( true );
        };

        // console.dir( 'allTimePointsList' );
        // console.dir( list );

        //         console.dir( 'allTimePointsGroupeList' );
        // console.dir( list_groupe );


        set_to_store( 'allTimePointsList', list );
        set_to_store( 'allTimePointsGroupeList', list_groupe );

    }

    SetDayListToStore(){
        let dayList = this.Days.GetDayList();
        set_to_store( 'dayList', dayList );

        this.GridEventsTable.UpdateTable( dayList );

        this.GridEventsTable.SetTableToStore();

        let allReleaseLength = this.Days.GetAllReleaseLength();
        let allReleaseDuration = this.Days.GetAllReleaseDuration();

        set_to_store( 'allReleaseLength', allReleaseLength );
        set_to_store( 'allReleaseDuration', allReleaseDuration );

        this.RemoveDOMWait();
        
    }


    AddNewTimePoint( sec ){

        this.WeekPointsTemplate.AllTimePoints.AddPoint( sec );

        this.WeekPointsTemplate.CreateTemplate(); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.SetAllTimePointsListToStore();
        this.Days.AddTimePointInAllDays( sec );
        this.SetDayListToStore();
        set_to_store( 'isChanged', true );

    }



    ClearStore(){
        set_to_store( 'all' );
    }





}