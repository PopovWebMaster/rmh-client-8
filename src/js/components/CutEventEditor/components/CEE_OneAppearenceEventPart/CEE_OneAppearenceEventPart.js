
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CEE_OneAppearenceEventPart.scss';

import { selectorData as cutEventEditorSlise } from './../../../../redux/cutEventEditorSlise.js';
import { convert_sec_to_time } from './../../../../helpers/convert_sec_to_time.js';

const CEE_OneAppearenceEventPartComponent = ( props ) => {

    let {
        cutPart,
        durationTime,
        isKeyPoint,
        startTime,

        eventStyle,
        eventName,

    } = props;


    return (
        <div className = 'CEE_OneAppearenceEventPart'>

            <div className = 'AOASGE_wrap'>
                <div className = 'AOASGE_Time'>
                    <span className = { `AOASGE_Time_time ${isKeyPoint? 'isKeyPoint': ''}` }>{ convert_sec_to_time( startTime ) }</span>
                    <span className = 'AOASGE_Time_duration'>{ convert_sec_to_time( durationTime ) }</span>
                </div>
                <div className = 'AOASGE_Body'>

                    <div className = 'AOASGE_EventNameItem'>
                        <input 
                            type =      'text'
                            value =     { eventName }
                            maxLength = { 255 }
                            onChange =  { () => {} }
                            style =     { eventStyle }
                        />
                        { cutPart !== null? (
                            <div className = 'curPartName'>
                                <span>
                                    <span className = 'icon icon-scissors'></span>
                                    <span className = 'num'>{ cutPart }</span>
                                </span>
                            </div>
                        ): '' }
                        
                    </div>
                </div>
            </div>
        </div>
    )

};

export function CEE_OneAppearenceEventPart( props ){

        const cutEventEditor = useSelector( cutEventEditorSlise );
        // const dispatch = useDispatch();
    return (
        <CEE_OneAppearenceEventPartComponent
            { ...props }

            eventStyle = { cutEventEditor.eventStyle }
            eventName = { cutEventEditor.eventName }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
