
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetDayDataFromServer.scss';

import { selectorData as scheduleResultSlise, setScheduleEventsList } from './../../../../redux/scheduleResultSlise.js';
import { setGridCurrentDay } from './../../../../redux/layoutSlice.js';


import { selectorData as spinnerSlice, setSpinnerIsActive } from './../../../../redux/spinnerSlice.js';


import { get_YYYY_MM_DD } from './../../../../helpers/get_YYYY_MM_DD.js';

import { send_request_to_server } from './../../../../helpers/send_request_to_server.js';
import { set_release_list_to_store } from './../../vendors/set_release_list_to_store.js';




const SetDayDataFromServerComponent = ( props ) => {

    let {
        children,

        currentDate,
        currentMonth,
        currentYear,
        currentDayNum,
        setSpinnerIsActive,
        setGridCurrentDay,
        setScheduleEventsList,


    } = props;

    useEffect( () => {

        let YYYY_MM_DD = get_YYYY_MM_DD( currentYear, currentMonth, currentDate );
        console.log( 'YYYY_MM_DD', YYYY_MM_DD );

        setSpinnerIsActive( true );

        let send = () => {
            send_request_to_server({
                route: 'get-schedule-result-day-data',
                data: {
                    YYYY_MM_DD,
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        setSpinnerIsActive( false );
                        let { release_list, scheduleEventsList } = response;
                        set_release_list_to_store( release_list );
                        setGridCurrentDay( currentDayNum );
                        setScheduleEventsList( scheduleEventsList );

                    }else{
                        if( IS_DEVELOPMENT ){

                        }else{
                            send();
                        };
                    };

                    

                },
                errorCallback: () => {
                    if( IS_DEVELOPMENT ){

                    }else{
                        send();
                    };
                },
            });
        };

        send();


        

    }, [
        currentDate,
        currentMonth,
        currentYear,
    ] )





    return (
        <>{ children }</>
    )

};


export function SetDayDataFromServer( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <SetDayDataFromServerComponent
            { ...props }

            currentDate =   { scheduleResult.currentDate }
            currentMonth =  { scheduleResult.currentMonth }
            currentYear =   { scheduleResult.currentYear }
            currentDayNum =   { scheduleResult.currentDayNum }



            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setGridCurrentDay = { ( val ) => { dispatch( setGridCurrentDay( val ) ) } }
            setScheduleEventsList = { ( val ) => { dispatch( setScheduleEventsList( val ) ) } }


            

            

        />
    );


}
