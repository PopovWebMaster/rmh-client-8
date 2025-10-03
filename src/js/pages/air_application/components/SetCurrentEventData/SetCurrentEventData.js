// SetCurrentEventData


import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetCurrentEventData.scss';

import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';
import { selectorData as applicationSlice, setFilterEventList, setCurrentEventIdOfListFilter } from './../../../../redux/applicationSlice.js';


// import { get_list_of_all_used_categories } from './../../vendors/get_list_of_all_used_categories.js';
import { get_list_of_all_used_events } from './../../vendors/get_list_of_all_used_events.js';



const SetCurrentEventDataComponent = ( props ) => {

    let {

        currentManagerId,
        currentCategoryIdOfListFilter,
        currentEventIdOfListFilter,
        filteredList,

        setFilterEventList,
        setCurrentEventIdOfListFilter,

        children,

    } = props;


    useEffect( () => {

        let list = get_list_of_all_used_events( filteredList, currentCategoryIdOfListFilter );
        let id = get_actual_event_id( list );

        setFilterEventList( list );
        setCurrentEventIdOfListFilter( id );

    }, [ 
        filteredList, 
        currentCategoryIdOfListFilter, 
        currentManagerId,
    ] );

    const get_actual_event_id = ( list ) => {

        let result = null;
        let isset = false;

        for( let i = 0; i < list.length; i++ ){
            if( list[ i ].id === currentEventIdOfListFilter ){
                result = currentEventIdOfListFilter;
                isset = true;
                break;
            };
        };

        if( isset ){

        }else{
            if( list.length > 0 ){
                result = list[ 0 ].id;
            };
        };

        return result;

    };




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

            currentManagerId =              { application.currentManagerId }
            currentCategoryIdOfListFilter = { application.currentCategoryIdOfListFilter }
            currentEventIdOfListFilter =    { application.currentEventIdOfListFilter }


            filteredList = { application.filteredList }



            setFilterEventList =  { ( val ) => { dispatch( setFilterEventList( val ) ) } }
            setCurrentEventIdOfListFilter =  { ( val ) => { dispatch( setCurrentEventIdOfListFilter( val ) ) } }
            



        />
    );


}
