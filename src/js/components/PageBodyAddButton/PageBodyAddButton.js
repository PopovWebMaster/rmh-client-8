
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PageBodyAddButton.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

const PageBodyAddButtonComponent = ( props ) => {

    let {
        clickHandler,
    } = props;


    
    return (
        <div 
            className = 'PB_AddButton'
            onClick = { clickHandler }
        >
            <span className = { `icon-plus PB_AddButton_icon` }></span>
            <span className = ''>Добавить</span>
        </div>

    )

};

export function PageBodyAddButton( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <PageBodyAddButtonComponent
            { ...props }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
