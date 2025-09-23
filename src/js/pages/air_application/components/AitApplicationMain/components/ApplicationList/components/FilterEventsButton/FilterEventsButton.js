

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterEventsButton.scss';

import { selectorData as applicationSlice, setCurrentCategoryIdOfListFilter } from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';



const FilterEventsButtonComponent = ( props ) => {

    let {
        applicationList,
        categoryListById,
        currentCategoryIdOfListFilter,

        setCurrentCategoryIdOfListFilter,

    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {


    }, [] );



    
    return (
        <div className = 'AL_FilterEventsButton'>
            
        </div>
    )

};

export function FilterEventsButton( props ){

    const application = useSelector( applicationSlice );
    const layout = useSelector( layoutSlice );

    const dispatch = useDispatch();

    return (
        <FilterEventsButtonComponent
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
