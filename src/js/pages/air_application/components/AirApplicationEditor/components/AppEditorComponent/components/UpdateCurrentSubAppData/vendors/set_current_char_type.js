
import store from './../../../../../../../../../redux/store.js';

import { setCurrentCharType } from './../../../../../../../../../redux/currentSubApplicationSlise.js';
import { CHAR_TYPE } from './../../../../../../../../../config/application.js';

export const set_current_char_type = () => {

    let { currentSubApplication, layout } = store.getState();
        
    let { categoryId, eventId } = currentSubApplication;
    let { eventListById } = layout;

    if( categoryId === null ){
        store.dispatch( setCurrentCharType( CHAR_TYPE.BLIND ) );
    }else{
        if( eventListById[ eventId ] ){
            let { type } = eventListById[ eventId ];

            if( type === CHAR_TYPE.BLOCK || type === CHAR_TYPE.FILE ){
                store.dispatch( setCurrentCharType( type ) );
            }else{
                store.dispatch( setCurrentCharType( CHAR_TYPE.BLIND ) );
            };

        }else{
            store.dispatch( setCurrentCharType( CHAR_TYPE.BLIND ) );
        };
    };

}