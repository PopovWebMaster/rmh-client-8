
import store from './../../../../../../../../../../../redux/store.js';

export const name_is_unic = ( params ) => {
    let {
        subApplicationId,
        changedName,
    } = params;

    let { application } = store.getState();
    let { currentSubAppList } = application;

    let names = [];
    let result = false;

    for( let i = 0; i < currentSubAppList.length; i++ ){
        let { name, id } = currentSubAppList[ i ];
        if( subApplicationId !== id ){
            names.push( name );
        };
    };

    if( names.indexOf( changedName ) === -1 ){
        result = true;
    };

    return result;

}