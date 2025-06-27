
import React, { useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemDuration.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
// import { selectorData as layoutSlice }      from './../../../../../../../../../../redux/layoutSlice.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../../../config/layout.js';

import { InputDuration } from './../../../../../../../../../../components/InputDuration/InputDuration.js';

import { convert_sec_to_time } from './../../../../../../../../../../helpers/convert_sec_to_time.js';
import { convert_time_str_to_sec } from './../../../../../../../../../../helpers/convert_time_str_to_sec.js';

const ItemDurationComponent = ( props ) => {

    let {
        title,
        isOpen,
        durationSec,
        setDurationSec,

    } = props;

    let [ HH, setHH ] = useState( '00' );
    let [ MM, setMM ] = useState( '00' );
    let [ SS, setSS ] = useState( `${MIN_EVENT_DURATION_SEC}`.padStart( 2, "0" ) );


    useEffect( () => {
        enter();
    }, [
        HH,
        MM,
        SS
    ] );

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
            setDurationSec( MIN_EVENT_DURATION_SEC );
        };

    }, [ isOpen ] );

    const enter = () => {
        let time = `${HH}:${MM}:${SS}`;
        let sec = convert_time_str_to_sec( time );
        setDurationSec( sec );
    };

    return (
        <div className = 'NS_item_serial_duration'>
            <h3>{ title }</h3>
            <div className = 'NS_time_wrap'>
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

export function ItemDuration( props ){

    // const application = useSelector( applicationSlice );
    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ItemDurationComponent
            { ...props }
            // currentAppCategoryId =  { application.currentAppCategoryId }
            // categoryListById =    { layout.categoryListById }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
