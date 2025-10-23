
import store from './../../../redux/store.js';
import { setFilteredList, setFilteredListByName, setIssetChackedValues } from './../../../redux/airFilesSlice.js';

export const set_isChaked_into_filteredList = ( namesArray, value ) => {

    let { airFiles } = store.getState();
    let { filteredList } = airFiles;

    let issetValueTrue = false;

    let obj = {};
    for( let i = 0; i < namesArray.length; i++ ){
        obj[ namesArray[ i ] ] = {
            value: value,
        };
    };
    
    let arr = [];
    let objectByNames = {};
    for( let i = 0; i < filteredList.length; i++ ){
        let item = { ...filteredList[ i ] };
        let { name } = item;

        if( obj[ name ] ){
            item.isSelected = obj[ name ].value;
        };
        arr.push( item );
        objectByNames[ name ] = item;

        if( item.isSelected === true ){
            issetValueTrue = true;
        };
    };

    store.dispatch( setIssetChackedValues( issetValueTrue ) );
    store.dispatch( setFilteredList( arr ) );
    store.dispatch( setFilteredListByName( objectByNames ) );

}