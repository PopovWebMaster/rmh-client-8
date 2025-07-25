
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemoveBtn.scss';

import { selectorData as cutEventEditorSlise, setEventsPartsList } from './../../../../../../redux/cutEventEditorSlise.js';

const RemoveBtnComponent = ( props ) => {

    let {

        eventsPartsList,
        index,
        setEventsPartsList,

    } = props;

    let [ isShow, setIsShow ] = useState( false );

    useEffect( () => {
        if( eventsPartsList[ index - 1 ] ){
            setIsShow( true );
        }else{
            setIsShow( false );
        };

    }, [ eventsPartsList, index ] );

    const click = () => {

        let arr = [];

        let next_cut_part = 1;

        for( let i = 0; i < eventsPartsList.length; i++ ){
            if( index === i ){
                let { durationTime } = eventsPartsList[ i ];
                arr[ i - 1 ].durationTime = arr[ i - 1 ].durationTime + durationTime;
            }else{
                let item = { ...eventsPartsList[ i ] }
                item.cutPart = next_cut_part;
                next_cut_part++;
                arr.push( item );
            };
        };
        if( arr.length === 1 ){
            arr[ 0 ].cutPart = null;
            arr[ 0 ].firstSegmentId = null;
        };

        setEventsPartsList( arr );

    };


    return (<>{ isShow? (
        <div className = 'AOASGE_RemoveBtn'>
            <span
                onClick = { click }
            >удалить</span>
        </div>

    ): ''}</>
        
    )

};

export function RemoveBtn( props ){

    const cutEventEditor = useSelector( cutEventEditorSlise );
    const dispatch = useDispatch();

    return (
        <RemoveBtnComponent
            { ...props }

            eventsPartsList = { cutEventEditor.eventsPartsList }
            // eventList = { layout.eventList }
            // eventListById = { layout.eventListById }


            setEventsPartsList = { ( val ) => { dispatch( setEventsPartsList( val ) ) } }


        />
    );


}
