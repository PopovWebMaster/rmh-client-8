
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventCategoryItem.scss';

import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { DEFAULT_CATEGORY } from './../../../../../../../../config/layout.js';

import { seve_one_event_changes_on_setver } from './../../../../vendors/seve_one_event_changes_on_setver.js';


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

            let newArr = [];

            // for( let i = 0; i < eventList.length; i++ ){
            //     if( eventList[ i ].id === id ){
            //         let item = { ...eventList[ i ] };
            //         item.category_id = category_id;
            //         newArr.push( item );
            //     }else{
            //         newArr.push({ ...eventList[ i ] });
            //     };

            // };

            seve_one_event_changes_on_setver({
                eventId: id,
                eventData: { 
                    category_id: category_id,
                },
                callback: () => {
                    setIsOpen( false )
                },
            });

            // setIsOpen( false );
            // setEventListAsChanged( newArr );

        };

    }

    const createCategoryList = ( arr ) => {
        let li = arr.map( ( item, index ) => {

            let isActive = item.id === category.id? true: false;

            if( index === 0 ){
                return (<React.Fragment
                    key = { index }
                >
                    <li
                        className = { category.id === null? 'active': '' }
                        onClick = { () => {
                            categoryClick( DEFAULT_CATEGORY.id );
                        } }
                    >{ DEFAULT_CATEGORY.name }</li>
                    
                    <li
                        className = { isActive? 'active': '' }
                        onClick = { () => {
                            categoryClick( item.id );
                        } }
                    >{ item.name }</li>
                </React.Fragment>);
            }else{
                return (
                    <li
                        className = { isActive? 'active': '' }
                        key = { index }
                        onClick = { () => {
                            categoryClick( item.id );
                        } }
                    >{ item.name }</li>
                );
            };


        } );

        return li;

    }


    return (

        <div className = 'LE_EventCategoryItem'>

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
                onClick = { () => { setIsOpen( true ) } }
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
