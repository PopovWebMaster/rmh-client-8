
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ButtonAddRelease.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';
// import { selectorData as navigationSlice }  from './../../../../../../../../../../redux/navigationSlice.js';
import { send_request_to_server }           from './../../../../../../../../../../helpers/send_request_to_server.js';

const ButtonAddReleaseComponent = ( props ) => {

    let {
        setIsOpen,
        
        dataFrom,
        dataTo,
        durationSec,

        currentAppCategoryId,
        setSpinnerIsActive,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        if( currentAppCategoryId === null ){
            setIsReady( false );
        }else{
            setIsReady( true );
        };

    }, [ currentAppCategoryId ] );

    const click = () => {
        if( isReady ){

            setSpinnerIsActive( true );

            alert( 'ButtonAddRelease' );

            // send_request_to_server({
            //     route: `add-new-application-release`,
            //     data: { 
            //         dataFrom,
            //         dataTo,
            //         durationSec,
            //     },

            //     successCallback: ( response ) => {
            //         console.dir( 'response' );
            //         console.dir( response );

            //         if( response.ok ){

            //             setSpinnerIsActive( false );
            //             setIsOpen( false );

            //         };

            //     },
            // });


        };
    };


   
    return (
        <div className = 'ARC_item_add'>
            
            <div 
                className = { `ARC_btn_wrap ${ isReady? 'isActive': '' }` }
                onClick = { click }
            >
                <span className = 'icon-plus icon'></span>
                <span className = ''>Добавить</span>
            </div>

        </div>

    )

};

export function ButtonAddRelease( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <ButtonAddReleaseComponent
            { ...props }
            currentAppCategoryId =      { application.currentAppCategoryId }

            setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
