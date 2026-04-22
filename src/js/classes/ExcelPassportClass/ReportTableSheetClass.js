
import * as XLSX from 'xlsx-js-style';

import { PassportSheetClass } from './PassportSheetClass.js';

import { ScheduleClass } from './../ScheduleClass.js';

import { get_matrix_plot } from './../../pages/air_application/components/AirApplicationEditor/components/AppEditorComponent/components/SheduleEditorComponent/components/DownloadScheduleButton/components/vendors/get_matrix_plot.js';

import { RowReportTableClass } from './RowReportTableClass.js';

export class ReportTableSheetClass extends PassportSheetClass {
    constructor(){
        super();

        this.fileName = '';
        this.duration_sec = 0;

        this.SetParams = this.SetParams.bind(this);
        this.GetSheet = this.GetSheet.bind(this);
        this.CreateTitelRows = this.CreateTitelRows.bind(this);

    }

    SetParams( params ){
        let {
            fileName,
            duration_sec,
        } = params;
        this.fileName = fileName;
        this.duration_sec = duration_sec;

    }
    
    CreateTitelRows( martix ){

        let lastDate = '';

        for( let i = 0; i < martix.length; i++ ){
            if( i === 0 ){
                lastDate = martix[ i ][0];
            };

            let date = '';
            if( martix[ i ][0] === '' ){
                date = lastDate;
            }else{
                lastDate = martix[ i ][0];
                date = martix[ i ][0];;
            };
            let plan = martix[ i ][2];
            let fact = ' ';
            let fileName = this.fileName;
            let duration = this.duration_sec;


            this.AddRow( new RowReportTableClass( this.nextRowNumber, {
                cell_A: date,
                cell_B: plan,
                cell_C: fact,
                cell_D: fileName,
                cell_E: duration,
            } ) );



        };



    }
    
    GetSheet(){


        let martix = get_matrix_plot();

        this.CreateTitelRows( martix );

        // console.dir( 'martix' );
        // console.dir( martix );
        
        const ws = XLSX.utils.aoa_to_sheet( this.excelRows );
        ws['!cols'] = [
            { width: 10 }, 
            { width: 10 }, 
            { width: 10 },
            { width: 40 },
            { width: 10 },
        ];
        ws['!rows'] = this.excelRowHeights;
        ws["!merges"] = this.GetRangeArray();

        return ws;

    }
}