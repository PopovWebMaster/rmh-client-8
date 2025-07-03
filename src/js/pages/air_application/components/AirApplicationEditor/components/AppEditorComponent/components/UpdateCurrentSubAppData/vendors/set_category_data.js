
import store from './../../../../../../../../../redux/store.js';

import { setCategoryData } from './../../../../../../../../../redux/currentSubApplicationSlise.js';

import { DEFAULT_CATEGORY } from './../../../../../../../../../config/layout.js';

export const set_category_data = () => {

    let { application, layout } = store.getState();

    let { currentAppCategoryId } = application;
    let { categoryListById } = layout;

    if( categoryListById[ currentAppCategoryId ] ){
        store.dispatch( setCategoryData( categoryListById[ currentAppCategoryId ] ) );
    };


};