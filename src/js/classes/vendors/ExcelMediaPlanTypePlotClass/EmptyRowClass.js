
import { RowClass } from './RowClass.js';

export class EmptyRowClass extends RowClass {
    constructor( rowNumber ){
        super( rowNumber );
        this.Create = this.Create.bind(this);

        this.Create();


    }

    Create(){
        let row = [];
        this.AddRow( row );
    }
}