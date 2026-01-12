
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventsScrollButtons.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';
import { selectorData as countersSlise, setCounterList } from './../../../../../../redux/countersSlise.js';
import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';



const EventsScrollButtonsComponent = ( props ) => {

    let {
        // scheduleEventsList,
        // scheduleEventBySectors,
        // setCounterList,
        scheduleResult,
        scheduleEventBySectors,
    } = props;

    let [ list, setList ] = useState( [] );

    const over = () => {
        let arr = [];
        for( let i = 0; i < scheduleEventBySectors.length; i++ ){
            arr.push( scheduleEventBySectors[ i ].sector_start_time );
        };
        setList( arr );

    }

    const leave = () => {
        // console.dir( 'scheduleEventBySectors' );
        // console.dir( scheduleEventBySectors );
    }

    const click_up = () => {
        let SEC_OneSector = document.querySelectorAll( '.S_EventsList .SEC_OneSector' );
        if( SEC_OneSector[ 0 ] ){
            SEC_OneSector[ 0 ].scrollIntoView({ behavior: "smooth" });
        };
    }

    const click_down = () => {
        let schEventContainer = document.querySelectorAll( '.S_EventsList .schEventContainer' );
        if( schEventContainer[ schEventContainer.length - 1 ] ){
            schEventContainer[ schEventContainer.length - 1 ].scrollIntoView({ behavior: "smooth" });
        };
    }

    const click = ( sector_start_time ) => {
        let elem = document.getElementById( `sector_${sector_start_time}` );
        if( elem ){
            elem.scrollIntoView({ behavior: "smooth" });
        };
    }

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            return (
                <div
                    key = { index }
                    className = 'S_ESB_btn_key'
                    onClick = { () => { click( item ) } }
                >
                    <span className = 'S_ESB_btn_time'>{ convert_sec_to_time( item ) }</span>
                </div>
            );

        } );
        return div;

    };



    return (
       <div
            className = 'S_EventsScrollButtons'
            onMouseOver = { over }
            onMouseLeave = { leave }

        >

            {/* <div className = 'S_ESB_btn_key'>
                <span className = 'S_ESB_btn_time'>{ convert_sec_to_time( 100 ) }</span>
            </div> */}
            <div className = 'S_ESB_btn_wrap'>
                { create( list ) }
            </div>
            

            <div className = 'S_ESB_btn_arrow'>
                <span
                    className = 'S_ESB_btn_icon icon-up-open-1'
                    onClick = { click_up }
                ></span>
            </div>

            <div className = 'S_ESB_btn_arrow'>
                <span
                    className = 'S_ESB_btn_icon icon-down-open-1'
                    onClick = { click_down }
                ></span>
            </div>


            

          
            
       </div>
    )

};


export function EventsScrollButtons( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <EventsScrollButtonsComponent
            { ...props }

            scheduleEventBySectors = { scheduleResult.scheduleEventBySectors }
            scheduleResult = { scheduleResult }


            setCounterList = { ( obj ) => { dispatch( setCounterList( obj ) ) } }

        />
    );


}
