
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../../../redux/logsForwardTASlise.js';

import './BorderMover.scss';

import { get_style_for_border_mover } from './vendors/get_style_for_border_mover.js';
import { mouse_down_handler } from './vendors/mouse_down_handler.js';

const BorderMoverComponent = ( props ) => {

    let {
        position, // 'right' 'left'
        windowLeftWidth,
        borderMoverWidtnPx,

    } = props;

    return (
        <div 
            className = 'FTA_BorderMover'
            style = { get_style_for_border_mover({ windowLeftWidth, borderMoverWidtnPx, position }, position) }
            onMouseDown = { mouse_down_handler }
        ></div>
    )

};

export function BorderMover( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <BorderMoverComponent
            { ...props }

            windowLeftWidth = { logsForwardTA.windowLeftWidth }
            borderMoverWidtnPx = { logsForwardTA.borderMoverWidtnPx }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
