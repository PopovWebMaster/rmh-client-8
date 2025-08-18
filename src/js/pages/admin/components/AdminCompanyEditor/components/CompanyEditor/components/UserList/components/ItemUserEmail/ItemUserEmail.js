// ItemUserEmail


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemUserEmail.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ItemEditContainer } from './../ItemEditContainer/ItemEditContainer.js';

import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';

import { save_user_changes_on_server } from './../../vendors/save_user_changes_on_server.js';


const ItemUserEmailComponent = ( props ) => {

    let {
        userId,
        name,
        email,
        
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    let [ nameValue,    setNameValue ] = useState( name );
    let [ emailValue,    setEmailValue ] = useState( email );


    let inputRef = useRef();

    useEffect(() => {
        setEmailValue( email );
    }, [ email ]);

    useEffect( () => {
        if( emailValue === '' ){
            setIsReady( false );
        }else{
            if( emailValue === email ){
                setIsReady( false );
            }else{
                setIsReady( true );
            };
        };

    }, [ emailValue ] );


    const acceptName = () => {
        let emailTrim = emailValue.trim();
        if( emailTrim === '' ){
        }else{
            setEmailValue( emailTrim );
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

    const change_email = ( e ) => {
        let val = e.target.value;
        setEmailValue( val );
    };


    const save_click = () => {
        save_user_changes_on_server({
            userId,
            changedData: {
                email: emailValue,
            },
            callback: ( response ) => {
                setIsReady( false );
            },
        });
    }

    return (
        <div className = 'ACE_ItemUserEmail'>
            <input 
                type = 'text'
                value = { email }
                onChange = { () => {} }
            />

            <ItemEditContainer>

                <div className = 'ACE_ItemUserEmail_edit'>
                    <h3>email / ligin:</h3>
                    <input 
                        type =          'text'
                        ref =           { inputRef }
                        value =         { emailValue }
                        onChange =      { change_email }
                        maxLength =     { 255 }
                        onKeyDown =     { enter }
                        onBlur =        { blur }
                        placeholder =   { email }
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

export function ItemUserEmail( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemUserEmailComponent
            { ...props }
            // currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
