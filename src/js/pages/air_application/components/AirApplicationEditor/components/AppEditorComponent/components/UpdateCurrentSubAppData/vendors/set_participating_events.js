
import store from './../../../../../../../../../redux/store.js';
import { setParticipatingEventsList } from './../../../../../../../../../redux/currentSubApplicationSlise.js';

export const set_participating_events = () => {
    let { currentSubApplication, layout } = store.getState();

    let { categoryId } = currentSubApplication;


    let { eventListById } = layout;

    let list = [];

    if( categoryId !== null ){
        for( let key in eventListById ){
            if( eventListById[ key ].category_id === categoryId ){
                list.push( { ...eventListById[ key ] } );
            };
        };
    };

    store.dispatch( setParticipatingEventsList( list ) );

};