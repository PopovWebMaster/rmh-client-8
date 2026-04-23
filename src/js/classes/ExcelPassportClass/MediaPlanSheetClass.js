import * as XLSX from 'xlsx-js-style';

import { PassportSheetClass } from './PassportSheetClass.js';

import { ExcelMediaPlanMixClass } from './../ExcelMediaPlanMixClass.js';
// import { ScheduleClass } from './../../../../../../../../classes/ScheduleClass.js';
import { ScheduleClass } from './../ScheduleClass.js';

// import { get_matrix_array } from './get_matrix_array.js';
import { get_matrix_array } from './../../pages/air_application/components/AirApplicationEditor/components/AppEditorComponent/components/SheduleEditorComponent/components/DownloadScheduleButton/components/AnketaTypeTable/vendors/get_matrix_array.js';
// import { download_excel_plot } from './../../pages/air_application/components/AirApplicationEditor/components/AppEditorComponent/components/SheduleEditorComponent/components/DownloadScheduleButton/components/vendors/download_excel_plot.js';



import { get_matrix_plot } from './../../pages/air_application/components/AirApplicationEditor/components/AppEditorComponent/components/SheduleEditorComponent/components/DownloadScheduleButton/components/vendors/get_matrix_plot.js';
import { get_period_value_from_matrix } from './../../pages/air_application/components/AirApplicationEditor/components/AppEditorComponent/components/SheduleEditorComponent/components/DownloadScheduleButton/components/vendors/get_period_value_from_matrix.js';
import { ExcelMediaPlanTypePlotClass } from './../ExcelMediaPlanTypePlotClass.js';

import { get_matrix_array as get_matrix_array_viz } from './../../pages/air_application/components/AirApplicationEditor/components/AppEditorComponent/components/SheduleEditorComponent/components/DownloadScheduleButton/components/AnketaTypeTableVisitka/vendors/get_matrix_array.js';
// import { get_matrix_array } from './get_matrix_array.js';
import { ExcelMediaPlanTypeVisitkaClass } from './../ExcelMediaPlanTypeVisitkaClass/ExcelMediaPlanTypeVisitkaClass.js';

export class MediaPlanSheetClass extends PassportSheetClass {
    constructor(){
        super();

         this.anketaType = ''; // 'table' 'thema' table_vizitka
         this.colontitul = '';
        this.executor = '';
        this.price = 0;
        this.pricePrime = 0;
        this.mediaName = '';
        this.orderName = '';
        this.releaseName = '';
        this.fileName = '';
        this.period_from = '';
        this.period_to = '';
        this.duration_sec = 0;

        this.SetParams = this.SetParams.bind(this);
        this.GetSheet = this.GetSheet.bind(this);
        this.CreateTitelRows = this.CreateTitelRows.bind(this);

    }

    SetParams( params ){
        let {
            anketaType,
            colontitul,
            executor,
            price,
            pricePrime,
            mediaName,
            orderName,
            releaseName,
            fileName,
            period_from,
            period_to,
            duration_sec,
        } = params;

        this.anketaType = anketaType;
        
        this.colontitul = colontitul;
        this.executor = executor;
        this.price = price;
        this.pricePrime = pricePrime;
        this.mediaName = mediaName;
        this.orderName = orderName;
        this.releaseName = releaseName;
        this.fileName = fileName;
        this.period_from = period_from;
        this.period_to = period_to;
        this.duration_sec = duration_sec;

    }
    
    CreateTitelRows(){}
    
    GetSheet(){

        let WS = {};

        if( this.anketaType === 'table' ){

            let Schedule = new ScheduleClass();
            Schedule.Create();

            let {
                matrix,
                used_sub_app_id
            } = get_matrix_array();

            let ExcelMediaPlanMix = new ExcelMediaPlanMixClass();

            ExcelMediaPlanMix.SetParams({
                executor:   this.executor,
                customer:   this.orderName,
                price:      this.price,
                pricePrime: this.pricePrime,
                mediaName:  this.mediaName,
            });

            ExcelMediaPlanMix.SetSubAppList( used_sub_app_id );
            ExcelMediaPlanMix.SetMatrix( matrix );


            WS = ExcelMediaPlanMix.GetSheet();

        }else if( this.anketaType === 'thema' ){

            let Schedule = new ScheduleClass();
            Schedule.Create();

            let martix = get_matrix_plot();
            let fileThema = '';
            fileThema = name;
            let period = get_period_value_from_matrix( martix );

            let ExcelMediaPlanTypePlot = new ExcelMediaPlanTypePlotClass();
            ExcelMediaPlanTypePlot.SetData( {
                fileName: this.fileName,
                fileThema: this.releaseName,
                customer: this.orderName,
                executor: this.executor,
                mediaName: this.mediaName,
                period,
                martix
            } );

            WS = ExcelMediaPlanTypePlot.GetSheet();
        }else if( this.anketaType === 'table_vizitka' ){
            let Schedule = new ScheduleClass();
            Schedule.Create();


            let {
                matrix,
                used_sub_app_id
            } = get_matrix_array_viz();

            let ExcelMediaPlanTypeVisitka = new ExcelMediaPlanTypeVisitkaClass();
            
            ExcelMediaPlanTypeVisitka.SetTableHeader( this.colontitul );

            ExcelMediaPlanTypeVisitka.SetExecutor( this.executor );
            ExcelMediaPlanTypeVisitka.SetCustomer( this.orderName );
            ExcelMediaPlanTypeVisitka.SetMediaName( this.mediaName );
            ExcelMediaPlanTypeVisitka.SetSubAppList( used_sub_app_id );
            ExcelMediaPlanTypeVisitka.SetMatrix( matrix );

            WS = ExcelMediaPlanTypeVisitka.GetSheet();


        };

        return WS;




    }
}