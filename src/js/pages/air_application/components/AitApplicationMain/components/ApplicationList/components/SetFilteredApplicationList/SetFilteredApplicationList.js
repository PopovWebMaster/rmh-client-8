// SetFilteredApplicationList



import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterList.scss';

import { selectorData as applicationSlice }     from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as layoutSlice }          from './../../../../../../../../redux/layoutSlice.js';
import { selectorData as companySlice }         from './../../../../../../../../redux/companySlice.js';


import { DEFAULT_CATEGORY, EVENT_TYPE, BLIND_STYLE  } from './../../../../../../../../config/layout.js';
import { ROUTE } from './../../../../../../../../config/routes.js';


const FilterListComponent = ( props ) => {

    let {
        applicationList,
        categoryListById,
        currentCompanyAlias,
    
        currentCategoryIdOfListFilter,

        eventListById,

    } = props;


    
    return (
        <></>
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

            eventListById = { layout.eventListById }


            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
