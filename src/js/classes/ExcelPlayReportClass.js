
import * as XLSX from 'xlsx-js-style';

import { RowClass } from './vendors/ExcelPlayReportClass/RowClass.js';
import { get_header_row } from './vendors/ExcelPlayReportClass/get_header_row.js';
import store from './../redux/store.js'

export class ExcelPlayReportClass{
    constructor(){

        this.rows = [];

        // this.Date_ =             'Дата';
        // this.Time =              'Время начала';
        // this.FileName =          'Имя файла';
        // this.FileDuration =      'Длительность файла';
        // this.FileDurationSec =   'Длительность файла (секунды)';
        // this.SegmentDuration =   'Длительность сегмента';
        // this.SegmentDurationSec ='Длительность сегмента (секунды)';
        // this.SegmentStart =      'Старт сегмента с';

        this.nextRowNumber = 1;
        this.firstData = '1';
        this.lastData = '2';



        this.AddList = this.AddList.bind(this);
        this.GetOneRow = this.GetOneRow.bind(this);
        this.Download = this.Download.bind(this);


        

    }

    AddList( list ){
        for( let i = 0; i < list.length; i++ ){
            if( i === 0 ){
                this.firstData = list[ i ].date.YYYY_MM_DD;
            };

            if( list[ i + 1 ] ){
                
            }else{
                this.lastData = list[ i ].date.YYYY_MM_DD;
            };
            this.rows.push( this.GetOneRow( list[ i ] ) );
        };
    }

    GetOneRow( item ){
        const trim_ms = ( str ) => {
            let arr = str.split( '.' );
            return arr[0];
        }

        let date = item.date.YYYY_MM_DD;
        let time = trim_ms( item.startTime.time );
        let fileName = '';
        let fileDuration = '';
        let fileDurationSec = '';
        let segmentDuration = '';
        let segmentDurationSec = '';
        let segmentStart = '';

        if( item.type === 'movie' ){
            fileName =              item.file.name;
            fileDuration =          trim_ms( item.fileDuration.time );
            fileDurationSec =       Math.round( item.fileDuration.ms/1000 );
            segmentDuration =       trim_ms( item.segmentRealDuration.time );
            segmentDurationSec =    Math.round( item.segmentRealDuration.ms/1000 );
            segmentStart =          trim_ms( item.markIn.time );
        }else if( item.type === 'empty' ){
            fileName =              'Ошибка! Прерывание эфира по неизвестной причине';
            fileDuration =          trim_ms( item.duration.time );
            fileDurationSec =       Math.round( item.duration.ms/1000 );
            segmentDuration =       trim_ms( item.duration.time );
            segmentDurationSec =    Math.round( item.duration.ms/1000 );
            segmentStart =          trim_ms( '00:00:00.00' );
        };

        let Row = new RowClass({
            date,
            time,
            fileName,
            fileDuration,
            fileDurationSec,
            segmentDuration,
            segmentDurationSec,
            segmentStart,
        });

        return Row.GetRow();

    }

    Download(){
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet( [ get_header_row(), ...this.rows ] );
        ws['!cols'] = [ { width: 11.7 }, { width: 13.5 }, { width: 100 }, { width: 20 }, { width: 20 }, { width: 20 }, { width: 20 }, { width: 20 } ];

        const replase_tire = ( str ) => {
            let arr = str.split( '-' );
            return `${arr[0]}.${arr[1]}.${arr[2]}`;
        }


        let data = '';
        if( this.firstData === this.lastData ){
            data = replase_tire( this.firstData );
        }else{
            data = `${ replase_tire( this.firstData ) } - ${ replase_tire( this.lastData ) }`;
        };

        let { playReport } = store.getState();
        let { searchValue } = playReport;
        let name = searchValue.trim();

        XLSX.utils.book_append_sheet(wb, ws, data );
        let excelFileName = `Отчёт${ name === ''? '': ` ${name}` } ${data} .xlsx`;

        

        XLSX.writeFile(wb, excelFileName );

    }

}