
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SelectedCategory.scss';

// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';
import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import { EVENT_NAME_NOT_SELECTED } from './../../config/layout.js';

const SelectedCategoryComponent = ( props ) => {

    let {
        categoryId,
        setCategoryId,

        categoryList,
        categoryListById,

    } = props;


    let [ categoryIsOpen, setCategoryIsOpen ] = useState( false );
    let [ categoryNameValue, setCategoryNameValue ] = useState( EVENT_NAME_NOT_SELECTED );

    useEffect( () => {

        if( categoryId === null  ){
            setCategoryNameValue( EVENT_NAME_NOT_SELECTED );
        }else{
            if( categoryListById[ categoryId ] ){
                setCategoryNameValue( categoryListById[ categoryId ].name );
            }else{
                setCategoryNameValue( EVENT_NAME_NOT_SELECTED );
            };
        };

    }, [ categoryId ] );


    const categoryClick = ( id ) => {
        setCategoryId( id );
        setCategoryIsOpen( false );
    }

    const createCategoryList = ( arr ) => {

        let li = arr.map( ( item, index ) => {

            if( index === 0 ){
                return (<React.Fragment
                    key = { index }
                >
                    <li
                        onClick = { () => {
                            categoryClick( null );
                        } }
                    >{ EVENT_NAME_NOT_SELECTED }</li>
                    <li
                        
                        onClick = { () => {
                            categoryClick( item.id );
                        } }
                    >{ item.name }</li>
                </React.Fragment>);
            }else{
                return (
                    <li
                        key = { index }
                        onClick = { () => {
                            categoryClick( item.id );
                        } }
                    >{ item.name }</li>
                );
            };


        } );

        return li;

    }


    
    return (

        <div className = 'selectedCategory'>
            <h3>Категория:</h3>

            <div 
                className = 'selectedCategory_drop_down'
                onMouseLeave = { () => { setCategoryIsOpen( false ) } }
            >
                <h4
                    onClick = { () => { setCategoryIsOpen( !categoryIsOpen ) }}
                >{ categoryNameValue }</h4>
                <div 
                    className = 'SCDD_btn'
                    onClick = { () => { setCategoryIsOpen( !categoryIsOpen ) }}
                >
                    <span className = { `SCDD_btn_icon ${categoryIsOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                </div>

                { categoryIsOpen? (
                    <ul className = 'SCDD_list'>
                        { createCategoryList( categoryList ) }
                    </ul>
                ): '' }
                
            </div>
        </div>

    )

};

export function SelectedCategory( props ){

    const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <SelectedCategoryComponent
            { ...props }
            categoryList = { layout.categoryList }
            categoryListById = { layout.categoryListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
