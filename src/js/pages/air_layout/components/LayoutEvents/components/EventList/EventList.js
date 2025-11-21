
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventList.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { OneEvent } from './../OneEvent/OneEvent.js';

import { DEFAULT_CATEGORY } from './../../../../../../config/layout.js';

import { EventsListFilter } from './../EventsListFilter/EventsListFilter.js';

import { ScrollContainer } from './../../../../../../components/ScrollContainer/ScrollContainer.js';

const EventListComponent = ( props ) => {

    let {
        eventList,
        // eventsIsChanged,
        categoryList,
        eventsCurrentFilterCategoryId,

    } = props;

    const get_category_object = ( arr ) => {

        let result = {};
        for( let i = 0; i < arr.length; i++ ){
            let {
                colorBG,
                colorText,
                id,
                name,
                prefix,
            } = arr[ i ];
            result[ id ] = {
                colorBG,
                colorText,
                id,
                name,
                prefix,
            };
        };

        return result;

    };



    const create = ( arr, arr_2, current_category_id ) => {

        console.dir( 'arr !!!!!!' );
        console.dir( arr );


        let category_obj = get_category_object( arr_2 );

        let div = arr.map( ( item, index ) => {
            let {
                id,
                name,
                category_id,
                notes,
                type,
                durationTime,
                linked_file,
            } = item;

            if( category_id === current_category_id ){
                return (
                    <OneEvent 
                        id =            { id }
                        name =          { name }
                        category =      { category_obj[ category_id ]? category_obj[ category_id ]: { ...DEFAULT_CATEGORY } }
                        notes =         { notes }
                        type =          { type }
                        durationTime =  { durationTime }
                        linked_file =   { linked_file }
                        key =           { index }
                    />
                );
            }else{
                return '';
            };

        } );

        return div;

    };

    return (

        <div className = 'LC_EventList' >

            <div className = 'LC_filter_wrap'>
                <EventsListFilter />
            </div>

            <div className = 'LC_list_wrap'>
                <ScrollContainer>
                    { create( eventList, categoryList, eventsCurrentFilterCategoryId ) }
                </ScrollContainer>
                
            </div>

            

            
            
        </div>

    )

};

export function EventList( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <EventListComponent
            { ...props }
            eventList = { layout.eventList }
            // eventsIsChanged = { layout.eventsIsChanged }

            categoryList = { layout.categoryList }
            eventsCurrentFilterCategoryId = { layout.eventsCurrentFilterCategoryId }



            // setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
