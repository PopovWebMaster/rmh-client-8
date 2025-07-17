

export const get_row_12 = ( releaseDuration ) => {
    return [
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
            v: releaseDuration, t: "s", 
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
                    bold: true,
                },
                alignment: {
                    horizontal: 'left',
                } 
            } 
        },
    ];
};