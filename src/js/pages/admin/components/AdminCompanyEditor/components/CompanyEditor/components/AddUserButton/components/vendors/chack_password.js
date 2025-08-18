

export const chack_password = ( password ) => {
    let result = {
        ok: false,
        message: '',
        value: '',
    };

    let password_trim = password.trim();
    if( password_trim === '' ){
        result.message = 'Пароль забыли, как же он входить-то будет, без пароля?'
    }else{
        result.ok = true;
        result.value = password_trim;
    };

    return result;
};