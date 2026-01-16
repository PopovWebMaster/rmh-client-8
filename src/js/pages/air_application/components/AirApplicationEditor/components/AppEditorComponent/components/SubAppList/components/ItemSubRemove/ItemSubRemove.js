
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubRemove.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { send_request_to_server } from './../../../../../../../../../../helpers/send_request_to_server.js';
import { set_application_data_to_store } from './../../../../../../vendors/set_application_data_to_store.js';

const ItemSubRemoveComponent = ( props ) => {

    let {
        id,
        application_id,

        setSpinnerIsActive,
        
    } = props;

    let [ isOpen, setIsOpen] = useState( false );


     const remove_event = () => {
            setIsOpen( false );
            setSpinnerIsActive( true );
            send_request_to_server({
                route: `remove-sub-application`,
                data: { 
                    subApplicationId: id,
                    applicationId: application_id,
                },
    
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );
    
                    if( response.ok ){
                        setSpinnerIsActive( false );

                        set_application_data_to_store( response.application, response.applicationList );
                    };
    
                },
            });
        }


    
    
    return (
        <div className = 'SA_ItemSubRemove'>
           <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                width = '25em'
                height = '10em'
            >
                <div className = 'SA_ItemSubRemove_remove'>
                    <p>Будет удалено всё, что связано с этим выпуском. Пожалуйста, подтвердите удаление.</p>
                    <p>
                        <span 
                            className = 'SA_ItemSubRemove_remove_btn'
                            onClick = { remove_event}
                        >Удалить</span>
                        <span 
                            className = 'SA_ItemSubRemove_no_remove_btn'
                            onClick = { () => { setIsOpen( false ) } }
                        >Отмена</span>
                    </p>
                </div>
    
            </AlertWindowContainer>

            <div 
                className = 'SA_remove_btn'
                onClick = { () => { setIsOpen( true ) } }
            >
                {/* <span className = 'icon-cancel-2'></span> */}
                <span className = 'SA_remove_btn_text'>Удалить</span>

            </div>

        </div>
    )

};

export function ItemSubRemove( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <ItemSubRemoveComponent
            { ...props }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }



        />
    );


}
