
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventDurationItem.scss';

import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';
import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../config/events.js';

import { InputDuration } from './../../../../../../../../components/InputDuration/InputDuration.js';

import { seve_one_event_changes_on_setver } from './../../../../vendors/seve_one_event_changes_on_setver.js';


const EventDurationItemComponent = ( props ) => {

    let {
        id,
        durationTime,

        eventList,
        setEventListAsChanged,

    } = props;

    let [ HH, setHH ] = useState( '' );
    let [ MM, setMM ] = useState( '' );
    let [ SS, setSS ] = useState( '' );

    useEffect( () => {
        let arr = durationTime.split( ':' );
        setHH( arr[ 0 ] );
        setMM( arr[ 1 ] );
        setSS( arr[ 2 ] );

    }, [ durationTime ] );

    const getTimeInSeconds = ( hh, mm, ss ) => {
        let sec_hh = Number( hh ) * 60 * 60;
        let sec_mm = Number( mm ) * 60;
        let sec_ss = Number( ss );
        return sec_hh + sec_mm + sec_ss;
    }

    const set_changes_to_store = () => {

        let duration_sec = getTimeInSeconds( HH, MM, SS );

        let new_durationTime = `${HH}:${MM}:${SS}`;

        if( duration_sec >= MIN_EVENT_DURATION_SEC ){

        }else{
            setHH( '00' );
            setMM( '00' );
            setSS( '05' );
            new_durationTime = `00:00:05`;
        };

        seve_one_event_changes_on_setver({
            eventId: id,
            eventData: { 
                durationTime: new_durationTime,
                durationSec: duration_sec,
            },
            callback: () => {},
        });

        // if( new_durationTime !== durationTime ){
        //     let newArr = [];
        //     for( let i = 0; i < eventList.length; i++ ){
        //         if( eventList[ i ].id === id ){
        //             let item = { ...eventList[ i ] };
        //             item.durationTime = new_durationTime;
        //             newArr.push( item );
        //         }else{
        //             newArr.push({ ...eventList[ i ] });
        //         };
        //     };
        //     setEventListAsChanged( newArr );
        // };

    };

    return (

        <div className = 'LE_EventDurationItem'>
            <InputDuration 
                HH = { HH }
                MM = { MM }
                SS = { SS }
                setHH = { setHH }
                setMM = { setMM }
                setSS = { setSS }
                enterHandler = { set_changes_to_store }
            
            />

        </div>
                

    )

};

export function EventDurationItem( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <EventDurationItemComponent
            { ...props }
            eventList = { layout.eventList }

            setEventListAsChanged = { ( val ) => { dispatch( setEventListAsChanged( val ) ) } }


        />
    );


}
