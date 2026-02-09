
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './S_ReleaseList.scss';

import { selectorData as scheduleResultSlise } from './../../../../redux/scheduleResultSlise.js';
import { selectorData as scheduleResultDragEventSlise } from './../../../../redux/scheduleResultDragEventSlise.js';


import { TopSwitchButtons } from './components/TopSwitchButtons/TopSwitchButtons.js';
import { ReleaseBuffer } from './components/ReleaseBuffer/ReleaseBuffer.js';
import { ReleaseList } from './components/ReleaseList/ReleaseList.js';

import { FreeReleaseList } from './components/FreeReleaseList/FreeReleaseList.js';

import { EventsAsReleaseList } from './components/EventsAsReleaseList/EventsAsReleaseList.js';


const S_ReleaseListComponent = ( props ) => {

    let {
        altKayList
    } = props;


    let [ activeTab, setActiveTab ] = useState( 'buffer' ); // 'buffer' 'list' 'free_release' 'events_as_release'

        useEffect( () => {
        let arr = Object.keys( altKayList );
        if( arr.length > 0  ){
            setActiveTab( 'buffer' );
        };

    }, [altKayList] );

    const create = ( val ) => {
        let result = '';

        switch( val ){
            case 'buffer':
                result = <ReleaseBuffer />
                break;

            case 'list':
                result = <ReleaseList />
                break;

            case 'free_release':
                result = <FreeReleaseList />
                break;

            case 'events_as_release':
                result = <EventsAsReleaseList />
                break;
        };

        return result;

    }

    return (
       <div className = 'S_ReleaseList'>
            <TopSwitchButtons 
                activeTab =     { activeTab }
                setActiveTab =  { setActiveTab }
            />

            { create( activeTab ) }

       </div>
    )

};


export function S_ReleaseList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const scheduleResultDragEvent = useSelector( scheduleResultDragEventSlise );


    // const dispatch = useDispatch();

    return (
        <S_ReleaseListComponent
            { ...props }

            altKayList = { scheduleResultDragEvent.altKayList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
