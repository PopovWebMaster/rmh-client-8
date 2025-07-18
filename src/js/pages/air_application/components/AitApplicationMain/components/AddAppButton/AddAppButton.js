
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddAppButton.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { NewAppComponent } from './../NewAppComponent/NewAppComponent.js';


const AddAppButtonComponent = ( props ) => {

    let {

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    useEffect( () => {
        let timerId = setTimeout( () => {
            setIsOpen( false );
            clearTimeout( timerId );
        }, 300 );
    }, [] );

    const click = () => {
        setIsOpen( true );
    }
    
    return (<>

        <AlertWindowContainer
            isOpen =    { isOpen }
            setIsOpen = { setIsOpen }
            width =     '30em'
            height =    '40em'
            title = 'Создать новую заявку'
        >
            <NewAppComponent 
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            />

        </AlertWindowContainer>

        <div 
            className = 'addAppButton'
            onClick = { click }
        >
            <span className = 'icon-plus addAppButton_icon'></span>
            <span className = ''>Добавить</span>
        </div>

    </>)

};

export function AddAppButton( props ){

    // const layout = useSelector( layoutSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AddAppButtonComponent
            { ...props }
            // categoryesIsChanged = { layout.categoryesIsChanged }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
