
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventRemoveItem.scss';

import { selectorData as layoutSlice, setEventList, setGridDayEventsList }    from './../../../../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../../../redux/spinnerSlice.js';
import { AlertWindowContainer }     from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWRemoveConfirmComponent } from './../../../../../../../../components/AlertWindowContainer/AWRemoveConfirmComponent/AWRemoveConfirmComponent.js';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

const EventRemoveItemComponent = ( props ) => {

    let {
        id,
        
        setEventList,
        setSpinnerIsActive,
        setGridDayEventsList,

    } = props;

    let [ isOpen, setIsOpen] = useState( false );

    const remove_event = () => {
        setIsOpen( false );
        
        setSpinnerIsActive( true );
        
        send_request_to_server({
            route: `remove-event`,
            data: { 
                eventId: id,
            },

            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){
                    setSpinnerIsActive( false );
                    setEventList( response.eventsList );
                    setGridDayEventsList( response.gridEventsList );

                    


                    setIsOpen( false );
                };

            },
        });
    }



    return (<>

        <AlertWindowContainer
            isOpen = { isOpen }
            setIsOpen = { setIsOpen }
            width = '25em'
            height = '10em'
        >

            <AWRemoveConfirmComponent 
                setIsOpen =     { setIsOpen }
                removeHandler = { remove_event }
            />

        </AlertWindowContainer>

        <div 
            className = 'LE_EventRemoveItem'
            onClick = { () => { setIsOpen( true ) } }
        >
            <span className = 'icon-cancel-2'></span>
        </div>
                

    </>)

};

export function EventRemoveItem( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <EventRemoveItemComponent
            { ...props }

            setEventList = { ( val ) => { dispatch( setEventList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }


            


        />
    );


}
