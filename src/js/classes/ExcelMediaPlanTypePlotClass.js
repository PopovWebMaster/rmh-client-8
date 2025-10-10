
import * as XLSX from 'xlsx-js-style';

import { RowCustomerClass } from './vendors/ExcelMediaPlanTypePlotClass/RowCustomerClass.js';
import { RowExecutorClass } from './vendors/ExcelMediaPlanTypePlotClass/RowExecutorClass.js';
import { RowMediaClass } from './vendors/ExcelMediaPlanTypePlotClass/RowMediaClass.js';
import { RowThemaClass } from './vendors/ExcelMediaPlanTypePlotClass/RowThemaClass.js';
import { RowFileClass } from './vendors/ExcelMediaPlanTypePlotClass/RowFileClass.js';
import { RowPeriodClass } from './vendors/ExcelMediaPlanTypePlotClass/RowPeriodClass.js';
import { RowMediaPlanHeaderClass } from './vendors/ExcelMediaPlanTypePlotClass/RowMediaPlanHeaderClass.js';
import { RowMatrixHeaderClass } from './vendors/ExcelMediaPlanTypePlotClass/RowMatrixHeaderClass.js';
import { EmptyRowClass } from './vendors/ExcelMediaPlanTypePlotClass/EmptyRowClass.js';

import { RowMatrixClass } from './vendors/ExcelMediaPlanTypePlotClass/RowMatrixClass.js';
import { RowMatrixFooterClass } from './vendors/ExcelMediaPlanTypePlotClass/RowMatrixFooterClass.js';
import { RowSecondMatrixHeaderClass } from './vendors/ExcelMediaPlanTypePlotClass/RowSecondMatrixHeaderClass.js';
import { RowSecondMatrix_1_Class } from './vendors/ExcelMediaPlanTypePlotClass/RowSecondMatrix_1_Class.js';
import { RowSecondMatrix_2_Class } from './vendors/ExcelMediaPlanTypePlotClass/RowSecondMatrix_2_Class.js';
import { RowSecondMatrix_3_Class } from './vendors/ExcelMediaPlanTypePlotClass/RowSecondMatrix_3_Class.js';
// import { RowSecondMatrix_3_Class } from './vendors/ExcelMediaPlanTypePlotClass/RowSecondMatrix_3_Class.js';
import { RowSecondMatrix_4_Class } from './vendors/ExcelMediaPlanTypePlotClass/RowSecondMatrix_4_Class.js';
import { RowSecondMatrix_5_Class } from './vendors/ExcelMediaPlanTypePlotClass/RowSecondMatrix_5_Class.js';
import { RowSecondMatrix_6_Class } from './vendors/ExcelMediaPlanTypePlotClass/RowSecondMatrix_6_Class.js';
import { RowTextClass } from './vendors/ExcelMediaPlanTypePlotClass/RowTextClass.js';


















export class ExcelMediaPlanTypePlotClass {
    constructor(){

        this.fileName =     '';
        this.fileThema =    '';
        this.period =       '';
        this.executor =     '';
        this.customer =     '';
        this.martix =       [];
        this.mediaName =    '';


        this.excelRows = [];
        this.excelRangeValues = [];
        this.excelRowHeights = [];
        this.nextRowNumber = 1;

        this.SetData =    this.SetData.bind(this);
        this.Download =    this.Download.bind(this);
        this.AddRow =    this.AddRow.bind(this);
        this.GetRangeArray =    this.GetRangeArray.bind(this);




    }

    SetData( data ){
        let {
            fileName,
            fileThema,
            customer,
            executor,
            mediaName,
            period,
            martix
        } = data;

        this.fileName =     fileName;
        this.fileThema =    fileThema;
        this.period =       period;
        this.executor =     executor;
        this.customer =     customer;
        this.martix =       martix;
        this.mediaName =    mediaName;


    }

    GetRangeArray(){
        let result = [];
        for( let i = 0; i < this.excelRangeValues.length; i++ ){
            result.push( XLSX.utils.decode_range( this.excelRangeValues[ i ] ) );
        }
        return result;
    }

    Download(){

        this.AddRow( new RowCustomerClass( this.nextRowNumber, this.customer ) );
        this.AddRow( new RowExecutorClass( this.nextRowNumber, this.executor ) );
        this.AddRow( new RowMediaClass( this.nextRowNumber, this.mediaName ) );
        this.AddRow( new RowThemaClass( this.nextRowNumber, this.fileThema ) );
        this.AddRow( new RowFileClass( this.nextRowNumber, this.fileName ) );
        this.AddRow( new RowPeriodClass( this.nextRowNumber, this.period ) );
        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new RowMediaPlanHeaderClass( this.nextRowNumber ) );
        
        this.AddRow( new RowMatrixHeaderClass( this.nextRowNumber ) );

        for( let i = 0; i < this.martix.length; i++ ){
            this.AddRow( new RowMatrixClass( this.nextRowNumber, this.martix[ i ] ) );
        };

        this.AddRow( new RowMatrixFooterClass( this.nextRowNumber ) );

        this.AddRow( new RowSecondMatrixHeaderClass( this.nextRowNumber ) );
        this.AddRow( new RowSecondMatrix_1_Class( this.nextRowNumber ) );
        this.AddRow( new RowSecondMatrix_2_Class( this.nextRowNumber ) );
        this.AddRow( new RowSecondMatrix_3_Class( this.nextRowNumber ) );
        this.AddRow( new RowSecondMatrix_4_Class( this.nextRowNumber ) );
        this.AddRow( new RowSecondMatrix_5_Class( this.nextRowNumber ) );
        this.AddRow( new RowSecondMatrix_6_Class( this.nextRowNumber ) );

        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );

        this.AddRow( new RowTextClass( this.nextRowNumber, 'Время выхода в эфир может меняться в пределах 5-10 минут' ) );
        this.AddRow( new RowTextClass( this.nextRowNumber, 'ГУП ДНР «РМХ» оставляет за собой право, в случае невозможности размещения продукции' ) );
        this.AddRow( new RowTextClass( this.nextRowNumber, 'заказчика в указанное время (форс-мажорные обстоятельства), предоставить клиенту ' ) );
        this.AddRow( new RowTextClass( this.nextRowNumber, 'эквивалентные по объему и срокам позиции.' ) );











        const wb = XLSX.utils.book_new();
        
        const ws = XLSX.utils.aoa_to_sheet( this.excelRows );

        ws['!cols'] = [ { width: 15.14 }, { width: 14.3 }, { width: 8 }, { width: 34 }, { width: 10 } ];
        ws['!rows'] = this.excelRowHeights;

        ws["!merges"] = this.GetRangeArray();

        XLSX.utils.book_append_sheet(wb, ws, "1");

        XLSX.writeFile(wb, `Медиа план ${this.customer} ${this.period}.xlsx`);

    }

    AddRow( Row ){
        this.excelRangeValues = [ ...this.excelRangeValues, ...Row.GetRange() ];
        this.excelRows = [ ...this.excelRows, ...Row.GetRows() ];
        this.nextRowNumber = Row.GetNextRowNumber();
        this.excelRowHeights.push( Row.GetRowHeight() );
    }
}