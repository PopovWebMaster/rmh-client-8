

export const get_row_9 = ( period ) => {
    return [
        {},
        {},
        { v: "период:", t: "s", 
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
            { v: period, t: "s", 
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