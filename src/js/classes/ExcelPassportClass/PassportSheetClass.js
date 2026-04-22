
import * as XLSX from 'xlsx-js-style';

export class PassportSheetClass {
    constructor(){

        this.excelRows = [];
        this.excelRangeValues = [];
        this.excelRowHeights = [];
        this.nextRowNumber = 1;

        this.AddRow = this.AddRow.bind(this);
        this.GetRangeArray = this.GetRangeArray.bind(this);

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
    

}