
import store from './../../../../../../../redux/store.js';

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

    return result;

};