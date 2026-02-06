
import { cleare_altKey_list } from './cleare_altKey_list.js';

export const set_event_listener_altKeyUp = () => {

    const keyUpHandler = ( ev ) => {

        if( ev.key === 'Alt' ){

            cleare_altKey_list();
            
            document.onkeyup = null;
        };
    };

    if( document.onkeyup === null ){
        document.onkeyup = keyUpHandler;
    };


};