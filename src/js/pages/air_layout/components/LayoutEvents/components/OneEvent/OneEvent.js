
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OneEvent.scss';

// import { EventNonesInput } from './../EventNonesInput/EventNonesInput.js';
// import { EventCategoryItem } from './../EventCategoryItem/EventCategoryItem.js';
// import { EventRemoveItem } from './../EventRemoveItem/EventRemoveItem.js';
// import { EventNameInput } from './../EventNameInput/EventNameInput.js';
// import { EventDurationItem } from './../EventDurationItem/EventDurationItem.js';

import { EventTypeItem } from './components/EventTypeItem/EventTypeItem.js';
import { EventPrefixItem } from './components/EventPrefixItem/EventPrefixItem.js';
import { EventDurationItem } from './components/EventDurationItem/EventDurationItem.js';
import { EventNameInput } from './components/EventNameInput/EventNameInput.js';
import { EventNonesInput } from './components/EventNonesInput/EventNonesInput.js';
import { EventCategoryItem } from './components/EventCategoryItem/EventCategoryItem.js';
import { EventRemoveItem } from './components/EventRemoveItem/EventRemoveItem.js';

import { EVENT_TYPE } from './../../../../../../config/layout.js';

const OneEventComponent = ( props ) => {

    let {
        id,
        name,
        category,
        notes,
        type,
        durationTime,
    } = props;


    return (

        <div className = 'LE_OneEvent' >
            <div className = 'LE_OneEvent_wrap_'>

                <EventTypeItem 
                    type = { type }
                />

                <EventPrefixItem 
                    category = { category }
                />

                <EventDurationItem 
                    id = { id }
                    durationTime = { durationTime }
                />

                <EventNameInput 
                    id =        { id }
                    name =      { name }
                    category =  { category }
                    type =      { type }
                />

                <EventNonesInput 
                    id = { id }
                    notes = { notes }
                />

                <EventCategoryItem 
                    id = { id }
                    category = { category }
                />

                <EventRemoveItem 
                    id = { id }
                />
            </div>
        </div>

    )

};

export function OneEvent( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <OneEventComponent
            { ...props }
            // categoryList = { layout.categoryList }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
