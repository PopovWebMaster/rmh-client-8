
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './DayName.scss';

import { selectorData as layoutSlice }    from './../../../../../../../../redux/layoutSlice.js';

const DayNameComponent = ( props ) => {

    let {
        gridCurrentDayName,

    } = props;

    return (

        <div className = 'G_ANG_DayName' >
            <span>{ gridCurrentDayName }</span>
        </div>

    )

};

export function DayName( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <DayNameComponent
            { ...props }
            gridCurrentDayName = { layout.gridCurrentDayName }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
