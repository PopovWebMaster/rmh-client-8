
import * as XLSX from 'xlsx-js-style';

import { get_first_excel_row } from './vendors/ReleaseRemainderClass/get_first_excel_row.js';

import { get_cell_A } from './vendors/ReleaseRemainderClass/get_cell_A.js';
import { get_cell_B } from './vendors/ReleaseRemainderClass/get_cell_B.js';
import { get_cell_C } from './vendors/ReleaseRemainderClass/get_cell_C.js';
import { get_cell_D } from './vendors/ReleaseRemainderClass/get_cell_D.js';

import { convert_date_str_to_format } from './../helpers/convert_date_str_to_format.js'




export class ReleaseRemainderClass {
    constructor(){

        this.releaseList = [];

        // this.currentDate = '';
        // this.currentDayNum = '';
        // this.currentMonth = '';
        // this.currentYear = '';

        this.collsWidthList =   [ { width: 8 }, { width: 5 }, { width: 60}, { width: 5 }, ];

        this.rowsHeightList =   [ { hpx: 30 }, ];
        this.mergesList =       [ 'A1:E1', ];

        this.YYYY_MM_DD = '';

        this.rows = [];


        this.AddReleaseList = this.AddReleaseList.bind(this);
        this.CreateFirstRow = this.CreateFirstRow.bind(this);
        this.CreateBodyRows = this.CreateBodyRows.bind(this);
        this.Download = this.Download.bind(this);




    }

    AddReleaseList( arr ){
        for( let i = 0; i < arr.length; i++ ){
            let item = structuredClone( arr[ i ] );
            this.releaseList.push( item );
            if( this.YYYY_MM_DD === '' ){
                this.YYYY_MM_DD = arr[ i ].YYYY_MM_DD;
            };
        };
    }

    CreateFirstRow(){
        this.rows.push( get_first_excel_row( this.YYYY_MM_DD ) );
    }

    CreateBodyRows(){
    
        for( let i = 0; i < this.releaseList.length; i++ ){

            let {
                YYYY_MM_DD,
                air_notes,
                applicationName,
                application_id,
                category_id,
                event_id,
                file_list,
                grid_event_id,
                id,
                manager_id,
                releaseDuration,
                releaseName,
                startTime,
                sub_application_id,

            } = this.releaseList[ i ];


            let cell_A = get_cell_A( YYYY_MM_DD );
            let cell_B = get_cell_B( startTime );
            let cell_C = get_cell_C({
                applicationName,
                releaseName,
                file_list,
                air_notes
            });

            let cell_D = get_cell_D( releaseDuration );

            this.rows.push( [ cell_A, cell_B, cell_C, cell_D ] );


        };
    }

    Download(){

        this.CreateFirstRow();

        this.CreateBodyRows();
        
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet( this.rows );

        ws['!cols'] = [ { width: 9.8 }, { width: 6.8 }, { width: 60.2 }, { width: 7.1 },  ];

        ws['!rows'] = [ { hpx: 30 }, ];
        ws["!merges"] = [
            XLSX.utils.decode_range("A1:D1"),
        ];

        let date = convert_date_str_to_format.YY_MM_DD_points( this.YYYY_MM_DD );
        let sheetName = date;
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        let fileName = `Остаток ${ date }.xlsx`;
        XLSX.writeFile(wb, fileName);
    }
}




// YYYY_MM_DD: "2025-09-11"
// air_notes: ""
// applicationName: "Реклама блок"
// application_id: 27
// category_id: 9
// event_id: 11
// file_list: []
// grid_event_id: 159
// id: 1658
// manager_id: 1
// releaseDuration: 15
// releaseName: "Что-то"
// startTime: 25019
// sub_application_id: 61