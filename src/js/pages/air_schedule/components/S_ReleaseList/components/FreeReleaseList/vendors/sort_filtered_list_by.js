
import store from './../../../../../../../redux/store.js';

export const sort_filtered_list_by = ( list ) => { // 'num_asc' 'num_desc' 'alph_asc' 'alph_desc'

    let result = [];

    let { scheduleResult } = store.getState();
    let { freeReleasesFilterSortBy } = scheduleResult;

    if( freeReleasesFilterSortBy === 'num_asc' ){

        result = list.sort( ( a, b ) => {
            if( a.duration > b.duration ){
                return 1;
            }else{
                return -1;
            };
        } );

    }else if( freeReleasesFilterSortBy === 'num_desc' ){
        result = list.sort( ( a, b ) => {
            if( a.duration > b.duration ){
                return -1;
            }else{
                return 1;
            };
        } );
    }else if( freeReleasesFilterSortBy === 'alph_asc' ){
        result = list.sort( ( a, b ) => {
            if( a.fileName > b.fileName ){
                return 1;
            }else{
                return -1;
            };
        } );
    }else if( freeReleasesFilterSortBy === 'alph_desc' ){
        result = list.sort( ( a, b ) => {
            if( a.fileName > b.fileName ){
                return -1;
            }else{
                return 1;
            };
        } );
    };


    return result;

}