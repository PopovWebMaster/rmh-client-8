
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CutItem.scss';

// import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { CutSegmentButton } from './../../../CutSegmentButton/CutSegmentButton.js';

import { IsAllowedContainer } from './../../../../../../../../components/IsAllowedContainer/IsAllowedContainer.js';


const CutItemComponent = ( props ) => {

    let {
        id,
        // firstSegmentId,
        setDragIsActive = () => {},
    } = props;

    let [ isAllowed, setIsAllowedResult ] = useState( false );



    return (
        <IsAllowedContainer
            accessName =            'layout_grid_edit'
            setIsAllowedResult =    { setIsAllowedResult }
        >
            <div className = 'CTS_CutItem'>

                <CutSegmentButton 
                    id = { id }
                    setDragIsActive = { setDragIsActive }
                />
            </div> 
        </IsAllowedContainer>
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
