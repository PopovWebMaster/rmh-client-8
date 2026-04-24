
import store from './../../../redux/store.js';

import { setCurrentCategoryIdOfListFilter } from './../../../redux/applicationSlice.js';

export const set_current_category_id = ( categoryId ) => {

    store.dispatch( setCurrentCategoryIdOfListFilter( categoryId ) );

    localStorage.setItem('last_app_filter_category_id', categoryId );

    // console.dir( 'categoryId<<<<<<<<<<<<' );
    // console.dir( categoryId );


};