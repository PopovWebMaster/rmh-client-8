

import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemCategory.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';

import { SelectedCategory } from './../../../../../../../../components/SelectedCategory/SelectedCategory.js';

const ItemCategoryComponent = ( props ) => {

    let {
        categoryId,
        setCategoryId,
    } = props;

    
    return (
        <div className = 'ANAppl_category'>

            <SelectedCategory 
                categoryId = { categoryId }
                setCategoryId = { setCategoryId }
            />
            
        </div>

    )

};

export function ItemCategory( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <ItemCategoryComponent
            { ...props }

            applicationList = { application.applicationList }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


        />
    );


}
