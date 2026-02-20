import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';
import { FONT_SIZE_D, BORDER_COLOR_STYLE, FONT_NAME, TABLE_BORDER_CELL_WIDTH, TABLE_BORDER_WIDTH } from './excel_config.js';

export const get_cell_D = ( rowData, rowNumber ) => {

    let { releaseInfo, isKeyPoint, cellBackground, textColor } = rowData;

    // console.dir( rowData );

    let result = {
        v: releaseInfo, 
        // t: "s", 
        t: "t", 
        s: { 
            font: { 
                name: FONT_NAME, 
                sz: FONT_SIZE_D,
                italic: false,
                bold: isKeyPoint,
            },
            alignment: {
                horizontal: 'left',
                vertical: 'center',
            },
            // fill: {
            //     // fgColor: { rgb: FILL_BG_COLOR_GRAY }
            // },
            border: {
                right: { style: TABLE_BORDER_WIDTH, color: BORDER_COLOR_STYLE },

                bottom: { style: TABLE_BORDER_CELL_WIDTH, color: BORDER_COLOR_STYLE },
            },
        } 
    };

    if( cellBackground !== null && cellBackground !== 'null' && cellBackground !== '' && cellBackground !== undefined ){
        result.s.fill = {
            fgColor: { rgb: cellBackground }
        };
    };

    if( textColor !== 'auto' ){
        result.s.font.color = {
            rgb: textColor
        };
    }
    

    return result;

};