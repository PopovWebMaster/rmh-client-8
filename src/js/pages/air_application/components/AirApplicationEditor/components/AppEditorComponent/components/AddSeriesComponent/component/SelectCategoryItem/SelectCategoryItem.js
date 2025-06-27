
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SelectCategoryItem.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { A_Category } from './../../../A_Category/A_Category.js';

const SelectCategoryItemComponent = ( props ) => {

    let {
        isOpen,
        currentAppCategoryId

    } = props;

    let [ isShow, setIsShow ] = useState( false );

    useEffect( () => {
        if( isOpen ){
            if( currentAppCategoryId === null ){
                setIsShow( true );
            }else{
                setIsShow( false );
            };

        }else{
            setIsShow( false );
        };

    }, [ isOpen ] );


    return (
        <div className = 'ASC_item_category_num'>
            { isShow? <A_Category />: '' }
            
        </div>

    )

};

export function SelectCategoryItem( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <SelectCategoryItemComponent
            { ...props }
            currentAppCategoryId =     { application.currentAppCategoryId }
            // currentAppName =    { application.currentAppName }
            // currentAppType =    { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
