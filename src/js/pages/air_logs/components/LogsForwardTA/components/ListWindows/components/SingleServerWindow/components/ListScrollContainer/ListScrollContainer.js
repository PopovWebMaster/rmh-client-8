
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../../../../../redux/logsForwardTASlise.js';

import './ListScrollContainer.scss';

const ListScrollContainerComponent = ( props ) => {

    let {
        server,
        children,
        borderMoverWidtnPx,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    let componentRef = useRef();

    useEffect( () => {

        let elem = componentRef.current;
        let { height } = window.getComputedStyle( elem );

        let height_px = parseFloat( height );
        let windowHeight = document.documentElement.clientHeight;

        let height_vh = Math.floor( height_px * 100 / Number( windowHeight ) );
        elem.style.height = `${height_vh}vh`;
        setIsReady( true );

    }, [] );



    return (
        <div 
            className = 'FTA_ListScroll'
            ref = { componentRef }
            style = {{
                marginRight: `${borderMoverWidtnPx/2}px`
            }}
        >
            { isReady? children: '' }
        </div>
    )

};

export function ListScrollContainer( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <ListScrollContainerComponent
            { ...props }
            borderMoverWidtnPx  = { logsForwardTA.borderMoverWidtnPx }


            // setSelectedAll = { ( val ) => { dispatch( setSelectedAll( val ) ) } }

        />
    );


}
