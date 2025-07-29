
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemoveItem.scss';

import { selectorData as layoutSlice, setGridDayEventsList } from './../../../../../../../../redux/layoutSlice.js';
import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';


import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

// import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

// import { RemoveSegmentButton } from './../../../RemoveSegmentButton/RemoveSegmentButton.js';
import { RemoveSegmentButton } from './../RemoveSegmentButton/RemoveSegmentButton.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../../classes/StoreScheduleResultEventsClass.js';



const RemoveItemComponent = ( props ) => {

    let {
        gridEventId,
        scheduleEventsList,

    } = props;

    let [ isOpen, setIsOpen] = useState( false );

    const remove_event = () => {

        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
        StoreScheduleResultEvents.RemoveEvent( gridEventId );
        StoreScheduleResultEvents.SetListToStore();
        setIsOpen( false );

    }


    return (
        <div className = 'CTS_RemoveItem'>
            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                width = '25em'
                height = '10em'
            >
                <div className = 'CTS_Event_remove'>
                    <p>Пожалуйста, подтвердите удаление события</p>
                    <p>
                        <span 
                            className = 'CTS_Event_remove_btn'
                            onClick = { remove_event}
                        >Удалить</span>
                        <span 
                            className = 'CTS_Event_no_remove_btn'
                            onClick = { () => { setIsOpen( false ) } }
                        >Отмена</span>
                    </p>
                </div>
    
            </AlertWindowContainer>

            <RemoveSegmentButton 
                gridEventId = { gridEventId }
                clickHandler = { () => { setIsOpen( true ) } }
            />
            
        </div>
    )

};

export function RemoveItem( props ){

        const scheduleResult = useSelector( scheduleResultSlise );
        const dispatch = useDispatch();
    

    return (
        <RemoveItemComponent
            { ...props }

            scheduleEventsList = { scheduleResult.scheduleEventsList }

            
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
