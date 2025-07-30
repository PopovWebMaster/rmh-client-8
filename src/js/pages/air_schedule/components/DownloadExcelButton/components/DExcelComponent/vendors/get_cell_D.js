

export const get_cell_D = ( val ) => {
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
            },
            numFmt: 'hh:mm:ss'
        } 
    };
};