

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './UpdateCurrentSubAppData.scss';


import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as currentSubApplicationSlise, currentSubAppClearAll } from './../../../../../../../../redux/currentSubApplicationSlise.js';


import { set_category_data } from './vendors/set_category_data.js';
import { set_event_data } from './vendors/set_event_data.js';
import { set_current_char_type } from './vendors/set_current_char_type.js';
// import { create_an_empty_char_list } from './vendors/create_an_empty_char_list.js';

const UpdateCurrentSubAppDataComponent = ( props ) => {

    let {
       children,

       currentSubAppId,
       currentSubAppClearAll,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        if( currentSubAppId === null ){
            setIsReady( false );
            currentSubAppClearAll();
        }else{
            /*
                здесь порядок вызова функций важен
            */
            set_category_data();
            set_event_data();
            set_current_char_type();

            setIsReady( true );

        };

       

    }, [ currentSubAppId ] );



    return <>
        { isReady? children: (
            <div className = 'UCSAD_wait'>
            <h1>Ждём 
                    <span className = 'p_0'> </span>
                    <span className = 'p_1'>.</span>
                    <span className = 'p_2'>.</span>
                    <span className = 'p_3'>.</span>
                </h1>
            </div>
        ) }
    </>
        

};

export function UpdateCurrentSubAppData( props ){

    const currentSubApplication = useSelector( currentSubApplicationSlise );
    const application = useSelector( applicationSlice );


    
    // const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <UpdateCurrentSubAppDataComponent
            { ...props }

            currentSubAppId = { currentSubApplication.currentSubAppId }


            currentSubAppClearAll = { ( val ) => { dispatch( currentSubAppClearAll( val ) ) } }


        />
    );


}
