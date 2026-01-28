// FRL_ButtonUploadTXT

// FRL_ButtonAddFromFolder


import React, { useEffect, useState, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_ButtonUploadTXT.scss';

// import { selectorData as scheduleResultSlise, setFreeReleasesIsChanges } from './../../../../../../../../redux/scheduleResultSlise.js';
// import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { convert_time_str_to_sec } from './../../../../../../../../../../helpers/convert_time_str_to_sec.js';
import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../../../config/layout.js';

const FRL_ButtonUploadTXTComponent = ( props ) => {

    let {
        newFilesList,
        setNewFilesList,

    } = props;


    const inputRef = useRef();

    const click = () => {

        let accept = [ '.txt' ];
        let input = inputRef.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();

    };

    const inputHandler = (e) => {

        if( !e.target.files.length ){
            return;
        };
        let files = e.target.files;

        console.dir( files[ 0 ] );


        let file = files[0];

        let { type } = file;

        if( type === 'text/plain' ){

            let reader = new FileReader();
                
            reader.readAsText( file, 'UTF-8' );

            let arr_list = [];
        
            reader.onload = function() {
    
                let arr = reader.result.split( '\n' );
    
                for( let i = 0; i < arr.length; i++  ){
                    let val = arr[ i ].trim()
                    if( val !== '' ){


                        let split_index = val.indexOf( '\t' );
                        if( split_index !== -1 ){
                            

                            let dutation = val.slice( 0, split_index );
                            let arr_sp = dutation.split( ':' );
                            if( arr_sp.length === 3 ){
                                let fileName = val.slice( split_index + 1 );
                                let fileNameTrim = fileName.trim();

                                let sec = convert_time_str_to_sec( dutation );

                                if( sec ){
                                    if( sec >= MIN_EVENT_DURATION_SEC ){
                                        arr_list.push({
                                            file_name: fileNameTrim,
                                            file_duration: sec,
                                        });
                                    };
                                };

                                
                            };
                        };
                    };
                };

                // console.dir( 'arr_list' );
                // console.dir( arr_list );


                setNewFilesList( arr_list );

            };

            inputRef.current.value = "";

        };



    }




    return (

        <div className = 'FRL_ButtonUploadTXT'>
            <span
                onClick = { click }
                className = 'FRL_btn_txt'
            >Загрузить из файла .txt</span>

            {/* { newFilesList.length > 0? (
                <span className = 'FRL_count'>Всего: { newFilesList.length } шт.</span>
            ): '' } */}

            <input 
                type =          'file' 
                ref =           { inputRef }
                className =     'hiddenInput'
                onChange =      { inputHandler }
                multiple =      { false }
            />
        </div>


    )

};

export function FRL_ButtonUploadTXT( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <FRL_ButtonUploadTXTComponent
            { ...props }

            // eventListById = { layout.eventListById }

            // setFreeReleasesIsChanges = { ( val ) => { dispatch( setFreeReleasesIsChanges( val ) ) } }

        />
    );


}
