

export const get_row_10 = ( releaseName ) => {
    return [
        {},
        {},
        { v: "вид рекламы", t: "s", 
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
            v: `видеоролик / ${releaseName}`, t: "s", 
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
        {},
        {},
        {},
        {},
        {},
        {},{},
        {},{},
        {},{},
        {},{},
        {},
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
};