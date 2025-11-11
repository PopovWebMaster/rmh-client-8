


export const check_file_name_for_extension = ( fileName ) => {
    let result = false;

    var reg = /(?:\.([^.]+))?$/;

    var ext = reg.exec( fileName )[1];

    if( ext === undefined ){
    }else{
        result = true;
    };

    return result;

}