// ItemBlindChar


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemBlindChar.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';

import { BLIND_STYLE, BLIND_CHAR_NAME } from './../../../../../../../../config/layout.js';

const ItemBlindCharComponent = ( props ) => {

    let {
        isBlindChar,
        setIsBlindChar,

    } = props;

    let [ value,    setValue ] = useState( isBlindChar );

    useEffect( () => {
        setValue( isBlindChar );
    }, [ isBlindChar ] );



    const change = () => {
        setIsBlindChar( !value );
    }
    
    return (
        <div className = 'ANAppl_ItemBlindChar'>
            <h4>
                <input
                    type = 'checkbox'
                    className = 'ItemBlindChar_inp'
                    // checked = { true }
                    value = { value }
                    onChange = { change }
                />
                <span
                    style = { BLIND_STYLE }
                >{ BLIND_CHAR_NAME }</span>
            </h4>

        </div>
    )

};

export function ItemBlindChar( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <ItemBlindCharComponent
            { ...props }

            applicationList = { application.applicationList }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


        />
    );


}
