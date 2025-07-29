
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './GridEventType.scss';

// import { selectorData as layoutSlice }    from './../../../../../../../../redux/layoutSlice.js';

const GridEventTypeComponent = ( props ) => {

    let {
        isAKeyOneEvent,
        setIsAKeyOneEvent,
    } = props;

    return (

        <div className = 'G_ANG_GridEventType' >
            <div 
                className = 'G_ANG_GridEventType_wrap'
                onClick = { () => { setIsAKeyOneEvent( !isAKeyOneEvent ) } }
            >
                <div className = 'G_ANG_GridEventType_rect'>
                    <span className = { `${ isAKeyOneEvent? 'icon-ok-3': '' }` }></span>
                </div>
                <div className = 'G_ANG_GridEventType_text'>
                    <span className = { `${ isAKeyOneEvent? 'isSelected': '' }` }>ключевая точка</span>
                </div>
            </div>

        </div>

    )

};

export function GridEventType( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <GridEventTypeComponent
            { ...props }
            // gridCurrentDayName = { layout.gridCurrentDayName }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
