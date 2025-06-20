
import store from './../../../../../../../../../redux/store.js';
import { setBackligthPrefixList } from './../../../../../../../../../redux/playReportSlice.js';

export const toggle_backlight_item = ( name ) => { 
    let { playReport } = store.getState();
    let { backligthPrefixList } = playReport;

    let newObj = {};

    let arr = Object.keys( backligthPrefixList );
    for( let i = 0; i < arr.length; i++ ){
        let key = arr[ i ]
        if( name === key ){
            newObj[ key ] = !backligthPrefixList[ key ];
        }else{
            newObj[ key ] = backligthPrefixList[ key ];
        };
    };

    store.dispatch( setBackligthPrefixList( newObj ) );

}