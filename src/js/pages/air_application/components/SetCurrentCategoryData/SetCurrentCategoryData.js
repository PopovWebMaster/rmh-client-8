
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetCurrentCategoryData.scss';

import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';
import { selectorData as applicationSlice, setFilterCategoryList, setCurrentCategoryIdOfListFilter } from './../../../../redux/applicationSlice.js';


import { get_list_of_all_used_categories } from './../../vendors/get_list_of_all_used_categories.js';


const SetCurrentCategoryDataComponent = ( props ) => {

    let {
        currentManagerId,
        setFilterCategoryList,
        setCurrentCategoryIdOfListFilter,

        currentCategoryIdOfListFilter,
        filteredList,

        children
    } = props;


    useEffect( () => {

        let list = get_list_of_all_used_categories( filteredList );
        let id = get_actual_category_id( list );

        setFilterCategoryList( list );
        setCurrentCategoryIdOfListFilter( id );



    }, [ filteredList, currentManagerId ] );

    const get_actual_category_id = ( list ) => {
        let result = null;

        let lastCategoryId = localStorage.getItem( 'last_app_filter_category_id' );

        if( currentCategoryIdOfListFilter === null ){
            if( `${lastCategoryId}` === 'null' ){
                if( list[ 0 ] ){
                    result = list[ 0 ].id;
                };
            }else{
                let isset = false;
                for( let i = 0; i < list.length; i++ ){
                    if( `${list[ i ].id}` === `${lastCategoryId}` ){
                        isset = true;
                        break;
                    };
                };
                if( isset ){
                    result = Number( lastCategoryId );
                }else{
                    if( list[ 0 ] ){
                        result = list[ 0 ].id;
                        localStorage.setItem('last_app_filter_category_id', result );
                    }else{
                        // localStorage.setItem('last_app_filter_category_id', null );
                    };
                };
            };
        }else{
            for( let i = 0; i < list.length; i++ ){
                if( list[ i ].id === currentCategoryIdOfListFilter ){
                    result = currentCategoryIdOfListFilter;
                    break;
                };
            };
            if( list.length > 0 && result === null ){
                let isset = false;
                for( let i = 0; i < list.length; i++ ){
                    if( `${list[ i ].id}` === `${lastCategoryId}` ){
                        isset = true;
                        break;
                    };
                };
                if( isset ){
                    result = Number( lastCategoryId );
                }else{
                    result = list[ 0 ].id;
                }; 
            };
        };
        return result;

    };


    return (
        <>{ children }</>
    )

};


export function SetCurrentCategoryData( props ){

    const application = useSelector( applicationSlice );
    const userInfo = useSelector( userInfoSlice );


    
    const dispatch = useDispatch();

    return (
        <SetCurrentCategoryDataComponent
            { ...props }

            currentManagerId = { application.currentManagerId }
            currentCategoryIdOfListFilter = { application.currentCategoryIdOfListFilter }
            filteredList = { application.filteredList }


            setFilterCategoryList =             { ( val ) => { dispatch( setFilterCategoryList( val ) ) } }
            setCurrentCategoryIdOfListFilter =  { ( val ) => { dispatch( setCurrentCategoryIdOfListFilter( val ) ) } }



        />
    );


}
