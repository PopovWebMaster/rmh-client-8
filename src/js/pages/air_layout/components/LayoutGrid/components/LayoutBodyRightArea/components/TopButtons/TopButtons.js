
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TopButtons.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';


const TopButtonsComponent = ( props ) => {

    let {
        activeTab,
        setActiveTab, // 'free_release' events

    } = props;

    return (
       <div className = 'LBAR_TopButtons'>

            <div
                className = { `LBAR_btn ${ activeTab === 'events'? 'isActive': '' }` }
                onClick = { () => { setActiveTab( 'events' ) } }
            >
                <span>События</span>
            </div>

            <div
                className = { `LBAR_btn ${ activeTab === 'free_release'? 'isActive': '' }` }
                onClick = { () => { setActiveTab( 'free_release' ) } }
            >
                <span>Меж.прогр.</span>
            </div>

       </div>
    )

};


export function TopButtons( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <TopButtonsComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
