
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './DownloadAsText.scss';

import { ButtonLeft } from './../ButtonLeft/ButtonLeft.js';


const DownloadAsTextComponent = ( props ) => {

    let {
        filteredList,
        dateListSelected,
    } = props;

    const get_row_str = ( params ) => {
        let {
            Date,
            Time,
            FileName,
            FileDuration,
            FileDurationSec,
            SegmentDuration,
            SegmentDurationSec,
            SegmentStart,
        } = params;

        return `${Date}\t${Time}\t${FileName}\t${FileDuration}\t${FileDurationSec}\t${SegmentDuration}\t${SegmentDurationSec}\t${SegmentStart}\n`

    };

    const trim_ms = ( str ) => {
        let arr = str.split( '.' );
        return arr[0];
    }

    const click = () => {

        let Date_ =             'Дата';
        let Time =              'Время начала';
        let FileName =          'Имя файла';
        let FileDuration =      'Длительность файла';
        let FileDurationSec =   'Длительность файла (секунды)';
        let SegmentDuration =   'Длительность сегмента';
        let SegmentDurationSec ='Длительность сегмента (секунды)';
        let SegmentStart =      'Старт сегмента с';

        let content = get_row_str({
            Date: Date_,
            Time,
            FileName,
            FileDuration,
            FileDurationSec,
            SegmentDuration,
            SegmentDurationSec,
            SegmentStart,
        });

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

                console.dir( filteredList[ i ] );

                let row = get_row_str({
                    Date: date.YYYY_MM_DD,
                    Time: trim_ms( startTime.time ),
                    FileName: file.name,
                    FileDuration: trim_ms( fileDuration.time ),
                    FileDurationSec: Math.round( fileDuration.ms/1000 ),
                    SegmentDuration: trim_ms( segmentRealDuration.time ),
                    SegmentDurationSec: Math.round( segmentRealDuration.ms/1000 ),
                    SegmentStart: trim_ms( markIn.time ),
                });

                content = `${content}${row}`;

            }else if( type === 'empty' ){

                let row = get_row_str({
                    Date: date.YYYY_MM_DD,
                    Time: trim_ms( startTime.time ),
                    // FileName: file.name,
                    FileName: 'Ошибка! Прерывание эфира по неизвестной причине',
                    FileDuration: trim_ms( filteredList[ i ].duration.time ),
                    FileDurationSec: Math.round( filteredList[ i ].duration.ms/1000 ),
                    SegmentDuration: trim_ms( filteredList[ i ].duration.time ),
                    SegmentDurationSec: Math.round( filteredList[ i ].duration.ms/1000 ),
                    SegmentStart: trim_ms( '00:00:00.00' ),
                });

                content = `${content}${row}`;




            };

        };

        const el = (sel, par) => (par || document).querySelector(sel);
        const elNew = (tag, prop) => Object.assign(document.createElement(tag), prop);
        const createAndDownload = ( content, download = `${dateListSelected}.txt`, type = "text/plain" ) => {
            const file = new Blob([content], { type });
            const href = URL.createObjectURL(file);
            const elAnchor = elNew("a", { href, download });
            el("body").append(elAnchor);
            elAnchor.click();
            elAnchor.remove();
            URL.revokeObjectURL(href);
        };

        let now = new Date();
        let time_str = now.toTimeString();
        let arr = time_str.split( ' ' );
        let text_file_name = `${ dateListSelected } ${ arr[ 0 ] }.txt`;
        createAndDownload( content, text_file_name );

    };



    
    return (
        <div className = 'PRL_DownloadAsText'>
            <ButtonLeft 
                icon = 'icon-download-alt'
                text = '.TXT'
                click = { click }
            />
        </div>
    )

};

export function DownloadAsText( props ){

    const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <DownloadAsTextComponent
            { ...props }
            filteredList = { playReport.filteredList }
            dateListSelected = { playReport.dateListSelected }

            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

