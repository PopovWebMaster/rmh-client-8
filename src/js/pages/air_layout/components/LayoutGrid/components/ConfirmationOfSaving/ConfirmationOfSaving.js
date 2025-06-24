
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ConfirmationOfSaving.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


const ConfirmationOfSavingComponent = ( props ) => {

    let {
       isOpen,
       setIsOpen,

       comfirmHandler,


    } = props;

    const click = () => {
        setIsOpen( false );
        comfirmHandler();
    }

    return (
        <div className = 'confirmationOfSaving'>
            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '35vw'
                height =    '20vh'
            >

                <div className = 'COS_component'>
                    <p>Вы желаете сохранить текущие изменения?</p>
                    <p>
                        <span 
                            className = 'COS_yes_btn'
                            onClick = { click }
                        >Да</span>
                        <span 
                            className = 'COS_no_btn'
                            onClick = { () => { setIsOpen( false ) } }
                        >Отмена</span>
                    </p>
                </div>

            </AlertWindowContainer>
        </div>
    )
};

export function ConfirmationOfSaving( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ConfirmationOfSavingComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
