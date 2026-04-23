
import { RowClass } from './RowClass.js';

export class RowFileNameClass extends RowClass {
    constructor( rowNumber, fileName = '' ){
        super( rowNumber );

        this.fileName = fileName;

        this.Create = this.Create.bind(this);

        this.Create();

    }

    Create(){

        let row = [
            {},
            {},
            { v: "имя файла:", t: "s", 
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
                v: this.fileName, t: "s", 
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
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},
            { 
                // v: 'МЕДИАПЛАН    ВЫХОДОВ', t: "s", 
                // s: { 
                //     font: { 
                //         name: "Arial", 
                //         sz: 12,
                //         italic: false,
                //         bold: true,
                //     },
                //     alignment: {
                //         horizontal: 'left',
                //     } 
                // } 
            },
        ];

        this.AddRow( row );
        
        // this.AddRange( `D${this.rowNumber}:R${this.rowNumber}` );
        // this.AddRange( `S${this.rowNumber}:AO${this.rowNumber}` );
        this.AddRange( `D${this.rowNumber}:AO${this.rowNumber}` );


        // XLSX.utils.decode_range("D10:R10"),XLSX.utils.decode_range("S10:AO10"),


    }
}