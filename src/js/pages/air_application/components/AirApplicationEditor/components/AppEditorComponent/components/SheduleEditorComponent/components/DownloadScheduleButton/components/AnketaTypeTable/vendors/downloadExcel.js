
import { get_matrix_array } from './get_matrix_array.js';

import { ExcelMediaPlanMixClass } from './../../../../../../../../../../../../../classes/ExcelMediaPlanMixClass.js';

import store from './../../../../../../../../../../../../../redux/store.js';
import { CHAR_TYPE } from './../../../../../../../../../../../../../config/application.js'

export const downloadExcel = ( params ) => {
    let {
        tableHeader,
        executor,
        customer,
        price,
        pricePrime,
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



    let ExcelMediaPlanMix = new ExcelMediaPlanMixClass();

    ExcelMediaPlanMix.SetModeMixStatus( modeMix );
    ExcelMediaPlanMix.SetTableHeader( tableHeader );

    ExcelMediaPlanMix.SetExecutor( executor );
    ExcelMediaPlanMix.SetCustomer( customer );
    ExcelMediaPlanMix.SetPrice( price );
    ExcelMediaPlanMix.SetPricePrime( pricePrime );

    ExcelMediaPlanMix.SetMediaName( mediaName );
    ExcelMediaPlanMix.SetSubAppList( used_sub_app_id );
    ExcelMediaPlanMix.SetMatrix( matrix );

    ExcelMediaPlanMix.Download();


}