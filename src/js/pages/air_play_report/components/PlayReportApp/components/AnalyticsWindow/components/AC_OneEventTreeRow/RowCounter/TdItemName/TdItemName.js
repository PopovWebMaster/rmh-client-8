// TdItemName


import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TdItemName.scss';


const TdItemNameComponent = ( props ) => {

    let {
        title,
        className = '',
        isActive = false,

    } = props;


    return (
        <td className = { `AC_RowCounter_TdItemName ${className} ${isActive? '': 'isHidden'}` } >
            <span>{ title }</span>
        </td>
    )

};

export function TdItemName( props ){
    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();
    return (
        <TdItemNameComponent
            { ...props }
            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }
        />
    );


}
