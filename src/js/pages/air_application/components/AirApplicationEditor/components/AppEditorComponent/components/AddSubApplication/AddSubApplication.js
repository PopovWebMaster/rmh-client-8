
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddSubApplication.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


import { AddSubAButton } from './components/AddSubAButton/AddSubAButton.js';
import { NewSubReleaseComponent } from './components/NewSubReleaseComponent/NewSubReleaseComponent.js';
import { NewSubSeriesComponent } from './components/NewSubSeriesComponent/NewSubSeriesComponent.js';


const AddSubApplicationComponent = ( props ) => {

    let {
        // currentAppType,
        // currentAppName,
    } = props;

    let [ isOpenRelease, setIsOpenRelease ] = useState( false );
    let [ isOpenSeries, setIsOpenSeries ] = useState( false );


    return (
        <div className = 'AddSubApplication'>

            <AlertWindowContainer
                isOpen =    { isOpenRelease }
                setIsOpen = { setIsOpenRelease }
                width =     '40em'
                height =    '22em'
                title = 'Добавить выпуск'
            >
                <NewSubReleaseComponent
                    isOpen =    { isOpenRelease }
                    setIsOpen = { setIsOpenRelease }
                />
            </AlertWindowContainer>

            <AlertWindowContainer
                isOpen =    { isOpenSeries }
                setIsOpen = { setIsOpenSeries }
                width =     '40em'
                height =    '22em'
                title = 'Добавить серии'
            >
                <NewSubSeriesComponent
                    isOpen =    { isOpenSeries }
                    setIsOpen = { setIsOpenSeries }
                />

            </AlertWindowContainer>

            <AddSubAButton 
                setIsOpenRelease = { setIsOpenRelease }
                setIsOpenSeries = { setIsOpenSeries }
            />


        </div>
        
    )

};

export function AddSubApplication( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AddSubApplicationComponent
            { ...props }
            // currentAppNum = { application.currentAppNum }
            // currentAppName = { application.currentAppName }
            // currentAppType = { application.currentAppType }
            // currentAppCategoryId = { application.currentAppCategoryId }




            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
