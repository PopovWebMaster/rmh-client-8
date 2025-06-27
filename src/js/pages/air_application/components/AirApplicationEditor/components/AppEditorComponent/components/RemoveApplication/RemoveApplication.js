
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemoveApplication.scss';

import { useNavigate } from "react-router-dom";

import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../redux/companySlice.js';


import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';
import { ROUTE } from './../../../../../../../../config/routes.js';

const RemoveApplicationComponent = ( props ) => {

    let {
        currentApplicationId,
        currentCompanyAlias,
        setSpinnerIsActive,
        setApplicationList,
        setCurrentApplicationId,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    let navigate = useNavigate();

    const click = () => {
        setIsOpen( true );
    }
        


    const remove = () => {

        setIsOpen( false );
        setSpinnerIsActive( true );

        send_request_to_server({
            route: `remove-application`,
            data: { 
                applicationId: currentApplicationId,
            },

            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){
                    setSpinnerIsActive( false );
                    setApplicationList( response.applicationList );
                    setCurrentApplicationId( null );


                    navigate( `/${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_APPLICATION}` );
                    

                };

            },
        });


    }

    return (
        <div className = 'removeApplication'>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '27em'
                height =    '11em'
                title = 'Удалить заявку'
            >
                <div className = 'App_remove'>
                    <p>Пожалуйста, подтвердите удаление заявки</p>
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
                className = 'A_removeAppBtn'
                onClick = { click }
            >Удалить заявку</span>
           

        </div>
    )

};

export function RemoveApplication( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <RemoveApplicationComponent
            { ...props }

            currentApplicationId = { application.currentApplicationId }
            currentCompanyAlias = { company.currentCompanyAlias }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


            setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
