
import store from './../../../../../../../../../../../../../redux/store.js';
import { get_used_releases } from './get_used_releases.js';
import { get_matrix_rows } from './get_matrix_rows.js';

export const get_matrix_array = ( Schedule ) => {
    let { schedule, application, currentSubApplication } = store.getState();
    let { allTimePointsGroupeList, gridEventTable } = schedule;
    let { currentSubAppListById } = application;
    let { currentSubAppId, modeMix } = currentSubApplication;





    console.dir( 'currentSubAppId' );
    console.dir( currentSubAppId );
    console.dir( 'currentSubAppListById' );
    console.dir( currentSubAppListById );


    // console.dir( 'gridEventTable' );
    // console.dir( gridEventTable );
    console.dir( 'allTimePointsGroupeList' );
    console.dir( allTimePointsGroupeList );
    // console.dir( 'gridEventTable' );
    // console.dir( gridEventTable );
    
    let releases = get_used_releases();



    console.dir( 'releases' );
    console.dir( releases );
let rows = get_matrix_rows( releases );
    console.dir( 'rows' );
    console.dir( rows );














};