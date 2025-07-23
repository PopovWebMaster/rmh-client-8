
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FilterButtons.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { EVENT_TYPE } from './../../../../../../../../config/layout.js';

let flag = true; 
const FilterButtonsComponent = ( props ) => {

    let {
        activeCategoryId,
        activeEventId,
        activeSubAppId,
        activeReleaseName,

        setActiveCategoryId,
        setActiveEventId,
        setActiveSubAppId,
        setActiveReleaseName,

        categoryList,
        eventsList,
        subAppList,
        releaseNamesList,

        setFilterButtonsHeight,
        length,

    } = props;


    /*
        ВНИМАНИЕ! В коде перепутаны логически sub_application_id и application_id
        Исправлять было лень, но всё работает.
    */

    let buttonsRef = useRef();

    const setElemHeight = () => {
        if( flag ){
            flag = false;
            let timerId = setTimeout( () => {
                let elem = buttonsRef.current;
                let style = window.getComputedStyle( elem );

                // console.dir( buttonsRef.current );
                // console.dir( style.height );

                setFilterButtonsHeight( parseFloat( style.height ) );

                flag = true;
                clearTimeout( timerId );

            }, 300 );
        };


    }

    const createCategory = ( arr ) => {

        let span = arr.map( ( item, index ) => {
            let {
                colorBG,
                colorText,
                id,
                name,
            } = item;

            return (
                <span
                    key = { index }
                    className = { `btn_all ${activeCategoryId === id? 'isActive': ''}`}
                    onClick = { () => { 
                        setActiveCategoryId( id );
                        setActiveEventId( null );
                        setActiveSubAppId( null );
                        setActiveReleaseName( null );
                    } }
                >{ name }</span>
            );

        } );
        setElemHeight();

        return span;

    };

    const createEvents = ( arr ) => {
        

        let filterArr = [];
        if( activeCategoryId === null ){
            filterArr = [ ...arr ];
        }else{
            for( let i = 0; i < arr.length; i++ ){
                if( arr[ i ].category_id === activeCategoryId ){
                    filterArr.push( arr[i] );
                };
            };
        }

        let span = filterArr.map( ( item, index ) => {
            let {
                colorBG,
                colorText,
                id,
                name,
            } = item;

            return (
                <span
                    key = { index }
                    className = { `btn_all ${activeEventId === id? 'isActive': ''}`}

                    onClick = { () => { 
                        setActiveEventId( id )
                        setActiveSubAppId( null )
                        setActiveReleaseName( null );
                    } }
                >{ name }</span>
            );
        } );

        setElemHeight();

        return span;

    }


    const createSubApp = ( arr ) => {

        let filterArr = [];


        for( let i = 0; i < arr.length; i++ ){

            let { event_id, category_id } = arr[ i ]; 
            let isValid = false;

            if( activeCategoryId === null && activeEventId === null ){
                isValid = true;
            }else{
                if( activeCategoryId !== null && activeEventId !== null ){
                    if( event_id === activeEventId && category_id === activeCategoryId ){
                        isValid = true;
                    };
                }else{
                    if( activeCategoryId !== null ){
                        if( category_id === activeCategoryId ){
                            isValid = true;
                        };
                    }else if( activeEventId !== null ){
                        if( event_id === activeEventId ){
                            isValid = true;
                        };
                    };
                    
                };

            }

            if( isValid ){
                filterArr.push( arr[i] );
            };
        };

        let span = filterArr.map( ( item, index ) => {
            let {
                colorBG,
                colorText,
                id,
                application_id,
                name,
            } = item;

            return (
                <span
                    key = { index }
                    className = { `btn_all ${activeSubAppId === application_id? 'isActive': ''}`}
                    onClick = { () => { 
                        setActiveSubAppId( application_id );
                        setActiveReleaseName( null );
                    } }
                >{ name }</span>
            );
        } );

        setElemHeight();

        return span;

    }


    const createRelease = ( arr ) => {
        let filterArr = [];
        for( let i = 0; i < arr.length; i++ ){
            let { event_id, category_id, application_id } = arr[ i ]; 
            if( activeSubAppId !== null && application_id === activeSubAppId ){
                filterArr.push( arr[i] );
            };
        };
        let span = filterArr.map( ( item, index ) => {
            let {
                name,
                colorBG,
                colorText,
                event_type,
            } = item;

            let style = {
                backgroundColor: colorBG,
                color: colorText,
                borderColor: colorBG,
            };
            if( event_type === EVENT_TYPE.BLOCK ){
                style.backgroundColor = '#00000000';
                style.color = '#ffffff';
            };

            return (
                <span
                    key = { index }
                    className = { `btn_all ${activeReleaseName === name? 'isActive': ''}`}
                    onClick = { () => { setActiveReleaseName( name ) } }
                    style = { style }
                >{ name }</span>
            );
        } );

        setElemHeight();

        return span;
    }



    return (
       <div 
            className = 'RL_FilterButtons'
            ref = { buttonsRef }
        >

            <div className = 'FB_row'>
                <span 
                    className = { `btn_all ${activeCategoryId === null? 'isActive': ''}`}
                    onClick = { () => { 
                        setActiveCategoryId( null );
                        setActiveEventId( null );
                        setActiveSubAppId( null );
                        setActiveReleaseName( null );
                    } }
                >Все</span>
                { createCategory( categoryList ) }
            </div>

            <div className = 'FB_row'>
                <span
                    className = { `btn_all ${activeEventId === null? 'isActive': ''}`}
                    onClick = { () => { 
                        setActiveEventId( null );
                        setActiveSubAppId( null );
                        setActiveReleaseName( null );
                    } }
                >Все</span>
                { createEvents( eventsList ) }
            </div>

            <div className = 'FB_row'>
                <span
                    className = { `btn_all ${activeSubAppId === null? 'isActive': ''}`}
                    onClick = { () => { 
                        setActiveSubAppId( null );
                        setActiveReleaseName( null );
                    } }
                >Все</span>
                { createSubApp( subAppList ) }
            </div>

            <div className = 'FB_row'>
                {/* <span
                    className = { `btn_all ${activeReleaseName === null? 'isActive': ''}`}
                    onClick = { () => { setActiveReleaseName( null ) } }
                >Все</span> */}

                { createRelease( releaseNamesList ) }
            </div>
            <div className = 'FB_row'>
                <div className = 'FB_row_all'>
                    <span>Всего: { length }</span>
                </div>
            </div>


        
       </div>
    )

};


export function FilterButtons( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FilterButtonsComponent
            { ...props }

            releaseList = { scheduleResult.releaseList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
