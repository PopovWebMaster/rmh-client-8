

export class RowClass {
    constructor( params ){
        let {
            date,
            time,
            fileName,
            fileDuration,
            fileDurationSec,
            segmentDuration,
            segmentDurationSec,
            segmentStart,
        } = params;

        this.row = [
            {
                v: date, t: "d", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: false,
                    },
                    alignment: {
                        horizontal: 'center',
                    } 
                } 
            },
            {
                v: time, t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: false,
                    },
                    alignment: {
                        horizontal: 'center',
                    } 
                } 
            },
            {
                v: fileName, t: "s", 
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
            {
                v: fileDuration, 
                // t: "s", 
                // t: "t", 
                // z: "hh:mm:ss",
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: false,
                    },
                    alignment: {
                        horizontal: 'left',
                        // horizontal: 'right',

                    },
                    // numFmt: 'hh:mm:ss',
                    // numFmt: "HH:mm:ss"
                    numFmt: "H:mm:ss"
                },
                // 
            },
            {
                v: Number( fileDurationSec ), 
                // t: "s", 
                t: "n", 

                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: false,
                    },
                    alignment: {
                        horizontal: 'left',
                    },
                    // numFmt: "0",
                },
            },
            {
                v: segmentDuration, t: "s", 
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
            {
                v: segmentDurationSec, t: "n", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: false,
                    },
                    alignment: {
                        horizontal: 'left',
                    },
                    numFmt: 0,
                },

            },
            {
                v: segmentStart, t: "s", 
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

        this.GetRow = this.GetRow.bind(this);

    }

    GetRow(){
        return this.row;
    }
}