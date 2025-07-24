
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemoveItem.scss';

import { selectorData as layoutSlice, setGridDayEventsList } from './../../../../../../../../redux/layoutSlice.js';

import { setSpinnerIsActive }                           from './../../../../../../../../redux/spinnerSlice.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


// import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

// import { RemoveSegmentButton } from './../../../RemoveSegmentButton/RemoveSegmentButton.js';
import { RemoveSegmentButton } from './../RemoveSegmentButton/RemoveSegmentButton.js';



const RemoveItemComponent = ( props ) => {

    let {
        gridEventId,
        setGridDayEventsList,
        setSpinnerIsActive,

    } = props;

    let [ isOpen, setIsOpen] = useState( false );

    const remove_event = () => {
        // setIsOpen( false );
        // setSpinnerIsActive( true );

        // send_request_to_server({
        //     route: `remove-grid-event`,
        //     data: { 
        //         gridEventId: id,
        //     },

        //     successCallback: ( response ) => {
        //         console.dir( 'response' );
        //         console.dir( response );

        //         if( response.ok ){
        //             setSpinnerIsActive( false );
        //             setGridDayEventsList( response.list );
        //         };

        //     },
        // });
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

        // const layout = useSelector( layoutSlice );
        const dispatch = useDispatch();
    

    return (
        <RemoveItemComponent
            { ...props }
            currentPage = { navigation.currentPage }
            setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
