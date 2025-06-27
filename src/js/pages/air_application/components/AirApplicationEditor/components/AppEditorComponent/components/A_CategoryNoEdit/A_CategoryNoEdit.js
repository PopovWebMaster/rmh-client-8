
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './A_CategoryNoEdit.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { DEFAULT_CATEGORY } from './../../../../../../../../config/layout.js';

const A_CategoryNoEditComponent = ( props ) => {

    let {
        currentAppCategoryId,
        categoryListById,
    } = props;

    let [ categoryName, setCategoryName ] = useState( '' );
    let [ categoryColorBG, setCategoryColorBG ] = useState( '' );
    let [ categoryColorText, setCategoryColorText ] = useState( '' );
    let [ categoryPrefix, setCategoryPrefix ] = useState( '' );



    useEffect( () => {

        if( categoryListById[ currentAppCategoryId ] ){
            let {
                name,
                prefix,
                colorText,
                colorBG,
            } = categoryListById[ currentAppCategoryId ];

            setCategoryName( name );
            setCategoryColorBG( colorBG );
            setCategoryColorText( colorText );
            setCategoryPrefix( prefix );


        }else{
            let {
                name,
                prefix,
                colorText,
                colorBG,
            } = DEFAULT_CATEGORY;

            setCategoryName( name );
            setCategoryColorBG( colorBG );
            setCategoryColorText( colorText );
            setCategoryPrefix( prefix );

        };

    }, [ currentAppCategoryId ] );



    return (
        <div className = 'A_CategoryNoEdit'>
            <h4>Категория:</h4>

            <span 
                className = 'A_CategoryNoEdit_name'
                style = {{
                    backgroundColor: categoryColorBG,
                    color: categoryColorText,
                }}
            >{ categoryName }</span>

            <input 
                type = 'text'
                className = 'A_CategoryNoEdit_prefix'
                value = { categoryPrefix }
                onChange = { () => {} }
            />

        </div>
    )

};

export function A_CategoryNoEdit( props ){

    const application = useSelector( applicationSlice );
    const layout = useSelector( layoutSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <A_CategoryNoEditComponent
            { ...props }

            categoryListById = { layout.categoryListById }
            currentAppCategoryId = { application.currentAppCategoryId }

            // setCurrentAppCategoryId = { ( val ) => { dispatch( setCurrentAppCategoryId( val ) ) } }


        />
    );


}
