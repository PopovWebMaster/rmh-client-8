
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as airFilesSlice, setAirFilesIsChanged } from './../../../../redux/airFilesSlice.js';
import { setSpinnerIsActive } from './../../../../redux/spinnerSlice.js';


import './FilesSaveChangesButton.scss';

import { PageBodySaveButton } from './../../../../components/PageBodySaveButton/PageBodySaveButton.js';

import { send_request_to_server } from './../../../../helpers/send_request_to_server.js'


const FilesSaveChangesButtonComponent = ( props ) => {

    let {
        airFilesIsChanged,
        airFiles,

        setSpinnerIsActive,
        setAirFilesIsChanged,

    } = props;

    const save = () => {

        

        if( airFilesIsChanged ){

            setSpinnerIsActive( true );

            let filesData = get_files_data();

            send_request_to_server({
                route: 'seve-changes-of-files',
                data: {
                    filesData,
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        setSpinnerIsActive( false );
                        setAirFilesIsChanged( false );
                    }

                },
            });

        };

    };

    const get_files_data = () => {
        let result = [];

        for( let name in airFiles ){
            let { premiereSec, event_id } = airFiles[ name ];
            result.push({
                name,
                premiereSec,
                event_id,
            });
        };

        return result;
    }
    
    return (
        <div className = 'filesSaveChangesButton'>
            <PageBodySaveButton
                isChanged = { airFilesIsChanged }
                clickHandler = { save }
            />
        </div>
    

    )

};

export function FilesSaveChangesButton( props ){

    const airFiles_ = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <FilesSaveChangesButtonComponent
            { ...props }
            airFilesIsChanged = { airFiles_.airFilesIsChanged }
            airFiles = { airFiles_.airFiles }


            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setAirFilesIsChanged = { ( val ) => { dispatch( setAirFilesIsChanged( val ) ) } }


            

        />
    );


}
