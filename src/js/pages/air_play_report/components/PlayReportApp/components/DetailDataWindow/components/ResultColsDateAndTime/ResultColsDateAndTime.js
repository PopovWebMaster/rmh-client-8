
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './ResultColsDateAndTime.scss';


const ResultColsDateAndTimeComponent = ( props ) => {

    let {
        filteredList,
        detailDataIsActive,

    } = props;


    let [ view, setView ] = useState( 'yyyy-mm-dd' ); // 'yyyy-mm-dd' 'dd-mm-yyyy'
    let [ separator, setSeparator ] = useState( `\t` );
    let [ withFileName, setWithFileName ] = useState( false );
    let [ val, setVal ] = useState( '' );


    let [ val_2, setVal_2 ] = useState( '' );
    let [ val_2_revers, setVal_2_revers ] = useState( '' );

    useEffect( () => {

        if( detailDataIsActive ){
            let rows = '';

            for( let i = 0; i < filteredList.length; i++ ){
                let {
                    startTime,
                    type,
                    file,
                    date,
                } = filteredList[ i ];

                if( type === 'movie' ){
                    let { time } = startTime;
                    let dateFormat = get_data_format( date );
                    let fileName = '';
                    let timeShort = trim_sec_ms( time );
                    if( withFileName ){
                        fileName = `${separator}${file.name}`;
                    };
                    let row = `${dateFormat}${separator}${timeShort}${fileName}\n`;
                    rows = rows + row;

                };
            };
            setVal( rows );

        }else{
            setView( '' );

        };

    }, [
        filteredList,
        detailDataIsActive,
        view,
        separator,
        withFileName,
    ] );



    const trim_sec_ms = ( str ) => {
        let arr = str.split( '.' );
        let arr_2 = arr[0].split( ':' );
        return `${arr_2[0]}:${arr_2[1]}`;
    }

    const get_data_format = ( date ) => {
        let result = '';
        let { YYYY_MM_DD } = date;
        if( view === 'yyyy-mm-dd' ){
            result = YYYY_MM_DD.replaceAll( '-', '.' );
        }else if( view === 'dd-mm-yyyy' ){
            let arr = YYYY_MM_DD.split( '-' );
            result = `${arr[2]}.${arr[1]}.${arr[0]}`;
        };
        return result;
    }


    const change_separator = ( e ) => {
        let val = e.target.value;
        setSeparator( val );
    }

    return (

        <div className = 'DDW_ResultColsDateAndTime'>

            <div className = 'DDW_ResultColsDateAndTime_view'>

                <span className = 'DDW_ResultColsDateAndTime_view_title'>Формат даты:</span>

                <span 
                    className = { `DDW_ResultColsDateAndTime_view_btn ${view === 'yyyy-mm-dd'? 'isActive': ''}`}
                    onClick = { () => { setView( 'yyyy-mm-dd' ) } }
                >yyyy.mm.dd</span>
                <span 
                    className = { `DDW_ResultColsDateAndTime_view_btn ${view === 'dd-mm-yyyy'? 'isActive': ''}`}
                    onClick = { () => { setView( 'dd-mm-yyyy' ) } }
                >dd.mm.yyyy</span>

            </div>

            <div className = 'DDW_separator'>
                <span className = 'DDW_separator_title'>Разделитель:</span>

                <span
                    className = 'DDW_separator_btn'
                    onClick = { () => { setSeparator( `\t` ); } }
                >tab</span>

                <span
                    className = 'DDW_separator_btn'
                    onClick = { () => { setSeparator( ' - ' ); } }
                > - </span>

                <input
                    type = 'text'
                    value = { separator }
                    onChange = { change_separator }
                />
            </div>

            <div className = 'DDW_file_name_add'>
                <span className = 'DDW_file_name_add_title'>Включить имя файла</span>
                <span 
                    className = { `DDW_file_name_add_btn ${withFileName === true? 'isActive': '' }` }
                    onClick = { () => { setWithFileName( true ) } }
                >Да</span>
                <span
                    className = { `DDW_file_name_add_btn ${withFileName === false? 'isActive': '' }` }
                    onClick = { () => { setWithFileName( false ) } }
                >Нет</span>
            </div>

{/* Pogoda_Донецк_ */}




            <textarea   
                className = ''
                value = { val }
                rows = { 2 }
                onChange = { () => {} }
            />

        </div>
        
    )

};


export function ResultColsDateAndTime( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ResultColsDateAndTimeComponent
            { ...props }
   

            filteredList = { playReport.filteredList }
            detailDataIsActive = { playReport.detailDataIsActive }


            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            // setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
