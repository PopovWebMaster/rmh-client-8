

export const get_cell_B = ( val ) => {
    return { 
        v: val, 
        t: "s", 
        s: { 
            font: { 
                name: "Arial", 
                sz: 9,
                italic: false,
                bold: true,
            },
            alignment: {
                horizontal: 'left',
                vertical: 'center',
            } 
        } 
    };
};