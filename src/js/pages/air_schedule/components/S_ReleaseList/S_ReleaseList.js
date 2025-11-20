
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './S_ReleaseList.scss';

import { selectorData as scheduleResultSlise } from './../../../../redux/scheduleResultSlise.js';

import { TopSwitchButtons } from './components/TopSwitchButtons/TopSwitchButtons.js';
import { ReleaseBuffer } from './components/ReleaseBuffer/ReleaseBuffer.js';
import { ReleaseList } from './components/ReleaseList/ReleaseList.js';

import { FreeReleaseList } from './components/FreeReleaseList/FreeReleaseList.js';


const S_ReleaseListComponent = ( props ) => {

    let {

    } = props;

    let [ activeTab, setActiveTab ] = useState( 'buffer' ); // 'buffer' 'list' 'free_release'

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
    // const dispatch = useDispatch();

    return (
        <S_ReleaseListComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
