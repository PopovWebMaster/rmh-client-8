
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SheduleEditorComponent.scss';

import { useNavigate } from "react-router-dom";

import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../redux/companySlice.js';




const SheduleEditorComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        application,
        sub_application_id,

    } = props;

    useEffect( () => {

        if( isOpen ){
            console.dir( 'sub_application_id' );
            console.dir( sub_application_id );

            console.dir( 'application' );
            console.dir( application );


        }else{

        };

    }, [ isOpen ] );




    return (
        <div className = 'sheduleEditorComponent'>

           SheduleEditorComponent
           

        </div>
    )

};

export function SheduleEditorComponent( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <SheduleEditorComponentComponent
            { ...props }

            currentApplicationId = { application.currentApplicationId }
            application = { application }

            currentCompanyAlias = { company.currentCompanyAlias }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


            setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
