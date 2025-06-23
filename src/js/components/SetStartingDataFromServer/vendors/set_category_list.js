
import store from './../../../redux/store.js';

import { setCategoryList } from './../../../redux/layoutSlice.js';

export const set_category_list = ( response ) => {

    let { categoryList } = response;

    if( categoryList ){
        store.dispatch( setCategoryList( categoryList ) );
    };

};