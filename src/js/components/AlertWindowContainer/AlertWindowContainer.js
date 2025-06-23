
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './AlertWindowContainer.scss';



const AlertWindowContainerComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        title = '',
        width = '25vw',
        height = '20vh',

        showCurrentDayName = false,

        children,

        gridCurrentDayName,

    } = props;

    let [ opacity, setOpacity ] = useState( 0 );
    useEffect( () => {
        let timerId = setTimeout(() => {
            setOpacity( 1 );
            clearTimeout( timerId );
        }, 500 );
        
    }, [] );
    
    return (
        <div 
            className = { `AlertWindowContainer ${isOpen? 'isOpen': 'isClose'}` }
            style = { { opacity } }
        >

            <div 
                className = { `AWC_window ${isOpen? 'isOpen': 'isClose'}` }
                style = {{
                    width,
                    height,
                }}
            >
                <div className = 'AWC_window_header'>
                    <div className = 'AWC_window_header_title'>
                        <h2>{ title }</h2>
                    </div>
                    <div className = 'AWC_window_header_close'>
                        <span 
                            className = 'icon-cancel-2'
                            onClick = { () => { setIsOpen( false ) } }
                        ></span>
                    </div>
                </div>

                { showCurrentDayName? (
                    <div className = 'AWC_window_body_carrentDay'>
                        <span>{ gridCurrentDayName }</span>
                    </div>
                ): '' }

                

                <div className = { showCurrentDayName? 'AWC_window_body heightShort': 'AWC_window_body heightFull' }>
                    { children } 
                </div>

            </div>

        </div>
    )

};

export function AlertWindowContainer( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AlertWindowContainerComponent
            { ...props }
            gridCurrentDayName = { layout.gridCurrentDayName }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
