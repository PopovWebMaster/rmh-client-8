
import { RowClass } from './RowClass.js';
import { get_first_martix_row_cells } from './cells/get_first_martix_row_cells.js';
import { get_martix_values_cells } from './cells/get_martix_values_cells.js';
import { get_matrix_row_last_cells } from './cells/get_matrix_row_last_cells.js';


export class RowMartixClass extends RowClass {
    constructor( rowNumber, data ){
        super( rowNumber );

        let {
            title,
            values,
            index,
            name,
            duration,
            price,
            pricePrime,
            withName = false,
            cellDurationLink = null,

        } = data;

        this.title =    title;
        this.values =   values;
        this.index =    index;
        this.name =     name;
        this.duration = duration;
        this.price =    price;
        this.pricePrime = pricePrime;
        this.cellDurationLink = cellDurationLink;


        this.withName = withName;

        this.Create = this.Create.bind(this);

        this.Create();

    }

    Create(){

        let firstCells = get_first_martix_row_cells({
            time:               this.title,
            releaseDuration:    this.duration,
            releaseName:        this.name,
            price:              this.price,
            pricePrime:         this.pricePrime,
            rowNum:             this.rowNumber,
            cellDurationLink:   this.cellDurationLink,

        }, this.withName );

        let valuesCells = get_martix_values_cells({
            values: this.values,
            cellDurationLink:   this.cellDurationLink,
        });

        let lastCells = get_matrix_row_last_cells( this.rowNumber );

        let row = [
            ...firstCells,
            ...valuesCells,
            ...lastCells,


    ];

        this.AddRow( row );
    //     this.AddRange( `F${this.rowNumber}:AO${this.rowNumber}` );
    //     this.AddRowHeight( 38.25 );


    }
}