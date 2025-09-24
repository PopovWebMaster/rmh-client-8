// SetCurrentEventData


import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetCurrentEventData.scss';

import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';
import { selectorData as applicationSlice, setFilterCategoryList, setCurrentCategoryIdOfListFilter, setFilterEventList } from './../../../../redux/applicationSlice.js';


// import { get_list_of_all_used_categories } from './../../vendors/get_list_of_all_used_categories.js';
import { get_list_of_all_used_events } from './../../vendors/get_list_of_all_used_events.js';



const SetCurrentEventDataComponent = ( props ) => {

    let {
        setFilterCategoryList,
        setCurrentCategoryIdOfListFilter,

        currentCategoryIdOfListFilter,
        currentEventIdOfListFilter,
        filteredList,

        setFilterEventList,

        children
    } = props;


    useEffect( () => {

        // let list = get_list_of_all_used_events( filteredList );
        // let id = get_actual_category_id( list );

        // setFilterCategoryList( list );
        // setCurrentCategoryIdOfListFilter( id );



    }, [ filteredList ] );

    // const get_actual_category_id = ( list ) => {
    //     let result = null;
    //     if( currentCategoryIdOfListFilter === null ){
    //         if( list[ 0 ] ){
    //             result = list[ 0 ].id;
    //         };
    //     }else{
    //         for( let i = 0; i < list.length; i++ ){
    //             if( list[ i ].id === currentCategoryIdOfListFilter ){
    //                 result = currentCategoryIdOfListFilter;
    //                 break;
    //             };
    //         };
    //         if( list.length > 0 && result === null ){
    //             result = list[ 0 ].id;
    //         };
    //     };
    //     return result;

    // };


    return (
        <>{ children }</>
    )

};


export function SetCurrentEventData( props ){

    const application = useSelector( applicationSlice );
    const userInfo = useSelector( userInfoSlice );


    
    const dispatch = useDispatch();

    return (
        <SetCurrentEventDataComponent
            { ...props }

            currentManagerId = { application.currentManagerId }
            currentEventIdOfListFilter = { application.currentEventIdOfListFilter }
            filteredList = { application.filteredList }



            setFilterCategoryList =             { ( val ) => { dispatch( setFilterCategoryList( val ) ) } }
            setCurrentCategoryIdOfListFilter =  { ( val ) => { dispatch( setCurrentCategoryIdOfListFilter( val ) ) } }

            setFilterEventList =  { ( val ) => { dispatch( setFilterEventList( val ) ) } }


            



        />
    );


}
