
import store from './../../../../../../../redux/store.js';

import { FONT_SIZE, BORDER_COLOR_STYLE } from './excel_config.js';

export const get_cell_D = ( release, notes, isLastBlockRow ) => {

    let border = {
        left: { style: 'thin', color: BORDER_COLOR_STYLE },
        right: { style: 'thin', color: BORDER_COLOR_STYLE },
        top: { style: 'thin', color: BORDER_COLOR_STYLE },
    };

    if( isLastBlockRow ){
        border.bottom = { style: 'thin', color: BORDER_COLOR_STYLE };
    };

    if( release === false ){
        return { 
            v: '', 
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
                },
                border,
                // numFmt: 'hh:mm:ss'
            } 
        };
    }else{

        let { file_list, applicationName, releaseName, event_id, air_notes } = release;

        let value = `${releaseName}/`;

        if( file_list.length > 0 ){
            value = `${ file_list[ file_list.length - 1 ] }`
        };

        let comment = `${notes} ${air_notes}`.trim();

        value = `${ value } ${comment === ''? '': '   // ' + comment}`;

        return { 
            v: value, 
            t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: FONT_SIZE-1,
                    italic: false,
                    bold: false,
                },
                alignment: {
                    horizontal: 'left',
                    vertical: 'center',
                },
                border,
            } 
        };

    }




    // return { 
    //     v: 'val', 
    //     t: "s", 
    //     s: { 
    //         font: { 
    //             name: "Arial", 
    //             sz: 9,
    //             italic: false,
    //             bold: true,
    //         },
    //         alignment: {
    //             horizontal: 'center',
    //             vertical: 'center',
    //         },
    //         numFmt: 'hh:mm:ss'
    //     } 
    // };
};