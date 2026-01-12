
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ExportFilterList.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';

import { get_changet_filter_list } from './../../vendors/get_changet_filter_list.js';
import { get_item_name_value } from './../../vendors/get_item_name_value.js';

import { FilterItem } from './../FilterItem/FilterItem.js';
import { FilterControlPanel } from './../FilterControlPanel/FilterControlPanel.js';
import { FilterCategoryItem } from './../FilterCategoryItem/FilterCategoryItem.js';
 
import { ScrollContainer } from './../../../../../../components/ScrollContainer/ScrollContainer.js';


const ExportFilterListComponent = ( props ) => {

    let {
        isOpen,
        filterList,
        setFilterList,
        exportType,
        
        

    } = props;


    const item_change_isUsed = ( val, eventId ) => {
        let changed_list = get_changet_filter_list( filterList, eventId, { isUsed: val } );
        setFilterList( changed_list );
    }

    const item_change_whatTake = ( val, eventId ) => {
        let changed_list = get_changet_filter_list( filterList, eventId, { withOnlyApplications: val } );
        setFilterList( changed_list );
    }

    const item_change_quotationMarks = ( val, eventId ) => {
        let changed_list = get_changet_filter_list( filterList, eventId, { quotationMarks: val } );
        setFilterList( changed_list );
    }

    const item_change_upperCase = ( val, eventId ) => {

        let changed_list = get_changet_filter_list( filterList, eventId, { upperCase: val } );
        setFilterList( changed_list );

        get_item_name_value({
            filterList: changed_list,
            eventId,
        });

    }

    const item_change_staples = ( val, eventId ) => {
        let changed_list = get_changet_filter_list( filterList, eventId, { staples: val } );
        setFilterList( changed_list );
    }

    const change_itemNameValue = (  val, eventId  ) => {

        let changed_list = get_changet_filter_list( filterList, eventId, { itemNameValue: val } );
        setFilterList( changed_list );

        // console.dir( {val, eventId} );

    }



    const createList = ( arr ) => {

        let categories = {};

        let div = arr.map( ( item, index ) => {
            let {
                eventId,
                category_id,
                isUsed,
                withOnlyApplications,
                quotationMarks,
                upperCase,
                staples,
                itemNameValue,
            } = item;

            let with_category = true;
            if( categories[ category_id ] === true ){
                with_category = false;
            };

            categories[ category_id ] = true;

            return (
                <React.Fragment key = { index }>

                    { with_category? (
                        <FilterCategoryItem
                            category_id =   { category_id }
                            filterList =    { arr }
                            setFilterList = { setFilterList }
                        />
                    ): '' }

                    <FilterItem
                        key =                   { index }
                        eventId =               { eventId }
                        isUsed =                { isUsed }
                        withOnlyApplications =  { withOnlyApplications }
                        quotationMarks =        { quotationMarks }
                        upperCase =             { upperCase }
                        item_change_isUsed =    { item_change_isUsed }
                        item_change_whatTake =  { item_change_whatTake }
                        item_change_quotationMarks = { item_change_quotationMarks }
                        item_change_upperCase = { item_change_upperCase }
                        exportType =            { exportType }
                        staples = { staples }
                        item_change_staples = { item_change_staples }
                        itemNameValue = { itemNameValue }
                        change_itemNameValue = { change_itemNameValue }

                    />
                </React.Fragment>
            );

        } );

        return div;

    };




    return (
        <div className = 'ExportFilterList'>


            <h4 className = 'S_DExcelComponent_header'>Что включить в экспорт?</h4>

            <FilterControlPanel
                filterList =    { filterList }
                setFilterList = { setFilterList }
                isOpen =        { isOpen }
                exportType =    { exportType }
            />

            <div className = 'S_DExcelComponent_listWrap'>
                <ScrollContainer>
                    { createList( filterList ) }
                </ScrollContainer>
            </div>

        </div>

    )

};


export function ExportFilterList( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );

    // const dispatch = useDispatch();

    return (
        <ExportFilterListComponent
            { ...props }

            // scheduleEventsList = { scheduleResult.scheduleEventsList }
            // currentDate =       { scheduleResult.currentDate }
            // currentDayNum =     { scheduleResult.currentDayNum }
            // currentMonth =      { scheduleResult.currentMonth }
            // currentYear =       { scheduleResult.currentYear }



            

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
