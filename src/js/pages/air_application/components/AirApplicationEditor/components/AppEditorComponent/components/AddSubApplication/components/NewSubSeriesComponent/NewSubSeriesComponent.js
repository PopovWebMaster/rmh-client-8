
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './NewSubSeriesComponent.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';
import { send_request_to_server }           from './../../../../../../../../../../helpers/send_request_to_server.js';

import { ItemSerialNum } from './../ItemSerialNum/ItemSerialNum.js';
import { ItemPeriod } from './../ItemPeriod/ItemPeriod.js';
import { ItemDuration } from './../ItemDuration/ItemDuration.js';
import { ItemNotes } from './../ItemNotes/ItemNotes.js';
import { ItemButtonAdd } from './../ItemButtonAdd/ItemButtonAdd.js';
import { ItemSerialFileNames } from './../ItemSerialFileNames/ItemSerialFileNames.js';
import { ItemSeriesNameTemplate } from './../ItemSeriesNameTemplate/ItemSeriesNameTemplate.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../../../config/layout.js';


import { set_application_data_to_store } from './../../../../../../vendors/set_application_data_to_store.js';

const NewSubSeriesComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        currentApplicationId,
        currentAppName,
        currentAppCategoryId,
        currentAppNum,
        currentAppManagerNotes,

        currentPage,
        setSpinnerIsActive,
        // setApplicationList,

    } = props;

    let [ isReady, setIsReady ] = useState( true );

    let [ numFromValue, setNumFromValue ] = useState( 1 );
    let [ numToValue, setNumToValue ] = useState( 1 );

    let [ dataFrom, setDataFrom ] = useState( '' );
    let [ dataTo, setDataTo ] = useState( '' );

    let [ durationSec, setDurationSec ] = useState( MIN_EVENT_DURATION_SEC );
    let [ notes, setNotes ] = useState( '' );

    let [ nameTemplate, setNameTemplate ] = useState( '' );
    let [ serialNames, setSerialNames ] = useState( {} );
    let [ serialFileNames, setSerialFileNames ] = useState( {} );


    const get_series_data_list = () => {

        let result = [];

        for( let key in serialNames ){
            let seriaName = serialNames[ key ];
            let fileName = serialFileNames[ key ].name;
            let fileDuration = serialFileNames[ key ].duration;

            result.push({
                seriaName,
                fileName: fileName.trim(),
                fileDuration,
                serial_num: Number( key ),
            });
        };

        return result;

    }





    const click = () => {

        if( isReady ){

            // console.dir({
            //         applicationId: currentApplicationId,
            //         applicationName:            currentAppName,
            //         applicationCategoryId:      currentAppCategoryId,
            //         applicationNum:             currentAppNum,
            //         applicationManagerNotes:    currentAppManagerNotes,
            //         serialNumFrom: numFromValue,
            //         serialNumTo: numToValue,
            //         periodFrom: dataFrom,
            //         periodTo: dataTo,
            //         durationSec,
            //         airNotes: notes,
            //         seriesDataList: get_series_data_list(),
            // });


            

            setSpinnerIsActive( true );

            send_request_to_server({
                route: `add-new-subapplication-series`,
                data: { 
                    applicationId: currentApplicationId,
                    
                    applicationName:            currentAppName,
                    applicationCategoryId:      currentAppCategoryId,
                    applicationNum:             currentAppNum,
                    applicationManagerNotes:    currentAppManagerNotes,

                    serialNumFrom: numFromValue,
                    serialNumTo: numToValue,
                    periodFrom: dataFrom,
                    periodTo: dataTo,
                    durationSec,
                    airNotes: notes,
                    seriesDataList: get_series_data_list(),
                },

                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){

                        setSpinnerIsActive( false );
                        set_application_data_to_store( response.application, response.applicationList );
                        setIsOpen( false );

                    };

                },
            });

            


        };
    }




    return (
        <div className = 'newSubSeriesComponent'>

            <ItemSerialNum 
                isOpen =        { isOpen }
                numFrom =       { numFromValue }
                numTo =         { numToValue }
                setNumFrom =    { setNumFromValue }
                setNumTo =      { setNumToValue }
            />

            <ItemPeriod 
                isOpen =        { isOpen }
                dataFrom =      { dataFrom }
                dataTo =        { dataTo }
                setDataFrom =   { setDataFrom }
                setDataTo =     { setDataTo }
            />

            <ItemDuration 
                title = 'Длительность серии:'
                isOpen =            { isOpen }
                durationSec =       { durationSec }
                setDurationSec =    { setDurationSec }
            />

            <ItemNotes 
                isOpen =            { isOpen }
                notes =             { notes }
                setNotes =          { setNotes }
            />

            <ItemSeriesNameTemplate
                isOpen =            { isOpen }
                nameTemplate =      { nameTemplate }
                setNameTemplate =   { setNameTemplate }
                numFrom =           { numFromValue }
                numTo =             { numToValue }
                applicationName =   { currentAppName }
                serialNames =       { serialNames }
                setSerialNames =    { setSerialNames }
            />

            <ItemSerialFileNames
                isOpen =                { isOpen }
                serialNames =           { serialNames }
                serialFileNames =       { serialFileNames }
                setSerialFileNames =    { setSerialFileNames }
                durationSec =           { durationSec }
            />

            <ItemButtonAdd 
                isReady = { isReady }
                click = { click }
            />

            

        </div>
        
    )

};

export function NewSubSeriesComponent( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <NewSubSeriesComponentComponent
            { ...props }
            // currentAppCategoryId =      { application.currentAppCategoryId }
            currentApplicationId =      { application.currentApplicationId }

            currentAppName =            { application.currentAppName }
            currentAppCategoryId =      { application.currentAppCategoryId }
            currentAppNum =             { application.currentAppNum }
            currentAppManagerNotes =    { application.currentAppManagerNotes }

            setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            // setApplicationList =    { ( val ) => { dispatch( setApplicationList( val ) ) } }


            


        />
    );


}
