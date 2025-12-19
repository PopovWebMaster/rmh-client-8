
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetFreeReleaseListFromServer.scss';

import { selectorData as scheduleResultSlise, setFreeReleasesListFromServerIsGetting, setFreeReleasesList } from './../../../../../../redux/scheduleResultSlise.js';

// import { get_filter_data } from './vendors/get_filter_data.js';
// import { get_filtered_list } from './vendors/get_filtered_list.js';

// import { FilterButtons } from './components/FilterButtons/FilterButtons.js';
// import { FilterList } from './components/FilterList/FilterList.js';


// import { FRL_AddButton } from './components/FRL_AddButton/FRL_AddButton.js';

// import { FRL_FilterButtons } from './components/FRL_FilterButtons/FRL_FilterButtons.js';
// import { FRL_ActiveList } from './components/FRL_ActiveList/FRL_ActiveList.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { set_free_release_list } from './../../../../../../components/SetStartingDataFromServer/vendors/set_free_release_list.js';



const SetFreeReleaseListFromServerComponent = ( props ) => {

    let {
        // releaseList,
        freeReleasesListFromServerIsGetting,
        children,

        setFreeReleasesListFromServerIsGetting,
        setFreeReleasesList,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        if( freeReleasesListFromServerIsGetting ){
            setIsReady( true );
        }else{
            send_request_to_server({
                route: 'get-schedule-free-releases-list',
                data: {},
                successCallback: ( response ) => {
                    // console.dir( 'response' );
                    // console.dir( response );

                    setIsReady( true );

                    setFreeReleasesListFromServerIsGetting( true );
                    set_free_release_list( response );


                },
            });
        };

    }, [ freeReleasesListFromServerIsGetting ] );




    return (
        <>{ isReady? children: (
            <div className = 'SFRLFS_waite'>
                <span className = 'SFRLFS_waite_title'>Ждём</span>
                <span className = 'SFRLFS_waite_point_1'>.</span>
                <span className = 'SFRLFS_waite_point_2'>.</span>
                <span className = 'SFRLFS_waite_point_3'>.</span>
            </div>
        )}</>
    )

};


export function SetFreeReleaseListFromServer( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <SetFreeReleaseListFromServerComponent
            { ...props }

            freeReleasesListFromServerIsGetting = { scheduleResult.freeReleasesListFromServerIsGetting }

            setFreeReleasesListFromServerIsGetting = { ( val ) => { dispatch( setFreeReleasesListFromServerIsGetting( val ) ) } }
            setFreeReleasesList = { ( val ) => { dispatch( setFreeReleasesList( val ) ) } }



        />
    );


}
