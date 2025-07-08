

import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EnvironmentShow.scss';


import { selectorData as applicationSlice, setEnvIsOpen  } from './../../../../../../../../../../redux/applicationSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';





const EnvironmentShowComponent = ( props ) => {

    let {

        envIsOpen,
        setEnvIsOpen,
    } = props;







    return (
        <div 
            className = 'SEC_CharDay_EnvironmentShow'
        >

            <AlertWindowContainer
                isOpen = { envIsOpen }
                setIsOpen = { setEnvIsOpen }
                title = 'Среда'
                width = '40vh'
                height = '40vh'
            >
                <div>
                    Эта часть находися в процессе разработки
                </div>
                
            </AlertWindowContainer>



            
        </div>
    )

};

export function EnvironmentShow( props ){

    const application = useSelector( applicationSlice );

    const dispatch = useDispatch();

    return (
        <EnvironmentShowComponent
            { ...props }

            currentApplicationId = { application.currentApplicationId }
            envIsOpen = { application.envIsOpen }




            setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
