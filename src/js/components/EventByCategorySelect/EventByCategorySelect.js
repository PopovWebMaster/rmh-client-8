
import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './EventByCategorySelect.scss';

import { EVENT_NAME_NOT_SELECTED } from './../../config/layout.js';
import { get_events_tree_list } from './vendors/get_events_tree_list.js';

import { ECBS_CategoryItem } from './components/ECBS_CategoryItem/ECBS_CategoryItem.js';


const EventByCategorySelectComponent = ( props ) => {

    let {
        isOpen,
        value,
        changeHandler,

        eventListById,
        alwaysIsOpen = false,
        maxHeight = 32, // num vh
        maxHeightUnit = 'vh',
        maxDuration = null, // num second
        

    } = props;

    let [ selectedEventId, setSelectedEventId ] = useState( null );

    let [ menuIsOpen, setMenuIsOpen ] = useState( false );
    let [ eventNameValue, setEventNameValue ] = useState( EVENT_NAME_NOT_SELECTED );
    let [ eventStyle, setEventStyle ] = useState( {} );

    let [ listTree, setListTree ] = useState( [] );

    useEffect( () => {
        if( isOpen ){

            setSelectedEventId( value );
            setMenuIsOpen( alwaysIsOpen );
            setListTree( get_events_tree_list( maxDuration ) );

            if( value === null ){
                setEventNameValue( EVENT_NAME_NOT_SELECTED );
                setEventStyle({});
            }else{
                if( eventListById[ value ] ){
                    let { name, style } = eventListById[ value ];
                    setEventStyle( style );
                    setEventNameValue( name );
                }else{
                    changeHandler( null );
                };
            };
        }else{
            setSelectedEventId( null );
            setMenuIsOpen( false );
            setEventStyle({});
            setEventNameValue( EVENT_NAME_NOT_SELECTED );

        };

    }, [ isOpen ] );

    useEffect( () => {
        
        if( eventListById[ selectedEventId ] ){
            if( selectedEventId === null ){
                setEventStyle( {} );
                setEventNameValue( EVENT_NAME_NOT_SELECTED );
            }else{
                let { name, style } = eventListById[ selectedEventId ];
                setEventStyle( style );
                setEventNameValue( name );
            };
            
        }else{
            setEventStyle( {} );
            setEventNameValue( EVENT_NAME_NOT_SELECTED );
        };
    }, [ selectedEventId ] )



    const eventClick = ( id ) => {
        changeHandler( id );
        setSelectedEventId( id );
        if( alwaysIsOpen === false ){
            setMenuIsOpen( false );
        };
    }



    const changeIsOpen = ( val ) => {
        if( alwaysIsOpen === false ){
            setMenuIsOpen( val );
        };
    }

    const create = ( list ) => {

        let div = list.map( ( item, index ) => {
            let {
                category_id,
                isOpen,
                eventsList,
            } = item;

            return (
                <ECBS_CategoryItem
                    key = { index }

                    category_id =           { category_id }
                    isOpen =                { isOpen }
                    eventsList =            { eventsList }
                    listTree =              { listTree }
                    setListTree =           { setListTree }
                    selectedEventId =       { selectedEventId }
                    eventClick =            { eventClick }
                />
            );
            

        } );

        return div;

    };

    return (
        <div className = 'eventByCategorySelect' style = { alwaysIsOpen? { marginBottom: `${maxHeight}${maxHeightUnit}` }: {} }>
            <h3>Событие:</h3>

            <div className = 'ECBS_wrap'>
                <h4 onClick = { () => { changeIsOpen( !menuIsOpen ) } }>
                    <span className = 'ECBS_wrap_appir' style = { eventStyle } >
                        { eventNameValue }
                    </span>
                </h4>

                <div 
                    className = 'ECBS_btn'
                    onClick = { () => { changeIsOpen( !menuIsOpen ) }}
                >
                    <span className = { `ECBS_btn_icon ${menuIsOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                </div>

                { menuIsOpen? (
                    <div className = 'ECBS_tree_list' style = { { height: `${maxHeight - 2}${maxHeightUnit}`} }>
                        { create( listTree ) }
                    </div>
                ): ''}

            </div>

        </div>
    )

};

export function EventByCategorySelect( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <EventByCategorySelectComponent
            { ...props }
            // categoryList = { layout.categoryList }
            // categoryListById = { layout.categoryListById }
            // eventList = { layout.eventList }
            eventListById = { layout.eventListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
