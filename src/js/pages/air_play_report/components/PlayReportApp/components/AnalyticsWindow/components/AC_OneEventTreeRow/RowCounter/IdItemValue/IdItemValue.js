
import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './IdItemValue.scss';


const IdItemValueComponent = ( props ) => {

    let {
        value,
        className = '',

        subZnak = null,

    } = props;


    return (
        <td className = { `AC_RowCounter_IdItemValue ${value === 0? 'isHidden': ''}` } >
            <input
                type = 'text'
                value = { value }
                onChange = { () => {} }
            />
            { subZnak === null? '': <span className = 'subZnak' >{ subZnak }</span> }
        </td>
    )

};

export function IdItemValue( props ){
    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();
    return (
        <IdItemValueComponent
            { ...props }
            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }
        />
    );


}
