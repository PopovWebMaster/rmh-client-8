
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SelectedEvents.scss';

import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import { EVENT_NAME_NOT_SELECTED } from './../../config/layout.js';

const SelectedEventsComponent = ( props ) => {

    let {

        title = 'Сибытие',
        eventNameNoSelected = null,
        eventId,
        setEventId,
        onlyCategoryId = 'all_categoryes',


        eventList,
        eventListById,


    } = props;



    const getEeventName = ( event_id ) => {
        let result = EVENT_NAME_NOT_SELECTED;
        if( event_id === null ){
            if( eventNameNoSelected !== null ){
                result = eventNameNoSelected;
            };
        }else{
            if( eventListById[ event_id ] ){
                result = eventListById[ event_id ].name;
            }else{
                if( eventNameNoSelected !== null ){
                    result = eventNameNoSelected;
                };
            };
        };

        return result;
    };


    let [ eventsIsOpen, setEventsIsOpen ] = useState( false );
    let [ eventNameValue, setEventNameValue ] = useState( getEeventName( eventId ) );

    let [ filterEventList, setFilterEventList ] = useState( [] );

    useEffect( () => {
        setEventNameValue( getEeventName( eventId ) );

    }, [ eventId ] );

    useEffect( () => {

        if( onlyCategoryId === 'all_categoryes' ){
            setFilterEventList( eventList );
        }else{
            let list = [];
            for( let i = 0; i < eventList.length; i++ ){
                let { category_id } = eventList[ i ];
                if( category_id === onlyCategoryId ){
                    list.push( { ...eventList[ i ] } );
                };
            };
            setFilterEventList( list );
        };

    }, [ onlyCategoryId ] );

    const eventClick = ( id ) => {
        setEventId( id );
        setEventsIsOpen( false );
    }

    const createEventsList = ( arr ) => {

        let li = arr.map( ( item, index ) => {

            if( index === 0 ){
                return (<React.Fragment
                    key = { index }
                >
                    <li
                        onClick = { () => {
                            eventClick( null );
                        } }
                    >{ eventNameNoSelected === null? EVENT_NAME_NOT_SELECTED: eventNameNoSelected }</li>
                    <li
                        
                        onClick = { () => {
                            eventClick( item.id );
                        } }
                    >{ item.name }</li>
                </React.Fragment>);
            }else{
                return (
                    <li
                        key = { index }
                        onClick = { () => {
                            eventClick( item.id );
                        } }
                    >{ item.name }</li>
                );
            };


        } );

        return li;

    }

    return (

        <div className = 'selectedEvents'>
            <h3>{ `${title}:` }</h3>

           <div 
                className = 'selectedEvents_drop_down'
                // onMouseLeave = { () => { setEventsIsOpen( false ) } }
            >

                <h4
                    onClick = { () => { setEventsIsOpen( !eventsIsOpen ) }}
                >{ eventNameValue }</h4>
                <div 
                    className = 'SEDD_btn'
                    onClick = { () => { setEventsIsOpen( !eventsIsOpen ) }}
                >
                    <span className = { `SEDD_btn_icon ${eventsIsOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                </div>

                { eventsIsOpen? (
                    <ul className = 'SEDD_list'>
                        { createEventsList( filterEventList ) }
                    </ul>
                ): '' }
                
            </div> 
        </div>

    )

};

export function SelectedEvents( props ){

    const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <SelectedEventsComponent
            { ...props }

            eventList = { layout.eventList }
            eventListById = { layout.eventListById }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}



// category_id
// : 
// 9
// durationTime
// : 
// "00:03:00"
// id
// : 
// 11
// name
// : 
// "Реклама БЛОК"
// notes
// : 
// "111"
// type
// : 
// "block"
