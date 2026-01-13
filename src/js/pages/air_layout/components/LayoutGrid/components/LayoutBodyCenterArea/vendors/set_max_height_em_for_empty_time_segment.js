
import { round_to_number } from './../../../../../../../helpers/round_to_number.js';

import store from './../../../../../../../redux/store.js';
import { setGridEmptySegmentMaxHeightEm } from './../../../../../../../redux/layoutSlice.js';

export const set_max_height_em_for_empty_time_segment = ( source_element ) => {

    let parentStyle = window.getComputedStyle( source_element );
    let fontSize = parseFloat( parentStyle.fontSize );
    let height = parseFloat( parentStyle.height );
    let max_height_em = round_to_number( height/fontSize - 5, 2 );

    store.dispatch( setGridEmptySegmentMaxHeightEm( max_height_em ) );
};
