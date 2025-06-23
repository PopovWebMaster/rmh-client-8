
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PageBodySaveButton.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

const PageBodySaveButtonComponent = ( props ) => {

    let {
        isChanged,
        clickHandler,

    } = props;

    return (
        <div 
            className = { `PB_SaveButton ${ isChanged? 'isActive': ''}` }
            onClick = { clickHandler }
        >
            <span className = 'icon-floppy PB_SaveButton_icon'></span>
            <span className = ''>Сохранить изменения</span>
        </div>
    )

};

export function PageBodySaveButton( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <PageBodySaveButtonComponent
            { ...props }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
