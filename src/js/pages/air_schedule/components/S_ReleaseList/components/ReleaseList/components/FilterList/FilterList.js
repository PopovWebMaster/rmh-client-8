
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FilterList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';



import { EVENT_TYPE } from './../../../../../../../../config/layout.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

const FilterListComponent = ( props ) => {

    let {
        filteredList,
        gridDayEventsListById,
        height,

    } = props;

    // console.dir( 'filteredList' );
    // console.dir( filteredList );

    const create = ( arr ) => {

        let div = arr.map(( item, index ) => {
            let {
                startTime,
                releaseName,
                releaseDuration,
                grid_event_id,
            } = item;

            let charYes = gridDayEventsListById[ grid_event_id ]? true: false;


            return (
                <div
                    key = { index }
                    className = 'RL_FilterList_item'
                    
                >
                    <span className = 'time'>{ convert_sec_to_time( startTime ) }</span>
                    <span className = 'name'>{ releaseName }</span>
                    <span className = 'duration_name'>Хрон.</span>
                    <span className = 'duration_time'>{ convert_sec_to_time( releaseDuration ) }</span>
                    <span className = 'char_name'>График</span>
                    <span className = { charYes? 'char_yes': 'char_not' }>{ charYes? 'Да': 'Нет' }</span>



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
            className = 'RL_FilterList'
            style = { {
                height: `${height}px`
            } }
        >
            <ScrollContainer>
                { create( filteredList ) }
            </ScrollContainer>
            
        </div>
    )

};


export function FilterList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );


    layoutSlice
    // const dispatch = useDispatch();

    return (
        <FilterListComponent
            { ...props }

            releaseList = { scheduleResult.releaseList }
            gridDayEventsListById = { layout.gridDayEventsListById }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
