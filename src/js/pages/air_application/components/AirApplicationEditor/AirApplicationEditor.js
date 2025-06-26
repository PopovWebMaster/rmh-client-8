
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AirApplicationEditor.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

const AirApplicationEditorComponent = ( props ) => {

    let {

    } = props;

    return (
        <div>AirApplicationEditor</div>
    )

};


export function AirApplicationEditor( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirApplicationEditorComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
