
import store from './../../../../../../../redux/store.js';

import { DEFAULT_CATEGORY } from './../../../../../../../config/layout.js';

export const get_category = ( category_id ) => {
    let { layout } = store.getState();
    let { categoryListById } = layout;
    let result = {};
    if( categoryListById[ category_id ] ){
        result = { ...categoryListById[ category_id ] };
    }else{
        result = { ...DEFAULT_CATEGORY };
    };
    return result;
}