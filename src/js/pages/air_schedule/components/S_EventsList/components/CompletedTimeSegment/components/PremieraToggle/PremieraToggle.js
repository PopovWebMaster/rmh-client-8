
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PremieraToggle.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

// import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js';
import { set_schedule_list_changes_to_store } from './../../../../../../vendors/set_schedule_list_changes_to_store.js';



const PremieraToggleComponent = ( props ) => {

    let {
        gridEventId,
        is_premiere,

        scheduleEventsList,
        scheduleEventsListByGridEventId,
        
    } = props;

    let [ isShow, setIsShow ] = useState( false );

    useEffect( () => {
        let { firstSegmentId } = scheduleEventsListByGridEventId[ gridEventId ];
        if( firstSegmentId === null || firstSegmentId === gridEventId ){
            setIsShow( true );
        }else{
            setIsShow( false );
        };
    }, [ gridEventId ] );

    const click = () => {
        let { firstSegmentId } = scheduleEventsListByGridEventId[ gridEventId ];

        if( firstSegmentId === null ){
            set_schedule_list_changes_to_store( gridEventId, { is_premiere: !is_premiere } );
        }else{
            let arr = [];
            for( let i = 0; i < scheduleEventsList.length; i++ ){
                let item = scheduleEventsList[ i ];
                if( item.firstSegmentId === firstSegmentId ){
                    arr.push( item.gridEventId );
                };
            };
            for( let i = 0; i < arr.length; i++ ){
                set_schedule_list_changes_to_store( arr[ i ], { is_premiere: !is_premiere } );   
            };
        };
        
    }



    return (
        <div className = 'CTS_PremieraToggleItem'>

            { isShow? (
                <span 
                    className = { `CTS_PremieraToggleItem_btn ${ is_premiere? 'isActive': ''}` }
                    onClick = { click }
                >premiere</span>
            ): '' }

        </div>
    )

};

export function PremieraToggle( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <PremieraToggleComponent
            { ...props }
            scheduleEventsList = { scheduleResult.scheduleEventsList }
            scheduleEventsListByGridEventId = { scheduleResult.scheduleEventsListByGridEventId }

            // categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
