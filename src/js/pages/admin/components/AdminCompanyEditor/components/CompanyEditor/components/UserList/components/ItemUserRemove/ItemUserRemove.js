
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemUserRemove.scss';

import { selectorData as adminSlice } from './../../../../../../../../../../redux/adminSlice.js';
import { setSpinnerIsActive } from './../../../../../../../../../../redux/spinnerSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { send_request_to_server } from './../../../../../../../../../../helpers/send_request_to_server.js';
// import { set_application_data_to_store } from './../../../../../../vendors/set_application_data_to_store.js';
import { set_current_company_data_to_store } from './../../../../../../../../vendors/set_current_company_data_to_store.js';

const ItemUserRemoveComponent = ( props ) => {

    let {
        userId,
        currentCompanyId,

        setSpinnerIsActive,
        
    } = props;

    let [ isOpen, setIsOpen] = useState( false );


     const remove_event = () => {
            setIsOpen( false );
            setSpinnerIsActive( true );
            send_request_to_server({
                route: `remove-user`,
                data: { 
                    userId,
                    companyId: currentCompanyId,
                },
    
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );
    
                    if( response.ok ){
                        setSpinnerIsActive( false );
                        set_current_company_data_to_store( response.company );
                    };
    
                },
            });
        }


    
    
    return (
        <div className = 'SA_ItemSubRemove ACE_ItemUserRemove '>
           <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                width = '25em'
                height = '10em'
            >
                <div className = 'ACE_ItemUserRemove_remove'>
                    <p>Юзер будет удалён навеки. Не жалко?</p>
                    <p>
                        <span 
                            className = 'ACE_ItemUserRemove_remove_btn'
                            onClick = { remove_event}
                        >Удалить</span>
                        <span 
                            className = 'ACE_ItemUserRemove_no_remove_btn'
                            onClick = { () => { setIsOpen( false ) } }
                        >Отмена</span>
                    </p>
                </div>
    
            </AlertWindowContainer>

            <div 
                className = 'ACE_remove_btn'
                onClick = { () => { setIsOpen( true ) } }
            >
                <span className = 'icon-cancel-2'></span>
            </div>

        </div>
    )

};

export function ItemUserRemove( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <ItemUserRemoveComponent
            { ...props }
            currentCompanyId = { admin.currentCompanyId }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }



        />
    );


}
