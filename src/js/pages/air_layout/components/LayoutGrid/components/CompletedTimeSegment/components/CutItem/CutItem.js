
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CutItem.scss';

// import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { CutSegmentButton } from './../../../CutSegmentButton/CutSegmentButton.js';


const CutItemComponent = ( props ) => {

    let {
        id,
        // firstSegmentId,
    } = props;



    return (
        <div className = 'CTS_CutItem'>

            <CutSegmentButton 
                id = { id }
            />
        </div>
    )

};

export function CutItem( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <CutItemComponent
            { ...props }
            // eventListById = { layout.eventListById }
            // categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
