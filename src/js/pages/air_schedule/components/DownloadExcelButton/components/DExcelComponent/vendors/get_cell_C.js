

export const get_cell_C = ( val ) => {
    return { 
        v: val, 
        t: "s", 
        s: { 
            font: { 
                name: "Arial", 
                sz: 9,
                italic: false,
                bold: false,
            },
            alignment: {
                horizontal: 'left',
                vertical: 'center',
            } 
        } 
    };
};