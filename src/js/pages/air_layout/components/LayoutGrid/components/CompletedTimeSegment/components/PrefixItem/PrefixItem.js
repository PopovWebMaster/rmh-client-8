
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PrefixItem.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


const PrefixItemComponent = ( props ) => {

    let {
        eventId,
        eventListById,
        categoryListById,
    } = props;

    let [ prefix, setPrefix ] = useState( '' );

    useEffect( () => {
        if( eventListById[ eventId ] ){
            let { category_id } = eventListById[ eventId ];
            if( categoryListById[ category_id ] ){
                setPrefix( categoryListById[ category_id ].prefix );
            };
        };
    }, [ 
        eventId,
        eventListById,
        categoryListById,
    ]);

    return (
        <div className = 'CTS_PrefixItem'>
            <input 
                type = 'text'
                value = { prefix }
                onChange = { () => {} }
            />
        </div>
    )

};

export function PrefixItem( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <PrefixItemComponent
            { ...props }
            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
