
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CategoryList.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { OneCategory } from './../OneCategory/OneCategory.js';


const CategoryListComponent = ( props ) => {

    let {
        categoryList,

    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let {
                id,
                name,
                prefix,
                colorText,
                colorBG,
            } = item;
            return (
                <OneCategory 
                    id =        { id }
                    name =      { name }
                    prefix =    { prefix }
                    colorText = { colorText }
                    colorBG =   { colorBG }
                    key =       { index }
                />
            );

        } );

        return div;
        


        

    };



    return (

        <div className = 'LC_CategoryList' >

            { create( categoryList ) }
            
        </div>

    )

};

export function CategoryList( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <CategoryListComponent
            { ...props }
            categoryList = { layout.categoryList }


            // setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
