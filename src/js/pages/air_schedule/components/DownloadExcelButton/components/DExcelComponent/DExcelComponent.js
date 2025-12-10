
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './DExcelComponent.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';

import { StoreScheduleResultEventsClass } from './../../../../../../classes/StoreScheduleResultEventsClass.js';

import { get_filter_list_from_events_list } from './../../vendors/get_filter_list_from_events_list.js';

import { ExportTypeButtons } from './../ExportTypeButtons/ExportTypeButtons.js';
 
import { HighlightFiles } from './../HighlightFiles/HighlightFiles.js';
import { ExportFilterList } from './../ExportFilterList/ExportFilterList.js';
import { ExportRunButton } from './../ExportRunButton/ExportRunButton.js';

import { download_excel_as_schedule } from './vendors/download_excel_as_schedule.js';
import { download_excel_as_TV_program } from './vendors/download_excel_as_TV_program.js';


const DExcelComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

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

            setAllFiles( StoreScheduleResultEvents.GetAllUsedFiles( eventsList ) );

            setFilterList( get_filter_list_from_events_list( eventsList ) );


        }else{
            setFilterList( [] );
        };
    }, [ isOpen ] );


    const click = () => {
        if( exportType === 'schedule' ){
            download_excel_as_schedule({
                filterList,
                allUsedFiles,
            });
        }else if( exportType === 'TV_program' ){
            download_excel_as_TV_program( filterList );
        };
    }

    return (
        <div className = 'S_DExcelComponent'>

            <ExportTypeButtons
                exportType = { exportType }
                setExportType = { setExportType }
            />

            <ExportFilterList
                isOpen =        { isOpen }
                filterList =    { filterList }
                setFilterList = { setFilterList }
                exportType =    { exportType }
            
            />

            { exportType === 'schedule'? (
                <HighlightFiles
                    allUsedFiles =      { allUsedFiles }
                    setAllUsedFiles =   { setAllUsedFiles }
                    allFiles =          { allFiles }
                    filterList =        { filterList }
                />
            ): '' }



            <ExportRunButton
                clickHandler = { click }
            />

        </div>
        
    )

};


export function DExcelComponent( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <DExcelComponentComponent
            { ...props }

            // scheduleEventsList = { scheduleResult.scheduleEventsList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
