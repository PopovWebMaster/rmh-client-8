
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilesCollectDataButton.scss';

import { selectorData as airFilesSlice } from './../../../../redux/airFilesSlice.js';
import { setSpinnerIsActive } from './../../../../redux/spinnerSlice.js';


import { FilesTopButtonComponent } from './../FilesTopButtonComponent/FilesTopButtonComponent.js';

import { send_request_to_server } from './../../../../helpers/send_request_to_server.js';
import { set_air_files_to_store } from './../../vendors/set_air_files_to_store.js';

const FilesCollectDataButtonComponent = ( props ) => {

    let {
        periodFrom,
        periodTo,

        setSpinnerIsActive,

    } = props;

    const collect = () => {

        setSpinnerIsActive( true );

        send_request_to_server( {
            route: 'collect-files-data',
            data: {
                periodFrom,
                periodTo,
            },
            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){
                    let { airFiles } = response;

                    set_air_files_to_store( airFiles );

                    setSpinnerIsActive( false );

                };


            }

        } );

    }

    return (
        <FilesTopButtonComponent
            icon =          { 'icon-folder-open' }
            title =         { 'Собрать данные' }
            isActive =      { true }
            clickHandler =  { collect }
        
        />
    )

};


export function FilesCollectDataButton( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <FilesCollectDataButtonComponent
            { ...props }

            periodFrom = { airFiles.periodFrom }
            periodTo = { airFiles.periodTo }


            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
