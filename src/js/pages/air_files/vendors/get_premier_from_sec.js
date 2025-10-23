

export const get_premier_from_sec = ( sec ) => {
    
    const output = new Date( sec * 1000 ).toLocaleDateString( 'ru-RU' );
    const outpu_2 = new Date().toLocaleTimeString('ru-RU', { hour: "numeric", minute: "numeric"});

    let result = `${output} - ${outpu_2}`;
    return result;
    
};