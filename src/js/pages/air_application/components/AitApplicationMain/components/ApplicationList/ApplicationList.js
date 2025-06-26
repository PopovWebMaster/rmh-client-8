
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ApplicationList.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';
import { FilterList } from './components/FilterList/FilterList.js';

import { FilterCategoryButtons } from './components/FilterCategoryButtons/FilterCategoryButtons.js';


const ApplicationListComponent = ( props ) => {

    let {
        
    } = props;


    
    return (
        <div className = 'applicationList'>

            <div className = 'AL_filter_wrap'>
                <FilterCategoryButtons />

            </div>

            <div className = 'AL_list_wrap'>

                <FilterList />

            </div>

        </div>
    )

};

export function ApplicationList( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <ApplicationListComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
