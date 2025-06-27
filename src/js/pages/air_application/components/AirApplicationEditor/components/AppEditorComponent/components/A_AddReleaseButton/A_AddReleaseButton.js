
import React, { useState }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './A_AddReleaseButton.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';

import { A_AddButton } from './../A_AddButton/A_AddButton.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { AddReleaseComponent } from './../AddReleaseComponent/AddReleaseComponent.js';

const A_AddReleaseButtonComponent = ( props ) => {

    let {
        // currentAppType,
        // currentAppName,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    
    const click = () => {
        setIsOpen( true );
    }
        
    

    return (
        <div className = 'A_AddReleaseButton'>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '40em'
                height =    '40em'
                title = 'Добавить выпуск'
            >
                <AddReleaseComponent 
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }
                />
                      
            </AlertWindowContainer>

            <A_AddButton 
                title = { 'Добавить выпуск' }
                clickHandler = { click }
            />
        </div>
        
    )

};

export function A_AddReleaseButton( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <A_AddReleaseButtonComponent
            { ...props }
            currentAppNum = { application.currentAppNum }
            // currentAppName = { application.currentAppName }
            // currentAppType = { application.currentAppType }



            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
