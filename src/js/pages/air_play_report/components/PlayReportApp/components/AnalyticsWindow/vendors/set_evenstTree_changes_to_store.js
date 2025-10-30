

import { AnalitycsEventsTreeClass } from './../../../../../../../classes/AnalitycsEventsTreeClass.js';

export const set_evenstTree_changes_to_store = ( params ) => {
    let {
        category_id,
        event_id,
        fileName,
        changeObject,
    } = params;

    /*
        startTime:      startTime.ms/1000,
        duration:       segmentRealDuration.ms/1000,
        isPremiere:     premiere.isPremiere,
        count:          1,
        isUsed:         false,
    
    */

    let AnalitycsEventsTree = new AnalitycsEventsTreeClass();
    AnalitycsEventsTree.CreateFromStore();
    AnalitycsEventsTree.SetChanges({
        category_id,
        event_id,
        fileName,
        changeObject,
    });

    AnalitycsEventsTree.SetEventsTreeToStore();


};