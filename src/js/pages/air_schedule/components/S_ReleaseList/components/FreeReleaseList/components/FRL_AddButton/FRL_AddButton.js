
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_AddButton.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { FRL_TopButton } from './../FRL_TopButton/FRL_TopButton.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { FRL_EditContainer } from './../FRL_EditContainer/FRL_EditContainer.js';

const FRL_AddButtonComponent = ( props ) => {

    let {
        title,
        icon = '',
        clickHandler = () => {},
        setListIsActive = () => {},
       
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    useEffect( () => {
        setListIsActive( !isOpen );
    }, [ isOpen ] );

    const click = () => {
        setIsOpen( true );
    }



    return (
        <>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                title = 'Межпрограммные ролики'
                width = '70vw'
                height = '94vh'

                showCurrentDayName = { true }
            >

                <FRL_EditContainer
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }
                />

            </AlertWindowContainer>


            <FRL_TopButton
                title = 'Изменить'
                icon = 'icon-edit'
                clickHandler = { click }
            />
        </>
    )

};

export function FRL_AddButton( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FRL_AddButtonComponent
            { ...props }

            // releaseList = { scheduleResult.releaseList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
