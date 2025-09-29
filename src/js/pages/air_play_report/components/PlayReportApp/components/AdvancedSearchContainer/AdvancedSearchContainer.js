
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './AdvancedSearchContainer.scss';

import { AWInputText } from './../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';

import { SearchPeriodEdit } from './components/SearchPeriodEdit/SearchPeriodEdit.js';
import { OnlyPremiersEdit } from './components/OnlyPremiersEdit/OnlyPremiersEdit.js';
import { RequestListEdit } from './components/RequestListEdit/RequestListEdit.js';

import { get_date_now_YYYY_MM_DD } from './../../../../../../helpers/get_date_now_YYYY_MM_DD.js';

import { SearchButton } from './components/SearchButton/SearchButton.js';
import { DownloadFromFile } from './components/DownloadFromFile/DownloadFromFile.js';


const AdvancedSearchContainerComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
    } = props;

    let [ requestList, setRequestList ] = useState( [] );
    let [ newRequest, setNewRequest ] = useState( '' );

    let [ dataFromValue, setDataFromValue ] = useState( '' );
    let [ dataToValue, setDataToValue ] = useState( '' );
    let [ isOnlyPremiers, setIsOnlyPremiers ] = useState( false );


    useEffect( () => {
        let nowDate = get_date_now_YYYY_MM_DD();
        setDataFromValue( nowDate );
        setDataToValue( nowDate );
    }, [] );


    const changeNewRequest = ( e ) => {
        let val = e.target.value;
        setNewRequest( val );
    };

    const addRequest = () => {
        let val = newRequest.trim()
        if( val !== '' ){
            if( requestList.indexOf( val ) === -1 ){
                let arr = [ ...requestList, val ];
                setRequestList( arr );
                setNewRequest( '' );
            };
        };
    }

    const callback = ( response ) => {
        console.dir( 'response' );
        console.dir( response );
        setIsOpen( false );
    };
 

    return (
        <div className = 'PR_advancedSearchComponent'>

            <SearchPeriodEdit
                dataFromValue =     { dataFromValue }
                dataToValue =       { dataToValue }
                setDataFromValue =  { setDataFromValue }
                setDataToValue =    { setDataToValue }
            />

            <OnlyPremiersEdit
                isOnlyPremiers =    { isOnlyPremiers }
                setIsOnlyPremiers = { setIsOnlyPremiers }
            />

            <br />

            <DownloadFromFile
                requestList =       { requestList }
                setRequestList =    { setRequestList }
            />

            <AWInputText
                title =             { 'Название файла целиком или часть названия' }
                value =             { newRequest }
                onChange =          { changeNewRequest } 
                buttonAddHandler =  { addRequest }
                enterHandler =      { addRequest }
            />

            <RequestListEdit 
                requestList =       { requestList }
                setRequestList =    { setRequestList }
            />

            <SearchButton
                requestList =       { requestList }
                isOnlyPremiers =    { isOnlyPremiers }
                dataFrom =          { dataFromValue }
                dataTo =            { dataToValue }
                callback =          { callback }

            />

            
        </div>

    )

};

export function AdvancedSearchContainer( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <AdvancedSearchContainerComponent
            { ...props }
            searchFocus = { playReport.searchFocus }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
