
import store from './../../../../../../../../../redux/store.js';
import { setWeekKeyPointListAsChanged } from './../../../../../../../../../redux/layoutSlice.js';

export const set_description_to_store = ( params ) => {
    let {
        dayNum,
        time,
        description,
    } = params;
    let { layout } = store.getState();
    let { weekKeyPointList } = layout;

    let weekArr = structuredClone( weekKeyPointList );

    let isChanged = false;
    for( let i = 0; i < weekArr[ dayNum ].length; i++ ){
        if( weekArr[ dayNum ][ i ].time === time ){
            if( weekArr[ dayNum ][ i ].description !== description ){
                weekArr[ dayNum ][ i ].description = description;
                isChanged = true;
            };
        };
    };

    if( isChanged ){
        
        store.dispatch( setWeekKeyPointListAsChanged( weekArr ) );

    };

};