

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterCategoryButtons.scss';

import { selectorData as applicationSlice, setCurrentCategoryIdOfListFilter } from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { get_list_of_all_used_categories } from './vendors/get_list_of_all_used_categories.js';


const FilterCategoryButtonsComponent = ( props ) => {

    let {
        applicationList,
        categoryListById,
        currentCategoryIdOfListFilter,

        setCurrentCategoryIdOfListFilter,

    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {
        let list = get_list_of_all_used_categories( applicationList, categoryListById ) 

        setList(list );
        if( list[ 0 ] ){
            setCurrentCategoryIdOfListFilter( list[ 0 ].id );
        }else{
            setCurrentCategoryIdOfListFilter( null );
        };

    }, [ applicationList ] );

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

                    onClick = { () => { setCurrentCategoryIdOfListFilter( id ) } }
                >
                    <span>{ name }</span>
                </div>
            );

        } );

        return div;

    };


    
    return (
        <div className = 'AL_FilterCategoryButtons'>
            { create( list ) }
        </div>
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

            categoryListById = { layout.categoryListById }

            setCurrentCategoryIdOfListFilter = { ( val ) => { dispatch( setCurrentCategoryIdOfListFilter( val ) ) } }

            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
