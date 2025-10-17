
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice, setResultPointsSec } from './../../../../../../../../redux/playReportSlice.js';

import './ResultTitles.scss';

import { Points } from './components/Points/Points.js';

import { convert_ms_to_time } from './../../../../../../../../helpers/convert_ms_to_time.js';

const ResultTitlesComponent = ( props ) => {

    let {
        filteredList,
        resultPointsSec,
        detailDataIsActive,

    } = props;

    let [ view, setView ] = useState( 'yyyy-mm-dd' ); // 'yyyy-mm-dd' 'dd-mm-yyyy'
    let [ separator, setSeparator ] = useState( `\t` );
    let [ withFileName, setWithFileName ] = useState( false );

    let [ withFileDuration, setWithFileDuration ] = useState( false );
    let [ withFileExtension, setWithFileExtension ] = useState( true );



    let [ val, setVal ] = useState( '' );
    // let [ valRev, setValRev ] = useState( '' );


    const trim_sec_ms = ( str ) => {
        let arr = str.split( '.' );
        return `${arr[0]}`;

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



    // const get_row = ( date, startTime ) => {
    //     let { YYYY_MM_DD } = date;
    //     let { ms } = startTime;
    //     let arr = [];
    //     for( let i = 0; i < resultPointsSec.length; i++ ){
    //         let ms_point = ( resultPointsSec[ i ] * 1000 ) + ms;
    //         arr.push( trim_sec_ms( convert_ms_to_time( ms_point ) ) )
    //     };
    //     let points_str = arr.join( ', ' );
    //     let date_str = YYYY_MM_DD.replaceAll( '-', '.' );
    //     let result = date_str + '\t' + points_str + '\n';
    //     return result;
    // }

    const get_time_points = ( startTime ) => {
        let { ms } = startTime;
        let arr = [];
        for( let i = 0; i < resultPointsSec.length; i++ ){
            let ms_point = ( resultPointsSec[ i ] * 1000 ) + ms;
            arr.push( trim_sec_ms( convert_ms_to_time( ms_point ) ) )
        };
        let points_str = arr.join( ', ' );
        // let arr_22 = YYYY_MM_DD.split('-');
        // let date_str =  `${arr_22[2]}.${arr_22[1]}.${arr_22[0]}`


        // let result = date_str + '\t' + points_str + '\n';
        return points_str;
    }
    
/*
    useEffect( () => {

        let arr = [];
        let arrRev = [];


        let lastName = false;

        for( let i = 0; i < filteredList.length; i++ ){
            let {
                startTime,
                type,
                date,
            } = filteredList[ i ];

            if( type === 'movie' ){

                arr.push( get_row( date, startTime ) );
                arrRev.push( get_row_rew( date, startTime ) );

                
            };
        };

        let str = '';
        for( let i = 0; i < arr.length; i++ ){
            str = `${ str } ${arr[ i ]}`;
        };

        let str_rev = '';
        for( let i = 0; i < arrRev.length; i++ ){
            str_rev = `${ str_rev } ${arrRev[ i ]}`;
        };

        setVal( str );
        setValRev( str_rev );

    }, [ filteredList, resultPointsSec ] );
*/

    useEffect( () => {

        if( detailDataIsActive ){
            let rows = '';

            for( let i = 0; i < filteredList.length; i++ ){
                let {
                    startTime,
                    type,
                    file,
                    date,
                    segmentRealDuration,
                } = filteredList[ i ];

                if( type === 'movie' ){
                    // let { time } = startTime;
                    let dateFormat = get_data_format( date );
                    let fileName = '';
                    let timeShort = get_time_points( startTime );
                    if( timeShort !== ''){
                        timeShort = `${separator}${timeShort}`;
                    };
                    if( withFileName ){
                        fileName = `${separator}${file.name}`;
                        if( withFileExtension === false ){
                            fileName = fileName.replace(/\.[^/.]+$/, '');
                        };
                    };
                    let fileDuration = '';
                    if( withFileDuration ){
                        // fileDuration = `${separator}${trim_sec_ms( segmentRealDuration.time )}`;
                        fileDuration = `${separator}${ segmentRealDuration.ms/1000 }`;

                    };{/* Pogoda_Донецк_ */}

                    let row = `${dateFormat}${timeShort}${fileName}${fileDuration}\n`;
                    rows = rows + row;

                };
                {/* Pogoda_Донецк_ */}
            };
            setVal( rows );

        }else{
            setVal( '' );

        };

    }, [
        filteredList,
        detailDataIsActive,
        view,
        separator,
        withFileName,
        resultPointsSec,
        withFileDuration,
        withFileExtension

    ] );

    // let [ withFileDuration, setWithFileDuration ] = useState( false );
    // let [ withFileExtension, setWithFileExtension ] = useState( true );




    const change_separator = ( e ) => {
        let val = e.target.value;
        setSeparator( val );
    }

    return (

        <div className = 'DDW_ResultTitles'>

             <div className = 'DDW_ResultTitles_view'>

                <span className = 'DDW_ResultTitles_view_title'>Формат даты:</span>

                <span 
                    className = { `DDW_ResultTitles_view_btn ${view === 'yyyy-mm-dd'? 'isActive': ''}`}
                    onClick = { () => { setView( 'yyyy-mm-dd' ) } }
                >yyyy.mm.dd</span>
                <span 
                    className = { `DDW_ResultTitles_view_btn ${view === 'dd-mm-yyyy'? 'isActive': ''}`}
                    onClick = { () => { setView( 'dd-mm-yyyy' ) } }
                >dd.mm.yyyy</span>

            </div>

            <div className = 'DDW_points_separator'>
                <span className = 'DDW_points_separator_title'>Разделитель:</span>

                <span
                    className = 'DDW_points_separator_btn'
                    onClick = { () => { setSeparator( `\t` ); } }
                >tab</span>

                <span
                    className = 'DDW_points_separator_btn'
                    onClick = { () => { setSeparator( ' - ' ); } }
                > - </span>

                <input
                    type = 'text'
                    value = { separator }
                    onChange = { change_separator }
                />
            </div>





            <div className = 'DDW_points_file_name_add'>
                <span className = 'DDW_points_file_name_add_title'>Включить имя файла</span>
                <span 
                    className = { `DDW_points_file_name_add_btn ${withFileName === true? 'isActive': '' }` }
                    onClick = { () => { setWithFileName( true ) } }
                >Да</span>
                <span
                    className = { `DDW_points_file_name_add_btn ${withFileName === false? 'isActive': '' }` }
                    onClick = { () => { setWithFileName( false ) } }
                >Нет</span>
            </div>


            { withFileName? (
                <div className = 'DDW_points_file_name_add'>
                    <span className = 'DDW_points_file_name_add_title'>Расширение</span>
                    <span 
                        className = { `DDW_points_file_name_add_btn ${withFileExtension === true? 'isActive': '' }` }
                        onClick = { () => { setWithFileExtension( true ) } }
                    >Да</span>
                    <span
                        className = { `DDW_points_file_name_add_btn ${withFileExtension === false? 'isActive': '' }` }
                        onClick = { () => { setWithFileExtension( false ) } }
                    >Нет</span>
                
                </div>
            ): '' }






            <div className = 'DDW_points_file_name_add'>
                <span className = 'DDW_points_file_name_add_title'>Включить хрономентраж в секундах</span>
                <span 
                    className = { `DDW_points_file_name_add_btn ${withFileDuration === true? 'isActive': '' }` }
                    onClick = { () => { setWithFileDuration( true ) } }
                >Да</span>
                <span
                    className = { `DDW_points_file_name_add_btn ${withFileDuration === false? 'isActive': '' }` }
                    onClick = { () => { setWithFileDuration( false ) } }
                >Нет</span>
            </div>





            <Points />

            <textarea   
                className = ''
                value = { val }
                rows = { 2 }
                onChange = { () => {} }
            />

            {/* <textarea   
                className = ''
                value = { valRev }
                rows = { 2 }
                onChange = { () => {} }
            /> */}

        </div>
        
    )

};


export function ResultTitles( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ResultTitlesComponent
            { ...props }
   

            filteredList = { playReport.filteredList }
            resultPointsSec = { playReport.resultPointsSec }
            detailDataIsActive = { playReport.detailDataIsActive }


            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            setResultPointsSec = { ( val ) => { dispatch( setResultPointsSec( val ) ) } }


        />
    );


}
