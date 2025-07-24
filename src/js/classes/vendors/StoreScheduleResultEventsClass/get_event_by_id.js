import store from './../../../redux/store.js';

export const get_event_by_id = ( eventId ) => {

    let { layout } = store.getState();
    let { eventListById } = layout;

    let result = {};
    if( eventListById[ eventId ] ){
        result = { ...eventListById[ eventId ] };
    }else{
        alert( "Пожалуйста, создайте расписанеи заново. В макете было удалено одно, или более событий, а это приведёт к полученных неточности данных" )
    };

    return result;

};