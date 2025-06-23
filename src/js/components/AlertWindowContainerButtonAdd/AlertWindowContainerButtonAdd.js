
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AlertWindowContainerButtonAdd.scss';

// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

const AlertWindowContainerButtonAddComponent = ( props ) => {

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

        <div className = 'alertWindowContainerButtonAdd'>
            <div 
                className = { `AWCBA_btn ${ isActive? 'isActive': '' }` }
                onClick = { click }
            >
                <span className = 'icon-plus AWCBA_btn_icon'></span>
                <span className = ''>Добавить</span>
            </div>
        </div> 

    )

};

export function AlertWindowContainerButtonAdd( props ){

    // const layout = useSelector( layoutSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AlertWindowContainerButtonAddComponent
            { ...props }
            // categoryesIsChanged = { layout.categoryesIsChanged }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
