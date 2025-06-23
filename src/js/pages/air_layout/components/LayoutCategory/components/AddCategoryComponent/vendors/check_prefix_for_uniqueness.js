
import store from './../../../../../../../redux/store.js';

export const check_prefix_for_uniqueness = ( val ) => {
    let { layout } = store.getState();
    let { allUsedPrefixes } = layout;

    let result = false;

    let value = val.trim();

    if( allUsedPrefixes.indexOf( value ) === -1 ){
        result = true;
    };

    // console.dir( allUsedPrefixes );

    return result;

};