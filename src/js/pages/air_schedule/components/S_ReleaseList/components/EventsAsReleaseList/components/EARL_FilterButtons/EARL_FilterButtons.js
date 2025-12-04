
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EARL_FilterButtons.scss';

import { selectorData as scheduleResultSlise, setEventsAsReleaseFilterCategoryId } from './../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { round_to_number } from './../../../../../../../../helpers/round_to_number.js';

const EARL_FilterButtonsComponent = ( props ) => {

    let {
        setFilterHeight = () => {},

        categoryList,

        eventsAsReleaseFilterCategoryId,
        setEventsAsReleaseFilterCategoryId,
       
    } = props;

    let elemRef = useRef();

    useEffect( () => {

        if( eventsAsReleaseFilterCategoryId === null ){
            if( categoryList[ 0 ] ){
                setEventsAsReleaseFilterCategoryId( categoryList[ 0 ].id );
            };
        };

        

    }, [ eventsAsReleaseFilterCategoryId ] );

    const create = ( list, currentCategoryId ) => {

        let div = list.map( ( item, index ) => {

            let {
                colorBG, 
                colorText,
                id,
                name
            } = item;

            return (
                <span 
                    className = { `EARL_Filter_btn ${ id === currentCategoryId? 'isActive': '' }` }
                    key = { index }
                    style = {{
                        backgroundColor: colorBG,
                        color: colorText,
                    }}
                    onClick = { () => { setEventsAsReleaseFilterCategoryId( id ) } }
                >
                    { name }
                </span>
            )


        } );

        return div;

    }







    useEffect( () => {
        set_buttons_height();
        window.onresize = set_buttons_height;
        return () => {
            window.onresize = null;
        };
    }, [] );

    const set_buttons_height = () => {
        let { height, fontSize } = window.getComputedStyle( elemRef.current );
        let height_px = parseFloat( height );
        let fontSize_px = parseFloat( fontSize );

        setFilterHeight( round_to_number( height_px / fontSize_px, 2 ) );
    };


    return (
        <div 
            className = 'EARL_FilterButtons' 
            ref =   { elemRef }
        >
            { create( categoryList, eventsAsReleaseFilterCategoryId ) }

        </div>
    )

};

export function EARL_FilterButtons( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );

    const dispatch = useDispatch();

    return (
        <EARL_FilterButtonsComponent
            { ...props }

            eventsAsReleaseFilterCategoryId = { scheduleResult.eventsAsReleaseFilterCategoryId }
            categoryList = { layout.categoryList }

            setEventsAsReleaseFilterCategoryId = { ( val ) => { dispatch( setEventsAsReleaseFilterCategoryId( val ) ) } }

        />
    );


}


