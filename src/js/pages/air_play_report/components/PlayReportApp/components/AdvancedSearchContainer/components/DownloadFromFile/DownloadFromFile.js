
import React, { useRef, useEffect, useState } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './DownloadFromFile.scss';

const DownloadFromFileComponent = ( props ) => {

    let {
        requestList,
        setRequestList,
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
        let file = files[0];

        let { type } = file;

        let newRequestList = [ ...requestList ];


        if( type === 'text/plain' ){

            let reader = new FileReader();
                
            reader.readAsText( file, 'UTF-8' );
        
            reader.onload = function() {
    
                let arr = reader.result.split( '\n' );
    
                for( let i = 0; i < arr.length; i++  ){
                    let val = arr[ i ].trim()
                    if( val !== '' ){
                        if( newRequestList.indexOf( val ) === -1 ){
                            newRequestList.push( val );
                        };
                    };
                };

                setRequestList( newRequestList );

            };

            inputRef.current.value = "";

        };

    }


    return (
        <div className = 'PR_ASC_DownloadFromFile'>
            <input 
                type =          'file' 
                ref =           { inputRef }
                className =     'hiddenInput'
                onChange =      { inputHandler }    
            />

            <div 
                className = 'PR_ASC_DownloadFromFile_downBtn'
                onClick = { click }
            >
                <span className = 'icon fa-file-o'></span>
                <span className = 'text'>Загрузить из файла .txt</span>
            </div>

            {/* <div className = 'PR_ASC_DownloadFromFile_infoBtn'>
                <span className = 'icon icon-info'></span>
                <span className = 'text'></span>
            </div> */}

            
        </div>

    )

};

export function DownloadFromFile( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <DownloadFromFileComponent
            { ...props }
            // searchFocus = { playReport.searchFocus }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
