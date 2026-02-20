
import { get_matrix_as_list } from './get_matrix_as_list.js';
import { get_table_title } from './get_table_title.js';
import { get_file_name } from './get_file_name.js'
import { get_scheet_title } from './get_scheet_title.js';
import { ScheduleResultOplotClass } from './ScheduleResultOplotClass.js';

export const download_excel_as_schedule_oplot = ( params ) => {
    let {
        filterList,
        highlightFiles,
    } = params;

    let tible_title = get_table_title();
    //     console.dir( 'tible_title' );
    // console.dir( tible_title );
    let scheet_title = get_scheet_title();
    // console.dir( 'scheet_title' );
    // console.dir( scheet_title );

    let file_name = get_file_name();



    let matrix_list = get_matrix_as_list({
        filterList,
        highlightFiles,
    });
    // console.dir( 'matrix_list' );
    // console.dir( matrix_list );

    let ScheduleResultOplot = new ScheduleResultOplotClass();
    ScheduleResultOplot.SetMatrix( matrix_list );
    ScheduleResultOplot.SetTableTitle( tible_title );
    ScheduleResultOplot.SetSheetTitle( scheet_title );
    ScheduleResultOplot.SetFileName( file_name );
    ScheduleResultOplot.Download();




    












}