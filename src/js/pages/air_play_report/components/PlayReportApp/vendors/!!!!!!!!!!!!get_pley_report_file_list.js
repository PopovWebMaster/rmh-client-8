
import store from './../../../redux/store.js';

export const get_pley_report_file_list = ( year, month ) => {

    let { playReport } = store.getState();
    let { playReportList } = playReport;

    console.dir( 'playReportList' );
    console.dir( playReportList );


}