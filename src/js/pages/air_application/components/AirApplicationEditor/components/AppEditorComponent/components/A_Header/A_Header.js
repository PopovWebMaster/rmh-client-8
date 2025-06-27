
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './A_Header.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';

import { InputAppNum } from './../InputAppNum/InputAppNum.js';

const A_HeaderComponent = ( props ) => {

    let {
    } = props;

    return (
        <div className = 'A_Header'>
            <h4>Заявка №:</h4>
            <InputAppNum />
        </div>
    )

};

export function A_Header( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <A_HeaderComponent
            { ...props }
            // currentAppNum = { application.currentAppNum }
            // currentAppName = { application.currentAppName }
            // currentAppType = { application.currentAppType }



            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
