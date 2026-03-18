
import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { selectorData as layoutSlice } from './../../../../redux/layoutSlice.js';

import './ECBS_CategoryItem.scss';

import { set_category_isOpen } from './../../vendors/set_category_isOpen.js';
import { ECSB_EventItem } from './../ECSB_EventItem/ECSB_EventItem.js';

import { get_linked_file_dutation_by_event_id } from './../../../../helpers/get_linked_file_dutation_by_event_id.js';
import { convert_time_str_to_sec } from './../../../../helpers/convert_time_str_to_sec.js';
import { convert_sec_to_time } from './../../../../helpers/convert_sec_to_time.js';
import { EVENT_TYPE } from './../../../../config/layout.js';



const ECBS_CategoryItemComponent = ( props ) => {

    let {
        category_id,
        isOpen,
        eventsList,
        listTree,
        setListTree,
        selectedEventId,
        eventClick,

        categoryListById,
    } = props;

    let [ categoryName, setCategoryName ] = useState( '' );
    let [ style, setStyle ] = useState( {} );

    useEffect( () => {
        let {
            colorBG,
            colorText,
            name,
        } = categoryListById[ category_id ];
        let stileObj = {
            backgroundColor: colorBG,
            color: colorText,
        };
        setStyle( stileObj );
        setCategoryName( name );

    }, [ category_id ] );




    const click = () => {
        let newList = set_category_isOpen({
            listTree,
            category_id,
            isOpen: !isOpen,
        });

        setListTree( newList );

    };

    const create = ( list ) => {

        let div = list.map( ( item, index ) => {
            let {
                durationTime,
                isActive,
                id,
                name,
                style,
                linked_file,
                type,
            } = item;

            // console.dir( item);

            let duration_sec = convert_time_str_to_sec( durationTime );

            if( linked_file !== null ){
                let linked_file_dutation = get_linked_file_dutation_by_event_id( id );

                if( type === EVENT_TYPE.BLOCK ){
                    if( linked_file_dutation > duration_sec ){
                        duration_sec = linked_file_dutation;
                    };
                }else{
                    duration_sec = linked_file_dutation;
                };

            };



            return (
                <ECSB_EventItem
                    key = { index }

                    durationTime =  { convert_sec_to_time( duration_sec ) }
                    isActive =      { isActive }
                    eventId =       { id }
                    name =          { name }
                    style =         { style }

                    selectedEventId =       { selectedEventId }
                    eventClick =            { eventClick }
                />
            );

        } );

        return div;

    }

    return (
        <div className = 'ECBS_CategoryItem' >
            <div 
                className = 'ECBS_CategoryItem_name'
                onClick = { click }
            >
                <span className = { `ECBS_CIN_arrow ${isOpen? 'icon-up-open-1': 'icon-down-open-1'}`}></span>
                <span className = 'ECBS_CIN_categoryName' style = { style }>{ categoryName }</span>

            </div>

            <div className = { `ECBS_CategoryItem_list ${isOpen? 'isOpen': ''}` }>

                { create( eventsList ) }


            </div>


        </div>
    )

};

export function ECBS_CategoryItem( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ECBS_CategoryItemComponent
            { ...props }
            // categoryList = { layout.categoryList }
            categoryListById = { layout.categoryListById }
            // eventList = { layout.eventList }
            // eventListById = { layout.eventListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
