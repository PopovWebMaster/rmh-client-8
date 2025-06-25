
import React, { useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './DayPoint.scss';

import { get_top_position_from_time } from './../../vendors/get_top_position_from_time.js';
import { set_description_to_store } from './vendors/set_description_to_store.js';
import { remove_point_in_store } from './vendors/remove_point_in_store.js';

const DayPointComponent = ( props ) => {

    let {
        // dayNum,
        time,
        // description,

        name,
        colorBG,
        colorText,

    } = props;

    let [ top, setTop ] = useState( 0 );
    // let [ descriptionValue, setDescriptionValue ] = useState( description );

    useEffect( () => {
        setTop( get_top_position_from_time( time ) );
        // setDescriptionValue( description );
    },[
        time,
        // description,
    ]);



    // const remove = ( time ) => {
    //     remove_point_in_store({
    //         dayNum,
    //         time,
    //     });
 
    // }

    // const changeDescription = ( e ) => {
    //     setDescriptionValue( e.target.value );
    // };

    // const enter = ( e ) => {
    //     if( e.which === 13 ){
    //         set_description_to_store({
    //             dayNum,
    //             time,
    //             description: descriptionValue,
    //         });
    //     }
        

    // }
    // const blur = () => {
    //     set_description_to_store({
    //         dayNum,
    //         time,
    //         description: descriptionValue,
    //     });

    // }

    return (
        <div 
            className = 'LP_Day_point'
            style = {{ top }}
        >
            <span className = 'LP_Day_time'>{ time }</span>

            <span 
                style={{
                    color: colorText,
                    backgroundColor: colorBG,
                }}
                className = 'LP_Day_description'
            >{ name }</span>

            {/* <input 
                type = 'text'
                
                className = 'LP_Day_description'
                value = { name }
                onChange = { () => {} }

            /> */}
            {/* <span 
                className = 'LP_Day_time_remove'
                onClick = { () => { remove( time ) }  }
            >✖</span> */}

        </div>
    )

};

export function DayPoint( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <DayPointComponent
            { ...props }
            // weekKeyPointList = { layout.weekKeyPointList }

        />
    );


}
