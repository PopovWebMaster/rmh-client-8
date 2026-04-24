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
                isset = true;
                break;
            };
        };

        if( isset ){
            result = currentEventIdOfListFilter;
        }else{
            let lastEventId = localStorage.getItem( 'last_app_filter_event_id' );

            // console.log( 'lastEventId', lastEventId );

            if( `${lastEventId}` === 'null' ){
                if( list[ 0 ] ){
                    result = list[ 0 ].id;
                };
            }else{
                let isset_last = false;
                for( let i = 0; i < list.length; i++ ){
                    if( `${list[ i ].id}` === `${lastEventId}` ){
                        isset_last = true;
                        break;
                    };
                };

                if( isset_last ){
                    result = Number( lastEventId );
                }else{
                    if( list[ 0 ] ){
                        result = list[ 0 ].id;
                        localStorage.setItem('last_app_filter_event_id', result );
                    }else{
                        // localStorage.setItem('last_app_filter_event_id', null );
                    };
                };

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
