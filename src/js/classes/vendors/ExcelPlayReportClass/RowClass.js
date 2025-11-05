

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
                t: "s", 
                // z: "$00:00:00",
                // "z": "h/m/s",
                // "z": "hh:mm:ss",
                // "z": "h:m:s",


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
                    // numFmt: 'h:m:ss',
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