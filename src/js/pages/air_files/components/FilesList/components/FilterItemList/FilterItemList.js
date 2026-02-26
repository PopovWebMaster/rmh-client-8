
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterItemList.scss';

import { selectorData as airFilesSlice, setCurrentFilterEventId } from './../../../../../../redux/airFilesSlice.js';
import { OneFileItem } from './../OneFileItem/OneFileItem.js';


const FilterItemListComponent = ( props ) => {

    let {
        filteredList,

    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let { name, fileDuration, puth } = item;

            return (
                <OneFileItem
                    key = { index }
                    fileName = { name }
                    filePuth = { puth }

                    fileDuration = { fileDuration }

                />
            );

        } );
        return div;
    };

    return (
        <div className = 'FL_FilterItemList'>

            { create( filteredList ) }


        </div>
    )

};


export function FilterItemList( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <FilterItemListComponent
            { ...props }

            filteredList =     { airFiles.filteredList }

            setCurrentFilterEventId = { ( val ) => { dispatch( setCurrentFilterEventId( val ) ) } }

        />
    );


}
