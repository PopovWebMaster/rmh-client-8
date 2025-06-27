

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import './FilterList.scss';

import { selectorData as applicationSlice }     from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as layoutSlice }          from './../../../../../../../../redux/layoutSlice.js';
import { selectorData as companySlice }         from './../../../../../../../../redux/companySlice.js';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';


import { get_filtred_app_list } from './vendors/get_filtred_app_list.js';

import { DEFAULT_CATEGORY  } from './../../../../../../../../config/layout.js';
import { ROUTE } from './../../../../../../../../config/routes.js';


const FilterListComponent = ( props ) => {

    let {
        applicationList,
        categoryListById,
        currentCompanyAlias,
    
        currentCategoryIdOfListFilter,

    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {
        setList( get_filtred_app_list( applicationList, currentCategoryIdOfListFilter ) );
    }, [ applicationList, currentCategoryIdOfListFilter ] );


    let navigate = useNavigate();


    const click = ( id ) => {
        navigate( `/${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_APPLICATION}/${id}` );
    };

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            let { 
                id,
                name,
                num,
                category_id,
                sub_application_list

            } = item;

            let category = DEFAULT_CATEGORY;

            if( categoryListById[ category_id ] ){
                category = categoryListById[ category_id ];
            };


            return (
                <div 
                    className = 'AL_FilterList_item_wrap'
                    key = { index }
                >
                    <div 
                        className = 'AL_FilterList_item'
                        onClick = { () => { click( id ) } }
                    >
                        <span 
                            className = 'AL_category'
                            style = {{
                                backgroundColor: category.colorBG,
                                color: category.colorBGcolorText,
                            }}
                        >{ category.name }</span>
                        <span className = 'AL_name'>{ name }</span>
                        <span className = 'AL_num'>№ { num }</span>
                        <span className = 'AL_release'>выпуски: { sub_application_list.length }</span>


                    </div>
                </div>

            );

        } );

        return div;
    };

    


    
    return (
        <div className = 'AL_FilterList'>

            <ScrollContainer>

                    { create( list ) }
                

                
            </ScrollContainer>

        </div>
    )

};

export function FilterList( props ){

    const application = useSelector( applicationSlice );
    const layout = useSelector( layoutSlice );
    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <FilterListComponent
            { ...props }

            applicationList = { application.applicationList }
            currentCategoryIdOfListFilter = { application.currentCategoryIdOfListFilter }
            currentCompanyAlias = { company.currentCompanyAlias }

            categoryListById = { layout.categoryListById }

            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
