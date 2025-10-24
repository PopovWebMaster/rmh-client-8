
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetFilteredList.scss';

import { 
    selectorData as airFilesSlice,
    setFilteredList,
    setFilteredListByName,
    setIssetChackedValues,
    setFilterSearchValue,

} from './../../../../redux/airFilesSlice.js';

const SetFilteredListComponent = ( props ) => {

    let {
        children,

        currentFilterEventId,
        airFilesByEventId,
        airFiles,
        filterSearchValue,
        setFilteredList,
        setFilteredListByName,

        setIssetChackedValues,
        setFilterSearchValue,

    } = props;

    useEffect( () => {

        if( airFilesByEventId[ currentFilterEventId ] ){

            let result = get_new_filtered_list( filterSearchValue );

            if( filterSearchValue !== '' && result.filteredList.length === 0 ){
                let result_2 = get_new_filtered_list( '' );
                setFilteredList( result_2.filteredList );
                setFilteredListByName( result_2.filteredListByName );
                setFilterSearchValue( '' );
            }else{
                setFilteredList( result.filteredList );
                setFilteredListByName( result.filteredListByName );
            };

            setIssetChackedValues( false );


        };
    
    }, [ 
        currentFilterEventId,
        airFilesByEventId,
        filterSearchValue,
        airFiles,
    ] );

    const get_new_filtered_list = ( searche_value ) => {

        let arr = [];
        let obj = {};

        for( let i = 0; i < airFilesByEventId[ currentFilterEventId ].length; i++ ){

            let item = { ...airFilesByEventId[ currentFilterEventId ][ i ], isSelected: false }
            let { name } = item;

            if( searche_value === '' ){
                arr.push( item );
                obj[ name ] = item;
            }else{
                if( name.indexOf( searche_value ) !== -1 ){
                    arr.push( item );
                    obj[ name ] = item;
                };
            };
        };

        let arr_sort = arr.sort( ( a, b ) => {
            if( a.name > b.name ){
                return 1;
            }else{
                return -1;
            };
        } );

        return {
            filteredList: arr_sort,
            filteredListByName: obj,   
        };
    }

    return (
        <>{ children }</>
    )

};


export function SetFilteredList( props ){

    const airFiles_ = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <SetFilteredListComponent
            { ...props }

            currentFilterEventId =  { airFiles_.currentFilterEventId }
            airFiles =              { airFiles_.airFiles }
            airFilesByEventId =     { airFiles_.airFilesByEventId }

            filterSearchValue =     { airFiles_.filterSearchValue }

            setFilteredList = { ( val ) => { dispatch( setFilteredList( val ) ) } }
            setFilteredListByName = { ( val ) => { dispatch( setFilteredListByName( val ) ) } }
            setIssetChackedValues = { ( val ) => { dispatch( setIssetChackedValues( val ) ) } }
            setFilterSearchValue = { ( val ) => { dispatch( setFilterSearchValue( val ) ) } }


            



            

        />
    );


}
