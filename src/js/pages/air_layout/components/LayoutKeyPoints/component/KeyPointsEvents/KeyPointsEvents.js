
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './KeyPointsEvents.scss';

import { selectorData as layoutSlice, setKeyPointsCurrentEventId } from './../../../../../../redux/layoutSlice.js';
import { ScrollContainer } from './../../../../../../components/ScrollContainer/ScrollContainer.js';

import { DEFAULT_CATEGORY, EVENT_TYPE } from './../../../../../../config/layout.js';


const KeyPointsEventsComponent = ( props ) => {

    let {
        eventList,
        keyPointsCurrentEventId,
        categoryListById,
        setKeyPointsCurrentEventId,
    } = props;

    useEffect( () => {

        setKeyPointsCurrentEventId( null );

    }, [] );

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            
            let {
                category_id,
                id,
                name,
                type
            } = item;

            let isActive = id === keyPointsCurrentEventId;

            let colorBG =   DEFAULT_CATEGORY.colorBG;
            let colorText = DEFAULT_CATEGORY.colorText;

            if( categoryListById[ category_id ] ){
                colorBG =   categoryListById[ category_id ].colorBG;
                colorText = categoryListById[ category_id ].colorText; 
            };

            if( type === EVENT_TYPE.BLOCK ){
                let bg = colorText;
                let text = colorBG;
                colorBG =   bg;
                colorText = text;
            };

            return (
                <div 
                    className = { isActive? 'keyPointsEvents_event isActive': 'keyPointsEvents_event' }
                    key = { index }
                    onClick = { () => { setKeyPointsCurrentEventId( id ) } }
                >
                    <span
                        style = {{
                            color: colorText,
                            backgroundColor: colorBG,
                        }}
                    >{ name }</span>

                </div>
            );


        } );

        return div;
          
    };




    
    return (
        <div className = 'keyPointsEvents'>
            <h2 className = 'keyPointsEvents_title' >События</h2>

            <div className = 'keyPointsEvents_list'>
                <ScrollContainer >

                    { create( eventList ) }

                </ScrollContainer>
            </div>
        </div>

    )

};

export function KeyPointsEvents( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <KeyPointsEventsComponent
            { ...props }

            eventList = { layout.eventList }
            keyPointsCurrentEventId = { layout.keyPointsCurrentEventId }
            categoryListById = { layout.categoryListById }

            setKeyPointsCurrentEventId = { ( val ) => { dispatch( setKeyPointsCurrentEventId( val ) ) } }


        />
    );


}
