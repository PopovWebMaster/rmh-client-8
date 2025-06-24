
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EventNameItem.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { EVENT_TYPE } from './../../../../../../../../config/layout.js';


const EventNameItemComponent = ( props ) => {

    let {
        eventId,
        cutPart,

        eventListById,
        categoryListById,
    } = props;

    let [ eventName, setEventName ] = useState('');
    let [ eventType, setEventType ] = useState('');
    let [ categoryColorBG, setCategoryColorBG ] = useState('');
    let [ categoryColorText, setCategoryColorText ] = useState('');
    

    useEffect( () => {
        if( eventListById[ eventId ] ){
            let { 
                category_id,
                name,
                type,
            } = eventListById[ eventId ];

            setEventName( name );
            setEventType( type );

            if( categoryListById[ category_id ] ){

                let { 
                    colorBG,
                    colorText
                } = categoryListById[ category_id ];

                setCategoryColorBG( colorBG );
                setCategoryColorText( colorText );
                
            };
        };
    }, [ 
        eventId,
        eventListById,
        categoryListById,
    ]);

    const get_style = ( type ) => {

        let result = {
            backgroundColor: '#ffffff00',
            color: '#ffffff00',
        };

        if( type === EVENT_TYPE.FILE ){
            result.backgroundColor = categoryColorBG;
            result.color = categoryColorText;

        }else if( type === EVENT_TYPE.BLOCK ){
            result.backgroundColor = '#ffffff';
            result.color = '#716969';
            result.borderColor = categoryColorBG;
        };

        return result;

    }
    


    return (
        <div className = 'CTS_EventNameItem'>
            <input 
                type =      'text'
                value =     { eventName }
                maxLength = { 255 }
                onChange =  { () => {} }
                style =     { get_style( eventType ) }
            />
            { cutPart !== null? (
                <div className = 'curPartName'>
                    <span>
                        <span className = 'icon icon-scissors'></span>
                        <span className = 'num'>{ cutPart }</span>
                    </span>
                </div>
            ): '' }
        </div>
    )

};

export function EventNameItem( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <EventNameItemComponent
            { ...props }
            layout = { layout }
            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
