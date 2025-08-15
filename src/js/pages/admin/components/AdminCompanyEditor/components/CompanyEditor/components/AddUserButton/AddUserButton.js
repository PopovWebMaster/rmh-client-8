
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddUserButton.scss';

import { selectorData as adminSlice } from './../../../../../../../../redux/adminSlice.js';

import { NewUserComponent } from './components/NewUserComponent/NewUserComponent.js';
import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

const AddUserButtonComponent = ( props ) => {

    let {

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setIsOpen( true );
    };


    return (
        <div className = 'ACE_AddUserButton'>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                title =     'Новый пользователь'
                width =     '30em'
                height =    '40vh'
            >
                <NewUserComponent
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }
                />

            </AlertWindowContainer>


            <div 
                className = 'ACE_AddUserButton_title'
                onClick = { click }
            >
                <span className = 'icon icon-plus'></span>
                <span className = 'title'>Добавить пользователя</span>
            </div>
        </div>
    )

};

export function AddUserButton( props ){

    const admin = useSelector( adminSlice );
    // const dispatch = useDispatch();

    return (
        <AddUserButtonComponent
            { ...props }
            currentCompanyType = { admin.currentCompanyType }

            // setCurrentCompanyAlias = { ( val ) => { dispatch( setCurrentCompanyAlias( val ) ) } }
            // setCurrentCompanyIsChanged = { ( val ) => { dispatch( setCurrentCompanyIsChanged( val ) ) } }


            


        />
    );


}
