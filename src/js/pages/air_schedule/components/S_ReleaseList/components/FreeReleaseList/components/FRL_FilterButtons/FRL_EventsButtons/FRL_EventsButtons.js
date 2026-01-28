// FRL_EventsButtons


import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FRL_EventsButtons.scss';

import { selectorData as scheduleResultSlise, setFreeReleasesFilterEventId } from './../../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';

import { get_event_by_id } from './../../../../../../../../../helpers/get_event_by_id.js';

import { EVENT_TYPE } from './../../../../../../../../../config/layout.js';



const FRL_EventsButtonsComponent = ( props ) => {

    let {
        isOpen,

        freeReleasesFiltered,
        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
        setFreeReleasesFilterEventId,

        eventListById,


    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {

        if( isOpen ){

            if( freeReleasesFiltered[ freeReleasesFilterCategoryId ]){
                let idList = Object.keys( freeReleasesFiltered[ freeReleasesFilterCategoryId ] );
                let arr = [];

                for( let i = 0; i < idList.length; i++ ){
                    let eventId = Number( idList[ i ] );
                    let event = get_event_by_id( eventId );
                    if( event ){

                        let {
                            style,
                            name,
                            type
                        } = event;

                        let {
                            backgroundColor,
                            borderColor,
                            color,

                        } = style

                        let eventStyle = style;
                        if( type === EVENT_TYPE.FILE ){
                            eventStyle = {
                                backgroundColor,
                                color,
                            };
                        };

                        arr.push({
                            eventId,
                            eventName: name,
                            eventStyle: eventStyle,
                        });
                    };

                };

                setList( arr );
            }else{
                setList( [] );
            };

        }else{
            setList( [] );
        };

    }, [
        isOpen,
        freeReleasesFiltered,
        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
    ] );

    
    const click = ( eventId ) => {
        setFreeReleasesFilterEventId( eventId );
    }

    const create = ( arr ) => {
        let span = arr.map( ( item, index ) => {
            let {
                eventId,
                eventName,
                eventStyle,


            } = item;

            return (
                <span
                    className = { `FRL_EventsBtn ${ freeReleasesFilterEventId === eventId? 'isActive': '' }` }
                    onClick =       { () => { click( eventId ) } }
                    style =         { eventStyle }
                    key =           { index }
                    title = { eventName }
                >{ eventName }</span>
            );
        } );

        return span;

    }
    

    return (
        <div className = 'FRL_EventsButtons'>
            <span
                className = { `FRL_EventsBtnAll ${ freeReleasesFilterEventId === null? 'isActive': '' }` }
                onClick = { () => { click( null ) } }
            >Все</span>

            { create( list ) }

        </div>
    )

};

export function FRL_EventsButtons( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );


    const dispatch = useDispatch();

    return (
        <FRL_EventsButtonsComponent
            { ...props }

            freeReleasesFiltered = { scheduleResult.freeReleasesFiltered }
            freeReleasesFilterCategoryId = { scheduleResult.freeReleasesFilterCategoryId }
            freeReleasesFilterEventId = { scheduleResult.freeReleasesFilterEventId }


            // categoryListById = { layout.categoryListById }
            eventListById = { layout.eventListById }




            setFreeReleasesFilterEventId = { ( val ) => { dispatch( setFreeReleasesFilterEventId( val ) ) } }

        />
    );


}


