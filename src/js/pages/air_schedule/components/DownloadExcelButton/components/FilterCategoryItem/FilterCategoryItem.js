
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterCategoryItem.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

// import { get_event_style } from './../../../../../../helpers/get_event_style.js';


const FilterCategoryItemComponent = ( props ) => {

    let {
        category_id,

        filterList,
        setFilterList,

        categoryListById,

        // isUsed,
        // withOnlyApplications,
        // item_change_isUsed,
        // item_change_whatTake,

        // eventListById,

    } = props;

    let [ style, setStyle ] = useState({});
    let [ categoryName, setCategoryName ] = useState( '' );

    let [ allIsUsed, setAllIsUsed ] = useState( false );

    useEffect( () => {
        setAllIsUsed( get_all_is_used_value( filterList ) );
    }, [ filterList ] );

    useEffect( () => {

        let { name, colorBG, colorText } = categoryListById[ category_id ];

        setStyle({
            backgroundColor: colorBG,
            color: colorText,
        });
        setCategoryName( name );

    }, [category_id] );

    const get_all_is_used_value = ( arr ) => {
        let result = true;
        for( let i = 0; i < arr.length; i++ ){
            if( arr[ i ].category_id === category_id ){
                if( arr[ i ].isUsed === false ){
                    result = false;
                    break;
                };
            };
        };
        return result;

    };

    const set_all_is_used = () => {
        let arr = [];
        for( let i = 0; i < filterList.length; i++ ){
            let item = { ...filterList[ i ] };
            if( filterList[ i ].category_id === category_id ){
                item.isUsed = !allIsUsed;
            };
            arr.push( item );
        };

        setFilterList( arr );
        
    }

    return (
        <div className = { `S_DExcelComponent_FilterCategoryItem ${ allIsUsed? 'allIsUsed': '' }` }>
            <div
                className = 'chackBtn'
                onClick = { set_all_is_used }
            >
                { allIsUsed? (<span className = 'icon-ok-3'></span>): '' }
            </div>

            <div className = 'categoryName'>
                <span style = { style }>{ categoryName }</span>
            </div>

        </div>
        
    )

};


export function FilterCategoryItem( props ){

    const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <FilterCategoryItemComponent
            { ...props }
            categoryListById = { layout.categoryListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
