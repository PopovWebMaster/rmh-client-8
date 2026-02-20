

export const get_cell_color_from_localStorage = ( eventId ) => {

    let result = null;

    if( eventId !== null ){
        let color = localStorage.getItem( `cell_color_event_id_${eventId}` );
        if( color ){
            result = color;
        };
    };

    return result;

}