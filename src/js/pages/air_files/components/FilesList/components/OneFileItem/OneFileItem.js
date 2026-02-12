
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneFileItem.scss';

import { selectorData as airFilesSlice, setCurrentFilterEventId } from './../../../../../../redux/airFilesSlice.js';

import { get_premier_from_sec } from './../../../../vendors/get_premier_from_sec.js';

import { set_isChaked_into_filteredList } from './../../../../vendors/set_isChaked_into_filteredList.js';
import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';


const OneFileItemComponent = ( props ) => {

    let {

        fileName,
        fileDuration,
        filterItemsByEventId,
        filteredList,
        filteredListByName,

    } = props;



    let [ countValue, setCountValue ] = useState( '' );
    let [ premiereValue, setPremiereValue ] = useState( '' );
    let [ eventStyle, setEventStyle ] = useState( null );
    let [ eventName, setEventName ] = useState( null );

    let [ chackValue, setChackValue ] = useState( false );
    

    useEffect( () => {
        if( filteredListByName[ fileName ] ){
            let {
                premiereSec,
                count,
                event_id,
                isSelected,
            } = filteredListByName[ fileName ];

            setCountValue( count );
            setPremiereValue( get_premier_from_sec( premiereSec ) );

            if( filterItemsByEventId[ event_id ] ){
                let { event } = filterItemsByEventId[ event_id ];
                let { style, name } = event;
                setEventName( name );
                setEventStyle( style );
            };

            setChackValue( isSelected );
        };

    }, [ filteredListByName, filteredList, fileName ] );

    const chack = ( e ) => {
        set_isChaked_into_filteredList( [ fileName ], !chackValue );
    };

    return (
        <div className = 'FL_OneFileItem'>

            <input
                type =      'checkbox'
                value =     { true }
                checked =   { chackValue }
                onChange =  { chack }
            />

            <input
                type =      'text'
                className = 'FL_OneFileItem_fileName'
                value =     { fileName }
                onChange =  { () => {} }
            />

            { eventStyle === null? '': (
                <span className = 'FL_OneFileItem_event' style = { eventStyle }>{ eventName }</span>
            ) }
            
            <span className = 'FL_OneFileItem_dur'>
                <span className = 'FL_OneFileItem_dur_val'>{ convert_sec_to_time( fileDuration ) }</span>
            </span>

            <span className = 'FL_OneFileItem_count'>
                <span className = 'FL_OneFileItem_count_title'>Повторов:</span>
                <span className = 'FL_OneFileItem_count_val'>{ countValue }</span>
            </span>
            <span className = 'FL_OneFileItem_premiere'>{ premiereValue }</span>

        </div>
    )

};


export function OneFileItem( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <OneFileItemComponent
            { ...props }

            filterItemsByEventId =  { airFiles.filterItemsByEventId }

            filteredList = { airFiles.filteredList }
            filteredListByName = { airFiles.filteredListByName }


            // setCurrentFilterEventId = { ( val ) => { dispatch( setCurrentFilterEventId( val ) ) } }

        />
    );


}
