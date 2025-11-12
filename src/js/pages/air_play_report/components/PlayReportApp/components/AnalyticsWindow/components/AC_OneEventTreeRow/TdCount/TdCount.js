// TdCount

// TdIsPremiere

import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';

import './TdCount.scss';

import { set_evenstTree_changes_to_store } from './../../../vendors/set_evenstTree_changes_to_store.js';

const TdCountComponent = ( props ) => {

    let {

        // index,
        // list_length = 0,
        category_id,
        event_id,
        fileName,
        count,
        isUsed,

        releaseCount,


    } = props;

   
    const change =  ( e ) => {
        if( isUsed ){
            let val = Number( e.target.value );
            if( val >= 0 ){
                set_evenstTree_changes_to_store({
                    category_id,
                    event_id,
                    fileName,
                    changeObject: {
                        count: val
                    }
                });
            }
        };
        
    }

    
    return (
        // <td className = { `TdCount ${count === 0 || isUsed? 'isUsed': ''}` }>
        //     <div>
        //         <input
        //             type =      'number'
        //             value =     { count }
        //             onChange =  { change }
        //         />
        //         <>{ releaseCount === 0? '': <span className = { count === releaseCount? '': count === 0? '': 'attention' } >{ releaseCount }</span> }</>
        //     </div>
        // </td>

        <td className = { `TdCount ${isUsed? 'isUsed': ''}` }>
            <div>
                <div>
                    <h5>факт</h5>
                    <input
                        type =      'number'
                        value =     { count }
                        onChange =  { change }
                        className = { releaseCount === 0? '': count === releaseCount? '': 'attention' }
                    /> 
                </div>
                
                <div>
                    <>{ releaseCount === 0? '': <h5>заявки</h5> }</>
                    <>{ releaseCount === 0? '': <span >{ releaseCount }</span> }</>
                </div>
            </div>

            
        </td>
    )

};

export function TdCount( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <TdCountComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
