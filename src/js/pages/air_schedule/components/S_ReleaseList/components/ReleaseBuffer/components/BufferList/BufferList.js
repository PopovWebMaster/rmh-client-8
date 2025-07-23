
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BufferList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { get_free_list } from './vendors/get_free_list.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';


const BufferListComponent = ( props ) => {

    let {
        height,
        releaseList,
        eventListById,

    } = props;

    let [ freeList, serFreeList ] = useState( [] );

    useEffect( () => {

        serFreeList( get_free_list() );

        

    }, [ releaseList ] );

    const drag_start = ( e ) => {
        console.dir( e );

    }


    const create = ( arr ) => {

        let div = arr.map(( item, index ) => {
            let {
                startTime,
                releaseName,
                releaseDuration,
                event_id,
                category_id,
            } = item;

            let charYes = eventListById[ event_id ]? true: false;


            return (
                <div
                    key = { index }
                    className = 'RB_BufferList_item'
                    draggable = { true }
                    onDragStart = { drag_start }
                    
                >
                    <span className = 'time'>{ convert_sec_to_time( startTime ) }</span>
                    <span className = 'name'>{ releaseName }</span>
                    <span className = 'duration_name'>Хрон.</span>
                    <span className = 'duration_time'>{ convert_sec_to_time( releaseDuration ) }</span>
                    {/* <span className = 'char_name'>График</span>
                    <span className = { charYes? 'char_yes': 'char_not' }>{ charYes? 'Да': 'Нет' }</span> */}



                </div>
            )
        });

        return div;

    }

// YYYY_MM_DD: "2025-07-23"
// air_notes: ""
// applicationName: "НеркулеЦ"
// application_id: 1
// category_id: 9
// event_id: 12
// file_list: []
// grid_event_id: 270
// id: 661
// manager_id: 1
// releaseDuration: 65
// releaseName: "Сок"
// startTime: 26701
// sub_application_id: 

    return (
       <div 
            className = 'RB_BufferList'
            style = {{
                height: `${height}px`,
            }}
        >
            <ScrollContainer>
                { create( freeList ) }

            </ScrollContainer>
 
       </div>
    )

};


export function BufferList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );
    

    
    // const dispatch = useDispatch();

    return (
        <BufferListComponent
            { ...props }

            releaseList = { scheduleResult.releaseList }
            eventListById = { layout.eventListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
