
import { RowClass } from './RowClass.js';


export class RowMovieNameClass extends RowClass {
    constructor( rowNumber, name, duration_sec ){
        super( rowNumber );

        this.name = name;
        this.duration_sec = duration_sec;


        this.Create = this.Create.bind(this);

        this.Create();

    }

    Create(){

        let row = [
            {},
            {},
            { v: "название", t: "s", 
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
                v: `${this.name}`, t: "s", 
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
            },
            {}, {}, {}, 
            { 
                v: `${this.duration_sec}`, t: "s", 
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
                v: "сек", t: "s", 
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
            },

        ];

        this.AddRow( row );
        
        this.AddRange( `D${this.rowNumber}:G${this.rowNumber}` );


        // XLSX.utils.decode_range("D10:R10"),XLSX.utils.decode_range("S10:AO10"),


    }

}