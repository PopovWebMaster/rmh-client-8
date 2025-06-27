
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './A_AddSeriesButton.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';

import { A_AddButton } from './../A_AddButton/A_AddButton.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { AddSeriesComponent } from './../AddSeriesComponent/AddSeriesComponent.js';

const A_AddSeriesButtonComponent = ( props ) => {

    let {
        // currentAppType,
        // currentAppName,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setIsOpen( true );
    }
        
    

    return (
        <div className = 'A_AddSeriesButton'>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '40em'
                height =    '20em'
                title = 'Добавить серии'
            >
                <AddSeriesComponent
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }
                />
            </AlertWindowContainer>

            <A_AddButton 
                title = { 'Добавить серии' }
                clickHandler = { click }
            />
        </div>
        
    )

};

export function A_AddSeriesButton( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <A_AddSeriesButtonComponent
            { ...props }
            // currentAppNum = { application.currentAppNum }
            // currentAppName = { application.currentAppName }
            // currentAppType = { application.currentAppType }
            // currentAppCategoryId = { application.currentAppCategoryId }




            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
