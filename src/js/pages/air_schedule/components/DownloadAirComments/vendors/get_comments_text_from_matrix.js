
import { convert_sec_to_time } from './../../../../../helpers/convert_sec_to_time.js';

export const get_comments_text_from_matrix = ( matrix ) => {

    let result = '';

    for( let i = 0; i < matrix.length; i++ ){
        let {
            duration,
            isEmpty,
            isKeyPoint,
            notes,
            releaseInfo,
            startTime,
        } = matrix[ i ];

        let start_time = convert_sec_to_time( startTime );
        let durat_time = convert_sec_to_time( duration );

        let notesVal = notes.trim() === ''? '': `//${notes.trim()}`;

        let strogo = isKeyPoint? '(строго) ': '';
        let title = `${start_time} ${durat_time}, ${releaseInfo} ${notesVal}`;
        result = `${result}\n<comment title="${title}" />`
    };

    return result;

};