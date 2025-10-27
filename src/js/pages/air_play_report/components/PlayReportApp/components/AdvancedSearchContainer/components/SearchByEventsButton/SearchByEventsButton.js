
import React, {useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setEntireList } from './../../../../../../../../redux/playReportSlice.js';
import { setSpinnerIsActive } from './../../../../../../../../redux/spinnerSlice.js';


import './SearchByEventsButton.scss';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';


const SearchByEventsButtonComponent = ( props ) => {

    let {
        selectedEvents,
        isOnlyPremiers,
        dataFrom,
        dataTo,
        callback,

        setSpinnerIsActive,
        setEntireList,

    } = props;

    let [ isActive, setIsActive ] = useState( false );

    useEffect( () => {

        if( selectedEvents.length > 0 ){
            setIsActive( true );
        }else{
            setIsActive( false );
        };

    }, [ selectedEvents ] );
    

    const click = () => {

        let eventList = get_events_list();


        setSpinnerIsActive( true );

        send_request_to_server({
            route: 'get-entier-list-for-advanced-search-by-events',
            data: {
                eventList,
                isOnlyPremiers,
                dataFrom,
                dataTo,
            },
            successCallback: ( response ) => {

                // console.dir( 'response' );
                // console.dir( response );

                if( response.ok ){
                    setSpinnerIsActive( false );
                    setEntireList( response.list );

                    callback( response );
                };


            },
        });

    };

    const get_events_list = () => {
        let result = [];
        for( let i = 0; i < selectedEvents.length; i++ ){
            let { event_id } = selectedEvents[ i ];
            result.push( event_id );
        };

        return result;
    }


   
    return (

        <div className = 'PR_ASC_SearchByEventsButton'>

            <div
                className = { `PR_ASC_SearchByEventsButton_wrap ${ isActive? 'isActive': '' }` }
                onClick = { click }
            >
                <span className = 'icon-search-4 icon'></span>
                <span className = 'text'>Найти</span>

            </div>

        </div>



    )

};

export function SearchByEventsButton( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <SearchByEventsButtonComponent
            { ...props }
            // searchFocus = { playReport.searchFocus }
            // searchValue = { playReport.searchValue }
            // calendarIsOpen = { playReport.calendarIsOpen }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setEntireList = { ( val ) => { dispatch( setEntireList( val ) ) } }


            

        />
    );


}
