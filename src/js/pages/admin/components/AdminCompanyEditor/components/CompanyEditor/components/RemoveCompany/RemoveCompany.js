// RemoveCompany


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemoveCompany.scss';

import { useNavigate } from "react-router-dom";

import { selectorData as adminSlice, setCurrentCompanyId, setCompanies }   from './../../../../../../../../redux/adminSlice.js';
import { setSpinnerIsActive }           from './../../../../../../../../redux/spinnerSlice.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

const RemoveCompanyComponent = ( props ) => {

    let {
        currentCompanyId,
        setSpinnerIsActive,
        setCurrentCompanyId,
        setCompanies,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    let navigate = useNavigate();

    const click = () => {
        setIsOpen( true );
    }
        
    const remove = () => {

        setIsOpen( false );
        let secretCode = prompt( 'Секретный код для удаления', '' );

        setSpinnerIsActive( true );

        send_request_to_server({
            route: `remove-company`,
            data: { 
                companyId: currentCompanyId,
                secretCode,
            },

            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                setSpinnerIsActive( false );

                if( response.ok ){

                    setCompanies( response.companies );
                    setCurrentCompanyId( null );

                    navigate( `/admin/company` );
                    
                }else{
                    alert( 'Херня ваш код. Не удалю.' );
                };

            },
        });


    }

    return (
        <div className = 'removeCompany'>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '27em'
                height =    '11em'
                title = 'Удалить заявку'
            >
                <div className = 'App_remove'>
                    <p>Пожалуйста, подтвердите удаление компании. Будут удалены все данные о компании, все пользователи, события, файлы, вообще всё. Вам это надо?</p>
                    <p>
                        <span 
                            className = 'App_remove_btn'
                            onClick = { remove }
                        >Удалить</span>
                        <span 
                            className = 'App_no_remove_btn'
                            onClick = { () => { setIsOpen( false ) } }
                        >Отмена</span>
                    </p>
                </div>

            </AlertWindowContainer>
            
            <span
                className = 'ACE_removeAppBtn'
                onClick = { click }
            >Удалить компанию</span>
           

        </div>
    )

};

export function RemoveCompany( props ){

    const admin = useSelector( adminSlice );

    const dispatch = useDispatch();

    return (
        <RemoveCompanyComponent
            { ...props }

            currentCompanyId = { admin.currentCompanyId }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setCurrentCompanyId = { ( val ) => { dispatch( setCurrentCompanyId( val ) ) } }
            setCompanies = { ( val ) => { dispatch( setCompanies( val ) ) } }


            


        />
    );


}
