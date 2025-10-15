
import store from './../../../../../../../../../../../../redux/store.js';

import { get_matrix_plot } from './get_matrix_plot.js';
import { get_period_value_from_matrix } from './get_period_value_from_matrix.js';
// import { get_period_value_from_matrix } from './../../vendors/get_period_value_from_matrix.js';


import { ExcelMediaPlanTypePlotClass } from './../../../../../../../../../../../../classes/ExcelMediaPlanTypePlotClass.js';


export const download_excel_plot = ( params ) => {

    let {
        customer,
        executor,
        mediaName,
        Schedule,
    } = params;

    let martix = get_matrix_plot();
    // console.dir( 'martix' );
    // console.dir( martix );

    let fileName = '';
    let fileThema = '';
    let { file_names, name } = Schedule.SubApplication;

    fileThema = name;
    if( file_names.length > 0 ){
        fileName = file_names[ file_names.length - 1 ];
    };
    let period = get_period_value_from_matrix( martix );

    // console.dir( {
    //     fileName,
    //     fileThema,
    //     customer,
    //     executor,
    //     mediaName,
    //     period,
    // } );

    let ExcelMediaPlanTypePlot = new ExcelMediaPlanTypePlotClass();
    ExcelMediaPlanTypePlot.SetData( {
        fileName,
        fileThema,
        customer,
        executor,
        mediaName,
        period,
        martix
    } );


    ExcelMediaPlanTypePlot.Download();








    

};