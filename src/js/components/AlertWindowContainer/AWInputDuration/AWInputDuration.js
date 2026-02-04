
import React, { useEffect, useState } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './AWInputDuration.scss';

import { InputDuration } from './../../InputDuration/InputDuration.js';

import { MIN_EVENT_DURATION_SEC } from './../../../config/layout.js';
import { convert_sec_to_time } from './../../../helpers/convert_sec_to_time.js';
import { convert_time_str_to_sec } from './../../../helpers/convert_time_str_to_sec.js';

const AWInputDurationComponent = ( props ) => {

    let {
        value, // num_seconds or stryng format '00:00:00'
        title = 'Длительность:',

        changeHandler,

    } = props;

    let [ hh, set_hh ] = useState( '00' );
    let [ mm, set_mm ] = useState( '00' );
    // let [ ss, set_ss ] = useState( '02' );
    let [ ss, set_ss ] = useState( `${MIN_EVENT_DURATION_SEC}`.padStart( 2, "0" ) );

// console.log( 'value', value );

    useEffect( () => {

        

        if( typeof value === 'number' ){
            setValueNumber( value );

        }else if( typeof value === 'string' ){
            setValueStryng( value );
        };

    }, [ value ] );

    useEffect( () => {
        enter();

    }, [ hh, mm, ss ] )

    const setValueNumber = ( num ) => {
        let time = convert_sec_to_time( num );
        let arr = time.split( ':' );
        set_hh( arr[ 0 ] );
        set_mm( arr[ 1 ] );
        set_ss( arr[ 2 ] );
    };

    const setValueStryng = ( str ) => {
        let arr = str.split( ':' );
        set_hh( arr[ 0 ] );
        set_mm( arr[ 1 ] );
        set_ss( arr[ 2 ] );
    }

    const enter = () => {
        let time = `${hh}:${mm}:${ss}`;
        let sec = convert_time_str_to_sec( time );
        changeHandler( sec, time );
    }


    return (
        <div className = 'AW_item AWInputDuration'>
            
            { title? <h3>{ title }</h3>: '' }
            
            <InputDuration 
                HH = { hh }
                MM = { mm }
                SS = { ss }
                setHH = { set_hh }
                setMM = { set_mm }
                setSS = { set_ss }
                enterHandler = { enter }
            
            />
        </div>

        
    )

};

export function AWInputDuration( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AWInputDurationComponent
            { ...props }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
