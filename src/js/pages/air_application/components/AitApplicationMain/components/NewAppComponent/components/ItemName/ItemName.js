
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemName.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';

const ItemNameComponent = ( props ) => {

    let {
        appName,
        appNameIsError,
        setAppNameIsError,
        setAppName,

        applicationList,

    } = props;

    let [ nameValue,    setNameValue ] = useState( appName );
    let [ errorText,    setErrorText ] = useState( '' );

    let inputRef = useRef();

    useEffect( () => {
        setNameValue( appName );
    }, [ appName ] );

    const change_name = ( e ) => {
        let val = e.target.value;
        setNameValue( val );
        setAppNameIsError( false );
        setErrorText( '' );
    };


    const acceptName = () => {
        let nameTrim = nameValue.trim();
        if( nameTrim === '' ){
            setAppNameIsError( true );
            setErrorText( 'Это поле обязательно дорлжно быть заполнено' );
        }else{

            let isRepeat = false;

            for( let i = 0; i < applicationList.length; i++ ){
                if( applicationList[ i ].name === nameTrim ){
                    isRepeat = true;
                    break;
                };
            };

            if( isRepeat ){
                setAppNameIsError( true );
                setErrorText( 'Заявка с таким названием уже существует. Пожалуйста, придумайте уникальное имя для заявки.' );
            }else{
                setAppName( nameTrim );
            };

        };
    };

    const enter = ( e ) => {
        if( e.which === 13 ){
            acceptName();
            inputRef.current.blur();
        };
    };

    const blur = () => {
        acceptName();
    }
    
    return (
        <div className = { appNameIsError? 'ANAppl_name isError': 'ANAppl_name' }>
            <h4>Название заявки: <span>(обязатеьно)</span> </h4>
            <input 
                type =      'text'
                ref =       { inputRef }
                value =     { nameValue }
                onChange =  { change_name }
                onKeyDown = { enter }
                onBlur =    { blur }
            />

            { appNameIsError? (
                <p className = 'error'>{ errorText }</p>
            ): '' }
        </div>


    )

};

export function ItemName( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <ItemNameComponent
            { ...props }

            applicationList = { application.applicationList }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


        />
    );


}
