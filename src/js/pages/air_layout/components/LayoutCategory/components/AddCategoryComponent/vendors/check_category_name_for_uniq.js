
import store from './../../../../../../../redux/store.js';

export const check_category_name_for_uniq = ( val ) => {
    let { layout } = store.getState();
    let { allUsedNames } = layout;

    let result = false;

    let value = val.trim();

    if( allUsedNames.indexOf( value ) === -1 ){
        result = true;
    };

    // console.dir( allUsedPrefixes );

    return result;

};