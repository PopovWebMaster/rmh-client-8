
import React, { useRef, useState, useEffect }    from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventsListFilter.scss';

import { selectorData as layoutSlice, setEventsCurrentFilterCategoryId } from './../../../../../../redux/layoutSlice.js';


import { DEFAULT_CATEGORY } from './../../../../../../config/layout.js';

import { get_list_of_all_used_categories } from './vendors/get_list_of_all_used_categories.js';

const EventsListFilterComponent = ( props ) => {

    let {
        eventList,
        // eventsIsChanged,
        categoryListById,
        eventsCurrentFilterCategoryId,
        setEventsCurrentFilterCategoryId,

    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {
        let list = get_list_of_all_used_categories( eventList, categoryListById ) ;

        setList( list );

        if( eventsCurrentFilterCategoryId === null ){
            if( list[ 0 ] ){
                setEventsCurrentFilterCategoryId( list[ 0 ].id );
            }else{
                setEventsCurrentFilterCategoryId( null );
            };

        }else{
            let isset = false;
            for( let i = 0; i < list.length; i++ ){
                let { id } = list[ i ];
                if( id === eventsCurrentFilterCategoryId ){
                    isset = true;
                    break;
                };
            };

            if( isset ){

            }else{
                if( list[ 0 ] ){
                    setEventsCurrentFilterCategoryId( list[ 0 ].id );
                }else{
                    setEventsCurrentFilterCategoryId( null );
                };
            };
            

        };



    }, [ eventList, eventsCurrentFilterCategoryId ] );

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let { 
                colorBG,
                colorText,
                id,
                name,
                // prefix,
            } = item;
            let isActive = eventsCurrentFilterCategoryId === id;

            return (
                <div 
                    className = { `EL_btn ${ isActive? 'isActive': ''}` }
                    style = {{
                        backgroundColor: colorBG,
                        color: colorText,
                    }}
                    key = { index }

                    onClick = { () => { setEventsCurrentFilterCategoryId( id ) } }
                >
                    <span>{ name }</span>
                </div>
            );

        } );

        return div;

    };




    return (

        <div className = 'LC_EventsListFilter' >

            { create( list ) }
        </div>

    )

};

export function EventsListFilter( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <EventsListFilterComponent
            { ...props }
            eventList = { layout.eventList }
            // eventsIsChanged = { layout.eventsIsChanged }

            categoryList = { layout.categoryList }
            categoryListById = { layout.categoryListById }
            eventsCurrentFilterCategoryId = { layout.eventsCurrentFilterCategoryId }

            setEventsCurrentFilterCategoryId = { ( val ) => { dispatch( setEventsCurrentFilterCategoryId( val ) ) } }

            // setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
