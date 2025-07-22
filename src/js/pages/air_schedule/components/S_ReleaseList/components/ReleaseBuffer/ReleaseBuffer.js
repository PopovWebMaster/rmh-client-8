
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ReleaseBuffer.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';


const ReleaseBufferComponent = ( props ) => {

    let {

    } = props;

    return (
       <div className = 'releaseBuffer'>
ReleaseBuffer

        
       </div>
    )

};


export function ReleaseBuffer( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <ReleaseBufferComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
