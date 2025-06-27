
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './InputAppNum.scss';

import { selectorData as applicationSlice, setCurrentAppNum, setCurrentAppIsChanged } from './../../../../../../../../redux/applicationSlice.js';

import { chack_app_num_value } from './../../vendors/chack_app_num_value.js';


const InputAppNumComponent = ( props ) => {

    let {
        currentAppNum,

        setCurrentAppNum,
        setCurrentAppIsChanged,
    } = props;

    let [ numValue, setNumValue ] = useState( currentAppNum );
    let inputRef = useRef();

    useEffect( () => {
        setNumValue( currentAppNum );
    }, [ currentAppNum ] );



    const change_num = ( e ) => {
        let validate = chack_app_num_value( e.target.value );
        if( validate.isValid ){
            setNumValue( validate.value )
        };
    };

    const accept = () => {
        if( Number( currentAppNum ) !== Number( numValue ) ){
            setCurrentAppNum( numValue );
            setCurrentAppIsChanged( true );
        };
    };

    const enter = ( e ) => {
        if( e.which === 13 ){
            accept();
            inputRef.current.blur();
        };
    };

    const blur = () => {
        accept();
    }

    return (
        <input 
            className = 'A_InputAppNum'
            ref =       { inputRef }
            maxLength = { 10 }
            type =      'text'
            value =     { numValue }
            onChange =  { change_num }
            onKeyDown = { enter }
            onBlur =    { blur }
        />
    )

};

export function InputAppNum( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <InputAppNumComponent
            { ...props }
            currentAppNum = { application.currentAppNum }
            // currentAppName = { application.currentAppName }
            // currentAppType = { application.currentAppType }

            setCurrentAppNum = { ( val ) => { dispatch( setCurrentAppNum( val ) ) } }
            setCurrentAppIsChanged = { ( val ) => { dispatch( setCurrentAppIsChanged( val ) ) } }


            


        />
    );


}
