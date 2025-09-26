
import React, {useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';
import { setSpinnerIsActive } from './../../../../../../../../redux/spinnerSlice.js';


import './SearchButton.scss';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';


const SearchButtonComponent = ( props ) => {

    let {
        requestList,
        isOnlyPremiers,
        dataFrom,
        dataTo,
        callback,

        setSpinnerIsActive,

    } = props;

    let [ isActive, setIsActive ] = useState( false );

    useEffect( () => {

        if( requestList.length > 0 ){
            setIsActive( true );
        }else{
            setIsActive( false );
        };

    }, [ requestList ] );
    


    const click = () => {

        console.dir({
            requestList,
            isOnlyPremiers,
            dataFrom,
            dataTo,
        });

        setSpinnerIsActive( true );

        send_request_to_server({
            route: 'get-entier-list-for-advanced-search',
            data: {
                requestList,
                isOnlyPremiers,
                dataFrom,
                dataTo,
            },
            successCallback: ( response ) => {
                // console.dir( 'response' );
                // console.dir( response );

                setSpinnerIsActive( false );

                callback( response );

            },
        });

    };


   
    return (

        <div className = 'PR_ASC_SearchButton'>

            <div
                className = { `PR_ASC_SearchButton_wrap ${ isActive? 'isActive': '' }` }
                onClick = { click }
            >
                <span className = 'icon-search-4 icon'></span>
                <span className = 'text'>Найти</span>

            </div>

        </div>



    )

};

export function SearchButton( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <SearchButtonComponent
            { ...props }
            // searchFocus = { playReport.searchFocus }
            // searchValue = { playReport.searchValue }
            // calendarIsOpen = { playReport.calendarIsOpen }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
