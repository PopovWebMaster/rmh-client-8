
import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './AWButtonAdd.scss';

const AWButtonAddComponent = ( props ) => {

    let {
        isReady,
        clickHandler,

    } = props;

    const click = () => {
        if( isReady ){
            clickHandler();
        };
    }


    return (
        <div className = 'AW_item AWButtonAdd'>
            <span 
                className = { isReady? 'icon-plus AWButtonAdd_isActive': 'icon-plus ' }

                onClick = { click }
            ><span>Добавить</span></span>
        </div>
    )

};

export function AWButtonAdd( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AWButtonAddComponent
            { ...props }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
