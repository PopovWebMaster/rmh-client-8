
import { get_matrix_array } from './get_matrix_array.js';

import { ExcelMediaPlanMixClass } from './../../../../../../../../../../../../../classes/ExcelMediaPlanMixClass.js';

import store from './../../../../../../../../../../../../../redux/store.js';

export const downloadExcel = ( params ) => {
    let {
        tableHeader,
        executor,
        customer,
        price,
        mediaName,
        materialName,
        Schedule,
    } = params;

    let { currentSubApplication } = store.getState();
    let { modeMix } = currentSubApplication;




    let {
        matrix,
        used_sub_app_id
    } = get_matrix_array();

    // console.dir( 'matrix' );
    // console.dir( matrix );

    // console.dir( 'used_sub_app_id' );
    // console.dir( used_sub_app_id );



    let ExcelMediaPlanMix = new ExcelMediaPlanMixClass();

    ExcelMediaPlanMix.SetModeMixStatus( modeMix );
    ExcelMediaPlanMix.SetTableHeader( tableHeader );

    ExcelMediaPlanMix.SetExecutor( executor );
    ExcelMediaPlanMix.SetCustomer( customer );
    ExcelMediaPlanMix.SetPrice( price );
    ExcelMediaPlanMix.SetMediaName( mediaName );
    ExcelMediaPlanMix.SetSubAppList( used_sub_app_id );
    ExcelMediaPlanMix.SetMatrix( matrix );

    ExcelMediaPlanMix.Download();

    // console.dir( ExcelMediaPlanMix );










}