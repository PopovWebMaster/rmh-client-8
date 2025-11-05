

export const get_premier_from_sec = ( sec ) => {
    let correct_ms = ( sec - 10800 ) * 1000;

    /*  
        ( sec - 10800 ) это, блядь, костыль
         не нашёл наскорую руку как скорректировать по человечески разницу часовых поесов,
         сделал так, тупо вычел три часа в секундах
    */
    
    const output = new Date( correct_ms ).toLocaleDateString( 'ru-RU' );

    const outpu_2 = new Date( correct_ms ).toLocaleTimeString('RU', { hour: "numeric", minute: "numeric"});

    let result = `${output} - ${outpu_2}`;
    return result;
    
};