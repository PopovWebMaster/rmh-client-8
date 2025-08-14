
import React, { useState } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddCompanyButton.scss';
import { PageBodyAddButton } from './../../../../components/PageBodyAddButton/PageBodyAddButton.js';
import { AlertWindowContainer } from './../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AddCompanyComponent } from './components/AddCompanyComponent/AddCompanyComponent.js';


const AddCompanyButtonComponent = ( props ) => {

    let {
        

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setIsOpen( true );
    };



    return (
    <>
        <AlertWindowContainer
            isOpen = { isOpen }
            setIsOpen = { setIsOpen }
            title = 'New company'
            width = '35em'
            height = '80vh'
        >
            <AddCompanyComponent
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            />
            
        </AlertWindowContainer>
    
        <PageBodyAddButton 
            clickHandler = { click }
        />
    </>

        

    )

};


export function AddCompanyButton( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AddCompanyButtonComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
