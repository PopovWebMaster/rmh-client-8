
import React, { useRef, useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ELF_ButtonAddFile.scss';

// import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

import { get_metadata_from_video_file } from './../../../../../../../../../helpers/get_metadata_from_video_file.js';
import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js';
import { convert_time_str_to_sec } from './../../../../../../../../../helpers/convert_time_str_to_sec.js';


import { EVENT_TYPE } from './../../../../../../../../../config/layout.js';

import { AWButtonAdd } from './../../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { set_event_changes_to_store } from './../../../../../vendors/set_event_changes_to_store.js';

// import { get_gridDayEventsList_with_new_duration_time } from './vendors/get_gridDayEventsList_with_new_duration_time.js';
import { get_gridDayEventsList_with_new_duration_time } from './../../EventDurationItem/vendors/get_gridDayEventsList_with_new_duration_time.js';



const ELF_ButtonAddFileComponent = ( props ) => {

    let {
        event_id,
        linked_file,
        type,
        newFileName,
        newFileDuration,
        setNewFileName,
        setNewFileDuration,
        setSavingIsNeeded,
        
    } = props;

    let addTitle = 'Добавить';
    let changeTitle = 'Заменить';


    let [ isReady, setIsReady ] = useState( false );
    let [ titleVakue, setTitleVakue ] = useState( addTitle );


    useEffect( () => {
        if( newFileName === '' ){
            setIsReady( false );
        }else{
            if( newFileDuration === 0 ){
                setIsReady( false );
            }else{
                setIsReady( true );
            };
        };
    }, [
        newFileName,
        newFileDuration,
    ] );

    useEffect( () => {
        if( linked_file === null ){
            setTitleVakue( addTitle );
        }else{
            if( type === EVENT_TYPE.FILE ){
                setTitleVakue( changeTitle );
            }else if( type === EVENT_TYPE.BLOCK ){
                setTitleVakue( addTitle );
            };
        };

    }, [ 
        linked_file,
        type,
        newFileName,
     ] );

    const click = () => {

        if( isReady ){
            let arr = [];

            let item = {
                name:       newFileName,
                duration:   newFileDuration,
            };
            if( type === EVENT_TYPE.FILE ){
                arr.push( item );
            }else if( type === EVENT_TYPE.BLOCK ){
                if( linked_file === null ){
                    arr.push( item );
                }else{
                    for( let i = 0; i < linked_file.length; i++ ){
                        if( linked_file[ i ].name !== newFileName ){
                            arr.push( { ...linked_file[ i ] } );
                        };
                    };
                    arr.push( item );
                };
            };


            let all_duration = 0;
            for( let i = 0; i < arr.length; i++ ){
                let { duration } = arr[ i ];
                all_duration = all_duration + duration;
            };

            let addReport = get_gridDayEventsList_with_new_duration_time( event_id, all_duration );
            if( addReport.isErrors ){
                
                alert( addReport.message );

            }else{
                set_event_changes_to_store( event_id, { linked_file: arr } );
                setNewFileName( '' );
                setNewFileDuration( 0 );
                setSavingIsNeeded( true );

            };

        };


    }

    return (
        <div className = 'ELF_ButtonAddFile'>

            <AWButtonAdd
                isReady =       { isReady }
                clickHandler =  { click }
                title =         { titleVakue }
        // isReady,
        // clickHandler,
        // icon = 'icon-plus',
            />
            


        </div>

    )

};

export function ELF_ButtonAddFile( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ELF_ButtonAddFileComponent
            { ...props }
            // eventList = { layout.eventList }

            // setEventListAsChanged = { ( val ) => { dispatch( setEventListAsChanged( val ) ) } }

        />
    );


}
