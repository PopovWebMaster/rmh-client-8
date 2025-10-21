
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FPList.scss';

import { selectorData as airFilesSlice } from './../../../../../../redux/airFilesSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { set_air_file_prefix_list_to_store } from './../../../../vendors/set_air_file_prefix_list_to_store.js';

import { ScrollContainer } from './../../../../../../components/ScrollContainer/ScrollContainer.js';




const FPListComponent = ( props ) => {

    let {
        filePrefixList,

        setSpinnerIsActive,

    } = props;

    const remove = ( id ) => {
        setSpinnerIsActive( true );
        send_request_to_server({
            route: 'remove-file-prefix',
            data: {
                prefixId: id,
            },
            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){
                    setSpinnerIsActive( false );

                    if( response.airFilePrefix ){
                        set_air_file_prefix_list_to_store( response.airFilePrefix );
                    };
                };


            },
        });


    }

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {

            let {
                prefix,
                eventName,
                eventStyle,
                id
            } = item;

            return (
                <div
                    className = 'FPList_prefix_item'
                    key = { index }
                >
                    <span className = 'FPList_name'>{ prefix }</span>
                    <span 
                        className = 'FPList_event'
                        style = { eventStyle }
                    >{ eventName }</span>
                    <span
                        className = 'FPList_remove icon-cancel-2'
                        onClick = { () => { remove( id ) } }
                    ></span>

                </div>
            );

        } );

        return div;

    };


    return (
        <div className = 'FPList'>

            <ScrollContainer height = 'calc( 100vh - 7em )'>

                <div className = 'FPList_wrap'>
                    { create( filePrefixList ) }
                </div>

            </ScrollContainer>

        </div>
    )

};


export function FPList( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <FPListComponent
            { ...props }

            filePrefixList = { airFiles.filePrefixList }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
