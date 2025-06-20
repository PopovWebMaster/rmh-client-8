
import store from './../../../redux/store.js';

import { setUserData } from './../../../redux/userInfoSlice.js';
import { setPlayReportList, setMinYear, setMonth } from './../../../redux/playReportSlice.js';

export const set_play_report_files = ( response ) => {
    let { 
        userData,
        playReportFiles
    } = response;

    if( playReportFiles && userData ){
        let list = {};

        let min_year = 0;
        let min_month = 0;

        for( let i = 0; i < playReportFiles.length; i++ ){
            let arr = playReportFiles[i].split( '/' );
            let str = arr[ arr.length - 1 ];
            let arr_2 = str.split( '.' );
            let name = arr_2[ 0 ];

            list[ name ] = true;

            let arr_3 = name.split( '-' );

            let name_year = Number( arr_3[ 0 ] );
            let name_month = Number( arr_3[ 1 ] );

            if( min_year === 0 ){
                min_year = name_year;
                min_month = name_month;
            }else{

                if( min_year > name_year ){
                    min_year = name_year;
                    min_month = name_month;
                }else{
                    if( min_year === name_year ){
                        if( min_month > name_month ){
                            min_year = name_year;
                            min_month = name_month;
                        };
                    };
                };
            };  
        
        };


        store.dispatch( setUserData( userData ) );
        store.dispatch( setPlayReportList( list ) );
        store.dispatch( setMinYear( min_year ) );
        store.dispatch( setMonth( min_month ) );


    };



   
};