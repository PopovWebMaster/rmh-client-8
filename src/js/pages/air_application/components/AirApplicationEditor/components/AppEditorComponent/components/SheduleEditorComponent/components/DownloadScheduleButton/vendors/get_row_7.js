

export const get_row_7 = ( customer ) => {
    return [
        {},
        {},
        { v: "Заказчик:", t: "s", 
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
            { v: customer, t: "s", 
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
    ]
}