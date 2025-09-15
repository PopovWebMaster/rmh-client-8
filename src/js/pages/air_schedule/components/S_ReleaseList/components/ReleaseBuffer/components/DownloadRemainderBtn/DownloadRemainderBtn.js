
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { ReleaseRemainderClass } from './../../../../../../../../classes/ReleaseRemainderClass.js';

import './DownloadRemainderBtn.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { BuffferButtonContainer } from './../BuffferButtonContainer/BuffferButtonContainer.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../../classes/StoreScheduleResultEventsClass.js';

import { get_free_list } from './../BufferList/vendors/get_free_list.js';

const DownloadRemainderBtnComponent = ( props ) => {

    let {
        scheduleEventsList,
        releaseList,

        usedReleasesById,

        scheduleResult,

    } = props;

    let [ isActive, setIsActive ] = useState( true );

    const click = () => {

        let free_list = get_free_list();
        let unusedList = [];
        for( let i = 0; i < free_list.length; i++ ){
            if( usedReleasesById[ free_list[ i ].id ] ){

            }else{
                unusedList.push( free_list[ i ] );
            };
        };

        let ReleaseRemainder = new ReleaseRemainderClass();
        ReleaseRemainder.AddReleaseList( unusedList );
        ReleaseRemainder.Download();



    }


    return (
        <BuffferButtonContainer 
            isActive =      { isActive }
            title =         'Скачать остаток'
            clickHandler =  { click }
        />

        
    )

};


export function DownloadRemainderBtn( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <DownloadRemainderBtnComponent
            { ...props }

            scheduleEventsList = { scheduleResult.scheduleEventsList }
            releaseList = { scheduleResult.releaseList }
            usedReleasesById = { scheduleResult.usedReleasesById }

            scheduleResult = { scheduleResult }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
