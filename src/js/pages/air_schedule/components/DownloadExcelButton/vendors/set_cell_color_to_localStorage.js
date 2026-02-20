
export const set_cell_color_to_localStorage = ( eventId, color = null ) => {
    localStorage.setItem( `cell_color_event_id_${eventId}`, color  );
};