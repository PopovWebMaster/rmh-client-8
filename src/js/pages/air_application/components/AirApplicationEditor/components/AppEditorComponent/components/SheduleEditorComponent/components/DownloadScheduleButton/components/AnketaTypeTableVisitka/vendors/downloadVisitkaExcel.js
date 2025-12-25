
import { get_matrix_array } from './get_matrix_array.js';
import { ExcelMediaPlanTypeVisitkaClass } from './../../../../../../../../../../../../../classes/ExcelMediaPlanTypeVisitkaClass/ExcelMediaPlanTypeVisitkaClass.js';

export const downloadVisitkaExcel = ( params ) => {
    let {
        tableHeader,
        executor,
        customer,
        mediaName,
        materialName,
        Schedule,
    } = params;

    console.dir( params );

    let {
        matrix,
        used_sub_app_id
    } = get_matrix_array();

    let ExcelMediaPlanTypeVisitka = new ExcelMediaPlanTypeVisitkaClass();
    
    ExcelMediaPlanTypeVisitka.SetTableHeader( tableHeader );

    ExcelMediaPlanTypeVisitka.SetExecutor( executor );
    ExcelMediaPlanTypeVisitka.SetCustomer( customer );
    ExcelMediaPlanTypeVisitka.SetMediaName( mediaName );
    ExcelMediaPlanTypeVisitka.SetSubAppList( used_sub_app_id );
    ExcelMediaPlanTypeVisitka.SetMatrix( matrix );

    ExcelMediaPlanTypeVisitka.Download();
}