
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddSubAButton.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';


const AddSubAButtonComponent = ( props ) => {

    let {
        setIsOpenRelease,
        setIsOpenSeries,

    } = props;

    return (
        <div className = 'AddSubAButton'>

            <div className = 'AddSubAButton_title'>
                {/* <span className = 'icon icon-plus'></span> */}
                <span className = 'title'>Добавить</span>
            </div>
            
            <div 
                className = 'AddSubAButton_btn'
                onClick = { () => { setIsOpenRelease( true ) } }
            >
                <span>Выпуск</span>
            </div>

            <div 
                className = 'AddSubAButton_btn'
                onClick = { () => { setIsOpenSeries( true ) } }
            >
                <span>Серии</span>
            </div>

        </div>
        
    )

};

export function AddSubAButton( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AddSubAButtonComponent
            { ...props }
            // currentAppNum = { application.currentAppNum }
            // currentAppName = { application.currentAppName }
            // currentAppType = { application.currentAppType }
            // currentAppCategoryId = { application.currentAppCategoryId }




            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
