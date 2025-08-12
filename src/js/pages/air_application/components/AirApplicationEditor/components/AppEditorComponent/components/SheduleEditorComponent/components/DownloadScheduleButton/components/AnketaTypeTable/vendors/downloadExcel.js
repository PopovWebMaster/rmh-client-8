
import { get_matrix_array } from './get_matrix_array.js';

import { ExcelMediaPlanMixClass } from './../../../../../../../../../../../../../classes/ExcelMediaPlanMixClass.js';

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

    console.dir({
        tableHeader,
        executor,
        customer,
        price,
        mediaName,
        materialName,
    });

    let {
        matrix,
        used_sub_app_id
    } = get_matrix_array();

    let ExcelMediaPlanMix = new ExcelMediaPlanMixClass();

    ExcelMediaPlanMix.SetTableHeader( tableHeader );
    ExcelMediaPlanMix.SetExecutor( executor );
    ExcelMediaPlanMix.SetCustomer( customer );
    ExcelMediaPlanMix.SetPrice( price );
    ExcelMediaPlanMix.SetMediaName( mediaName );
    ExcelMediaPlanMix.SetSubAppList( used_sub_app_id );
    ExcelMediaPlanMix.SetMatrix( matrix );

    ExcelMediaPlanMix.Download();

    // console.dir( 'matrix' );
    // console.dir( matrix );
    // console.dir( 'used_sub_app_id' );
    // console.dir( used_sub_app_id );

    console.dir( ExcelMediaPlanMix );










}