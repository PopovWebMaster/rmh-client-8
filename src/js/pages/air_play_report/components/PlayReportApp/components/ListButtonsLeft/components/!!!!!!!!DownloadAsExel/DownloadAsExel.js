
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './DownloadAsExel.scss';

import { ButtonLeft } from './../ButtonLeft/ButtonLeft.js';

import { downloadExcel } from "react-export-table-to-excel";


const DownloadAsExelComponent = ( props ) => {

    let {
        filteredList,
        dateListSelected,
    } = props;



    const trim_ms = ( str ) => {
        let arr = str.split( '.' );
        return arr[0];
    }

    const click = () => {

        let Date_ =              'Дата';
        let Time =              'Время начала';
        let FileName =          'Имя файла';
        let FileDuration =      'Длительность файла';
        let FileDurationSec =   'Длительность файла (секунды)';
        let SegmentDuration =   'Длительность сегмента';
        let SegmentDurationSec ='Длительность сегмента (секунды)';
        let SegmentStart =      'Старт сегмента с';

        
        let now = new Date();
        let time_str = now.toTimeString();
        let arr = time_str.split( ' ' );
        let text_file_name = `${ dateListSelected } ${ arr[ 0 ] }`;

        let header = [ Date_, Time, FileName, FileDuration, FileDurationSec, SegmentDuration, SegmentDurationSec, SegmentStart ];

        let body = [];

        for( let i = 0; i < filteredList.length; i++ ){
            let {
                type,
                startTime,
                segmentRealDuration,
                markIn,
                fileDuration,
                file,
                date,
            } = filteredList[ i ];

            if( type === 'movie' ){
                body.push([
                    date.YYYY_MM_DD,
                    trim_ms( startTime.time ),
                    file.name,
                    trim_ms( fileDuration.time ),
                    Math.round( fileDuration.ms/1000 ),
                    trim_ms( segmentRealDuration.time ),
                    Math.round( segmentRealDuration.ms/1000 ),
                    trim_ms( markIn.time ),
                ] );

            }else if( type === 'empty' ){
                body.push([
                    date.YYYY_MM_DD,
                    trim_ms( startTime.time ),
                    'Ошибка! Прерывание эфира по неизвестной причине',
                    trim_ms( filteredList[ i ].duration.time ),
                    Math.round( filteredList[ i ].duration.ms/1000 ),
                    trim_ms( filteredList[ i ].duration.time ),
                    Math.round( filteredList[ i ].duration.ms/1000 ),
                    trim_ms( '00:00:00.00' ),
                ] );

            };
        };

        downloadExcel({
            fileName: text_file_name,
            sheet: "Страница 1",
            tablePayload: {
                header,
                body,
            },
        });
    };
    
    return (
        <div className = 'PRL_DownloadAsExel'>
            <ButtonLeft 
                icon = 'icon-download-alt'
                text = '.XLSX'
                click = { click }
            />
        </div>
    )

};

export function DownloadAsExel( props ){

    const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <DownloadAsExelComponent
            { ...props }
            filteredList = { playReport.filteredList }
            dateListSelected = { playReport.dateListSelected }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

