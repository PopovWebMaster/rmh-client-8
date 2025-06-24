// AWRemoveConfirmComponent


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWRemoveConfirmComponent.scss';


const AWRemoveConfirmComponentComponent = ( props ) => {

    let {
        setIsOpen,
        removeHandler,

    } = props;

    return (
        <div className = 'AW_Event_remove'>
            <p>Пожалуйста, подтвердите удаление</p>
            <p>
                <span 
                    className = 'AW_Event_remove_btn'
                    onClick = { removeHandler}
                >Удалить</span>
                <span 
                    className = 'AW_Event_no_remove_btn'
                    onClick = { () => { setIsOpen( false ) } }
                >Отмена</span>
            </p>
        </div>
    )

};

export function AWRemoveConfirmComponent( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AWRemoveConfirmComponentComponent
            { ...props }




        />
    );


}
