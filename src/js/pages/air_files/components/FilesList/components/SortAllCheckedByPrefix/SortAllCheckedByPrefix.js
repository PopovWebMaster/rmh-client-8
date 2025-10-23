
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SortAllCheckedByPrefix.scss';

import { selectorData as airFilesSlice } from './../../../../../../redux/airFilesSlice.js';

import { FilterButtonContainer } from './../FilterButtonContainer/FilterButtonContainer.js';

const SortAllCheckedByPrefixComponent = ( props ) => {

    let {
        issetChackedValues
    } = props;


    const click = () => {
        alert( 'sortAllCheckedByPrefix' );
    }

    return (
        <div className = 'sortAllCheckedByPrefix'>

            { issetChackedValues? (<>

                <FilterButtonContainer
                    isActive =      { true }
                    title =         { 'Сортировка по префиксам' }
                    clickHandler =  { click }
                />
            </>): '' }
    </div>)

};


export function SortAllCheckedByPrefix( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <SortAllCheckedByPrefixComponent
            { ...props }

            issetChackedValues = { airFiles.issetChackedValues }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
