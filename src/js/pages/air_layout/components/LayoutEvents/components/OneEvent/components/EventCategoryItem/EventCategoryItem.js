
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventCategoryItem.scss';

import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


// import { seve_one_event_changes_on_setver } from './../../../../vendors/seve_one_event_changes_on_setver.js';

import { set_event_changes_to_store } from './../../../../vendors/set_event_changes_to_store.js';
import { access_right } from './../../../../../../../../helpers/access_right.js';


const EventCategoryItemComponent = ( props ) => {

    let {
        id,
        category,


        categoryList,

        eventList,
        setEventListAsChanged,

    } = props;

    let [ categoryName, setCategoryName] = useState( category.name );
    let [ isOpen, setIsOpen ] = useState( false );


    useEffect( () => {
        setCategoryName( category.name );
    }, [ category ] );


    const categoryClick = ( category_id ) => {

        if( category_id !== category.id ){

            set_event_changes_to_store( id, { category_id } );

            // seve_one_event_changes_on_setver({
            //     eventId: id,
            //     eventData: { 
            //         category_id: category_id,
            //     },
            //     callback: () => {
            //         setIsOpen( false )
            //     },
            // });

        };

    }

    const createCategoryList = ( arr ) => {

        let li = arr.map( ( item, index ) => {

        let isActive = item.id === category.id? true: false;

        return (
            <li
                className = { isActive? 'active': '' }
                key = { index }
                onClick = { () => {
                    categoryClick( item.id );
                } }
            >{ item.name }</li>
        );

        } );

        return li;

    }

    const click = () => {

        access_right( 'layout_event_edit', () => {
            setIsOpen( !isOpen )
        } );

    };


    return (

        <div
            className = 'LE_EventCategoryItem'
            onClick = { click }
        >

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '27em'
                height =    '34em'
                title = 'Категории'
            >
                <div className = 'LE_ECI_selectCategory'>

                    <ul>
                        { createCategoryList( categoryList ) }
                    </ul>

                </div>
    
            </AlertWindowContainer>

            
            <span 
                className = 'icon icon-down-open-1'
                // onClick = { () => { setIsOpen( true ) } }
            ></span>
            <span className = 'name'>{ categoryName }</span>

        </div>

    )

};

export function EventCategoryItem( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <EventCategoryItemComponent
            { ...props }
            eventList = { layout.eventList }
            categoryList = { layout.categoryList }

            setEventListAsChanged = { ( val ) => { dispatch( setEventListAsChanged( val ) ) } }


        />
    );


}
