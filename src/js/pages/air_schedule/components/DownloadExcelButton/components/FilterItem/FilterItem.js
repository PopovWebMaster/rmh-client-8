
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterItem.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { get_event_style } from './../../../../../../helpers/get_event_style.js';


const FilterItemComponent = ( props ) => {

    let {
        eventId,
        isUsed,
        withOnlyApplications,
        item_change_isUsed,
        item_change_whatTake,

        eventListById,

    } = props;

    let [ style, setStyle ] = useState({});
    let [ eventName, setEventName] = useState( '' );


    useEffect( () => {
        setStyle( get_event_style( eventId ) );
        if( eventListById[ eventId ] ){
            setEventName( eventListById[ eventId ].name );
        };
    }, [ eventId ] );


    const click_chack = () => {
        item_change_isUsed( !isUsed, eventId );
    }

    const click_what_take = ( val ) => {
        item_change_whatTake( val, eventId );
    };


    return (
        <div className = { `S_DExcelComponent_FilterItem ${ isUsed? 'isUsed': '' }` }>
            <div
                className = 'chackBtn'
                onClick = { click_chack }
            >
                { isUsed? (<span className = 'icon-ok-3'></span>): '' }
            </div>

            <div className = 'eventName'>
                <span style = { style }>{ eventName }</span>
            </div>

            { isUsed? (
                <div className = 'whatTake'>
                    <span
                        className = { `${withOnlyApplications? 'isActive': '' }` }
                        onClick = { () => { click_what_take( true ) } }
                    >только заявки</span>

                    <span
                        className = { `${!withOnlyApplications? 'isActive': '' }` }
                        onClick = { () => { click_what_take( false ) } }
                    >всё</span>

                </div>

            ): '' }


            
        </div>
        
    )

};


export function FilterItem( props ){

    const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <FilterItemComponent
            { ...props }
            eventListById = { layout.eventListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
