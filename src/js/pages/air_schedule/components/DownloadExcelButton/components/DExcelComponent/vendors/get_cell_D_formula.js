


export const get_cell_D_formula = ( rowFrom, rowTo ) => {

    // let srt = `D${rowFrom}`;
    let srt = '';

    for( let i = rowFrom; i < rowTo + 1; i++  ){
        if( srt === '' ){
            srt = `D${i}`;
        }else{
            srt = `${srt}+D${i}`;
        };
    };

    return { 
        // f: `=D${rowFrom}*${rowTo}`, //СУММ(G53:G57)
        // f: `=СУММ(D${rowFrom}:D${rowTo})`, //СУММ(G53:G57)
        // f: `=(D${rowFrom}+D${rowTo})`, //СУММ(G53:G57)
        f: `=(${srt})`, //СУММ(G53:G57)


        v: '', 
        t: "s", 
        s: { 
            font: { 
                name: "Arial", 
                sz: 8,
                italic: false,
                bold: false,
            },
            alignment: {
                horizontal: 'right',
            },
            numFmt: 'hh:mm:ss'
        } 
    };
}