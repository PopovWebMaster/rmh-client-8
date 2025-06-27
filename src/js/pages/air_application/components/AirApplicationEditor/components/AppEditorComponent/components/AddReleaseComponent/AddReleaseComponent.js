
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddReleaseComponent.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';

import { SelectedCategoryItem } from './components/SelectedCategoryItem/SelectedCategoryItem.js';
import { SelectedPeriodItem } from './components/SelectedPeriodItem/SelectedPeriodItem.js';
import { SelectedDurationItem } from './components/SelectedDurationItem/SelectedDurationItem.js';
import { SelectedNameItem } from './components/SelectedNameItem/SelectedNameItem.js';
import { ButtonAddRelease } from './components/ButtonAddRelease/ButtonAddRelease.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../config/layout.js';


const AddReleaseComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

    } = props;

    let [ dataFrom, setDataFrom ] = useState( '' );
    let [ dataTo, setDataTo ] = useState( '' );
    let [ releaseName, setReleaseName ] = useState( '' );


    let [ durationSec, setDurationSec ] = useState( MIN_EVENT_DURATION_SEC );


    return (
        <div className = 'addReleaseComponent'>

            <SelectedCategoryItem 
                isOpen = { isOpen }
            />
            <SelectedNameItem 
                isOpen = { isOpen }
                releaseName = { releaseName }
                setReleaseName = { setReleaseName }

            />

            <SelectedPeriodItem 
                isOpen =        { isOpen }
                dataFrom =      { dataFrom }
                dataTo =        { dataTo }
                setDataFrom =   { setDataFrom }
                setDataTo =     { setDataTo }
            />

            <SelectedDurationItem 
                isOpen =            { isOpen }
                durationSec =       { durationSec }
                setDurationSec =    { setDurationSec }
            />

            <ButtonAddRelease 
                setIsOpen =     { setIsOpen }

                dataFrom =      { dataFrom }
                dataTo =        { dataTo }
                durationSec =   { durationSec }
            />


        </div>
        
    )

};

export function AddReleaseComponent( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AddReleaseComponentComponent
            { ...props }
            currentAppNum =     { application.currentAppNum }
            currentAppName =    { application.currentAppName }
            currentAppType =    { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
