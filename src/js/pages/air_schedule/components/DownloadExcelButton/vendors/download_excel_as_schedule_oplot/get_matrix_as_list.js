
import { get_used_events_by_id } from './get_used_events_by_id.js';
import { get_highlight_files_by_name } from './get_highlight_files_by_name.js';
import { get_all_actual_schedule_events } from './get_all_actual_schedule_events.js';

import { MatrixOplotClass } from './MatrixOplotClass.js';

export const get_matrix_as_list = ( params ) => {
    let {
        filterList,
        highlightFiles,
    } = params;

    let result = [];

    let used_events_by_id = get_used_events_by_id( filterList );
    let highlight_files_by_name = get_highlight_files_by_name( highlightFiles );

    let actual_schedule_events = get_all_actual_schedule_events( used_events_by_id, highlight_files_by_name );

    console.dir( 'actual_schedule_events' );
    console.dir( actual_schedule_events );

    let MatrixOplot = new MatrixOplotClass();
    MatrixOplot.SetUsedEvents( used_events_by_id );
    MatrixOplot.SetHighlightFiles( highlight_files_by_name );

    for( let i = 0; i < actual_schedule_events.length; i++ ){
        MatrixOplot.AddScheduleEvent( actual_schedule_events[ i ] );
    };

    result = MatrixOplot.GetMatrix();

    return result;

};