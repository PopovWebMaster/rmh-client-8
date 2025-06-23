
import React, { useState }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddCategoryBtn.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { PageBodyAddButton } from './../../../../../../components/PageBodyAddButton/PageBodyAddButton.js'

import { AddCategoryComponent } from './../AddCategoryComponent/AddCategoryComponent.js';


const AddCategoryBtnComponent = ( props ) => {

    let {

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setIsOpen( true );
    }

    return (<>

        <AlertWindowContainer
            isOpen =    { isOpen }
            setIsOpen = { setIsOpen }
            width =     '27em'
            height =    '24em'
            title = 'Новая категория'
        >
            <AddCategoryComponent 
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            />

        </AlertWindowContainer>

        <PageBodyAddButton 
            title =         { 'Добавить' }
            icon =          { 'icon-plus' }
            clickHandler =  { click }
        />

    </>)

};

export function AddCategoryBtn( props ){

    // const layout = useSelector( layoutSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AddCategoryBtnComponent
            { ...props }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
