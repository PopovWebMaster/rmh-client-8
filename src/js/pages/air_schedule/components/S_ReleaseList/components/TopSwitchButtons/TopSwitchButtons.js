
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TopSwitchButtons.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';


const TopSwitchButtonsComponent = ( props ) => {

    let {
        activeTab,
        setActiveTab, // 'buffer' 'list' 'free_release'

    } = props;

    return (
       <div className = 'topSwitchButtons'>
            <div 
                className = { `TSB_btn ${ activeTab === 'buffer'? 'isActive': '' }` }
                onClick = { () => { setActiveTab( 'buffer' ) } }
            >
                <span>Буфер</span>
            </div>

            <div
                className = { `TSB_btn ${ activeTab === 'list'? 'isActive': '' }` }
                onClick = { () => { setActiveTab( 'list' ) } }
            >
                <span>Список</span>
            </div>

            <div
                className = { `TSB_btn ${ activeTab === 'free_release'? 'isActive': '' }` }
                onClick = { () => { setActiveTab( 'free_release' ) } }
            >
                <span>Межпрогр. ролики</span>
            </div>

       </div>
    )

};


export function TopSwitchButtons( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <TopSwitchButtonsComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
