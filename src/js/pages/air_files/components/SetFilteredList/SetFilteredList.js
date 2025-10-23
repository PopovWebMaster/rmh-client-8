
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetFilteredList.scss';

import { 
    selectorData as airFilesSlice,
    setFilteredList,
    setFilteredListByName,
    setIssetChackedValues,

} from './../../../../redux/airFilesSlice.js';

const SetFilteredListComponent = ( props ) => {

    let {
        children,

        currentFilterEventId,
        airFilesByEventId,
        filterSearchValue,
        setFilteredList,
        setFilteredListByName,

        setIssetChackedValues,

    } = props;

    useEffect( () => {
    
        let arr = [];
        let obj = {};

        if( airFilesByEventId[ currentFilterEventId ] ){

            for( let i = 0; i < airFilesByEventId[ currentFilterEventId ].length; i++ ){

                let item = { ...airFilesByEventId[ currentFilterEventId ][ i ], isSelected: false }
                let { name } = item;

                if( filterSearchValue === '' ){
                    arr.push( item );
                    obj[ name ] = item;
                }else{
                    
                    if( name.indexOf( filterSearchValue ) !== -1 ){
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

            setFilteredList( arr_sort );
            setFilteredListByName( obj );
            setIssetChackedValues( false );


        };
    
    }, [ 
        currentFilterEventId,
        airFilesByEventId,
        filterSearchValue,
    ] );

    return (
        <>{ children }</>
    )

};


export function SetFilteredList( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <SetFilteredListComponent
            { ...props }

            currentFilterEventId =  { airFiles.currentFilterEventId }
            airFilesByEventId =     { airFiles.airFilesByEventId }
            filterSearchValue =     { airFiles.filterSearchValue }

            setFilteredList = { ( val ) => { dispatch( setFilteredList( val ) ) } }
            setFilteredListByName = { ( val ) => { dispatch( setFilteredListByName( val ) ) } }
            setIssetChackedValues = { ( val ) => { dispatch( setIssetChackedValues( val ) ) } }



            

        />
    );


}
