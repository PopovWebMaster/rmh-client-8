
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EventPrefixItem.scss';

const EventPrefixItemComponent = ( props ) => {

    let {
        category,
    } = props;


    return (

        <div className = 'LE_OETF_prefix'>
            <input 
                type =      'text'
                value =     { category.prefix }
                onChange =  { () => {} }
            />
        </div>

    )

};

export function EventPrefixItem( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <EventPrefixItemComponent
            { ...props }
            // categoryList = { layout.categoryList }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
