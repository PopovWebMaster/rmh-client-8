
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './NewUserComponent.scss';

import { selectorData as adminSlice } from './../../../../../../../../../../redux/adminSlice.js';
import { setSpinnerIsActive } from './../../../../../../../../../../redux/spinnerSlice.js';


import { AWInputText } from './../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWButtonAdd } from './../../../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';
import { AWShowErrors } from './../../../../../../../../../../components/AlertWindowContainer/AWShowErrors/AWShowErrors.js';


import { chack_new_user_data } from './../vendors/chack_new_user_data.js';
import { send_request_to_server } from './../../../../../../../../../../helpers/send_request_to_server.js';
import { set_current_company_data_to_store } from './../../../../../../../../vendors/set_current_company_data_to_store.js';


const NewUserComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        currentCompanyId,
        setSpinnerIsActive,

    } = props;

    let [ userName, setUserName ] = useState( '' );
    let [ userEmail, setUserEmail ] = useState( '' );
    let [ userPassword, setUserPassword ] = useState( '' );
    let [ isReady, setIsReady ] = useState( true );
    let [ errors, setErrors ] = useState( [] );


    useEffect( () => {

        if( userName !== '' && userEmail !== '' && userPassword !== ''  ){
            setIsReady( true );
        }else{
            setIsReady( false );
        };

    }, [
        userName,
        userEmail,
        userPassword,
    ] );




    useEffect( () => {
        if( isOpen ){

        }else{
            setUserName( '' );
            setUserEmail( '' );
            setUserPassword( '' );
            setErrors( [] );
        };

    }, [ isOpen ] );



    const user_name_change = ( e ) => {
        let val = e.target.value;
        setUserName( val );
        setErrors( [] );
    }

    const user_email_change = ( e ) => {
        let val = e.target.value;
        setUserEmail( val );
        setErrors( [] );
    }

    const user_password_change = ( e ) => {
        let val = e.target.value;
        setUserPassword( val );
        setErrors( [] );
    }

    const validate = () => {
        let isValid = false;
        let data = {};
        let valid = chack_new_user_data({
            name: userName,
            email: userEmail,
            password: userPassword,
        });

        if( valid.ok ){
            isValid = true;
        }else{
            setErrors( [ valid.message ] );
        };
        return {
            isValid,
            data: valid.data,
        };

    }


    const click_add = () => {
        let {
            isValid,
            data,
        } = validate();
        if( isValid ){

            setSpinnerIsActive( true );

            send_request_to_server({
                route: 'add-new-user',
                data: {
                    userName:       data.name,
                    userEmail:      data.email,
                    userPassword:   data.password,
                    companyId:      currentCompanyId,
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        set_current_company_data_to_store( response.company );
                        setSpinnerIsActive( false );
                        setIsOpen( false );
                    };

                },
            });

        };

    };



    return (
        <div className = 'ACE_NewUserComponent'>
            <AWShowErrors
                errors = { errors }
            />

            

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

            <AWButtonAdd
                isReady =       { isReady }
                clickHandler =  { click_add }
            />


            
        </div>
    )

};

export function NewUserComponent( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <NewUserComponentComponent
            { ...props }
            currentCompanyType = { admin.currentCompanyType }
            currentCompanyId = { admin.currentCompanyId }


            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

            


            


        />
    );


}
