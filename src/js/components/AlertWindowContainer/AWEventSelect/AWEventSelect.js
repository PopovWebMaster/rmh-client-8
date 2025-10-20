
import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { selectorData as layoutSlice } from './../../../redux/layoutSlice.js';

import './AWEventSelect.scss';

import { EVENT_NAME_NOT_SELECTED } from './../../../config/layout.js';

const AWEventSelectComponent = ( props ) => {

    let {
        value,
        changeHandler,
        categoryListById,

        eventList,
        eventListById,
        alwaysIsOpen = false,
        

    } = props;

    let [ eventIsOpen, setEventIsOpen ] = useState( false );
    let [ eventNameValue, setEventNameValue ] = useState( EVENT_NAME_NOT_SELECTED );

    useEffect( () => {

        if( value === null ){
            setEventNameValue( EVENT_NAME_NOT_SELECTED );
        }else{
            if( eventListById[ value ] ){
                let { name } = eventListById[ value ];
                setEventNameValue( name );
            }else{
                changeHandler( null );
            };
        };

    }, [ value ] );

    useEffect(() => {
        if( alwaysIsOpen ){
            setEventIsOpen( true );
        };

    }, []);

    const eventClick = ( name, id ) => {
        setEventNameValue( name );
        changeHandler( id );

        if( alwaysIsOpen === false ){
            setEventIsOpen( false );
        };


    }

    const getCategoryElem = ( category_id ) => {

        let result = ''

        if( categoryListById[ category_id ] ){
            let {
                colorBG,
                colorText,
                name
            } = categoryListById[ category_id ];

            let style = {
                backgroundColor: colorBG,
                color: colorText,
            };

            result = (<span className = 'AW_CDD_list_category' style = { style }>{ name }</span>);

        }


        return result;
    };



    const createEventList = ( arr ) => {

        let arr_2 = structuredClone( arr );

        let arr_sort = arr_2.sort( ( a, b ) => {

            if( a.category_id === null || b.category_id === null  ){
                return -1;
            }else{
                if( a.category_id > b.category_id ){
                    return 1;
                }else{
                    return -1;
                };
            };

        } );

        let li = arr_sort.map( ( item, index ) => {

            let { category_id } = item;

            if( index === 0 ){
                return (<React.Fragment
                    key = { index }
                >
                    <li
                        onClick = { () => {
                            eventClick( EVENT_NAME_NOT_SELECTED, null );
                        } }
                    >{ EVENT_NAME_NOT_SELECTED }</li>
                    <li
                        
                        onClick = { () => {
                            eventClick( item.name, item.id );
                        } }
                    >
                        <span className = 'AW_CDD_list_event'>{ item.name }</span>
                        { getCategoryElem( category_id ) }
                        
                    </li>
                </React.Fragment>);
            }else{
                return (
                    <li
                        key = { index }
                        onClick = { () => {
                            eventClick( item.name, item.id );
                        } }
                    >
                        <span className = 'AW_CDD_list_event'>{ item.name }</span>
                        { getCategoryElem( category_id ) }
                        
                    </li>
                );
            };


        } );

        return li;

    }

    const changeIsOpen = ( val ) => {
        if( alwaysIsOpen === false ){
            setEventIsOpen( val );
        };
    }

    return (
        <div className = { `AW_item AWEventSelect ${alwaysIsOpen? 'alwaysIsOpen': ''}` }>
            <h3>Событие:</h3>
            <div 
                className = 'AW_item_event'
                // onMouseLeave = { () => { changeIsOpen( false ) } }
            >
                <h4
                    onClick = { () => { changeIsOpen( !eventIsOpen ) } }
                >{ eventNameValue }</h4>
                <div 
                    className = 'AW_CDD_btn'
                    onClick = { () => { changeIsOpen( !eventIsOpen ) }}
                >
                    <span className = { `AW_CDD_btn_icon ${eventIsOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                </div>

                { eventIsOpen? (
                    <ul className = 'AW_CDD_list'>
                        { createEventList( eventList ) }
                    </ul>
                ): '' }
                
            </div>
        </div>
    )

};

export function AWEventSelect( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AWEventSelectComponent
            { ...props }
            categoryList = { layout.categoryList }
            categoryListById = { layout.categoryListById }
            eventList = { layout.eventList }
            eventListById = { layout.eventListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
