
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TimePushButtons.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { set_schedule_list_changes_to_store } from './../../../../../../vendors/set_schedule_list_changes_to_store.js';


const TimePushButtonsComponent = ( props ) => {

    let {
        gridEventId = null,
        scheduleEventsList

    } = props;

    const clickUp = () => {
        if( gridEventId !== null ){
            for( let i = 0; i < scheduleEventsList.length; i++ ){
                if( scheduleEventsList[ i ].gridEventId === gridEventId ){
                    let { 
                        durationTime, 
                        startTime, 
                    } = scheduleEventsList[ i ];
                    if( scheduleEventsList[ i - 1 ] ){
                        let nextStartTime = scheduleEventsList[ i - 1 ].startTime + scheduleEventsList[ i - 1 ].durationTime + 1;
                        if( startTime !== nextStartTime ){
                            set_schedule_list_changes_to_store( gridEventId, { startTime: nextStartTime });
                        };
                    }else{
                        set_schedule_list_changes_to_store( gridEventId, { startTime: 0 });
                    };
                    break;
                };
            };

        }

    }

    const clickDown = () => {

        if( gridEventId !== null ){
            for( let i = 0; i < scheduleEventsList.length; i++ ){
                if( scheduleEventsList[ i ].gridEventId === gridEventId ){
                    let { 
                        durationTime, 
                        startTime, 
                    } = scheduleEventsList[ i ];

                    if( scheduleEventsList[ i + 1 ] ){
                        let nextStartTime = scheduleEventsList[ i + 1 ].startTime - durationTime - 1;
                        if( startTime !== nextStartTime ){
                            set_schedule_list_changes_to_store( gridEventId, { startTime: nextStartTime });
                        };
                    }else{
                        let nextStartTime = 24*60*60 - durationTime - 1;
                        set_schedule_list_changes_to_store( gridEventId, { startTime: nextStartTime });
                    };
                    break;
                };
            };
        }



    }

    return (

        <div className = 'SEC_time_push'>
            <span
                className = 'icon-up-1'
                onClick = { clickUp }
            ></span>

            <span
                className = 'icon-down-1'
                onClick = { clickDown }
            ></span>
        </div>
            

    )

};


export function TimePushButtons( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <TimePushButtonsComponent
            { ...props }

            scheduleEventsList = { scheduleResult.scheduleEventsList }

            // setCounterList = { ( obj ) => { dispatch( setCounterList( obj ) ) } }

        />
    );


}
