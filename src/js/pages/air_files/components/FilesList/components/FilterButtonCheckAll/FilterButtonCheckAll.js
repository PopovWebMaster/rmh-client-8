
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterButtonCheckAll.scss';

import { selectorData as airFilesSlice } from './../../../../../../redux/airFilesSlice.js';


const FilterButtonCheckAllComponent = ( props ) => {

    let {
        issetChackedValues,
        filteredList,

    } = props;

    let [ allValue, setAllValue ] = useState( false );



    const check = () => {
        setAllValue( !allValue );
    }

    return (<>{ filteredList.length > 0? (
        <div className = 'FL_FilterButtonCheckAll'>

            <input
                type =      'checkbox'
                value =     { true }
                checked =   { allValue }
                onChange =  { check }
                className = 'FL_FilterButtonCheckAll_input'
            />

            <span className = 'FL_FilterButtonCheckAll_text'>Отметить все</span>

           
            
        </div>


    ): '' }</>

    )

};


export function FilterButtonCheckAll( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <FilterButtonCheckAllComponent
            { ...props }

            issetChackedValues = { airFiles.issetChackedValues }
            filteredList = { airFiles.filteredList }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
