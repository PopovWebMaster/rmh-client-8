
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemNum.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';

const ItemNumComponent = ( props ) => {

    let {
        appNum,
        setAppNum,

        appNumIsError,
        setAppNumIsError,

        applicationList,

    } = props;

    let [ numValue,    setNumValue ] = useState( appNum );
    let [ errorText,    setErrorText ] = useState( '' );

    let inputRef = useRef();
    

    useEffect( () => {
        setNumValue( appNum );
    }, [ appNum ] );

    const change_num = ( e ) => {
        let val = e.target.value;
        if( val === '' ){
            setNumValue( val );
            // appNumIsError( false );
            setAppNumIsError( false );
        }else{
            let num = Number( val );
            if( num >= 1 && num < 1000000 ){
                setNumValue( val );
                // appNumIsError( false );
                setAppNumIsError( false );
            };
        }


    };


    const acceptNum = () => {
        
        if( typeof numValue === 'string' ){
            if( numValue.trim() === '' ){
                setAppNum( '' );
            }else{

                let num = Number( numValue );
                let isRepeat = false;

                for( let i = 0; i < applicationList.length; i++ ){
                    if( applicationList[ i ].num === num ){
                        isRepeat = true;
                        break;
                    };
                };

                if( isRepeat ){
                    setAppNumIsError( true );
                    setErrorText( 'Заявка с таким номером уже существует. Повторений в номерах быть не должно' );
                }else{
                    setAppNum( num );
                };
            };
        }else{
            

        };
    };

    const enter = ( e ) => {
        if( e.which === 13 ){
            acceptNum();
            inputRef.current.blur();
        };
    };

    const blur = () => {
        acceptNum();
    }
    
    return (
        <div className = { appNumIsError? 'ANAppl_num isError': 'ANAppl_num' }>
            <h4>Номер заявки: </h4>
            <input 
                type =      'number'
                value =     { numValue }
                onChange =  { change_num }
                onKeyDown = { enter }
                onBlur =    { blur }
                ref =       { inputRef }
            />

            { appNumIsError? (
                <p className = 'error'>{ errorText }</p>
            ): '' }
        </div>


    )

};

export function ItemNum( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <ItemNumComponent
            { ...props }

            applicationList = { application.applicationList }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


        />
    );


}
