
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemoveItem.scss';

import { selectorData as layoutSlice, setGridDayEventsList } from './../../../../../../../../redux/layoutSlice.js';

import { setSpinnerIsActive }                           from './../../../../../../../../redux/spinnerSlice.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

import { RemoveSegmentButton } from './../../../RemoveSegmentButton/RemoveSegmentButton.js';

import { remove_grid_event_from_curren_day_in_store } from './../../../../vendors/remove_grid_event_from_curren_day_in_store.js';

import { IsAllowedContainer } from './../../../../../../../../components/IsAllowedContainer/IsAllowedContainer.js';

const RemoveItemComponent = ( props ) => {

    let {
        id,
        setGridDayEventsList,
        setSpinnerIsActive,

    } = props;

    let [ isOpen, setIsOpen] = useState( false );
    let [ isAllowed, setIsAllowedResult ] = useState( false );

    const remove = () => {
        setSpinnerIsActive( true );

        let gridEventId = id;

        send_request_to_server({
            route: `remove-grid-event`,
            data: { 
                gridEventId: gridEventId,
            },

            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){
                    setSpinnerIsActive( false );

                    remove_grid_event_from_curren_day_in_store( gridEventId );

                };

            },
        });
    };

    const remove_event = () => {

        if( isAllowed ){
            setIsOpen( false );
            remove();
            // setSpinnerIsActive( true );

            // let gridEventId = id;

            // send_request_to_server({
            //     route: `remove-grid-event`,
            //     data: { 
            //         gridEventId: gridEventId,
            //     },

            //     successCallback: ( response ) => {
            //         console.dir( 'response' );
            //         console.dir( response );

            //         if( response.ok ){
            //             setSpinnerIsActive( false );

            //             remove_grid_event_from_curren_day_in_store( gridEventId );

            //         };

            //     },
            // });
        };

    }

    const click = ( e ) => {
        if( e.altKey === true ){
            remove();
        }else{
            setIsOpen( true );
        };

        // setIsOpen( true )

    }


    return (

        <IsAllowedContainer
            accessName =            'layout_grid_edit'
            setIsAllowedResult =    { setIsAllowedResult }
        >
            <div className = 'CTS_RemoveItem'>
                <AlertWindowContainer
                    isOpen = { isOpen }
                    setIsOpen = { setIsOpen }
                    width = '25em'
                    height = '15em'
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

                        <br />

                        <p>Для быстрого удаления используйте комбинацию</p>
                        <h4 className = 'CTS_Event_remove_combo' >
                            <span>
                                Alt + <span className = 'icon-cancel-2'></span>
                            </span>
                            
                        </h4>

                    </div>
        
                </AlertWindowContainer>

                <RemoveSegmentButton 
                    id = { id }
                    clickHandler = { click }
                />
                
            </div>
        </IsAllowedContainer>


        
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
