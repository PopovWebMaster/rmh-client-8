
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SerialDurationItem.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
// import { selectorData as layoutSlice }      from './../../../../../../../../../../redux/layoutSlice.js';

import { MIN_EVENT_DURATION_SEC }   from './../../../../../../../../../../config/layout.js';
import { InputDuration }            from './../../../../../../../../../../components/InputDuration/InputDuration.js';


import { convert_sec_to_time }      from './../../../../../../../../../../helpers/convert_sec_to_time.js';
import { convert_time_str_to_sec }  from './../../../../../../../../../../helpers/convert_time_str_to_sec.js';

const SerialDurationItemComponent = ( props ) => {

    let {
        isOpen,
        durationSec,
        setDurationSec,


    } = props;

    let [ HH, setHH ] = useState( '00' );
    let [ MM, setMM ] = useState( '00' );
    let [ SS, setSS ] = useState( `${MIN_EVENT_DURATION_SEC}`.padStart( 2, "0" ) );

    useEffect( () => {
        if( isOpen ){
            let time = convert_sec_to_time( durationSec );
            let arr = time.split( ':' );
            setHH( arr[ 0 ] );
            setMM( arr[ 1 ] );
            setSS( arr[ 2 ] );
  
        }else{
            setHH( '00' );
            setMM( '00' );
            setSS( `${MIN_EVENT_DURATION_SEC}`.padStart( 2, "0" ) );
        };

    }, [ isOpen ] );

    const enter = () => {
        let time = `${HH}:${MM}:${SS}`;
        let sec = convert_time_str_to_sec( time );
        setDurationSec( sec );
    };

    return (
        <div className = 'ASC_item_serial_duration'>
            <h3>Длительность одной серии:</h3>
            <div className = 'ASC_time_wrap'>
                <InputDuration 
                    HH = { HH }
                    MM = { MM }
                    SS = { SS }
                    setHH = { setHH }
                    setMM = { setMM }
                    setSS = { setSS }
                    enterHandler = { enter }
                />
            </div>            

        </div>

    )

};

export function SerialDurationItem( props ){

    // const application = useSelector( applicationSlice );
    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <SerialDurationItemComponent
            { ...props }
            // currentAppCategoryId =  { application.currentAppCategoryId }
            // categoryListById =    { layout.categoryListById }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
