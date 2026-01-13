
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EventsDragList.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';

// import { EARL_FilterButtons } from './components/EARL_FilterButtons/EARL_FilterButtons.js';
// import { EARL_ActiveList } from './components/EARL_ActiveList/EARL_ActiveList.js';

import { EventsDragFilter } from './../EventsDragFilter/EventsDragFilter.js';
import { EventsDragActiveList } from './../EventsDragActiveList/EventsDragActiveList.js';



const EventsDragListComponent = ( props ) => {

    let {
        // releaseList,

    } = props;

    let [ filterHeight, setFilterHeight ] = useState( 0 );

    // let [ listIsActive, setListIsActive ] = useState( false );




    return (
       <div className = 'LBAR_EventsDragList'>

            {/* <EventsDragFilter
                setFilterHeight = { setFilterHeight }
            />

            <EventsDragActiveList
                filterHeight = { filterHeight }
            /> */}

       </div>
    )

};


export function EventsDragList( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <EventsDragListComponent
            { ...props }

            // releaseList = { scheduleResult.releaseList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
