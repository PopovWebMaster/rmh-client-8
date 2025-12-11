

export const get_TV_P_finalNotes = ( finalNotes, is_premiere, staples ) => {
    let result = '';
    if( finalNotes === '' ){

    }else{
        if( staples ){
            result = `(${finalNotes})`;
        }else{
            result = `${finalNotes}`;
        }
        
    };

    if( is_premiere ){
        result = `Премьера! ${result}`
    };

    return result;

}