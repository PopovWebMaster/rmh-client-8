
import * as XLSX from 'xlsx-js-style';

import { PassportSheetClass } from './PassportSheetClass.js';

import { get_array_of_colum_width } from './get_array_of_colum_width.js';
import { RowTitleClass } from './RowTitleClass.js';
import { get_period_value } from './get_period_value.js';
import { get_duration_value } from './get_duration_value.js';

import { convert_sec_to_time_for_Excel } from './../../helpers/convert_sec_to_time_for_Excel.js';

import store from './../../redux/store.js';

export class TitleSheetClass extends PassportSheetClass {
    constructor(){
        super();

        this.orderName = '';
        this.releaseName = '';
        this.fileName = '';
        this.period_from = '';
        this.period_to = '';
        this.duration_sec = 0;
        this.release_list = [];
        this.notes = '';
        this.description = '';

        this.SetParams = this.SetParams.bind(this);
        this.GetSheet = this.GetSheet.bind(this);
        this.CreateTitelRows = this.CreateTitelRows.bind(this);

        
    }

    SetParams( params ){
        let {
            orderName,
            releaseName,
            fileName,
            period_from,
            period_to,
            duration_sec,
            release_list,
            notes,
            description,
        } = params;

        this.orderName = orderName;
        this.releaseName = releaseName;
        this.fileName = fileName;
        this.period_from = period_from;
        this.period_to = period_to;
        this.duration_sec = duration_sec;
        this.release_list = release_list;
        this.notes = notes;
        this.description = description;

    }

    CreateTitelRows(){
    
        let { company } = store.getState();
        let { companyLegalName } = company;

        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            isEmpty: true
        } ) );


        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: ' ' },
            cell_C: { value: companyLegalName, fontBold: true },
        } ) );

        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: 'Заказ' },
            cell_C: { value: this.orderName },
        } ) );

        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: 'Название выпуска' },
            cell_C: { value: this.releaseName, fontBold: true  },
        } ) );
        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: 'Имя файла' },
            cell_C: { value: this.fileName },
        } ) );
        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: 'Период' },
            cell_C: { value: get_period_value( this.period_from, this.period_to ) },
        } ) );

        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: 'Хрон.' },
            cell_C: { value: convert_sec_to_time_for_Excel( this.duration_sec ) },
        } ) );
        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: 'Хрон. (сек)' },
            cell_C: { value: this.duration_sec },
        } ) );

        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: 'Всего выпусков' },
            cell_C: { value: this.release_list.length },
        } ) );

        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: 'Хрон. общий' },
            cell_C: { value: convert_sec_to_time_for_Excel( this.duration_sec * this.release_list.length ) },
        } ) );

        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: 'Хрон. общий (сек)' },
            cell_C: { value: this.duration_sec * this.release_list.length },
        } ) );

        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: 'Доп. инфо.' },
            cell_C: { value: this.notes },
            // rowHeight: 60,
        } ) );

        this.AddRow( new RowTitleClass( this.nextRowNumber, {
            cell_B: { value: 'Описание' },
            cell_C: { value: this.description },
            // rowHeight: 60,
        } ) );


    }

    GetSheet(){

        this.CreateTitelRows();

        const ws = XLSX.utils.aoa_to_sheet( this.excelRows );
        ws['!cols'] = [
            { width: 9 }, 
            { width: 30 }, 
            { width: 40 },
            { width: 15 },
            { width: 15 },
        ];
        ws['!rows'] = this.excelRowHeights;
        ws["!merges"] = this.GetRangeArray();

        return ws;


    }




}