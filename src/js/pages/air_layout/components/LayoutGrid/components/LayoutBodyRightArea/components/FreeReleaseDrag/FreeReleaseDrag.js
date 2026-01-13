
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FreeReleaseDrag.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';



const FreeReleaseDragComponent = ( props ) => {

    let {
        releaseList,

    } = props;

    let [ filterHeight, setFilterHeight ] = useState( 0 );

    // let [ listIsActive, setListIsActive ] = useState( false );




    return (
       <div className = 'LBAR_FreeReleaseDrag'>

            {/* <EARL_FilterButtons
                setFilterHeight = { setFilterHeight }
            />

            <EARL_ActiveList
                filterHeight = { filterHeight }
            /> */}

       </div>
    )

};


export function FreeReleaseDrag( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FreeReleaseDragComponent
            { ...props }

            // releaseList = { scheduleResult.releaseList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
