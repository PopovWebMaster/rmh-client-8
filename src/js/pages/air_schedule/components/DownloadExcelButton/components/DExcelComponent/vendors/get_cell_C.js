
import store from './../../../../../../../redux/store.js';

import { FONT_SIZE, BORDER_COLOR_STYLE } from './excel_config.js';

export const get_cell_C = ( eventId = null, isLastBlockRow = false  ) => {

    let border = {
        // left: { style: 'thin', color: BORDER_COLOR_STYLE },
    };

    if( isLastBlockRow ){
        border.bottom = { style: 'thin', color: BORDER_COLOR_STYLE };
    };

    if( eventId === null ){
        return { 
            v: '', 
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
                border,
            } 
        };
    }else{

        let { layout } = store.getState();
        let { eventListById } = layout;

        let eventName = '';
        if( eventListById[ eventId ] ){
            eventName = eventListById[ eventId ].name;
        };

        border.top = { style: 'thin', color: BORDER_COLOR_STYLE };

        return { 
            v: eventName, 
            t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: FONT_SIZE,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'left',
                    vertical: 'center',
                },
                border,
            } 
        };
    };
    
};