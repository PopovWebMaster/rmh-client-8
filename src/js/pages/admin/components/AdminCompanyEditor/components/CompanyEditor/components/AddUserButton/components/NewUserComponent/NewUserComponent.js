
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './NewUserComponent.scss';

import { selectorData as adminSlice } from './../../../../../../../../../../redux/adminSlice.js';

import { AWInputText } from './../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';

const NewUserComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
    } = props;

    let [ userName, setUserName ] = useState( '' );
    let [ userEmail, setUserEmail ] = useState( '' );
    let [ userPassword, setUserPassword ] = useState( '' );



    useEffect( () => {
        if( isOpen ){

        }else{
            setUserName( '' );
            setUserEmail( '' );
            setUserPassword( '' );

        };

    }, [ isOpen ] );



    const user_name_change = ( e ) => {
        let val = e.target.value;
        setUserName( val );
    }

    const user_email_change = ( e ) => {
        let val = e.target.value;
        setUserEmail( val );
    }

    const user_password_change = ( e ) => {
        let val = e.target.value;
        setUserPassword( val );
    }


    return (
        <div className = 'ACE_NewUserComponent'>

            <AWInputText
                title = 'Имя'
                value = { userName }
                onChange = { user_name_change }
            />

            <AWInputText
                title = 'e-mail'
                value = { userEmail }
                onChange = { user_email_change }
            />

            <AWInputText
                title = 'password ( обязательно сохранить у себя! )'
                value = { userPassword }
                onChange = { user_password_change }
            />


            
        </div>
    )

};

export function NewUserComponent( props ){

    const admin = useSelector( adminSlice );
    // const dispatch = useDispatch();

    return (
        <NewUserComponentComponent
            { ...props }
            currentCompanyType = { admin.currentCompanyType }

            // setCurrentCompanyAlias = { ( val ) => { dispatch( setCurrentCompanyAlias( val ) ) } }
            // setCurrentCompanyIsChanged = { ( val ) => { dispatch( setCurrentCompanyIsChanged( val ) ) } }


            


        />
    );


}
