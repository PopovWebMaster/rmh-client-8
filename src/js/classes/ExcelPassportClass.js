
import * as XLSX from 'xlsx-js-style';
import { RowCustomerClass } from './ExcelPassportClass/RowCustomerClass.js';
import { get_array_of_colum_width } from './ExcelPassportClass/get_array_of_colum_width.js';

export class ExcelPassportClass {
    constructor(){
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
        this.Download =   this.Download.bind(this);

        this.CreateTitelRows =   this.CreateTitelRows.bind(this);
        this.AddRow =   this.AddRow.bind(this);
        this.GetRangeArray =   this.GetRangeArray.bind(this);






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

    CreateTitelRows(){

        this.AddRow( new RowCustomerClass( this.nextRowNumber, this.customer ) );

    }

    Download(){

        console.dir( this );

        this.CreateTitelRows();
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet( this.excelRows );
        ws['!cols'] = get_array_of_colum_width();
        ws['!rows'] = this.excelRowHeights;
        ws["!merges"] = this.GetRangeArray();
        XLSX.utils.book_append_sheet(wb, ws, "1");
        XLSX.writeFile( wb, `Passport test.xlsx`);

    }



    
};