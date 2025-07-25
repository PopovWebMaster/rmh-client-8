
import React from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as cutEventEditorSlise } from './../../../../redux/cutEventEditorSlise.js';

import './CEE_EventAppearance.scss';

import { CEE_OneAppearenceEventPart } from './../CEE_OneAppearenceEventPart/CEE_OneAppearenceEventPart.js';
import { CEE_CutPartSettings } from './../CEE_CutPartSettings/CEE_CutPartSettings.js';


const CEE_EventAppearanceComponent = ( props ) => {

    let {
        eventsPartsList,
    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let {
                cutPart,
                durationTime,
                isKeyPoint,
                startTime,
            } = item;

            return (

                <div 
                    className = 'CEE_EventAppearance_item'
                    key = { index }
                >
                    <CEE_OneAppearenceEventPart
                        cutPart =       { cutPart }
                        durationTime =  { durationTime }
                        isKeyPoint =    { isKeyPoint }
                        startTime =     { startTime }
                    
                    />

                    <CEE_CutPartSettings
                        index = { index }
                    />

                </div>
                
            );
        } );

        return div;
    };
    
    return (
        <div className = 'CEE_EventAppearance'>
           
            { create( eventsPartsList ) }
        </div>
    )

};

export function CEE_EventAppearance( props ){

    const cutEventEditor = useSelector( cutEventEditorSlise );
    // const dispatch = useDispatch();

    return (
        <CEE_EventAppearanceComponent
            { ...props }
            eventsPartsList = { cutEventEditor.eventsPartsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
