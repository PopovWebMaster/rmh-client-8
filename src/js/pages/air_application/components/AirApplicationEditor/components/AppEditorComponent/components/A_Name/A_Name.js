
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './A_Name.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';

const A_NameComponent = ( props ) => {

    let {
        currentAppName,

    } = props;



    return (
        <div className = 'A_Name'>
            <h4>Название:</h4>

            <input 
                className = 'A_Name_input'
                type =      'text'
                value =     { currentAppName }
                onChange =  { () => {} }
            />

        </div>
    )

};

export function A_Name( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <A_NameComponent
            { ...props }
            currentAppNum = { application.currentAppNum }
            currentAppName = { application.currentAppName }
            currentAppType = { application.currentAppType }



            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
