
import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { selectorData as layoutSlice } from './../../../redux/layoutSlice.js';

import './AWCategorySelect.scss';

import { EVENT_NAME_NOT_SELECTED } from './../../../config/layout.js';

const AWCategorySelectComponent = ( props ) => {

    let {
        value,
        changeHandler,

        categoryList,
        categoryListById,

    } = props;

    let [ categoryIsOpen, setCategoryIsOpen ] = useState( false );
    let [ categoryNameValue, setCategoryNameValue ] = useState( EVENT_NAME_NOT_SELECTED );

    useEffect( () => {

        if( value === null ){
            setCategoryNameValue( EVENT_NAME_NOT_SELECTED );
        }else{
            if( categoryListById[ value ] ){
                let { name } = categoryListById[ value ];
                setCategoryNameValue( name );
            }else{
                changeHandler( null );
            };
        };

    }, [ value ] );

    const categoryClick = ( name, id ) => {
        setCategoryNameValue( name );
        setCategoryIsOpen( false );

        changeHandler( id );

    }

    const createCategoryList = ( arr ) => {
        let li = arr.map( ( item, index ) => {
            if( index === 0 ){
                return (<React.Fragment
                    key = { index }
                >
                    <li
                        onClick = { () => {
                            categoryClick( EVENT_NAME_NOT_SELECTED, null );
                        } }
                    >{ EVENT_NAME_NOT_SELECTED }</li>
                    <li
                        
                        onClick = { () => {
                            categoryClick( item.name, item.id );
                        } }
                    >{ item.name }</li>
                </React.Fragment>);
            }else{
                return (
                    <li
                        key = { index }
                        onClick = { () => {
                            categoryClick( item.name, item.id );
                        } }
                    >{ item.name }</li>
                );
            };


        } );

        return li;

    }

    return (
        <div className = 'AW_item AWCategorySelect'>
            <h3>Категория:</h3>
            <div 
                className = 'AW_item_category'
                onMouseLeave = { () => { setCategoryIsOpen( false ) } }
            >
                <h4
                    onClick = { () => { setCategoryIsOpen( !categoryIsOpen ) } }
                >{ categoryNameValue }</h4>
                <div 
                    className = 'AW_CDD_btn'
                    onClick = { () => { setCategoryIsOpen( !categoryIsOpen ) }}
                >
                    <span className = { `AW_CDD_btn_icon ${categoryIsOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                </div>

                { categoryIsOpen? (
                    <ul className = 'AW_CDD_list'>
                        { createCategoryList( categoryList ) }
                    </ul>
                ): '' }
                
            </div>
        </div>
    )

};

export function AWCategorySelect( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AWCategorySelectComponent
            { ...props }
            categoryList = { layout.categoryList }
            categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
