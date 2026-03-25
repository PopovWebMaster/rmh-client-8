
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectorData as playReportSlice,
    setAdvancedSearchisRequestList,
    setAdvancedSearchisSelectedEvents,
    setAdvancedSearchisActiveType,
} from './../../../../../../redux/playReportSlice.js';
import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';


import './AdvancedSearchContainer.scss';

import { AWInputText } from './../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWEventSelect } from './../../../../../../components/AlertWindowContainer/AWEventSelect/AWEventSelect.js';
import { EventByCategorySelect } from './../../../../../../components/EventByCategorySelect/EventByCategorySelect.js';


import { SearchPeriodEdit } from './components/SearchPeriodEdit/SearchPeriodEdit.js';
import { OnlyPremiersEdit } from './components/OnlyPremiersEdit/OnlyPremiersEdit.js';
import { RequestListEdit } from './components/RequestListEdit/RequestListEdit.js';

import { get_date_now_YYYY_MM_DD } from './../../../../../../helpers/get_date_now_YYYY_MM_DD.js';

import { SearchButton } from './components/SearchButton/SearchButton.js';
import { DownloadFromFile } from './components/DownloadFromFile/DownloadFromFile.js';

import { ActiveTypeSelect } from './components/ActiveTypeSelect/ActiveTypeSelect.js';

import { SelectEventsList } from './components/SelectEventsList/SelectEventsList.js';

import { SelectedEventsClass } from './vendors/SelectedEventsClass.js';
import { SearchByEventsButton } from './components/SearchByEventsButton/SearchByEventsButton.js';


const AdvancedSearchContainerComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        eventListById,
        advancedSearchisRequestList,
        advancedSearchisSelectedEvents,
        advancedSearchisActiveType,
        setAdvancedSearchisRequestList,
        setAdvancedSearchisSelectedEvents,

        setAdvancedSearchisActiveType,
    } = props;

    let [ requestList, setRequestList ] = useState( [] );
    let [ newRequest, setNewRequest ] = useState( '' );

    let [ dataFromValue, setDataFromValue ] = useState( '' );
    let [ dataToValue, setDataToValue ] = useState( '' );
    let [ isOnlyPremiers, setIsOnlyPremiers ] = useState( false );


    let [ activeType, setActiveType ] = useState( 'by_name' ); // 'by_name' 'by_event'
    let [ selectedEvents, setSelectedEvents ] = useState( [] )

    // useEffect( () => {

    //     let nowDate = get_date_now_YYYY_MM_DD();
    //     setDataFromValue( nowDate );
    //     setDataToValue( nowDate );
        
    // }, [] );


    const changeNewRequest = ( e ) => {
        let val = e.target.value;
        setNewRequest( val );
    };

    const addRequest = () => {
        let val = newRequest.trim()
        if( val !== '' ){
            if( advancedSearchisRequestList.indexOf( val ) === -1 ){
                let arr = [ ...advancedSearchisRequestList, val ];
                setAdvancedSearchisRequestList( arr );
                setNewRequest( '' );
            };
        };
    }

    const callback = ( response ) => {
        console.dir( 'response' );
        console.dir( response );
        setIsOpen( false );
    };

    const addSelectedEvent = ( id ) => {
        if( id !== null ){
            let SelectedEvents = new SelectedEventsClass();
            SelectedEvents.SetList( advancedSearchisSelectedEvents );
            SelectedEvents.AddAsToggle( id );
            setAdvancedSearchisSelectedEvents( SelectedEvents.GetList() );
        }

    };

    const removeSelectedEvent = ( id ) => {
        if( id !== null ){
            let SelectedEvents = new SelectedEventsClass();
            SelectedEvents.SetList( advancedSearchisSelectedEvents );
            SelectedEvents.Remove( id );
            setAdvancedSearchisSelectedEvents( SelectedEvents.GetList() );
        }

    };




    
 

    return (
        <div className = 'PR_advancedSearchComponent'>

            <SearchPeriodEdit
                // dataFromValue =     { dataFromValue }
                // dataToValue =       { dataToValue }
                // setDataFromValue =  { setDataFromValue }
                // setDataToValue =    { setDataToValue }
            />

            <OnlyPremiersEdit
                // isOnlyPremiers =    { isOnlyPremiers }
                // setIsOnlyPremiers = { setIsOnlyPremiers }
            />

            <ActiveTypeSelect
                activeType =    { advancedSearchisActiveType }
                setActiveType = { setAdvancedSearchisActiveType }
            />

            { advancedSearchisActiveType === 'by_name'? (<>
                <DownloadFromFile
                    requestList =       { advancedSearchisRequestList }
                    setRequestList =    { setAdvancedSearchisRequestList }
                />

                <AWInputText
                    title =             { 'Название файла целиком или часть названия' }
                    value =             { newRequest }
                    onChange =          { changeNewRequest } 
                    buttonAddHandler =  { addRequest }
                    enterHandler =      { addRequest }
                />

                <RequestListEdit 
                    requestList =       { advancedSearchisRequestList }
                    setRequestList =    { setAdvancedSearchisRequestList }
                />

                <SearchButton
                    requestList =       { advancedSearchisRequestList }
                    // isOnlyPremiers =    { isOnlyPremiers }
                    // dataFrom =          { dataFromValue }
                    // dataTo =            { dataToValue }
                    callback =          { callback }

                />
            </>): (<>

                <SelectEventsList
                    selectedEvents =    { advancedSearchisSelectedEvents }
                    removeSelectedEvent = { removeSelectedEvent }
                />


                


            
                {/* <AWEventSelect
                    value =         { null }
                    changeHandler = { addSelectedEvent }
                    alwaysIsOpen =  { true }
                
                /> */}

                <EventByCategorySelect
                    isOpen =        { isOpen }
                    value =         { null }
                    changeHandler = { addSelectedEvent }
                    maxHeight =     { 38 }
                    maxDuration =   { null }
                />



                <SearchByEventsButton
                    selectedEvents =    { advancedSearchisSelectedEvents }
                    // isOnlyPremiers =    { isOnlyPremiers }
                    // dataFrom =          { dataFromValue }
                    // dataTo =            { dataToValue }
                    callback =          { callback }
                />
            
            
            
            
            </>) }



            
        </div>

    )

};

export function AdvancedSearchContainer( props ){

    const playReport = useSelector( playReportSlice );
    const layout = useSelector( layoutSlice );



    
    const dispatch = useDispatch();

    return (
        <AdvancedSearchContainerComponent
            { ...props }
            searchFocus = { playReport.searchFocus }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }

            eventListById = { layout.eventListById }

            advancedSearchisRequestList = { playReport.advancedSearchisRequestList }
            advancedSearchisSelectedEvents = { playReport.advancedSearchisSelectedEvents }
            advancedSearchisActiveType = { playReport.advancedSearchisActiveType }



            setAdvancedSearchisRequestList = { ( arr ) => { dispatch( setAdvancedSearchisRequestList( arr ) ) } }
            setAdvancedSearchisSelectedEvents = { ( arr ) => { dispatch( setAdvancedSearchisSelectedEvents( arr ) ) } }
            setAdvancedSearchisActiveType = { ( arr ) => { dispatch( setAdvancedSearchisActiveType( arr ) ) } }


            


            

        />
    );


}
