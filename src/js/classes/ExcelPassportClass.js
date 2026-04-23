
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

    GetSheets(){

        let result = [];

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
        // let WS_title = TitleSheet.GetSheet();
        result.push({
            name: 'Пасспорт ролика',
            WS: TitleSheet.GetSheet(),
        });

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
        // let WS_mediaPlan = MediaPlanSheet.GetSheet();
        result.push({
            name: 'Медиа план',
            WS: MediaPlanSheet.GetSheet(),
        });

        let ReportTableSheet = new ReportTableSheetClass();
        ReportTableSheet.SetParams({
            fileName: this.fileName,
            duration_sec: this.duration_sec,
        });

    //    let WS_repotrTable = ReportTableSheet.GetSheet();
       result.push({
            name: 'Отчёт. Таблица',
            WS: ReportTableSheet.GetSheet(),
        });


       
        // XLSX.utils.book_append_sheet(wb, WS_title, "Пасспорт ролика");
        // XLSX.utils.book_append_sheet(wb, WS_mediaPlan, "Медиа план");
        // XLSX.utils.book_append_sheet(wb, WS_repotrTable, "Таблица");

       return result;

    }



    Download(){

        // console.dir( this );

        const wb = XLSX.utils.book_new();

    //     let TitleSheet = new TitleSheetClass();
    //     TitleSheet.SetParams({
    //         orderName:      this.orderName,
    //         releaseName:    this.releaseName,
    //         fileName:       this.fileName,
    //         period_from:    this.period_from,
    //         period_to:      this.period_to,
    //         duration_sec:   this.duration_sec,
    //         release_list:   this.release_list,
    //         notes:          this.notes,
    //         description:    this.description,
    //     });
    //     let WS_title = TitleSheet.GetSheet();

    //     let MediaPlanSheet = new MediaPlanSheetClass();
    //     MediaPlanSheet.SetParams({
    //         anketaType: this.anketaType,
    //         colontitul: this.colontitul,
    //         executor: this.executor,
    //         price: this.price,
    //         pricePrime: this.pricePrime,
    //         mediaName: this.mediaName,
    //         orderName: this.orderName,
    //         releaseName: this.releaseName,
    //         fileName: this.fileName,
    //         period_from: this.period_from,
    //         period_to: this.period_to,
    //         duration_sec: this.duration_sec,
    //     })

    //     let WS_mediaPlan = MediaPlanSheet.GetSheet();

    //     let ReportTableSheet = new ReportTableSheetClass();
    //     ReportTableSheet.SetParams({
    //         fileName: this.fileName,
    //         duration_sec: this.duration_sec,
    //     });

    //    let WS_repotrTable = ReportTableSheet.GetSheet();

        let sheets = this.GetSheets();
        for( let i = 0; i < sheets.length; i++ ){
            XLSX.utils.book_append_sheet(wb, sheets[ i ].WS, sheets[ i ].name );
        };

        // XLSX.utils.book_append_sheet(wb, WS_title, "Пасспорт ролика");
        // XLSX.utils.book_append_sheet(wb, WS_mediaPlan, "Медиа план");
        // XLSX.utils.book_append_sheet(wb, WS_repotrTable, "Таблица");

        XLSX.writeFile( wb, `Passport ${this.releaseName}.xlsx`);


    }



    
};