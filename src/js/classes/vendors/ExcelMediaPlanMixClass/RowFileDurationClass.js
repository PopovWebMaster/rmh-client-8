
import { RowClass } from './RowClass.js';

export class RowFileDurationClass extends RowClass {
    constructor( rowNumber, duration = 0 ){
        super( rowNumber );

        this.duration = duration;

        this.Create = this.Create.bind(this);

        this.Create();

    }

    Create(){

        let row = [
            {},
            {},
            { v: "хронометраж:", t: "s", 
                s: { 
                    font: { 
                        name: "Arial", 
                        sz: 12,
                        italic: true,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'right',
                    } 
                } 
            },
            { 
                v: this.duration, t: "n", 
                s: { 
                    font: { 
                        name: "Arial", 
                        sz: 12,
                        italic: false,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'left',
                    } 
                } 
            },
            {
                v: 'сек', t: "s", 
                s: { 
                    font: { 
                        name: "Arial", 
                        sz: 12,
                        italic: false,
                        bold: false,
                    },
                    alignment: {
                        horizontal: 'left',
                    } 
                } 
            },{},{},{},{},{},{},{},{},{},{},{},{},{},
            { 
                v: 'МЕДИАПЛАН    ВЫХОДОВ', t: "s", 
                s: { 
                    font: { 
                        name: "Arial", 
                        sz: 12,
                        italic: false,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'left',
                    } 
                } 
            },
        ];

        this.AddRow( row );
        
        // this.AddRange( `D${this.rowNumber}:R${this.rowNumber}` );
        this.AddRange( `S${this.rowNumber}:AO${this.rowNumber}` );


        // XLSX.utils.decode_range("D10:R10"),XLSX.utils.decode_range("S10:AO10"),


    }
}