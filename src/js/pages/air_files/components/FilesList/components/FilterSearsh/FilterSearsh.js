
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterSearsh.scss';

import { selectorData as airFilesSlice, setFilterSearchValue } from './../../../../../../redux/airFilesSlice.js';


const FilterSearshComponent = ( props ) => {

    let {
        filterSearchValue,
        setFilterSearchValue,
    } = props;

    let [ value, setValue ] = useState( '' );

    useEffect( () => {

        console.log( 'filterSearchValue', filterSearchValue );

        setValue( filterSearchValue );

    }, [ filterSearchValue ] );

    const change = ( e ) => {
        let val = e.target.value;
        setValue( val );

    };

    const enter = ( e ) => {
        if( e.which === 13 ){
            apply_value();
        }
    };

    const apply_value = () => {
        let val = value.trim();
        setFilterSearchValue( val );
    }

    return (
        <div className = 'FL_FilterSearsh'>

            <div className = 'FL_FilterSearsh_wrap'>
                <span className = 'icon icon-search-4'></span>
                <input
                    type = 'text'
                    value = { value }
                    onChange = { change }
                    onKeyDown = { enter }
                    className = 'text'
                    max = { 120 }
                    placeholder = 'сортировать по:'
                />
                <span
                    className = 'btn_apply'
                    onClick = { apply_value }
                >Выполнить</span>
            </div>

        </div>
    )

};


export function FilterSearsh( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <FilterSearshComponent
            { ...props }

            filterSearchValue = { airFiles.filterSearchValue }

            setFilterSearchValue = { ( val ) => { dispatch( setFilterSearchValue( val ) ) } }

        />
    );


}
