
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemName.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
// import { selectorData as layoutSlice }      from './../../../../../../../../../../redux/layoutSlice.js';

const ItemNameComponent = ( props ) => {

    let {
        isOpen,
        name,
        setName,

        nameIsError,
        setNameIsError,

    } = props;

    let [ nameValue,    setNameValue ] = useState( name );
    let [ errorText,    setErrorText ] = useState( '' );

    let inputRef = useRef();

    useEffect( () => {
        if( isOpen ){
            
        }else{
            setName( '' );
            setNameIsError( false );
            setErrorText('');
        };

    }, [ isOpen ] );

    useEffect(() => {
        setNameValue( name );
    }, [ name ]);

    const acceptName = () => {
        let nameTrim = nameValue.trim();
        if( nameTrim === '' ){
            setNameIsError( true );
            setErrorText( 'Это поле обязательно дорлжно быть заполнено' );
        }else{

            let isRepeat = false;

            // for( let i = 0; i < applicationList.length; i++ ){
            //     if( applicationList[ i ].name === nameTrim ){
            //         isRepeat = true;
            //         break;
            //     };
            // };

            if( isRepeat ){
                setNameIsError( true );
                setErrorText( 'Выпуск с таким именем уже существует. Пожалуйста, придумайте уникальное имя.' );
            }else{
                setName( nameTrim );
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

    const change_name = ( e ) => {
        let val = e.target.value;
        setNameValue( val );
        setNameIsError( false );
        setErrorText( '' );
    };

    

    return (
        <div className = { `NS_item_name ${nameIsError? 'isError': ''}` }>
            <h3>Название выпуска: <span>(обязатеьно)</span> </h3>
            <input 
                type =          'text'
                
                ref =           { inputRef }
                value =         { nameValue }
                onChange =      { change_name }
                maxLength =     { 255 }
                onKeyDown =     { enter }
                onBlur =        { blur }
                placeholder = { 'без имени выпуска ничего не выйдет' }
            />

            { nameIsError? (
                <p className = 'error'>{ errorText }</p>
            ): '' }

        </div>

    )

};

export function ItemName( props ){

    const application = useSelector( applicationSlice );
    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ItemNameComponent
            { ...props }
            currentAppCategoryId =  { application.currentAppCategoryId }
            // categoryListById =    { layout.categoryListById }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
