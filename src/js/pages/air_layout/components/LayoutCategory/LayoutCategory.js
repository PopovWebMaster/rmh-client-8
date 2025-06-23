
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutCategory.scss';

import { PageBodyContainer } from './../../../../components/PageBodyContainer/PageBodyContainer.js';

import { AddCategoryBtn } from './components/AddCategoryBtn/AddCategoryBtn.js';
import { SaveCategoryChanges } from './components/SaveCategoryChanges/SaveCategoryChanges.js';
import { CategoryList } from './components/CategoryList/CategoryList.js';

const LayoutCategoryComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageBodyContainer 

            className = 'layoutCategory'

            controlPanelContainer = { <>
                <AddCategoryBtn />
                <SaveCategoryChanges />
            </> }

            bodyContainer = { <CategoryList /> }
        />
    )

};

export function LayoutCategory( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutCategoryComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
