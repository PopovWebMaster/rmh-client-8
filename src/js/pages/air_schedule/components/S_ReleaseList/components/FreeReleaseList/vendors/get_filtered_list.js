
import store from './../../../../../../../redux/store.js';

import { sort_filtered_list_by } from './sort_filtered_list_by.js';

export const get_filtered_list = () => {

    let { scheduleResult } = store.getState();
    let {
        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
        freeReleasesFiltered,
    } = scheduleResult;

    let result = [];

    if( freeReleasesFilterCategoryId === null ){
        for( let categoryId in freeReleasesFiltered ){
            for( let eventId in freeReleasesFiltered[ categoryId ] ){
                for( let i = 0; i < freeReleasesFiltered[ categoryId ][ eventId ].length; i++ ){
                    result.push( { ...freeReleasesFiltered[ categoryId ][ eventId ][ i ] } );
                };
            };
        };
    }else{
        if( freeReleasesFilterEventId === null ){
            for( let categoryId in freeReleasesFiltered ){
                if( Number( categoryId ) === freeReleasesFilterCategoryId ){
                    for( let eventId in freeReleasesFiltered[ categoryId ] ){
                        for( let i = 0; i < freeReleasesFiltered[ categoryId ][ eventId ].length; i++ ){
                            result.push( { ...freeReleasesFiltered[ categoryId ][ eventId ][ i ] } );
                        };
                    };
                };
            };
        }else{
            for( let categoryId in freeReleasesFiltered ){
                if( Number( categoryId ) === freeReleasesFilterCategoryId ){
                    for( let eventId in freeReleasesFiltered[ categoryId ] ){
                        if( Number( eventId ) === freeReleasesFilterEventId ){
                            for( let i = 0; i < freeReleasesFiltered[ categoryId ][ eventId ].length; i++ ){
                                result.push( { ...freeReleasesFiltered[ categoryId ][ eventId ][ i ] } );
                            };
                        };
                    };
                };
            };
        };
    };

    let sort_res = sort_filtered_list_by( result );

    return sort_res;

};