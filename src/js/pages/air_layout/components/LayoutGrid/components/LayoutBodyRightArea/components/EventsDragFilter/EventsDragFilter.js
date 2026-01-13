
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventsDragFilter.scss';

import { selectorData as layoutSlice, setEventsDragFilterCategoryId } from './../../../../../../../../redux/layoutSlice.js';

import { round_to_number } from './../../../../../../../../helpers/round_to_number.js';

const EventsDragFilterComponent = ( props ) => {

    let {
        setFilterHeight = () => {},

        categoryList,

        eventsDragFilterCategoryId,
        setEventsDragFilterCategoryId
       
    } = props;

    let elemRef = useRef();

    useEffect( () => {
        if( eventsDragFilterCategoryId === null ){
            if( categoryList[ 0 ] ){
                setEventsDragFilterCategoryId( categoryList[ 0 ].id );
            };
        };
    }, [ eventsDragFilterCategoryId ] );

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
                    className = { `EARL_Filter_btn LBRA_Filter_btn  ${ id === currentCategoryId? 'isActive': '' }` }
                    key = { index }
                    style = {{
                        backgroundColor: colorBG,
                        color: colorText,
                    }}
                    onClick = { () => { setEventsDragFilterCategoryId( id ) } }
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
            className = 'LBRA_FilterButtons' 
            ref =   { elemRef }
        >
            { create( categoryList, eventsDragFilterCategoryId ) }

        </div>
    )

};

export function EventsDragFilter( props ){

    const layout = useSelector( layoutSlice );

    const dispatch = useDispatch();

    return (
        <EventsDragFilterComponent
            { ...props }

            categoryList = { layout.categoryList }
            eventsDragFilterCategoryId = { layout.eventsDragFilterCategoryId }

            setEventsDragFilterCategoryId = { ( val ) => { dispatch( setEventsDragFilterCategoryId( val ) ) } }

        />
    );


}


