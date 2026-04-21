

export class RowClass {
    constructor( rowNumber ){

        this.rowNumber = rowNumber;
        this.nextRowNumber = rowNumber;

        this.rows = [];
        this.rangeList = [];

        this.rowHeight = {};

        this.GetRows = this.GetRows.bind(this);
        this.GetRange = this.GetRange.bind(this);
        this.GetRowNumber = this.GetRowNumber.bind(this);
        this.GetNextRowNumber = this.GetNextRowNumber.bind(this);


        this.AddRow = this.AddRow.bind(this);
        this.AddRange = this.AddRange.bind(this);
        this.AddRowHeight = this.AddRowHeight.bind(this);
        this.GetRowHeight = this.GetRowHeight.bind(this);


    }

    GetRows(){
        return this.rows;
    }

    GetRange(){
        return this.rangeList;
    }

    GetRowNumber(){
        return this.rowNumber;
    }

    GetNextRowNumber(){
        return this.nextRowNumber;
    }

    GetRowHeight(){
        return this.rowHeight;
    }

    AddRow( row ){
        this.rows.push( row );
        this.nextRowNumber = this.nextRowNumber + 1;
    }

    AddRange( str ){
        this.rangeList.push( str );
    }

    AddRowHeight( hpx ){
        this.rowHeight = { hpx: hpx };
    }
}