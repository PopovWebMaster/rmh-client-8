
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ARFE_Button.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../../redux/scheduleResultSlise.js';

import { access_right } from './../../../../../../../../../helpers/access_right.js';
import { get_event_by_id } from './../../../../../../../../../helpers/get_event_by_id.js';
import { EVENT_TYPE } from './../../../../../../../../../config/layout.js';



const ARFE_ButtonComponent = ( props ) => {

    let {
        gridEventId,
        releases,
        eventId,
        firstSegmentId,
        setIsOpen,

    } = props;




    const get_is_active = ( event_id, releases_list ) => {
        let result = false

        if( firstSegmentId === null || firstSegmentId === gridEventId ){
            let { type } = get_event_by_id( event_id );
            if( type === EVENT_TYPE.BLOCK ){
                result = true;
            }else if( type === EVENT_TYPE.FILE ){
                if( releases_list.length > 0 ){

                }else{
                    result = true;
                };
            };
        };
        
        return result;
    }

    const click = () => {
        if( access_right( 'schedule_edit' ) ){
            let isActive = get_is_active( eventId, releases );
            if( isActive ){
                setIsOpen( true );
            };
        };
    };




    return (<>
        { get_is_active( eventId, releases )? ( 
            <span 
                className = 'SEC_ARFE_Button' 
                onClick = { click }
            >Добавить файл</span> 
        ): '' }
    </>)

};

export function ARFE_Button( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <ARFE_ButtonComponent
            { ...props }
            // scheduleEventsList = { scheduleResult.scheduleEventsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
