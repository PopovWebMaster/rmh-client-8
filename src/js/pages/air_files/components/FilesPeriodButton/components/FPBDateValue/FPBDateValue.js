
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';

// import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';

import './FPBDateValue.scss';

const FPBDateValueComponent = ( props ) => {

    let {
        value,
    } = props;

    const getDate = ( str ) => {
        let result = '---- -- --';
        if( typeof str === 'string' ){
            let arr = str.split( '-' );
            if( arr[ 2 ] ){
                result = `${arr[0]}.${arr[1]}.${arr[2]}`;
            };
        };
        return result;
    }

    return (
        <div className = 'FPBDateValue'>
            <span className = 'FPBDateValue_item'>{ getDate( value ) }</span>
        </div>
    )

};

export function FPBDateValue( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <FPBDateValueComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
