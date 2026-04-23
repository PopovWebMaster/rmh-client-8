
import * as XLSX from 'xlsx-js-style';

import { TableHeaderClass } from './vendors/ExcelMediaPlanMixClass/TableHeaderClass.js';
import { EmptyRowClass } from './vendors/ExcelMediaPlanMixClass/EmptyRowClass.js';
import { RowExecutorClass } from './vendors/ExcelMediaPlanMixClass/RowExecutorClass.js';
import { RowCustomerClass } from './vendors/ExcelMediaPlanMixClass/RowCustomerClass.js';
import { RowMediaNameClass } from './vendors/ExcelMediaPlanMixClass/RowMediaNameClass.js';
import { RowPeriodClass } from './vendors/ExcelMediaPlanMixClass/RowPeriodClass.js';
import { RowAdvertisingTypeClass } from './vendors/ExcelMediaPlanMixClass/RowAdvertisingTypeClass.js';
import { RowFileNameClass } from './vendors/ExcelMediaPlanMixClass/RowFileNameClass.js';
import { RowFileDurationClass } from './vendors/ExcelMediaPlanMixClass/RowFileDurationClass.js';
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
import { get_array_of_colum_width } from './vendors/ExcelMediaPlanMixClass/get_array_of_colum_width.js';

import JSZip from 'jszip';
import FileSaver from 'file-saver';

import store from './../redux/store.js';



export class ExcelMediaPlanMixClass {
    constructor(){
        this.modeMixStatus = false;
        this.tableHeader = '';
        this.executor = '';
        this.customer = '';
        this.price = '';
        this.pricePrime = '';
        this.mediaName = '';
        this.footerText = '';
        this.releaseName = '';
        this.releaseDuration = 0;

        this.excelRows = [];
        this.excelRangeValues = [];
        this.excelRowHeights = [];
        this.nextRowNumber = 1;
        this.cellDurationLink = '';

        this.SubAppList = new SubAppListClass();
        this.Matrix = new MatrixClass();
        this.Period = new PeriodClass();

        // this.SetModeMixStatus = this.SetModeMixStatus.bind(this);
        this.SetTableHeader =   this.SetTableHeader.bind(this);

        this.SetExecutor =      this.SetExecutor.bind(this);
        this.SetCustomer =      this.SetCustomer.bind(this);
        this.SetPrice =         this.SetPrice.bind(this);
        this.SetPricePrime =    this.SetPricePrime.bind(this);

        this.SetMediaName =     this.SetMediaName.bind(this);
        this.SetSubAppList =    this.SetSubAppList.bind(this);
        this.SetMatrix =        this.SetMatrix.bind(this);
        this.Download =         this.Download.bind(this);
        this.CreateExcelRows =  this.CreateExcelRows.bind(this);

        this.AddRow =           this.AddRow.bind(this);
        this.GetRangeArray =    this.GetRangeArray.bind(this);
        this.GetSheet =         this.GetSheet.bind(this);

        this.SetParams =         this.SetParams.bind(this);

        this.Create =         this.Create.bind(this);


        this.Create();
        
    }

    Create(){
        let { currentSubApplication, company, application } = store.getState();
        let { releaseName, releaseDuration } = currentSubApplication;

        // console.dir( 'currentSubApplication' );
        // console.dir( currentSubApplication );

        let {
            colontitul,
            executor,
            price,
            pricePrime,
            companyLegalName,
            footerText,
        } = company;
        let { currentAppName } = application;

        this.tableHeader = colontitul;
        this.executor = executor;
        this.customer = currentAppName;
        this.price = price;
        this.pricePrime = pricePrime;
        this.mediaName = companyLegalName;
        this.footerText = footerText;
        this.releaseName = releaseName;
        this.releaseDuration = releaseDuration;


    }

    SetParams( params ){
        let {
            modeMix =       false,
            tableHeader =   null,
            executor =      null,
            customer =      null,
            price =         null,
            pricePrime =    null,
            mediaName =     null,
        } = params;

        // this.modeMixStatus = modeMix;
        this.modeMixStatus = false;

        this.SetTableHeader( tableHeader );
        this.SetExecutor( executor );
        this.SetCustomer( customer );
        this.SetPrice( price );
        this.SetPricePrime( pricePrime );
        this.SetMediaName( mediaName );



    }

    SetTableHeader( value ){ if( value !== null ){      this.tableHeader = value; };}
    SetExecutor( value ){ if( value !== null ){         this.executor = value;}}
    SetCustomer( value ){if( value !== null ){          this.customer = value;};}
    SetPrice( value ){ if( value !== null ){            this.price = Number( value ); }; }
    SetPricePrime( value ){ if( value !== null ){       this.pricePrime = Number( value );};}
    SetMediaName( value ){ if( value !== null ){        this.mediaName = value; }; }

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
        // this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        // this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new RowExecutorClass( this.nextRowNumber, this.executor ) );
        this.AddRow( new RowCustomerClass( this.nextRowNumber, this.customer ) );
        this.AddRow( new RowMediaNameClass( this.nextRowNumber, this.mediaName ) );
        this.AddRow( new RowPeriodClass( this.nextRowNumber, this.Period ) );
        this.AddRow( new RowAdvertisingTypeClass( this.nextRowNumber ) );

        let subAppList = this.SubAppList.GetListArray();

        let fileName = '';
        if( subAppList[0] ){
            let { file_names } = subAppList[0];
            if( file_names[ 0 ] ){
                fileName = file_names[ file_names.length - 1 ]
            };

        };


        this.AddRow( new RowFileNameClass( this.nextRowNumber, fileName ) );
        this.cellDurationLink = `=D${this.nextRowNumber}`;
        this.AddRow( new RowFileDurationClass( this.nextRowNumber, this.releaseDuration ) );
        this.AddRow( new RowMovieNameClass( this.nextRowNumber, this.releaseName ) );


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
                pricePrime: this.pricePrime,
                cellDurationLink: this.cellDurationLink,
            };

            this.AddRow( new RowMartixClass( this.nextRowNumber, data ) );
        };

        this.AddRow( new RowMatrixFooterClass( this.nextRowNumber, rows ) );

        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );
        this.AddRow( new EmptyRowClass( this.nextRowNumber ) );

        // let text = '* ГУП ДНР "РМХ" оставляет за собой право, в случае невозможности размещения рекламной продукции заказчика в указаннное время (форс-мажорные обстоятельства), предоставить клиенту эквивалентные по обьему и срокам позиции.'
        let text = this.footerText;
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


    GetSheet(){

        this.CreateExcelRows();

        const ws = XLSX.utils.aoa_to_sheet( this.excelRows );

        ws['!cols'] = get_array_of_colum_width( this.modeMixStatus );
        ws['!rows'] = this.excelRowHeights;
        ws["!merges"] = this.GetRangeArray();

        return ws;

    }




    Download(){

        // this.CreateExcelRows();

        let { currentSubApplication, company } = store.getState();
        let { releaseName } = currentSubApplication;
        let { companyLegalName } = company;


        const wb = XLSX.utils.book_new();

        // const ws = XLSX.utils.aoa_to_sheet( this.excelRows );
/*
        const ws = XLSX.utils.aoa_to_sheet([
            // this.TableHeader.GetRow(),
        ]);
    */

        // ws['!cols'] = get_array_of_colum_width( this.modeMixStatus );
        // ws['!rows'] = this.excelRowHeights;
        // /*
        // ws['!rows'] = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { hpx: 38.25 }, {}, { hpx: 77.25 } ];
        // */
        // ws["!merges"] = this.GetRangeArray();
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

        let ws = this.GetSheet();

        XLSX.utils.book_append_sheet(wb, ws, '1');



        XLSX.writeFile(wb, `Медиа план ${releaseName}.xlsx`);


        







        // const zip = new JSZip();
        // zip.file("Hello.txt", "Hello World\n");
        // const img = zip.folder("images");
        // // img.file("smile.gif", imgData, {base64: true});
        // img.file('idlist.txt', 'текст мекст')
        // zip.generateAsync({type:"blob"}).then(function(content) {
        //     // see FileSaver.js
        //     // saveAs(content, "example.zip");
        //     FileSaver.saveAs(content, 'download.zip');
        // });





        





        // const zip = new JSZip();
        // const workbookBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        // const fileData = new Blob([workbookBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        // zip.file('example.xlsx', fileData);

        // // Генерируем ZIP-архив и сохраняем его как файл
        // zip.generateAsync({ type: 'blob' }).then(blob => saveAs(blob, 'archive.zip'));
        
    }

}

