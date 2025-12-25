
import * as XLSX from 'xlsx-js-style';

import { SubAppListClass } from './vendors/SubAppListClass.js';
import { MatrixClass } from './vendors/MatrixClass.js';
import { PeriodClass } from './vendors/PeriodClass.js';

import { TableHeaderClass } from './vendors/TableHeaderClass.js';
import { EmptyRowClass } from './vendors/EmptyRowClass.js';
import { RowExecutorClass } from './vendors/RowExecutorClass.js';
import { RowCustomerClass } from './vendors/RowCustomerClass.js';
import { RowMediaNameClass } from './vendors/RowMediaNameClass.js';
import { RowPeriodClass } from './vendors/RowPeriodClass.js';
import { RowAdvertisingTypeClass } from './vendors/RowAdvertisingTypeClass.js';
import { RowMovieNameClass } from './vendors/RowMovieNameClass.js';
import { RowMediaNameAsHeaderClass } from './vendors/RowMediaNameAsHeaderClass.js';
import { RowMartixHeaderDayNamesClass } from './vendors/RowMartixHeaderDayNamesClass.js';
import { RowMartixHeaderDatesClass } from './vendors/RowMartixHeaderDatesClass.js';
import { RowMartixClass } from './vendors/RowMartixClass.js';
import { RowMatrixFooterClass } from './vendors/RowMatrixFooterClass.js';

import { TableFooterClass } from './vendors/TableFooterClass.js';

import { get_array_of_colum_width } from './vendors/get_array_of_colum_width.js';
 

export class ExcelMediaPlanTypeVisitkaClass {
    constructor(){
        this.tableHeader = '';
        this.executor = '';
        this.customer = '';
        this.mediaName = '';
        this.excelRows = [];
        this.excelRangeValues = [];
        this.excelRowHeights = [];
        this.nextRowNumber = 1;

        this.SubAppList = new SubAppListClass();
        this.Matrix = new MatrixClass();
        this.Period = new PeriodClass();

        this.SetTableHeader =   this.SetTableHeader.bind(this);
        this.SetExecutor =      this.SetExecutor.bind(this);
        this.SetCustomer =      this.SetCustomer.bind(this);
        this.SetMediaName =     this.SetMediaName.bind(this);
        this.SetSubAppList =    this.SetSubAppList.bind(this);
        this.SetMatrix =        this.SetMatrix.bind(this);


        this.Download =         this.Download.bind(this);
        this.CreateExcelRows =   this.CreateExcelRows.bind(this);

        this.AddRow =           this.AddRow.bind(this);
        this.GetRangeArray =    this.GetRangeArray.bind(this);




    }

    SetTableHeader( value ){
        this.tableHeader = value;
        // this.TableHeader = new TableHeaderClass( value );
    }

    SetExecutor( value ){
        this.executor = value;
    }

    SetCustomer( value ){
        this.customer = value;
    }

    SetMediaName( value ){
        this.mediaName = value;
    }

    SetSubAppList( used_sub_app_id ){
        this.SubAppList.CreateList( used_sub_app_id );
    }

    SetMatrix( matrix ){
        this.Matrix.Bind({
            SubAppList: this.SubAppList
        });
        this.Matrix.Create( matrix );
        this.Period.SetFromMatrix( matrix );
    }

    AddRow( Row ){
        this.excelRangeValues = [ ...this.excelRangeValues, ...Row.GetRange() ];
        this.excelRows = [ ...this.excelRows, ...Row.GetRows() ];
        this.nextRowNumber = Row.GetNextRowNumber();
        this.excelRowHeights.push( Row.GetRowHeight() );
    }

    GetRangeArray(){
        let result = [];
        for( let i = 0; i < this.excelRangeValues.length; i++ ){
            result.push( XLSX.utils.decode_range( this.excelRangeValues[ i ] ) );
        }
        return result;
    }

    
    CreateExcelRows(){

        this.AddRow( new TableHeaderClass( this.nextRowNumber, this.tableHeader ) );
        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new RowExecutorClass( this.nextRowNumber, this.executor ) );
        this.AddRow( new RowCustomerClass( this.nextRowNumber, this.customer ) );
        this.AddRow( new RowMediaNameClass( this.nextRowNumber, this.mediaName ) );
        this.AddRow( new RowPeriodClass( this.nextRowNumber, this.Period ) );
        this.AddRow( new RowAdvertisingTypeClass( this.nextRowNumber ) );

        let subAppList = this.SubAppList.GetListArray();

        for( let i = 0; i < subAppList.length; i++ ){
            let { name, duration_sec } = subAppList[ i ];
            this.AddRow( new RowMovieNameClass( this.nextRowNumber, name, duration_sec ) );
        };

        this.AddRow( new RowMediaNameAsHeaderClass( this.nextRowNumber, this.mediaName ) );

        let dayNamesList = this.Matrix.GetDayNamesList();
        this.AddRow( new RowMartixHeaderDayNamesClass( this.nextRowNumber, dayNamesList ) );

        let datesList = this.Matrix.GetDatesList();
        this.AddRow( new RowMartixHeaderDatesClass( this.nextRowNumber, datesList ) );

        let rows = this.Matrix.GetRowsList();

        for( let i = 0; i < rows.length; i++ ){
            let {
                title,
                values,
                index,
                name,
                duration,
            } = rows[ i ];

            let data = {
                title,
                values,
                index,
                name,
                duration,
                withName: this.modeMixStatus,
                price: this.price,
            };

            this.AddRow( new RowMartixClass( this.nextRowNumber, data ) );
        };

        this.AddRow( new RowMatrixFooterClass( this.nextRowNumber, rows ) );

        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );

        let text = '* ГУП ДНР "РМХ" оставляет за собой право, в случае невозможности размещения рекламной продукции заказчика в указаннное время (форс-мажорные обстоятельства), предоставить клиенту эквивалентные по обьему и срокам позиции.'
        this.AddRow( new TableFooterClass( this.nextRowNumber, text ) );





        


        


    }

    Download(){
        this.CreateExcelRows();
        const wb = XLSX.utils.book_new();
        
        const ws = XLSX.utils.aoa_to_sheet( this.excelRows );
        ws['!cols'] = get_array_of_colum_width( this.modeMixStatus );
        ws['!rows'] = this.excelRowHeights;

        ws["!merges"] = this.GetRangeArray();
        

        XLSX.utils.book_append_sheet(wb, ws, "1");

       

        
        XLSX.writeFile(wb, `Медиа план ${this.customer} ${this.Period.from.dateFull} - ${this.Period.to.dateFull}.xlsx`);
    }






}