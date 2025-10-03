

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterEventsButton.scss';

import { selectorData as applicationSlice, setCurrentEventIdOfListFilter } from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


const FilterEventsButtonComponent = ( props ) => {

    let {
        filterEventList,
        currentEventIdOfListFilter,

        setCurrentEventIdOfListFilter,


    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let { style, name, id } = item;

            let isActive = currentEventIdOfListFilter === id;

            return (
                <div 
                    className = { `AL_btn ${ isActive? 'isActive': ''}` }
                    style = { style }
                    key = { index }

                    onClick = { () => { setCurrentEventIdOfListFilter( id ) } }
                >
                    <span>{ name }</span>
                </div>
            );

        } );

        return div;

    };



    
    return (
        <div className = 'AL_FilterEventsButton'>
            { create( filterEventList ) }
        </div>
    )

};

export function FilterEventsButton( props ){

    const application = useSelector( applicationSlice );
    const layout = useSelector( layoutSlice );

    const dispatch = useDispatch();

    return (
        <FilterEventsButtonComponent
            { ...props }
            filterEventList = { application.filterEventList }
            currentEventIdOfListFilter = { application.currentEventIdOfListFilter }
            setCurrentEventIdOfListFilter = { ( val ) => { dispatch( setCurrentEventIdOfListFilter( val ) ) } }


        />
    );


}
