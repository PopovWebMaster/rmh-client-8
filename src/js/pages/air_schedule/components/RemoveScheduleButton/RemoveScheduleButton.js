
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemoveScheduleButton.scss';

import { selectorData as scheduleResultSlise, setAllScheduleFileNames } from './../../../../redux/scheduleResultSlise.js';
import { selectorData as spinnerSlice, setSpinnerIsActive } from './../../../../redux/spinnerSlice.js';


import { TopCenterButtonComponent } from './../TopCenterButtonComponent/TopCenterButtonComponent.js';
import { StoreScheduleResultEventsClass } from './../../../../classes/StoreScheduleResultEventsClass.js';
import { AlertWindowContainer } from './../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWConfirm } from './../../../../components/AlertWindowContainer/AWConfirm/AWConfirm.js';

import { send_request_to_server } from './../../../../helpers/send_request_to_server.js';
import { get_YYYY_MM_DD } from './../../../../helpers/get_YYYY_MM_DD.js';


const RemoveScheduleButtonComponent = ( props ) => {

    let {
        scheduleEventsList,
        setSpinnerIsActive,


        currentDate,
        currentMonth,
        currentYear,

        scheduleResult,
        setAllScheduleFileNames,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );


    const remove = () => {

        let YYYY_MM_DD = get_YYYY_MM_DD( currentYear, currentMonth, currentDate );


        setSpinnerIsActive( true );
        send_request_to_server({
            route: 'remove-schedule',
            data: {
                YYYY_MM_DD,
            },
            successCallback: ( response ) => {

                console.dir( response );

                if( response.ok ){
                    setSpinnerIsActive( false );

                    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
                    StoreScheduleResultEvents.CreateFromScheduleEventsList([]);
                    StoreScheduleResultEvents.SetListToStore( false );
                    setIsOpen( false );

                    let { allScheduleFileNames } = response;

                    setAllScheduleFileNames( allScheduleFileNames );



                };
            },
        });





    };
    

    const click = () => {

        if( scheduleEventsList.length > 0 ){
            setIsOpen( true );
        };

    };

    return (
        <>{ scheduleEventsList.length > 0? (
            <div className = 'removeScheduleButton'>

                <AlertWindowContainer
                    isOpen =        { isOpen }
                    setIsOpen =     { setIsOpen }
                    title =         'Удалить расписание?'
                    width =         '30em'
                    height =        '13em'
                >
                    <AWConfirm
                        text = { [ 'Пожалуйста, подтвердите удаление расписания' ] }
                        type = 'warning'
                        continueHandler =   { remove }
                        cancelHandler =     { () => { setIsOpen( false ) } }
                        titleContinue = 'Удалить'
                    />
                    
                </AlertWindowContainer>

                <TopCenterButtonComponent
                    icon =          'icon-trash-empty'
                    title =         'Удалить расписание'
                    isActive =      { true }
                    clickHandler =  { click }
                />
            </div>


        ): '' }</>


        
    )

};


export function RemoveScheduleButton( props ){
    const scheduleResult = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <RemoveScheduleButtonComponent
            { ...props }

            scheduleEventsList = { scheduleResult.scheduleEventsList }
            scheduleResult = { scheduleResult }

            currentDate =   { scheduleResult.currentDate }
            currentMonth =  { scheduleResult.currentMonth }
            currentYear =   { scheduleResult.currentYear }
            
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setAllScheduleFileNames = { ( val ) => { dispatch( setAllScheduleFileNames( val ) ) } }


            

        />
    );


}
