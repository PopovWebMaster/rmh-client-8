
import * as XLSX from 'xlsx-js-style';

import { get_cell_A } from './get_cell_A.js';

import { get_table_header_rows } from './get_table_header_rows.js';

import { get_table_row } from './get_table_row.js';

export class ScheduleResultOplotClass {
    constructor(){

        this.matrix = [];
        this.tible_title = '';
        this.scheet_title = '';
        this.file_name = '';

        this.collsWidthList =   [ { width: 3,  }, { width: 13 }, { width: 13 }, { width: 90 }, { width: 60 }, ];

        this.rowsHeightList =   [ { hpx: 21 }, ];
        this.mergesList =       [ 'A1:E1', ];

        this.rows = [];

        this.currentRowNumber = 0;



        this.SetMatrix = this.SetMatrix.bind(this);
        this.SetTableTitle = this.SetTableTitle.bind(this);
        this.SetSheetTitle = this.SetSheetTitle.bind(this);
        this.SetFileName = this.SetFileName.bind(this);

        this.Download = this.Download.bind(this);

        this.CreateRows = this.CreateRows.bind(this);
        this.CreateFirstRows = this.CreateFirstRows.bind(this);
        this.GetRowsHeights = this.GetRowsHeights.bind(this);
        this.GetColumnWidth = this.GetColumnWidth.bind(this);
        this.CreateTableRows = this.CreateTableRows.bind(this);
        this.RowNumberCounterIncrement = this.RowNumberCounterIncrement.bind(this);









    }

    SetMatrix( matrix ){
        this.matrix = matrix;
    }

    SetTableTitle( tible_title ){
        this.tible_title = tible_title;
    }

    SetSheetTitle( scheet_title ){
        this.scheet_title = scheet_title;
    }

    SetFileName( file_name ){
        this.file_name = file_name;
    }

    CreateRows(){
        this.CreateFirstRows();
        this.CreateTableRows();
    }

    RowNumberCounterIncrement(){
        this.currentRowNumber = this.currentRowNumber + 1;
    }

    CreateFirstRows(){
        let first_rows = get_table_header_rows( this.tible_title );
        for( let i = 0; i < first_rows.length; i++ ){
            this.rows.push( first_rows[ i ] );
            this.RowNumberCounterIncrement();
        };
    }

    CreateTableRows(){
        for( let i = 0; i < this.matrix.length; i++ ){
            let isFirst = false;
            if( i === 0 ){
                isFirst = true;
            };
            // console.dir( this.matrix[ i ] );
            this.rows.push( get_table_row( this.matrix[ i ], this.currentRowNumber, isFirst ) );
            this.RowNumberCounterIncrement();
        };
    }


    GetColumnWidth(){
        let result = [];
        for( let i = 0; i < this.collsWidthList.length; i++ ){
            result.push( { ...this.collsWidthList[ i ] } );
        };
        return result;
    }

    GetRowsHeights(){
        let result = [];
        for( let i = 0; i < this.rows.length; i++ ){
            result.push( { hpx: 21 } );
        };
        return result;
    }

    

    Download(){

        this.CreateRows();

        const wb = XLSX.utils.book_new();


        const ws = XLSX.utils.aoa_to_sheet( this.rows );


        ws['!cols'] = this.GetColumnWidth();
        ws['!rows'] = this.GetRowsHeights();
        
        XLSX.utils.book_append_sheet(wb, ws, this.scheet_title );
        XLSX.writeFile(wb, this.file_name);

    }

}