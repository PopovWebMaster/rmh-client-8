
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './KeyPointSelect.scss';

// import { selectorData as layoutSlice }    from './../../../../../../../../redux/layoutSlice.js';

const KeyPointSelectComponent = ( props ) => {

    let {
        isAKeyOneEvent,
        setIsAKeyOneEvent,
    } = props;

    return (

        <div className = 'STEC_KeyPointSelect' >
            <div 
                className = 'STEC_KeyPointSelect_wrap'
                onClick = { () => { setIsAKeyOneEvent( !isAKeyOneEvent ) } }
            >
                <div className = 'STEC_KeyPointSelect_rect'>
                    <span className = { `${ isAKeyOneEvent? 'icon-ok-3': '' }` }></span>
                </div>
                <div className = 'STEC_KeyPointSelect_text'>
                    <span className = { `${ isAKeyOneEvent? 'isSelected': '' }` }>ключевая точка</span>
                </div>
            </div>

        </div>

    )

};

export function KeyPointSelect( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <KeyPointSelectComponent
            { ...props }
            // gridCurrentDayName = { layout.gridCurrentDayName }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
