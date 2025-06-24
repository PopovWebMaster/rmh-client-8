
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EventTypeItem.scss';

import { EVENT_TYPE } from './../../../../../../../../config/layout.js';

const EventTypeItemComponent = ( props ) => {

    let {
        type,
    } = props;


    return (

        <div className = 'LE_OETF_type'>
            <span 
                className = { type === EVENT_TYPE.FILE? 'LE_OETF_type_file': type === EVENT_TYPE.BLOCK? 'LE_OETF_type_block': '' }
            >
                { type === EVENT_TYPE.FILE? 'Файл': type === EVENT_TYPE.BLOCK? 'Блок': '' }
            </span>
        </div>

    )

};

export function EventTypeItem( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <EventTypeItemComponent
            { ...props }
            // categoryList = { layout.categoryList }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
