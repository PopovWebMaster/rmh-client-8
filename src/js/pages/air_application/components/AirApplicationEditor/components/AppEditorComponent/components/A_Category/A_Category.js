
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './A_Category.scss';

import { selectorData as applicationSlice, setCurrentAppCategoryId, setCurrentAppIsChanged } from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { EVENT_NAME_NOT_SELECTED } from './../../../../../../../../config/layout.js';

const A_CategoryComponent = ( props ) => {

    let {
        currentAppCategoryId,
        categoryList,
        categoryListById,
        setCurrentAppCategoryId,
        setCurrentAppIsChanged,
    } = props;

    let [ categoryIsOpen, setCategoryIsOpen ] = useState( false );
    let [ categoryNameValue, setCategoryNameValue ] = useState( EVENT_NAME_NOT_SELECTED );

    const categoryClick = ( name, id ) => {
        setCategoryNameValue( name );
        setCurrentAppCategoryId( id );
        setCategoryIsOpen( false );
        setCurrentAppIsChanged( true );
    }

    useEffect( () => {

        if( categoryListById[ currentAppCategoryId ] ){
            setCategoryNameValue( categoryListById[ currentAppCategoryId ].name );
        }else{
            setCategoryNameValue( EVENT_NAME_NOT_SELECTED );
        };

    }, [ currentAppCategoryId ] );

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
        <div className = 'A_Category'>
            <h4>Категория:</h4>

            <div 
                className = 'A_item_category'
                onMouseLeave = { () => { setCategoryIsOpen( false ) } }
            >
                <h4
                    onClick = { () => { setCategoryIsOpen( !categoryIsOpen ) }}
                >{ categoryNameValue }</h4>
                <div 
                    className = 'A_item_category_btn'
                    onClick = { () => { setCategoryIsOpen( !categoryIsOpen ) }}
                >
                    <span className = { `A_item_category_btn_icon ${categoryIsOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                </div>

                { categoryIsOpen? (
                    <ul className = 'A_item_category_list'>
                        { createCategoryList( categoryList ) }
                    </ul>
                ): '' }
                
            </div>

        </div>
    )

};

export function A_Category( props ){

    const application = useSelector( applicationSlice );
    const layout = useSelector( layoutSlice );


    
    // const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <A_CategoryComponent
            { ...props }

            categoryList = { layout.categoryList }
            categoryListById = { layout.categoryListById }

            // currentAppNum = { application.currentAppNum }
            // currentAppName = { application.currentAppName }
            // currentAppType = { application.currentAppType }
            currentAppCategoryId = { application.currentAppCategoryId }


            setCurrentAppCategoryId = { ( val ) => { dispatch( setCurrentAppCategoryId( val ) ) } }

            setCurrentAppIsChanged = { ( val ) => { dispatch( setCurrentAppIsChanged( val ) ) } }


        />
    );


}
