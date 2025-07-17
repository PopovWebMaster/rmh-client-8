

export const get_row_13 = ( releaseDuration, materialName ) => {
    return [
        {},
        {},
        {},
        {},
        { v: `${releaseDuration} сек`, t: "s", 
            s: { 
                font: { 
                    name: "Verdana", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                alignment: {
                    horizontal: 'center',
                    vertical: 'bottom',
                } 
            } 
        },
        { 
            v: materialName, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                alignment: {
                    horizontal: 'center',
                    vertical: 'top',
                } 
            } 
        },

    ];
};