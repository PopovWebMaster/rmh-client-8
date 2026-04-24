

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterCategoryButtons.scss';

import { selectorData as applicationSlice, setCurrentCategoryIdOfListFilter } from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { get_list_of_all_used_categories } from './vendors/get_list_of_all_used_categories.js';

import { set_current_category_id } from './../../../../../../vendors/set_current_category_id.js';


const FilterCategoryButtonsComponent = ( props ) => {

    let {
        applicationList,
        categoryListById,
        currentCategoryIdOfListFilter,
        filterCategoryList,

        // setCurrentCategoryIdOfListFilter, 

    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let { 
                colorBG,
                colorText,
                id,
                name,
                prefix,
            } = item;
            let isActive = currentCategoryIdOfListFilter === id;

            return (
                <div 
                    className = { `AL_btn ${ isActive? 'isActive': ''}` }
                    style = {{
                        backgroundColor: colorBG,
                        color: colorText,
                    }}
                    key = { index }

                    onClick = { () => { set_current_category_id( id ) } }
                >
                    <span>{ name }</span>
                </div>
            );

        } );

        return div;

    };


    
    return (<>{ filterCategoryList.length > 0? (
            <div className = 'AL_FilterCategoryButtons'>
                { create( filterCategoryList ) }
            </div>
        ): '' }</>

    )

};

export function FilterCategoryButtons( props ){

    const application = useSelector( applicationSlice );
    const layout = useSelector( layoutSlice );

    const dispatch = useDispatch();

    return (
        <FilterCategoryButtonsComponent
            { ...props }
            applicationList = { application.applicationList }
            currentCategoryIdOfListFilter = { application.currentCategoryIdOfListFilter }
            filterCategoryList = { application.filterCategoryList }


            categoryListById = { layout.categoryListById }

            setCurrentCategoryIdOfListFilter = { ( val ) => { dispatch( setCurrentCategoryIdOfListFilter( val ) ) } }

            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
