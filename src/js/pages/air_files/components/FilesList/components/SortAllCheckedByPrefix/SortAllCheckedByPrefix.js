
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SortAllCheckedByPrefix.scss';

import { selectorData as airFilesSlice } from './../../../../../../redux/airFilesSlice.js';

import { FilterButtonContainer } from './../FilterButtonContainer/FilterButtonContainer.js';

import { set_air_files_to_store } from './../../../../vendors/set_air_files_to_store.js';

const SortAllCheckedByPrefixComponent = ( props ) => {

    let {
        issetChackedValues,
        filePrefixList,
        airFiles,
    } = props;


    const click = () => {

        let prefixListByName = {};
        let arr = [];
        for( let i = 0; i < filePrefixList.length; i++ ){
            let { prefix } = filePrefixList[ i ];
            prefixListByName[ prefix ] = filePrefixList[ i ];
            arr.push( { ...filePrefixList[ i ] } );
        };

        let sort_list = arr.sort(( a, b ) => {
            if( a.prefix.length > b.prefix.length ){
                return -1;
            }else{
                return 1;
            };
        });

        let newAirFiles = structuredClone( airFiles );

        for( let name in newAirFiles ){
            for( let i = 0; i < sort_list.length; i++ ){
                if( name.indexOf( sort_list[ i ].prefix ) === 0 ){
                    newAirFiles[ name ].event_id = sort_list[ i ].eventId;
                    break;
                };
            };
        };

        set_air_files_to_store( newAirFiles, true );

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

    const airFiles_ = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <SortAllCheckedByPrefixComponent
            { ...props }

            issetChackedValues = { airFiles_.issetChackedValues }
            filePrefixList = { airFiles_.filePrefixList }
            airFiles = { airFiles_.airFiles }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
