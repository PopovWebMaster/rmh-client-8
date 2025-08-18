

export const chack_name = ( name ) => {
    let result = {
        ok: false,
        message: '',
        value: '',
    };

    let name_trim = name.trim();
    if( name_trim === '' ){
        result.message = 'Имя хотя бы какое-то должно быть'
    }else{
        result.ok = true;
        result.value = name_trim;
    };

    return result;

};