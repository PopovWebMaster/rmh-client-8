

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './DExcelComponent.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';

import { StoreScheduleResultEventsClass } from './../../../../../../classes/StoreScheduleResultEventsClass.js';

import { get_filter_list_from_events_list } from './../../vendors/get_filter_list_from_events_list.js';
import { get_filter_list } from './../../vendors/get_filter_list.js';
import { get_changet_filter_list } from './../../vendors/get_changet_filter_list.js';

import { FilterItem } from './../FilterItem/FilterItem.js';
import { FilterControlPanel } from './../FilterControlPanel/FilterControlPanel.js';
import { FilterCategoryItem } from './../FilterCategoryItem/FilterCategoryItem.js';
import { ExportTypeButtons } from './../ExportTypeButtons/ExportTypeButtons.js';
 
import { ScrollContainer } from './../../../../../../components/ScrollContainer/ScrollContainer.js';
import { HighlightFiles } from './../HighlightFiles/HighlightFiles.js';

import { get_used_events } from './vendors/get_used_events.js';
// import { get_rows_from_events } from './vendors/get_rows_from_events.js';

// import * as XLSX from 'xlsx-js-style';
// import { get_first_excel_row } from './vendors/get_first_excel_row.js';
// import { get_excel_rows } from './vendors/get_excel_rows.js';
// import { get_file_name } from './vendors/get_file_name.js'

// import { MOUNTH_NAME } from './../.././../../../../config/mounth.js';

import { ResultScheduleClass } from './vendors/ResultScheduleClass.js';


const DExcelComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        scheduleEventsList,

        currentDate,
        currentDayNum,
        currentMonth,
        currentYear,

    } = props;

    let [ filterList, setFilterList ] = useState( [] );
    let [ exportType, setExportType ] = useState( 'schedule' ); // 'schedule' TV_program

    let [ allUsedFiles, setAllUsedFiles ] = useState( [] );
    let [ allFiles, setAllFiles ] = useState( {} );



    useEffect( () => {
        if( isOpen ){
            let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
            StoreScheduleResultEvents.CreateList();

            let eventsList = StoreScheduleResultEvents.GetAllUsedEvents();

            // let allUsedFiles = StoreScheduleResultEvents.GetAllUsedFiles( eventsList );

            setAllFiles( StoreScheduleResultEvents.GetAllUsedFiles( eventsList ) );

            setFilterList( get_filter_list_from_events_list( eventsList ) );


        }else{
            setFilterList( [] );
        };
    }, [ isOpen ] );

    const item_change_isUsed = ( val, eventId ) => {
        let changed_list = get_changet_filter_list( filterList, eventId, { isUsed: val } );
        setFilterList( changed_list );
    }

    const item_change_whatTake = ( val, eventId ) => {
        let changed_list = get_changet_filter_list( filterList, eventId, { withOnlyApplications: val } );
        setFilterList( changed_list );
    }


    const createList = ( arr ) => {

        let categories = {};

        let div = arr.map( ( item, index ) => {
            let {
                eventId,
                category_id,
                isUsed,
                withOnlyApplications,
            } = item;

            let with_category = true;
            if( categories[ category_id ] === true ){
                with_category = false;
            };

            categories[ category_id ] = true;

            return (
                <React.Fragment key = { index }>

                    { with_category? (
                        <FilterCategoryItem
                            category_id =   { category_id }
                            filterList =    { arr }
                            setFilterList = { setFilterList }
                        />
                    ): '' }

                    <FilterItem
                        key =                   { index }
                        eventId =               { eventId }
                        isUsed =                { isUsed }
                        withOnlyApplications =  { withOnlyApplications }
                        item_change_isUsed =    { item_change_isUsed }
                        item_change_whatTake =  { item_change_whatTake }

                    />
                </React.Fragment>
            );

        } );

        return div;

    };

    const get_puth = () => {
        if( IS_DEVELOPMENT ){
            return 'url( /assets/img/Gagarin_icon.jpg )';
        }else{
            return 'url( /public/assets/img/Gagarin_icon.jpg )';
        };
    };

    const get_used_files_list = ( arr ) => {
        let result = [];

        for( let i = 0; i < arr.length; i++ ){
            if( arr[ i ].isUsed === true ){
                result.push( arr[ i ].fileName );
            };
            
        };

        return result;

    }

    const click = () => {
        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateList();

        let scheduleEventsLlist = StoreScheduleResultEvents.GetScheduleEventsList();
        let used_events = get_used_events( scheduleEventsLlist, filterList );

        let ResultSchedule = new ResultScheduleClass();

        ResultSchedule.AddUsedEvents( used_events );

        ResultSchedule.SetCurrentDate( currentDate );
        ResultSchedule.SetCurrentDayNum( currentDayNum );
        ResultSchedule.SetCurrentMonth( currentMonth );
        ResultSchedule.SetCurrentYear( currentYear );


        ResultSchedule.SetHilightFiles( get_used_files_list( allUsedFiles ) );

        ResultSchedule.Download();

    }

    return (
        <div className = 'S_DExcelComponent'>

            <ExportTypeButtons
                exportType = { exportType }
                setExportType = { setExportType }
            />



            <h4 className = 'S_DExcelComponent_header'>Что включить в экспорт?</h4>

            <FilterControlPanel
                filterList = { filterList }
                setFilterList = { setFilterList }
                isOpen = { isOpen }
            />

            <div className = 'S_DExcelComponent_listWrap'>
                <ScrollContainer>
                    { createList( filterList ) }
                </ScrollContainer>
            </div>



            <HighlightFiles
                allUsedFiles =      { allUsedFiles }
                setAllUsedFiles =   { setAllUsedFiles }
                allFiles =          { allFiles }
                filterList =        { filterList }

            />


            <div className = 'S_DExcelComponent_btn'>
                <span
                    className = 'S_DExcelComponent_icon'
                    style = {{
                        backgroundImage: get_puth(),
                    }}
                    onClick = { click }
                >
                    Поехали
                </span>
            </div>

        </div>
        
    )

};


export function DExcelComponent( props ){

    const scheduleResult = useSelector( scheduleResultSlise );

    // const dispatch = useDispatch();

    return (
        <DExcelComponentComponent
            { ...props }

            scheduleEventsList = { scheduleResult.scheduleEventsList }
            currentDate =       { scheduleResult.currentDate }
            currentDayNum =     { scheduleResult.currentDayNum }
            currentMonth =      { scheduleResult.currentMonth }
            currentYear =       { scheduleResult.currentYear }



            

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
