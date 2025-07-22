
import store from './../../../../../../../redux/store.js';

import { get_category } from './get_category.js';
import { get_event } from './get_event.js';


export const get_filter_data = ( releaseList ) => {

    let result = {
        category: [],
        events: [],
        subApp: [],
        release: [],
    };

    let category_obj =  {};
    let events_obj =    {};
    let app_obj =   {};
    let sub_app_obj =   {};

    let release_obj =   {};


    for( let i = 0; i < releaseList.length; i++ ){
        let {
            category_id,
            event_id,
            sub_application_id,
            application_id,
            applicationName,
            id,
            releaseName
        } = releaseList[ i ];

        let category = get_category( category_id );
        let event = get_event( event_id ); 

        if( category_obj[ category_id ] ){}else{ 
            category_obj[ category_id ] = category; 
        };

        if( events_obj[ event_id ] ){}else{ 
            events_obj[ event_id ] = event; 
            events_obj[ event_id ].colorBG = category.colorBG;
            events_obj[ event_id ].colorText = category.colorText;
            events_obj[ event_id ].category_id = category_id;

        };

        
        if( app_obj[ application_id ] ){}else{
            app_obj[ application_id ] = {

                application_id:             application_id,

                name:           applicationName,
                colorBG:        category.colorBG,
                colorText:      category.colorText,
                category_id:    category_id,
                event_id:       event_id,
            };
        };

        if( release_obj[ releaseName ] ){}else{
            release_obj[ releaseName ] = {
                id:                 sub_application_id,
                name:               releaseName,
                colorBG:            category.colorBG,
                colorText:          category.colorText,
                category_id:        category_id,
                event_id:           event_id,
                application_id:     application_id,
                event_type:         event.type

            };
        };

        


    };

    for( let category_id in category_obj ){
        result.category.push( { ...category_obj[ category_id ] } );
    };

    for( let event_id in events_obj ){
        result.events.push( { ...events_obj[ event_id ] } );
    };

    for( let app_id in app_obj ){
        result.subApp.push( { ...app_obj[ app_id ] } );
    };

    for( let name in release_obj ){
        result.release.push( { ...release_obj[ name ] } );
    };

    return result;

}

/*
YYYY_MM_DD: "2025-07-22"
air_notes: ""
applicationName: "Югстрой"
application_id: 6
category_id: 9
event_id: 11
file_list: []
grid_event_id: 138
id: 400
manager_id: 1
releaseDuration: 25
releaseName: "Кирпичи"
startTime: 25019
sub_application_id: 8
*/