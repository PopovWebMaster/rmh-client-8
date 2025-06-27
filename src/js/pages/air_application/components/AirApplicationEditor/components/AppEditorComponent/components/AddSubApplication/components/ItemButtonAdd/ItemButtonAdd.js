
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemButtonAdd.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

const ItemButtonAddComponent = ( props ) => {

    let {
        isReady,
        click

    } = props;

    return (
        <div className = 'NS_item_add_num'>
            
            <div 
                className = { `NS_btn_wrap ${ isReady? 'isActive': '' }` }
                onClick = { click }
            >
                <span className = 'icon-plus icon'></span>
                <span className = ''>Добавить</span>
            </div>

        </div>

    )

};

export function ItemButtonAdd( props ){

    // const application = useSelector( applicationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemButtonAddComponent
            { ...props }
            // currentAppCategoryId =      { application.currentAppCategoryId }
            // currentPage =               { navigation.currentPage }

            // setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
