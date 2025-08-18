
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemUserPassword.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ItemEditContainer } from './../ItemEditContainer/ItemEditContainer.js';

import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';

import { save_user_changes_on_server } from './../../vendors/save_user_changes_on_server.js';


const ItemUserPasswordComponent = ( props ) => {

    let {
        userId,
        
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    let [ passwordValue,    setPasswordValue ] = useState( '' );

    let inputRef = useRef();

    useEffect( () => {
        if( passwordValue === '' ){
            setIsReady( false );
        }else{
            setIsReady( true );
        };
    }, [ passwordValue ] );


    const acceptName = () => {
        let passwordTrim = passwordValue.trim();
        if( passwordTrim === '' ){
        }else{
            setPasswordValue( passwordValue );
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

    const change_password = ( e ) => {
        let val = e.target.value;
        setPasswordValue( val );
    };


    const save_click = () => {
        save_user_changes_on_server({
            userId,
            changedData: {
                password: passwordValue,
            },
            callback: ( response ) => {
                setIsReady( false );
            },
        });
    }

    return (
        <div className = 'ACE_ItemUserPassword'>
            <input 
                type = 'text'
                value = { 'password' }
                onChange = { () => {} }
            />

            <ItemEditContainer
                closeHandler = { () => { setPasswordValue( '' ) } }
            >

                <div className = 'ACE_ItemUserPassword_edit'>
                    <h3>password ( сохрани его, он виден только здесь! ):</h3>
                    <input 
                        type =          'text'
                        ref =           { inputRef }
                        value =         { passwordValue }
                        onChange =      { change_password }
                        maxLength =     { 255 }
                        onKeyDown =     { enter }
                        onBlur =        { blur }
                        placeholder =   { '' }
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

export function ItemUserPassword( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemUserPasswordComponent
            { ...props }
            // currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
