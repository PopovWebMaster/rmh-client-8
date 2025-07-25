

export const get_row_6 = ( executor ) => {
    return [
        {},
        {},
        { v: "Исполнитель:", t: "s", 
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
            { v: executor, t: "s", 
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
}