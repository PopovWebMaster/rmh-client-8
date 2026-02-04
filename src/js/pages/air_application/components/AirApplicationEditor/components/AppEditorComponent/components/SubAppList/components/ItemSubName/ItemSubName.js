
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubName.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ItemEditComponent } from './../ItemEditComponent/ItemEditComponent.js';
import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';
import { save_sub_app_changes_on_server } from './../../../../../../vendors/save_sub_app_changes_on_server.js';

import { name_is_unic } from './vendors/name_is_unic.js';



const ItemSubNameComponent = ( props ) => {

    let {
        id,
        application_id,
        name,
        
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    let [ nameValue,    setNameValue ] = useState( name );
    let [ isError,      setIsError ] =  useState( false );
    let [ errorText,    setErrorText ] = useState( '' );


    let inputRef = useRef();

    useEffect(() => {
        setNameValue( name );
        setIsError( false );
        setErrorText( '' );
    }, [ name ]);

    useEffect( () => {
        if( nameValue === '' ){
            setIsReady( false );
        }else{
            if( nameValue === name ){
                setIsReady( false );
            }else{
                if( isError ){
                    setIsReady( false );
                }else{
                    setIsReady( true );
                };
            };
        };

    }, [ nameValue, isError ] );


    const acceptName = () => {
        let nameTrim = nameValue.trim();
        if( nameTrim === '' ){
            setIsError( true );
            setErrorText( 'Это поле обязательно дорлжно быть заполнено' );
        }else{

            let isUnic = name_is_unic({
                subApplicationId: id,
                changedName: nameTrim,
            });

            if( isUnic ){
                setNameValue( nameTrim );
            }else{
                setIsError( true );
                setErrorText( 'Выпуск с таким именем уже существует. Пожалуйста, придумайте уникальное имя.' );
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
        setIsError( false );
        setErrorText( '' );
    };


    const save_click = () => {
        save_sub_app_changes_on_server({
            subApplicationId: id,
            applicationId: application_id,
            changedData: {
                name: nameValue
            },
            callback: ( response ) => {
                setIsReady( false );
            },
        });
    }

    return (
        <div className = 'SA_ItemSubName'>
            

            <ItemEditComponent>

                <div className = 'SA_ItemSubName_edit'>
                    <h3>Название:</h3>

                    <input 
                        type =          'text'
                        ref =           { inputRef }
                        value =         { nameValue }
                        onChange =      { change_name }
                        maxLength =     { 255 }
                        onKeyDown =     { enter }
                        onBlur =        { blur }
                        placeholder = { name }
                    />

                    { isError? (
                        <p className = 'error'>{ errorText }</p>
                    ): '' }

                </div>

                <AlertWindowContainerSaveAdd 
                    isActive =      { isReady }
                    clickHandler =  { save_click }
                />
            </ItemEditComponent>

            <input 
                type = 'text'
                value = { name }
                onChange = { () => {} }
            />

        </div>
    )

};

export function ItemSubName( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubNameComponent
            { ...props }
            // currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
