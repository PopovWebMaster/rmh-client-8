// AlertWindowContainerSaveAdd


import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AlertWindowContainerSaveAdd.scss';

// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

const AlertWindowContainerSaveAddComponent = ( props ) => {

    let {
        isActive = true,
        clickHandler,

    } = props;

    let click = () => {
        if( isActive ){
            clickHandler();
        };
    };

    return (

        <div className = 'alertWindowContainerSaveAdd'>
            <div 
                className = { `AWCBA_btn ${ isActive? 'isActive': '' }` }
                onClick = { click }
            >
                <span className = 'icon-floppy AWCBA_btn_icon'></span>
                <span className = ''>Сохранить</span>
            </div>
        </div> 

    )

};

export function AlertWindowContainerSaveAdd( props ){

    // const layout = useSelector( layoutSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AlertWindowContainerSaveAddComponent
            { ...props }
            // categoryesIsChanged = { layout.categoryesIsChanged }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
