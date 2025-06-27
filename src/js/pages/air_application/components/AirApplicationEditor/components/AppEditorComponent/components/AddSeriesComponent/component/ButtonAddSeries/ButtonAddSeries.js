
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ButtonAddSeries.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';
import { send_request_to_server }           from './../../../../../../../../../../helpers/send_request_to_server.js';

const ButtonAddSeriesComponent = ( props ) => {

    let {
        setIsOpen,
        numFromValue,
        numToValue,
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
            alert( 'ButtonAddSeries' );

            // send_request_to_server({
            //     route: `add-new-application-series`,
            //     data: { 
            //         numFromValue,
            //         numToValue,
            //         dataFrom,
            //         dataTo,
            //         durationSec,
            //     },

            //     callback: ( response ) => {
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
        <div className = 'ASC_item_add_num'>
            
            <div 
                className = { `ASC__btn_wrap ${ isReady? 'isActive': '' }` }
                onClick = { click }
            >
                <span className = 'icon-plus icon'></span>
                <span className = ''>Добавить</span>
            </div>

        </div>

    )

};

export function ButtonAddSeries( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <ButtonAddSeriesComponent
            { ...props }
            currentAppCategoryId =      { application.currentAppCategoryId }

            setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
