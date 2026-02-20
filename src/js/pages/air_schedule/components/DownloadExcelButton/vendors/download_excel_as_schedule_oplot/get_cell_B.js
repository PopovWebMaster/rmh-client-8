import { FONT_SIZE, BORDER_COLOR_STYLE, FONT_NAME, TABLE_BORDER_CELL_WIDTH, COLOR } from './excel_config.js';

export const get_cell_B = ( rowData, rowNumber, isFirst = false ) => {
    
    let { isKeyPoint } = rowData;

    let result = {
        v: '00:00:00', 
        // z: "yyyy-mm-dd hh:mm:ss",
        z: "hh:mm:ss",

        s: { 
            font: { 
                name: FONT_NAME, 
                sz: FONT_SIZE,
                italic: false,
                bold: true,
            },
            alignment: {
                horizontal: 'left',
                vertical: 'center',
            },
            // fill: {
            //     // fgColor: { rgb: FILL_BG_COLOR_GRAY }
            // },
            border: {
                right: { style: TABLE_BORDER_CELL_WIDTH, color: BORDER_COLOR_STYLE },
                bottom: { style: TABLE_BORDER_CELL_WIDTH, color: BORDER_COLOR_STYLE },
            },
            // numFmt: "h:mm:ss"
        } 
    };

    if( isFirst === false ){
        result.f = `B${rowNumber}+C${rowNumber}`
    };

    if( isKeyPoint ){
        result.s.fill = {
            fgColor: { rgb: COLOR.RED }
        };

    };

    return result;

}