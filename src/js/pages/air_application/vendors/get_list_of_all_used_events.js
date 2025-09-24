
import { DEFAULT_CATEGORY } from './../../../config/layout.js';

import store from './../../../redux/store.js';

import { get_event_style } from './../../../helpers/get_event_style.js';

export const get_list_of_all_used_events = ( filteredList ) => {

    let listId = [];
    let withoutIsset = false;
    let result = [];

    let listById = {};


    console.dir( 'filteredList' );
    console.dir( filteredList );


    let { layout } = store.getState();
    let { eventListById } = layout;

    for( let i = 0; i < filteredList.length; i++ ){
        let { event_id } = filteredList[ i ];

        let style = get_event_style( event_id );



        // if( listId.indexOf( event_id ) === -1 ){
        //     listId.push( event_id );
        // };

        // if( category_id === null ){
        //     withoutIsset = true;
        // }else{
        //     if( listId.indexOf( category_id ) === -1 ){
        //         listId.push( category_id );
        //     };
        // };
    };

    for( let i = 0; i < listId.length; i++ ){
        let eventId = listId[ i ];

        // let item = {
        //     category_id: 8,
        //     durationTime: "01:20:00",
        //     id: 10,
        //     name: "ХФ вечер_2",
        //     notes: "16+x",
        //     type: "file",
        // };

        let style = get_event_style( eventId );
        let item = {};

        if( eventListById[ eventId ] ){
            console.dir( eventListById[ eventId ] );
            item = { ...eventListById[ eventId ] };
            // result.push( { ...eventListById[ eventId ] } );
        }else{


        };


    };

    // if( withoutIsset ){

    //     let category = { ...DEFAULT_CATEGORY };
    //     category.name = 'Без категории';
    //     result.push( category );

    // };


    return result;


}