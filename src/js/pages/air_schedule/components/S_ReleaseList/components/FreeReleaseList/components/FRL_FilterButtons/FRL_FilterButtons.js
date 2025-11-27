
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_FilterButtons.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { FRL_CategoryButtons } from './FRL_CategoryButtons/FRL_CategoryButtons.js';
import { FRL_EventsButtons } from './FRL_EventsButtons/FRL_EventsButtons.js';
import { round_to_number } from './../../../../../../../../helpers/round_to_number.js';


const FRL_FilterButtonsComponent = ( props ) => {

    let {
        isOpen,
        fontSize = '1em',
        setButtonsHeight = () => {},

        freeReleasesFiltered,
        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
       
    } = props;

    let elemRef = useRef();

    useEffect( () => {

        if( isOpen ){
            set_buttons_height();
        }else{
            setButtonsHeight( 0 );
        };
    }, [
        isOpen,
        freeReleasesFiltered,
        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
    ] );

    useEffect( () => {
        window.onresize = set_buttons_height;
        return () => {
            window.onresize = null;
        };
    }, [] );

    const set_buttons_height = () => {
        let { height, fontSize } = window.getComputedStyle( elemRef.current );
        let height_px = parseFloat( height );
        let fontSize_px = parseFloat( fontSize );

        setButtonsHeight( round_to_number( height_px / fontSize_px, 2 ) );
    };


    return (
        <div 
            className = 'FRL_FilterButtons' 
            ref = { elemRef }
            style = { { fontSize } }
        >

            <FRL_CategoryButtons
                isOpen = { isOpen }
            />

            <FRL_EventsButtons
                isOpen = { isOpen }
            />

        </div>
    )

};

export function FRL_FilterButtons( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FRL_FilterButtonsComponent
            { ...props }

            freeReleasesFiltered = { scheduleResult.freeReleasesFiltered }
            freeReleasesFilterCategoryId = { scheduleResult.freeReleasesFilterCategoryId }
            freeReleasesFilterEventId = { scheduleResult.freeReleasesFilterEventId }



            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}


