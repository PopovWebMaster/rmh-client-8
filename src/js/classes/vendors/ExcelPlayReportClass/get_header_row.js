

export const get_header_row = () => {

        //     this.Date_ =             'Дата';
        // this.Time =              'Время начала';
        // this.FileName =          'Имя файла';
        // this.FileDuration =      'Длительность файла';
        // this.FileDurationSec =   'Длительность файла (секунды)';
        // this.SegmentDuration =   'Длительность сегмента';
        // this.SegmentDurationSec ='Длительность сегмента (секунды)';
        // this.SegmentStart =      'Старт сегмента с';

    return [
        {
            v: 'Дата', t: "s", 
            s: { 
                font: { 
                    name: "Calibri", 
                    sz: 11,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'center',
                } 
            } 
        },
        {
            v: 'Время начала', t: "s", 
            s: { 
                font: { 
                    name: "Calibri", 
                    sz: 11,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'center',
                } 
            } 
        },
        {
            v: 'Имя файла', t: "s", 
            s: { 
                font: { 
                    name: "Calibri", 
                    sz: 11,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'left',
                } 
            } 
        },
        {
            v: 'Длительность файла', t: "s", 
            s: { 
                font: { 
                    name: "Calibri", 
                    sz: 11,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'left',
                } 
            } 
        },
        {
            v: 'Длительность файла (секунды)', t: "s", 
            s: { 
                font: { 
                    name: "Calibri", 
                    sz: 11,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'left',
                } 
            } 
        },
        {
            v: 'Длительность сегмента', t: "s", 
            s: { 
                font: { 
                    name: "Calibri", 
                    sz: 11,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'left',
                } 
            } 
        },
        {
            v: 'Длительность сегмента (секунды)', t: "s", 
            s: { 
                font: { 
                    name: "Calibri", 
                    sz: 11,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'left',
                } 
            } 
        },
        {
            v: 'Старт сегмента с', t: "s", 
            s: { 
                font: { 
                    name: "Calibri", 
                    sz: 11,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'left',
                } 
            } 
        },

    ];
}