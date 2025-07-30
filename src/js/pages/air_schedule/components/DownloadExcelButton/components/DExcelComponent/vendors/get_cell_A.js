

export const get_cell_A = ( val ) => {
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
                horizontal: 'center',
                vertical: 'center',
            } 
        } 
    };
};