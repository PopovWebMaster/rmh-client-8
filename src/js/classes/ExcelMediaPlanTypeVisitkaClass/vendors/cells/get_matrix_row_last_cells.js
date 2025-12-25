import { DAY_LENGTH } from './../excel_config.js';
import { BORDER_STYLE } from './../excel_config.js';
import { BORDER_COLOR_STYLE } from './../excel_config.js';

export const get_matrix_row_last_cells = ( rowNumber ) => {
    let n = rowNumber;

    // let sumFormula = `F${n}+G${n}+H${n}+I${n}+J${n}+K${n}+L${n}+M${n}+N${n}+O${n}+P${n}+Q${n}+R${n}+S${n}+T${n}+U${n}+V${n}+W${n}+X${n}+Y${n}+Z${n}+AA${n}+AB${n}+AC${n}+AD${n}+AE${n}+AF${n}+AG${n}+AH${n}+AI${n}+AJ${n}+AK${n}+AL${n}`

    // let sumFormula = `=F${n}+I${n}`;
    // let sumFormula = `SUM(F${n}:AL${n})`;
    // let formula_2 = `SUM(AN${firstRow}:AN${lastRow})`;
    // let sumFormula = `=SUM(F${rowNumber}:AL${rowNumber})`;

    let result = [
        {
            // f: sumFormula,
            v: '', 
            t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: true,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                    wrapText: true,
                },
                border: {
                    // top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    // bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
                numFmt: '0',
            },
            z: '0'

        },
        // {
        //     // f: `C${n}*AM${n}`,
        //     v: '', 
        //     t: "s", 
        //     s: { 
        //         font: { 
        //             name: "Arial", 
        //             sz: 12,
        //             italic: false,
        //             bold: true,
        //         },
                
        //         alignment: {
        //             horizontal: 'center',
        //             vertical: 'center',
        //             wrapText: true,
        //         },
        //         border: {
        //             top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
        //             left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
        //             right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
        //             bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
        //         },
        //         numFmt: '0',
        //     },
        //     z: '0'
        // },
    ];
    return result;
}