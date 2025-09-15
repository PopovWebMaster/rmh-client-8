
import { FONT_SIZE } from './excel_config.js';

export const get_cell_C = ( params ) => {
    let {
        applicationName,
        releaseName,
        file_list,
        air_notes
    } = params;

    let value = `/${releaseName}`;
    if( file_list.length > 0 ){
        value = `${ file_list[ file_list.length - 1 ] }`;
    };

    if( air_notes.trim() !== '' ){
        value = `${ value } //${ air_notes }`;
    };

    return { 
        v: value, 
        t: "s", 
        s: { 
            font: { 
                name: "Arial", 
                sz: FONT_SIZE,
                italic: false,
                bold: false,
            },
            alignment: {
                horizontal: 'left',
                vertical: 'center',
            },

        } 
    };

    
};