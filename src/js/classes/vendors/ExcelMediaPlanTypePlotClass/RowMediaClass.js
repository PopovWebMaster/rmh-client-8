
import { RowClass } from './RowClass.js';

export class RowMediaClass extends RowClass {
     constructor( rowNumber, media ){
        super( rowNumber );

        this.media = media;
        

        this.Create = this.Create.bind(this);

        this.Create();

    }

    Create(){
         let row = [
            { v: "СМИ:", t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'right',
                    } 
                } 
            },
                { v: this.media, t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: false,
                    },
                    alignment: {
                        horizontal: 'left',
                    } 
                } 
            },
        ];

        this.AddRow( row );

    }
}