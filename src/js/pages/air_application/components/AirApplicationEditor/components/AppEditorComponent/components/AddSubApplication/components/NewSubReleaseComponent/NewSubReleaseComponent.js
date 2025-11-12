
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './NewSubReleaseComponent.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
import { selectorData as layoutSlice } from './../../../../../../../../../../redux/layoutSlice.js';

import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';
import { send_request_to_server }           from './../../../../../../../../../../helpers/send_request_to_server.js';
import { convert_time_str_to_sec }           from './../../../../../../../../../../helpers/convert_time_str_to_sec.js';


import { ItemPeriod } from './../ItemPeriod/ItemPeriod.js';
import { ItemDuration } from './../ItemDuration/ItemDuration.js';
import { ItemNotes } from './../ItemNotes/ItemNotes.js';
import { ItemButtonAdd } from './../ItemButtonAdd/ItemButtonAdd.js';
import { ItemName } from './../ItemName/ItemName.js';

import { ItemReleaseFileName } from './../ItemReleaseFileName/ItemReleaseFileName.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../../../config/layout.js';

import { set_application_data_to_store } from './../../../../../../vendors/set_application_data_to_store.js';

const NewSubReleaseComponentComponent = ( props ) => {

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


        currentAppEventId,
        eventListById,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    let [ dataFrom, setDataFrom ] = useState( '' );
    let [ dataTo, setDataTo ] = useState( '' );

    let [ durationSec, setDurationSec ] = useState( 0 );
    let [ notes, setNotes ] = useState( '' );

    let [ name, setName ] = useState( '' );
    let [ nameIsError, setNameIsError ] = useState( false );

    let [ releaseFileName, setReleaseFileName ] = useState( false );

    useEffect(() => {

        if( isOpen ){
            if( eventListById[ currentAppEventId ] ){
                let { durationTime } = eventListById[ currentAppEventId ];
                let dur_sec = convert_time_str_to_sec( durationTime );
                setDurationSec( dur_sec );

            }else{
                setDurationSec( MIN_EVENT_DURATION_SEC );
            };
        }else{

        };

    }, [ isOpen ]);



    useEffect( () => {
        if( nameIsError ){
            setIsReady( false );
        }else{
            if( name === '' ){
                setIsReady( false );
            }else{
                if( durationSec < MIN_EVENT_DURATION_SEC ){
                    setIsReady( false );
                }else{
                    setIsReady( true );
                };
            };
        };

    }, [ 
        nameIsError,
        name,
        durationSec,
    ] );



    const click = () => {

        if( isReady ){

            setSpinnerIsActive( true );

            send_request_to_server({
                route: `add-new-subapplication-release`,
                data: { 
                    applicationId: currentApplicationId,

                    applicationName:            currentAppName,
                    applicationCategoryId:      currentAppCategoryId,
                    applicationNum:             currentAppNum,
                    applicationManagerNotes:    currentAppManagerNotes,

                    periodFrom: dataFrom,
                    periodTo: dataTo,
                    name,
                    durationSec,
                    airNotes: notes,
                    releaseFileName: releaseFileName.trim(),
                },

                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){

                        set_application_data_to_store( response.application, response.applicationList );

                        setSpinnerIsActive( false );
                        setIsOpen( false );

                    };

                },
            });

        };
    }


    return (
        <div className = 'newSubReleaseComponent'>

            <ItemName 
                isOpen =            { isOpen }
                name =              { name }
                setName =           { setName }
                nameIsError =       { nameIsError }
                setNameIsError =    { setNameIsError }
                setIsReady = { setIsReady }
            
            />

            <ItemReleaseFileName
                isOpen =                { isOpen }
                releaseFileName =       { releaseFileName }
                setReleaseFileName =    { setReleaseFileName }
                setDurationSec =        { setDurationSec}
            />

            <ItemPeriod 
                isOpen =        { isOpen }
                dataFrom =      { dataFrom }
                dataTo =        { dataTo }
                setDataFrom =   { setDataFrom }
                setDataTo =     { setDataTo }
            />

            <ItemDuration 
                title = 'Длительность выпуска:'
                isOpen =            { isOpen }
                durationSec =       { durationSec }
                setDurationSec =    { setDurationSec }
                setIsReady =        { setIsReady }
                name =              { name }
            />

            <ItemNotes 
                isOpen =            { isOpen }
                notes =             { notes }
                setNotes =          { setNotes }
            />

            <ItemButtonAdd 
                isReady =   { isReady }
                click =     { click }
            />
            

        </div>
        
    )

};

export function NewSubReleaseComponent( props ){

    const application = useSelector( applicationSlice );
    const layout = useSelector( layoutSlice );



    
    const dispatch = useDispatch();

    return (
        <NewSubReleaseComponentComponent
            { ...props }
            // currentAppCategoryId =      { application.currentAppCategoryId }
            currentApplicationId =      { application.currentApplicationId }

            currentAppEventId = { application.currentAppEventId }
            eventListById =     { layout.eventListById }



            





            currentAppName =            { application.currentAppName }
            currentAppCategoryId =      { application.currentAppCategoryId }
            currentAppNum =             { application.currentAppNum }
            currentAppManagerNotes =    { application.currentAppManagerNotes }
            setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
