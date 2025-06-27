
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './A_AddButton.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';


const A_AddButtonComponent = ( props ) => {

    let {
        title,
        clickHandler,
    } = props;

    return (
        <div className = 'A_AddButton'>
            
            <div 
                className = 'A_AddButton_wrap'
                onClick = { clickHandler }
            >
                <span className = 'icon-plus A_AddButton_icon'></span>
                <span className = ''>{ title }</span>
            </div>

        </div>
    )

};

export function A_AddButton( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <A_AddButtonComponent
            { ...props }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
