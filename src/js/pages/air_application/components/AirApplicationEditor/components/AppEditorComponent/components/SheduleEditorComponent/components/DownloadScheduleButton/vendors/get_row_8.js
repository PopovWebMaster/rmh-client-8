

export const get_row_8 = ( medianame ) => {
    return [
        {},
        {},
        { v: "СМИ", t: "s", 
            s: { 
                font: { 
                    name: "Verdana", 
                    sz: 12,
                    italic: true,
                    bold: true,
                },
                alignment: {
                    horizontal: 'right',
                } 
            } 
        },
            { v: medianame, t: "s", 
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
};