
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddSeriesComponent.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';


import { SerialNumItem } from './component/SerialNumItem/SerialNumItem.js';
import { PeriodItem } from './component/PeriodItem/PeriodItem.js';
import { SerialDurationItem } from './component/SerialDurationItem/SerialDurationItem.js';
import { SelectCategoryItem } from './component/SelectCategoryItem/SelectCategoryItem.js';
import { ButtonAddSeries } from './component/ButtonAddSeries/ButtonAddSeries.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../config/layout.js';


const AddSeriesComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

    } = props;

    let [ numFromValue, setNumFromValue ] = useState( 1 );
    let [ numToValue, setNumToValue ] = useState( 1 );

    let [ dataFrom, setDataFrom ] = useState( '' );
    let [ dataTo, setDataTo ] = useState( '' );

    let [ durationSec, setDurationSec ] = useState( MIN_EVENT_DURATION_SEC );



    return (
        <div className = 'addSeriesComponent'>

            <SelectCategoryItem 
                isOpen = { isOpen }
            />

            <SerialNumItem 
                isOpen =        { isOpen }
                numFrom =       { numFromValue }
                numTo =         { numToValue }
                setNumFrom =    { setNumFromValue }
                setNumTo =      { setNumToValue }
            />

            <PeriodItem 
                isOpen =        { isOpen }
                dataFrom =      { dataFrom }
                dataTo =        { dataTo }
                setDataFrom =   { setDataFrom }
                setDataTo =     { setDataTo }
            />

            <SerialDurationItem 
                isOpen =            { isOpen }
                durationSec =       { durationSec }
                setDurationSec =    { setDurationSec }

            />

            <ButtonAddSeries 
                setIsOpen =     { setIsOpen }

                numFromValue =  { numFromValue }
                numToValue =    { numToValue }
                dataFrom =      { dataFrom }
                dataTo =        { dataTo }
                durationSec =   { durationSec }

            />



        </div>
        
    )

};

export function AddSeriesComponent( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AddSeriesComponentComponent
            { ...props }
            currentAppNum =     { application.currentAppNum }
            currentAppName =    { application.currentAppName }
            currentAppType =    { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
