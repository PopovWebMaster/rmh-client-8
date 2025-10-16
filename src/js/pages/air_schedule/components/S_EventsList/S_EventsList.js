
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './S_EventsList.scss';

import { selectorData as scheduleResultSlise } from './../../../../redux/scheduleResultSlise.js';
import { selectorData as countersSlise, setCounterList } from './../../../../redux/countersSlise.js';

import { ScrollContainer } from './../../../../components/ScrollContainer/ScrollContainer.js';
import { StoreScheduleResultEventsClass } from './../../../../classes/StoreScheduleResultEventsClass.js';

import { SchOneSector } from './components/SchOneSector/SchOneSector.js';

import { set_max_height_em_for_empty_time_segment } from './vendors/set_max_height_em_for_empty_time_segment.js';


const S_EventsListComponent = ( props ) => {

    let {
        scheduleEventsList,
        // setCounterList,
    } = props;

    let refEd = useRef();

    let [ listBySectors, setListBySectors ] = useState( [] );
    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        set_max_height_em_for_empty_time_segment( refEd.current.parentElement );
        setIsReady( true );
    }, [] );

    useEffect( () => {

        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();

        // console.dir( 'scheduleEventsList' );
        // console.dir( scheduleEventsList );
        
        
        StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
        let list = StoreScheduleResultEvents.GetScheduleEventsList();
        StoreScheduleResultEvents.SetCounterDataToStore( list );

        let list_by_sectirs = StoreScheduleResultEvents.GetListBySectors();
        setListBySectors( list_by_sectirs );

        // let counter_list = StoreScheduleResultEvents.GetCounterList();
        // setCounterList( counter_list );

    }, [ scheduleEventsList ] );


    const create = ( arr ) => {
        if( arr.length > 0 ){
            let sectors = arr.map( ( item, index ) => {

                // console.dir( 'item.sector_list' );
                // console.dir( item.sector_list );

                
                return (
                    <SchOneSector 
                        key = { index }
                        sector_start_time =         { item.sector_start_time }
                        sector_completed_duration = { item.sector_completed_duration  }
                        sector_duration =           { item.sector_duration  }
                        sector_list =               { item.sector_list  }

                    />
                );
            } );

            return sectors;
        }else{
            return (
                <SchOneSector 
                    sector_start_time =         { 0 }
                    sector_completed_duration = { 0 }
                    sector_duration =           { 24*60*60-1  }
                    sector_list =               { []  }
                />
            );
        }


    };

    return (
       <div 
            className = 'S_EventsList'
            ref = { refEd }
        >
            { isReady? (
                <ScrollContainer>
                    { create( listBySectors ) }
                </ScrollContainer>

            ): '' }
            
       </div>
    )

};


export function S_EventsList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <S_EventsListComponent
            { ...props }

            scheduleEventsList = { scheduleResult.scheduleEventsList }

            setCounterList = { ( obj ) => { dispatch( setCounterList( obj ) ) } }

        />
    );


}
