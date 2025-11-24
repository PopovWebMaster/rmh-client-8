
import React, { useRef, useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ELF_LinkedFilesList.scss';

// import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

import { get_metadata_from_video_file } from './../../../../../../../../../helpers/get_metadata_from_video_file.js';
import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js';
import { convert_time_str_to_sec } from './../../../../../../../../../helpers/convert_time_str_to_sec.js';

import { EVENT_TYPE } from './../../../../../../../../../config/layout.js';

import { ScrollContainer } from './../../../../../../../../../components/ScrollContainer/ScrollContainer.js';
import { set_event_changes_to_store } from './../../../../../vendors/set_event_changes_to_store.js';

const ELF_LinkedFilesListComponent = ( props ) => {

    let {
        event_id,
        linked_file,
        setSavingIsNeeded,
    
    } = props;

    const remove = ( fileName ) => {
        let arr = [];
        for( let i = 0; i < linked_file.length; i++ ){
            if( fileName !== linked_file[ i ].name ){
                arr.push( linked_file[ i ] );
            };
        };
        if( arr.length === 0 ){
            arr = null;
        };

        set_event_changes_to_store( event_id, { linked_file: arr } );
        setSavingIsNeeded( true );

    };

    const create = ( arr ) => {

        if( arr === null ){
            return '';

        }else{
            let div = arr.map( ( item, index ) => {

                let { 
                    name,
                    duration,
                } = item;

                return (
                    <div
                        className = 'ELF_LinkedFilesList_item'
                        key = { index }
                    >
                        <span className = 'ELF_L_time'>{ convert_sec_to_time( duration ) }</span>
                        <input
                            className = 'ELF_L_name'
                            type = 'text'
                            value = { name }
                            onChange = { () => {} }
                        />

                        <span
                            className = 'ELF_L_remove icon-cancel-2'
                            onClick = { () => { remove( name ) } }
                        ></span>

                    </div>
                );

            } );

            return div
        }

       

    };




    return (
        <div className = 'ELF_LinkedFilesList'>

            <ScrollContainer height = '5em'>

                { create( linked_file ) }

            </ScrollContainer>

        </div>

    )

};

export function ELF_LinkedFilesList( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ELF_LinkedFilesListComponent
            { ...props }
            // eventList = { layout.eventList }

            // setEventListAsChanged = { ( val ) => { dispatch( setEventListAsChanged( val ) ) } }

        />
    );


}
