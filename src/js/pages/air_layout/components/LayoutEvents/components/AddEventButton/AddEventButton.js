
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddEventButton.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { PageBodyAddButton } from './../../../../../../components/PageBodyAddButton/PageBodyAddButton.js';
import { AddEventComponent } from './../AddEventComponent/AddEventComponent.js';


// import { AddEventComponent } from './../AddEventComponent/AddEventComponent.js';

// import { CP_ButtonComponent } from './../../../CP_ButtonComponent/CP_ButtonComponent.js';

import { access_right } from './../../../../../../helpers/access_right.js';

const AddEventButtonComponent = ( props ) => {

    let {

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setIsOpen( true );
    }
    
    return (<>

        { access_right( 'layout_event_add' )? <>
            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '28em'
                height =    '40em'
                title = 'Новое событие'
            >
                <AddEventComponent 
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }
                />

            </AlertWindowContainer>

            <PageBodyAddButton 
                clickHandler =  { click }
            />
        
        </>: '' }



    </>)

};

export function AddEventButton( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <AddEventButtonComponent
            { ...props }
            categoryesIsChanged = { layout.categoryesIsChanged }

            categoryList = { layout.categoryList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
