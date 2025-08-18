
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemUserName.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ItemEditContainer } from './../ItemEditContainer/ItemEditContainer.js';

import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';

import { save_user_changes_on_server } from './../../vendors/save_user_changes_on_server.js';


const ItemUserNameComponent = ( props ) => {

    let {
        userId,
        name,
        
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    let [ nameValue,    setNameValue ] = useState( name );

    let inputRef = useRef();

    useEffect(() => {
        setNameValue( name );
    }, [ name ]);

    useEffect( () => {
        if( nameValue === '' ){
            setIsReady( false );
        }else{
            if( nameValue === name ){
                setIsReady( false );
            }else{
                setIsReady( true );
            };
        };

    }, [ nameValue ] );


    const acceptName = () => {
        let nameTrim = nameValue.trim();
        if( nameTrim === '' ){
        }else{
            setNameValue( nameTrim );
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
    };


    const save_click = () => {
        save_user_changes_on_server({
           userId,
            changedData: {
                name: nameValue
            },
            callback: ( response ) => {
                setIsReady( false );
            },
        });
    }

    return (
        <div className = 'ACE_ItemUserName '>
            <input 
                type = 'text'
                value = { name }
                onChange = { () => {} }
            />

            <ItemEditContainer>

                <div className = 'ACE_ItemUserName_edit'>
                    <h3>Имя:</h3>
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

                </div>

                <AlertWindowContainerSaveAdd 
                    isActive =      { isReady }
                    clickHandler =  { save_click }
                />
            </ItemEditContainer>

        </div>
    )

};

export function ItemUserName( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemUserNameComponent
            { ...props }
            // currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
