
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LBCA_ScrollButtons.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../redux/layoutSlice.js';

// import { selectorData as countersSlise, setCounterList } from './../../../../../../redux/countersSlise.js';
import { convert_sec_to_time } from './../../../../../../../helpers/convert_sec_to_time.js';



const LBCA_ScrollButtonsComponent = ( props ) => {

    let {

        // scheduleResult,
        // scheduleEventBySectors,

        layout,
        gridOneDayList,
    } = props;

    let [ list, setList ] = useState( [] );

    const over = () => {

        let arr = [];
        for( let i = 0; i < gridOneDayList.length; i++ ){
            arr.push( gridOneDayList[ i ].sector_start_time );
        };
        setList( arr );

    }

    const leave = () => {

    }

    const click_up = () => {
        let GDE_OneSector = document.querySelectorAll( '.GDE_OneSector' );
        if( GDE_OneSector[ 0 ] ){
            GDE_OneSector[ 0 ].scrollIntoView({ behavior: "smooth" });
        };
    }

    const click_down = () => {
        let schEventContainer = document.querySelectorAll( '.grigItem.isCompletd_' );
        if( schEventContainer[ schEventContainer.length - 1 ] ){
            schEventContainer[ schEventContainer.length - 1 ].scrollIntoView({ behavior: "smooth" });
        };
    }

    const click = ( sector_start_time ) => {

        // GDE_OneSector sector_${sector_start_time}

        console.dir( sector_start_time );

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
                    className = 'LBCA_btn_key'
                    onClick = { () => { click( item ) } }
                >
                    <span className = 'LBCA_btn_time'>{ convert_sec_to_time( item ) }</span>
                </div>
            );

        } );
        return div;

    };



    return (
       <div
            className = 'LBCA_ScrollButtons'
            onMouseOver = { over }
            onMouseLeave = { leave }

        >

            <div className = 'LBCA_btn_wrap'>
                { create( list ) }
            </div>
            

            <div className = 'LBCA_btn_arrow'>
                <span
                    className = 'LBCA_btn_icon icon-up-open-1'
                    onClick = { click_up }
                ></span>
            </div>

            <div className = 'LBCA_btn_arrow'>
                <span
                    className = 'LBCA_btn_icon icon-down-open-1'
                    onClick = { click_down }
                ></span>
            </div>


            

          
            
       </div>
    )

};


export function LBCA_ScrollButtons( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <LBCA_ScrollButtonsComponent
            { ...props }

            // scheduleEventBySectors = { scheduleResult.scheduleEventBySectors }
            // scheduleResult = { scheduleResult }

            layout = { layout }

            gridOneDayList = { layout.gridOneDayList }


            // setCounterList = { ( obj ) => { dispatch( setCounterList( obj ) ) } }

        />
    );


}
