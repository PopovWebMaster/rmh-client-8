
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SheduleEditorComponent.scss';

import { useNavigate } from "react-router-dom";

import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../redux/companySlice.js';


import { UpdateCurrentSubAppData } from './../UpdateCurrentSubAppData/UpdateCurrentSubAppData.js';
import { CharClass } from './../../../../../../../../classes/CharClass.js';

import { ScrollContainer } from './../../../../../../../..//components/ScrollContainer/ScrollContainer.js'

const SheduleEditorComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        application,
        sub_application_id,

    } = props;

    let [ Char, setChar ] = useState( null );

    // let Char = new CharClass();

    
    useEffect( () => {

        if( isOpen ){
            setChar( new CharClass() );

        }else{
            setChar( null );
        };

    }, [ isOpen ] );




    return (
        <div className = 'sheduleEditorComponent'>

            <UpdateCurrentSubAppData>

                <div className = 'SEC_header'>

                </div>

                <div className = 'SEC_body'>

                    <div className = 'SEC_body_left'>

                        <div className = 'SEC_time_add'>

                        </div>

                        <div className = 'SEC_time_buttons'>
                            <ScrollContainer>
                                <div>
                                   
                                </div>
                            </ScrollContainer>
                        </div>
                    </div>

                    <div className = 'SEC_body_center'>
                        <ScrollContainer>
                            <div className = 'SEC_body_center_wrap'>

                                
                            </div>
                        </ScrollContainer>
                    </div>
                    
                </div>

            </UpdateCurrentSubAppData>

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
