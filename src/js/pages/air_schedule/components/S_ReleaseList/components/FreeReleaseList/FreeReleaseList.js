
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FreeReleaseList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';

// import { get_filter_data } from './vendors/get_filter_data.js';
// import { get_filtered_list } from './vendors/get_filtered_list.js';

// import { FilterButtons } from './components/FilterButtons/FilterButtons.js';
// import { FilterList } from './components/FilterList/FilterList.js';


import { FRL_AddButton } from './components/FRL_AddButton/FRL_AddButton.js';

import { FRL_FilterButtons } from './components/FRL_FilterButtons/FRL_FilterButtons.js';
import { FRL_ActiveList } from './components/FRL_ActiveList/FRL_ActiveList.js';

import { FRL_SortButton } from './components/FRL_SortButton/FRL_SortButton.js';

import { SetFreeReleaseListFromServer } from './../SetFreeReleaseListFromServer/SetFreeReleaseListFromServer.js';



const FreeReleaseListComponent = ( props ) => {

    let {
        releaseList,

    } = props;

    let [ buttonsHeight, setButtonsHeight ] = useState( 0 );

    let [ listIsActive, setListIsActive ] = useState( false );

    return (
       <div className = 'freeReleaseList'>
            <SetFreeReleaseListFromServer>
                <div className = 'freeReleaseList_buttons'>

                    <div className = 'FRL_buttons_left'>
                        <FRL_SortButton 
                        
                        />

                    </div>

                    
                    <FRL_AddButton
                        setListIsActive = { setListIsActive }
                    />
                </div>

                <FRL_FilterButtons 
                    isOpen  =           { listIsActive }
                    setButtonsHeight =  { setButtonsHeight }
                    fontSize =          { '0.9em' }
                />

                <FRL_ActiveList
                    isOpen =            { listIsActive }
                    buttonsHeight =     { buttonsHeight }
                />
            </SetFreeReleaseListFromServer>
       </div>
    )

};


export function FreeReleaseList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FreeReleaseListComponent
            { ...props }

            releaseList = { scheduleResult.releaseList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
