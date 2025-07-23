
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ReleaseList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';

import { get_filter_data } from './vendors/get_filter_data.js';
import { get_filtered_list } from './vendors/get_filtered_list.js';

import { FilterButtons } from './components/FilterButtons/FilterButtons.js';
import { FilterList } from './components/FilterList/FilterList.js';


const ReleaseListComponent = ( props ) => {

    let {
        releaseList,

    } = props;

    let listRef = useRef();

    let [ activeCategoryId,     setActiveCategoryId ] = useState( null );
    let [ activeEventId,        setActiveEventId ] = useState( null );
    let [ activeSubAppId,       setActiveSubAppId ] = useState( null );
    let [ activeReleaseName,    setActiveReleaseName ] = useState( null );

    let [ list, setList ] = useState( [] );



    let [ categoryList,     setCategoryList ] = useState( [] );
    let [ eventsList,       setEventsList ] = useState( [] );
    let [ subAppList,       setSubAppList ] = useState( [] );
    let [ releaseNamesList, setReleaseNamesList ] = useState( [] );

    let [ filterButtonsHeight, setFilterButtonsHeight ] = useState( 0 );
    let [ filterListHeight, setFilterListHeight ] = useState( 0 );


    useEffect( () => {

        let {
            category,
            events,
            subApp,
            release
        } = get_filter_data( releaseList );

        setCategoryList( category );
        setEventsList( events );
        setSubAppList( subApp );
        setReleaseNamesList( release );



    }, [ releaseList ] );

    useEffect( () => {

        let filtered_list = get_filtered_list({
            activeCategoryId,
            activeEventId,
            activeSubAppId,
            activeReleaseName,
            releaseList,
        })

        setList( filtered_list );

    }, [
        activeCategoryId,
        activeEventId,
        activeSubAppId,
        activeReleaseName,
        releaseList,
    ] );

    useEffect( () => {
        let listElem = listRef.current;
        let { height } = window.getComputedStyle( listElem );
        setFilterListHeight( parseFloat( height ) - filterButtonsHeight );


    }, [ filterButtonsHeight ] );



    return (
       <div 
            className = 'releaseList'
            ref = { listRef }
        >
            <FilterButtons
                
                activeCategoryId =      { activeCategoryId }
                activeEventId =         { activeEventId }
                activeSubAppId =        { activeSubAppId }
                activeReleaseName =     { activeReleaseName }

                setActiveCategoryId =   { setActiveCategoryId }
                setActiveEventId =      { setActiveEventId }
                setActiveSubAppId =     { setActiveSubAppId }
                setActiveReleaseName =  { setActiveReleaseName }

                categoryList =      { categoryList }
                eventsList =        { eventsList }
                subAppList =        { subAppList }
                releaseNamesList =  { releaseNamesList }

                setFilterButtonsHeight = { setFilterButtonsHeight }
                length = { list.length }

            />

            <FilterList
                filteredList = { list }
                height = { filterListHeight }
            
            />


        
       </div>
    )

};


export function ReleaseList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <ReleaseListComponent
            { ...props }

            releaseList = { scheduleResult.releaseList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
