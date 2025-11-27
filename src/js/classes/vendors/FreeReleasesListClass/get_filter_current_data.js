
import store from './../../../redux/store.js';

export const get_filter_current_data = ( sorted_free_release ) => {

    /*
        null везде означает все
    */

    let { scheduleResult } = store.getState();
    let {
        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
    } = scheduleResult;
    
    let current_category_id = null;
    let current_event_id = null;

    if( freeReleasesFilterCategoryId === null ){
        // здесь ничего
    }else{
        if( sorted_free_release[ freeReleasesFilterCategoryId ] ){
            current_category_id = freeReleasesFilterCategoryId;

            if( freeReleasesFilterEventId !== null ){
                if( sorted_free_release[ freeReleasesFilterCategoryId ][ freeReleasesFilterEventId ] ){
                    current_event_id = freeReleasesFilterEventId;
                };
            };
        };
    };

    return {
        current_category_id,
        current_event_id,
    };


}