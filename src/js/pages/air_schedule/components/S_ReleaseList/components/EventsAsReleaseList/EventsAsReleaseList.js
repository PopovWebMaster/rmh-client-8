
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EventsAsReleaseList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';

// import { get_filter_data } from './vendors/get_filter_data.js';
// import { get_filtered_list } from './vendors/get_filtered_list.js';

// import { FilterButtons } from './components/FilterButtons/FilterButtons.js';
// import { FilterList } from './components/FilterList/FilterList.js';


// import { FRL_AddButton } from './components/FRL_AddButton/FRL_AddButton.js';

// import { FRL_FilterButtons } from './components/FRL_FilterButtons/FRL_FilterButtons.js';
// import { FRL_ActiveList } from './components/FRL_ActiveList/FRL_ActiveList.js';

import { EARL_FilterButtons } from './components/EARL_FilterButtons/EARL_FilterButtons.js';
import { EARL_ActiveList } from './components/EARL_ActiveList/EARL_ActiveList.js';



const EventsAsReleaseListComponent = ( props ) => {

    let {
        releaseList,

    } = props;

    let [ filterHeight, setFilterHeight ] = useState( 0 );

    // let [ listIsActive, setListIsActive ] = useState( false );




    return (
       <div className = 'eventsAsReleaseList'>

            <EARL_FilterButtons
                setFilterHeight = { setFilterHeight }
            />

            <EARL_ActiveList
                filterHeight = { filterHeight }
            />

       </div>
    )

};


export function EventsAsReleaseList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <EventsAsReleaseListComponent
            { ...props }

            releaseList = { scheduleResult.releaseList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
