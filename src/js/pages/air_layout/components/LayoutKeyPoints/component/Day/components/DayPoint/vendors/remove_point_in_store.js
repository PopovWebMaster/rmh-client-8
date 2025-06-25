import store from './../../../../../../../../../redux/store.js';
import { setWeekKeyPointListAsChanged } from './../../../../../../../../../redux/layoutSlice.js';

export const remove_point_in_store = ( params ) => {
    let {
        dayNum,
        time,
    } = params;
    
    let { layout } = store.getState();
    let { weekKeyPointList } = layout;

    let weekArr = structuredClone( weekKeyPointList );

    let newDayArr = [];

    for( let i = 0; i < weekArr[ dayNum ].length; i++ ){
        if( weekArr[ dayNum ][ i ].time === time ){

        }else{
            newDayArr.push( weekArr[ dayNum ][ i ] );
        };
    };

    weekArr[ dayNum ] = newDayArr;

    store.dispatch( setWeekKeyPointListAsChanged( weekArr ) );

}