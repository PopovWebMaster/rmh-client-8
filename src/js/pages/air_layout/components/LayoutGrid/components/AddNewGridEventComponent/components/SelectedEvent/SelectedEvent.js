
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SelectedEvent.scss';

import { selectorData as layoutSlice }    from './../../../../../../../../redux/layoutSlice.js';
import { convert_time_str_to_sec } from './../../../../../../../../helpers/convert_time_str_to_sec.js'

const SelectedEventComponent = ( props ) => {

    let {
        eventId,
        setEventId,
        durationLimit,

        eventList,
        eventListById,

    } = props;

    let [ listIsOpen, setListIsOpen ] = useState( false );

    const itemClick = ( id ) => {
        setEventId( id );
        setListIsOpen( false );
    };

    const createList = ( arr ) => {

        let li = arr.map( ( item, index ) => {
            let { id, type, durationTime, name } = item;

            let typeText = type === 'file'? 'файл': 'блок' ;
            let duration_sec = convert_time_str_to_sec( durationTime );
            let isActive = duration_sec <= durationLimit? true: false;

            return (
                <li
                    key = { index }
                    className = { isActive? 'isActive': '' }
                    onClick = { () => { 
                        if( isActive ){
                            itemClick( id )
                        };
                    } }
                >
                    <span className = { type === 'file'? 'G_ANG_list_file': 'G_ANG_list_block' } >{ typeText }</span>
                    <span className = 'G_ANG_list_duration'>{ durationTime }</span>
                    <span className = 'G_ANG_list_name'>{ name }</span>
                </li>
            );
        } );
        return li;
    }

    const getEventName = ( obj, id ) => {
        let result = <span className = 'G_ANG_list_name'>-- Не выбрано --</span>
        if( obj[ id ] ){
            let { type, name } = obj[ id ];
            let typeText = type === 'file'? 'файл': 'блок' ;
            result = (<>
                <span className = { type === 'file'? 'G_ANG_list_file': 'G_ANG_list_block' } >{ typeText }</span>
                <span className = 'G_ANG_list_name'>{ name }</span>
            </>);
        };

        return result;
    }

    return (

        <div className = 'G_ANG_SelectedEvent'>
            <h3>Категория:</h3>
            <div 
                className = 'G_ANG_eventList_body'
                onMouseLeave = { () => { setListIsOpen( false ) } }
            >
                <h4
                    onClick = { () => { setListIsOpen( !listIsOpen ) } }
                >{ getEventName( eventListById, eventId ) }</h4>
                <div 
                    className = 'G_ANG_btn'
                    onClick = { () => { setListIsOpen( !listIsOpen ) }}
                >
                    <span className = { `G_ANG_btn_icon ${listIsOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                </div>

                { listIsOpen? (
                    <ul className = 'G_ANG_eventList_list'>
                        { createList( eventList ) }
                    </ul>
                ): '' }
                
            </div>
        </div>

    )

};

export function SelectedEvent( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <SelectedEventComponent
            { ...props }
            eventList = { layout.eventList }
            eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
