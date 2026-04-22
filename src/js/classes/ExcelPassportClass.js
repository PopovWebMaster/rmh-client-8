
import * as XLSX from 'xlsx-js-style';
// import { RowCustomerClass } from './ExcelPassportClass/RowCustomerClass.js';
import { get_array_of_colum_width } from './ExcelPassportClass/get_array_of_colum_width.js';
import { RowTitleClass } from './ExcelPassportClass/RowTitleClass.js';
import { get_period_value } from './ExcelPassportClass/get_period_value.js';
import { get_duration_value } from './ExcelPassportClass/get_duration_value.js';

import { convert_sec_to_time_for_Excel } from './../helpers/convert_sec_to_time_for_Excel.js';

import { TitleSheetClass } from './ExcelPassportClass/TitleSheetClass.js';
import { MediaPlanSheetClass } from './ExcelPassportClass/MediaPlanSheetClass.js';
import { ReportTableSheetClass } from './ExcelPassportClass/ReportTableSheetClass.js';




export class ExcelPassportClass {
    constructor(){
        this.anketaType = ''; // 'table' 'thema' table_vizitka
        this.colontitul = '';
        this.executor = '';
        this.price = '';
        this.pricePrime = '';
        this.mediaName = '';
        this.orderName = '';
        this.releaseName = '';
        this.fileName = '';
        this.notes = '';
        this.description = '';
        this.period_from = '';
        this.period_to = '';
        this.duration_sec = 0;
        this.release_list = [];

        this.excelRows = [];
        this.excelRangeValues = [];
        this.excelRowHeights = [];
        this.nextRowNumber = 1;


        this.SetOrderName =   this.SetOrderName.bind(this);
        this.SetReleaseName =   this.SetReleaseName.bind(this);
        this.SetFileName =   this.SetFileName.bind(this);
        this.SetNotes =   this.SetNotes.bind(this);
        this.SetDescription =   this.SetDescription.bind(this);
        this.SetPeriodFrom =   this.SetPeriodFrom.bind(this);
        this.SetPeriodTo =   this.SetPeriodTo.bind(this);
        this.SetDurationSec =   this.SetDurationSec.bind(this);
        this.SetReleaseList =   this.SetReleaseList.bind(this);
        this.SetAnketaType =   this.SetAnketaType.bind(this);
        this.SetColontitul =   this.SetColontitul.bind(this);
        this.SetExecutor =   this.SetExecutor.bind(this);
        this.SetPrice =   this.SetPrice.bind(this);
        this.SetPricePrime =   this.SetPricePrime.bind(this);
        this.SetMediaName =   this.SetMediaName.bind(this);

        this.Download =   this.Download.bind(this);

        // this.CreateTitelRows =   this.CreateTitelRows.bind(this);
        // this.AddRow =   this.AddRow.bind(this);
        // this.GetRangeArray =   this.GetRangeArray.bind(this);






    }

    SetOrderName( orderName ){
        this.orderName = orderName;
    }
    SetReleaseName( releaseName ){
        this.releaseName = releaseName;
    }
    SetFileName( fileName ){
        this.fileName = fileName;
    }
    SetNotes( notes ){
        this.notes = notes;
    }
    SetDescription( description ){
        this.description = description;
    }
    SetPeriodFrom( period_from ){
        this.period_from = period_from;
    }
    SetPeriodTo( period_to ){
        this.period_to = period_to;
    }
    SetDurationSec( duration_sec ){
        this.duration_sec = duration_sec;
    }
    SetReleaseList( release_list ){
        this.release_list = release_list;
    }
    SetAnketaType( anketaType ){
        this.anketaType = anketaType;
    }
    SetColontitul( colontitul ){
        this.colontitul = colontitul;
    }
    SetExecutor( executor ){
        this.executor = executor;
    }
    SetPrice( price ){
        this.price = price;
    }
    SetPricePrime( pricePrime ){
        this.pricePrime = pricePrime;
    }
    SetMediaName( mediaName ){
        this.mediaName = mediaName;
    }


    // AddRow( Row ){
    //     this.excelRangeValues = [ ...this.excelRangeValues, ...Row.GetRange() ];
    //     this.excelRows = [ ...this.excelRows, ...Row.GetRows() ];
    //     this.nextRowNumber = Row.GetNextRowNumber();
    //     this.excelRowHeights.push( Row.GetRowHeight() );
    // }

    // GetRangeArray(){
    //     let result = [];
    //     for( let i = 0; i < this.excelRangeValues.length; i++ ){
    //         result.push( XLSX.utils.decode_range( this.excelRangeValues[ i ] ) );
    //     }
    //     return result;
    // }

    // CreateTitelRows(){

    //     // this.nextRowNumber = 2

    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         isEmpty: true
    //     } ) );

    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         cell_B: { value: 'Заказ' },
    //         cell_C: { value: this.orderName },
    //     } ) );

    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         cell_B: { value: 'Название выпуска' },
    //         cell_C: { value: this.releaseName },
    //     } ) );
    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         cell_B: { value: 'Имя файла' },
    //         cell_C: { value: this.fileName },
    //     } ) );
    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         cell_B: { value: 'Период' },
    //         cell_C: { value: get_period_value( this.period_from, this.period_to ) },
    //     } ) );

    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         cell_B: { value: 'Хрон.' },
    //         cell_C: { value: convert_sec_to_time_for_Excel( this.duration_sec ) },
    //     } ) );
    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         cell_B: { value: 'Хрон. (сек)' },
    //         cell_C: { value: this.duration_sec },
    //     } ) );

    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         cell_B: { value: 'Всего выпусков' },
    //         cell_C: { value: this.release_list.length },
    //     } ) );

    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         cell_B: { value: 'Хрон. общий' },
    //         cell_C: { value: convert_sec_to_time_for_Excel( this.duration_sec * this.release_list.length ) },
    //     } ) );

    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         cell_B: { value: 'Хрон. общий (сек)' },
    //         cell_C: { value: this.duration_sec * this.release_list.length },
    //     } ) );

    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         cell_B: { value: 'Доп. инфо.' },
    //         cell_C: { value: this.notes },
    //         // rowHeight: 60,
    //     } ) );

    //     this.AddRow( new RowTitleClass( this.nextRowNumber, {
    //         cell_B: { value: 'Описание' },
    //         cell_C: { value: this.description },
    //         // rowHeight: 60,
    //     } ) );


        

    // }

    Download(){

        console.dir( this );

        const wb = XLSX.utils.book_new();

        let TitleSheet = new TitleSheetClass();
        TitleSheet.SetParams({
            orderName:      this.orderName,
            releaseName:    this.releaseName,
            fileName:       this.fileName,
            period_from:    this.period_from,
            period_to:      this.period_to,
            duration_sec:   this.duration_sec,
            release_list:   this.release_list,
            notes:          this.notes,
            description:    this.description,
        });
        let WS_title = TitleSheet.GetSheet();

        let MediaPlanSheet = new MediaPlanSheetClass();
        MediaPlanSheet.SetParams({
            anketaType: this.anketaType,
            colontitul: this.colontitul,
            executor: this.executor,
            price: this.price,
            pricePrime: this.pricePrime,
            mediaName: this.mediaName,
            orderName: this.orderName,
            releaseName: this.releaseName,
            fileName: this.fileName,
            period_from: this.period_from,
            period_to: this.period_to,
            duration_sec: this.duration_sec,
        })

        let WS_mediaPlan = MediaPlanSheet.GetSheet();

        let ReportTableSheet = new ReportTableSheetClass();
        ReportTableSheet.SetParams({
            fileName: this.fileName,
            duration_sec: this.duration_sec,
        });

       let WS_repotrTable = ReportTableSheet.GetSheet();

        XLSX.utils.book_append_sheet(wb, WS_title, "Пасспорт ролика");
        XLSX.utils.book_append_sheet(wb, WS_mediaPlan, "Медиа план");
        XLSX.utils.book_append_sheet(wb, WS_repotrTable, "Таблица");

        XLSX.writeFile( wb, `Passport test.xlsx`);


    }



    
};