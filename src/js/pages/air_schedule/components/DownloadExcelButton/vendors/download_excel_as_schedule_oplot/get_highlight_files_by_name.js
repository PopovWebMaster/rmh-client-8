

export const get_highlight_files_by_name = ( highlightFiles ) => {
    let result = {};

    for( let i = 0; i < highlightFiles.length; i++ ){
        let { fileName, isUsed } = highlightFiles[ i ];
        if( isUsed === true ){
            result[ fileName ] = {
                isUsed: true,
            };
        };
    };

    return result;
};