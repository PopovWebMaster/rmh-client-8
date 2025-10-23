

import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterButtonContainer.scss';

import { selectorData as airFilesSlice } from './../../../../../../redux/airFilesSlice.js';


const FilterButtonContainerComponent = ( props ) => {

    let {
        isActive = true,
        title,
        clickHandler,
    } = props;

    const click = () => {
        if( isActive ){
            clickHandler();
        };
    };
   
    return (
        <div 
            className = { `FL_FilterButtonContainer ${ isActive? 'isActive': '' }` }
            onClick = { click }
        >
            <span>{ title }</span>

       </div>

           
    )

};


export function FilterButtonContainer( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <FilterButtonContainerComponent
            { ...props }

            issetChackedValues = { airFiles.issetChackedValues }
            filteredList = { airFiles.filteredList }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
