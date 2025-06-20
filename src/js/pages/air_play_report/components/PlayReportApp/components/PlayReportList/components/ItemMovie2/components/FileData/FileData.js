
import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './FileData.scss';

const FileDataComponent = ( props ) => {

    let {
        file
    } = props;
    let [ value, setValue ] = useState( file.name );
    let [ showIsFile, setShowIsFile ] = useState( true );

    useEffect( () => {
        setValue( file.name );
    }, [ file ] );



    const clickFile = () => {
        setShowIsFile( true );
        setValue( file.name );
    }

    const clickPuth = () => {
        setShowIsFile( false );
        setValue( file.puth );

    }


    return (
        <div 
            className = 'PRL_ItemMovie2_FileData'
            onMouseLeave = { clickFile }
        >
            <div className = 'PRL_FileData_btn'>
                <span 
                    className = { showIsFile? 'PRL_FileData_btn_isActive': '' }
                    onClick = { clickFile }
                >file</span>

                <span 
                    className = { showIsFile? '': 'PRL_FileData_btn_isActive' }
                    onClick = { clickPuth }
                >puth</span>

            </div>

            <input 
                type = 'text'
                value = { value }
                onChange = { () => {} }
            />
            





            
        </div> 

    )

};

export function FileData( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <FileDataComponent
            { ...props }
            // searchValue = { playReport.searchValue }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
