
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterButtonCheckAll.scss';

import { selectorData as airFilesSlice } from './../../../../../../redux/airFilesSlice.js';

import { set_isChaked_into_filteredList } from './../../../../vendors/set_isChaked_into_filteredList.js';


const FilterButtonCheckAllComponent = ( props ) => {

    let {
        issetChackedValues,
        filteredList,

    } = props;

    let [ allValue, setAllValue ] = useState( false );

    useEffect( () => {
        if( issetChackedValues === false ){
            setAllValue( false );
        };
    }, [ issetChackedValues ] );

    const check = () => {

        let nextValue = !allValue;
        setAllValue( nextValue );

        let arr = [];
        for( let i = 0; i < filteredList.length; i++ ){
            let { name } = filteredList[ i ];
            arr.push( name );
        };

        set_isChaked_into_filteredList( arr, nextValue );

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
