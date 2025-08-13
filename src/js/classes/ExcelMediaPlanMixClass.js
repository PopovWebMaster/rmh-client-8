
import * as XLSX from 'xlsx-js-style';

import { TableHeaderClass } from './vendors/ExcelMediaPlanMixClass/TableHeaderClass.js';
import { EmptyRowClass } from './vendors/ExcelMediaPlanMixClass/EmptyRowClass.js';
import { RowExecutorClass } from './vendors/ExcelMediaPlanMixClass/RowExecutorClass.js';
import { RowCustomerClass } from './vendors/ExcelMediaPlanMixClass/RowCustomerClass.js';
import { RowMediaNameClass } from './vendors/ExcelMediaPlanMixClass/RowMediaNameClass.js';
import { RowPeriodClass } from './vendors/ExcelMediaPlanMixClass/RowPeriodClass.js';
import { RowAdvertisingTypeClass } from './vendors/ExcelMediaPlanMixClass/RowAdvertisingTypeClass.js';
import { RowMovieNameClass } from './vendors/ExcelMediaPlanMixClass/RowMovieNameClass.js';
import { RowMediaNameAsHeaderClass } from './vendors/ExcelMediaPlanMixClass/RowMediaNameAsHeaderClass.js';
import { RowMartixHeaderDayNamesClass } from './vendors/ExcelMediaPlanMixClass/RowMartixHeaderDayNamesClass.js';
import { RowMartixHeaderDatesClass } from './vendors/ExcelMediaPlanMixClass/RowMartixHeaderDatesClass.js';

import { RowMartixClass } from './vendors/ExcelMediaPlanMixClass/RowMartixClass.js';
import { RowMatrixFooterClass } from './vendors/ExcelMediaPlanMixClass/RowMatrixFooterClass.js';
import { TableFooterClass } from './vendors/ExcelMediaPlanMixClass/TableFooterClass.js';










import { SubAppListClass } from './vendors/ExcelMediaPlanMixClass/SubAppListClass.js';
import { MatrixClass } from './vendors/ExcelMediaPlanMixClass/MatrixClass.js';
import { PeriodClass } from './vendors/ExcelMediaPlanMixClass/PeriodClass.js';
import { get_array_of_colum_width } from './vendors/ExcelMediaPlanMixClass/get_array_of_colum_width.js'

export class ExcelMediaPlanMixClass {
    constructor(){
        this.modeMixStatus = false;
        this.tableHeader = '';
        this.executor = '';
        this.customer = '';
        this.price = '';
        this.mediaName = '';

        this.excelRows = [];
        this.excelRangeValues = [];
        this.excelRowHeights = [];
        this.nextRowNumber = 1;


        this.SubAppList = new SubAppListClass();
        this.Matrix = new MatrixClass();
        this.Period = new PeriodClass();

        this.SetModeMixStatus =   this.SetModeMixStatus.bind(this);
        this.SetTableHeader =   this.SetTableHeader.bind(this);


        

        this.SetExecutor =      this.SetExecutor.bind(this);
        this.SetCustomer =      this.SetCustomer.bind(this);
        this.SetPrice =         this.SetPrice.bind(this);
        this.SetMediaName =     this.SetMediaName.bind(this);
        this.SetSubAppList =    this.SetSubAppList.bind(this);
        this.SetMatrix =        this.SetMatrix.bind(this);
        this.Download =         this.Download.bind(this);
        this.CreateExcelRows =         this.CreateExcelRows.bind(this);

        this.AddRow =           this.AddRow.bind(this);
        this.GetRangeArray =    this.GetRangeArray.bind(this);





        


    }
    SetModeMixStatus( value ){
        this.modeMixStatus = value;
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

    SetPrice( value ){
        this.price = Number( value );
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




    Download(){

        this.CreateExcelRows();


        const wb = XLSX.utils.book_new();

        const ws = XLSX.utils.aoa_to_sheet( this.excelRows );
/*
        const ws = XLSX.utils.aoa_to_sheet([
            // this.TableHeader.GetRow(),
        ]);
    */

        ws['!cols'] = get_array_of_colum_width( this.modeMixStatus );
        ws['!rows'] = this.excelRowHeights;
        /*
        ws['!rows'] = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { hpx: 38.25 }, {}, { hpx: 77.25 } ];
        */
        ws["!merges"] = this.GetRangeArray();
/*
        ws["!merges"] = [
            XLSX.utils.decode_range("A1:AO1"),
            XLSX.utils.decode_range("A2:AO2"),
            XLSX.utils.decode_range("A3:AO3"),
            XLSX.utils.decode_range("A4:AO4"),
            XLSX.utils.decode_range("D6:AO6"),
            XLSX.utils.decode_range("D7:AO7"),
            XLSX.utils.decode_range("D8:AO8"),
            XLSX.utils.decode_range("D9:AO9"),
            XLSX.utils.decode_range("D10:R10"),XLSX.utils.decode_range("S10:AO10"),
            XLSX.utils.decode_range("F13:AO13"),
            XLSX.utils.decode_range("A14:A15"),XLSX.utils.decode_range("B14:B15"),XLSX.utils.decode_range("C14:C15"),XLSX.utils.decode_range("D14:D15"),XLSX.utils.decode_range("E14:E15"),
            XLSX.utils.decode_range("AM14:AM15"),XLSX.utils.decode_range("AN14:AN15"),
        ];
*/
        XLSX.utils.book_append_sheet(wb, ws, "111");

        XLSX.writeFile(wb, `Медиа план ${this.customer} ${this.Period.from.dateFull} - ${this.Period.to.dateFull}.xlsx`);
    }

}

