
import React, { useState, useEffect, useRef } from "react";

// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as companySlice } from './../../redux/companySlice.js';

import './InputDuration.scss';

import { get_wheel_value } from './vendors/get_wheel_value.js';

let blure_permission = true;

const InputDurationComponent = ( props ) => {

    let {
        HH,
        MM,
        SS,
        setHH,
        setMM,
        setSS,

        enterHandler = () => {},

    } = props;

    let hhRef = useRef();
    let mmRef = useRef();
    let ssRef = useRef();

    const enter = () => {

        if( HH === '' && MM === '' && SS === '' ){

        }else{
            if( HH === '' ){
                setHH( '00' );
            }else{
                setHH( HH.padStart( 2, "0" ) );
            };

            if( MM === '' ){
                setMM( '00' );
            }else{
                setMM( MM.padStart( 2, "0" ) );
            };

            if( SS === '' ){
                setSS( '00' );
            }else{
                setSS( SS.padStart( 2, "0" ) );
            };

            enterHandler();
        };
        

    }



    const isNumber = ( val ) => {
        return /^\d+$/.test( val ) 
    }

    const change_hh = ( e ) => {
        let val = e.target.value;
        if( val === '' ){
            setHH( val );
        }else{
            if( isNumber( val ) ){
                if( Number( val ) < 24 ){
                    setHH( val );
                    if( val.length === 2 ){
                        mmRef.current.focus();
                    };
                };
            };
        }
    };

    const key_down_hh = ( e ) => {
        if( e.which === 39 ){ // 37
            if( hhRef.current.selectionStart === HH.length ){
                mmRef.current.focus();
            };
        }else if( e.which === 13 ){
            enter();
            blure_permission = false;
            hhRef.current.blur();
        };
    }

    const key_down_mm = ( e ) => {
        if( e.which === 39 ){ // 37
            if( mmRef.current.selectionStart === MM.length ){
                ssRef.current.focus();
            };
        }else if( e.which === 37 ){
            if( mmRef.current.selectionStart === 0 ){
                hhRef.current.focus();
            };
        }else if( e.which === 13 ){
            enter();
            blure_permission = false;
            mmRef.current.blur();
        };
    }

    const key_down_ss = ( e ) => {
        if( e.which === 39 ){ // 37
            if( ssRef.current.selectionStart === SS.length ){
                // mmRef.current.focus();
            };
        }else if( e.which === 37 ){
            if( ssRef.current.selectionStart === 0 ){
                mmRef.current.focus();
            };
        }else if( e.which === 13 ){
            enter();
            blure_permission = false;
            ssRef.current.blur();
        };
    }

    const change_mm = ( e ) => {
        let val = e.target.value;
        if( val === '' ){
            setMM( val );
        }else{
            if( isNumber( val ) ){
                if( Number( val ) < 60 ){
                    setMM( val );
                    if( val.length === 2 ){
                        ssRef.current.focus();
                    };
                };
            };
        };

    };

    const change_ss = ( e ) => {
        let val = e.target.value;
        if( val === '' ){
            setSS( val );
        }else{
            if( isNumber( val ) ){
                if( Number( val ) < 60 ){
                    setSS( val );
                };
            };
        };
    };


    const blur = () => {
        if( blure_permission ){
            let timerId = setTimeout( () => {
                if( mmRef.current === document.activeElement ){
                }else if( ssRef.current === document.activeElement ){
                }else if( hhRef.current === document.activeElement ){
                }else{
                    enter();
                };
                clearTimeout( timerId );
            }, 200 );
        };

        blure_permission = true;
       

    };


    const wheel_hh = ( e ) => {

        let { deltaY } = e;
        let change_sec = 0;

        if( deltaY > 0 ){ // 'низ'
            change_sec = 60 * 60 * -1;
        }else{// 'верх'
            change_sec = 60 * 60;
        };

        let { hh, mm, ss } = get_wheel_value({
            HH,
            MM,
            SS,
            change_sec,
        });

        setHH( hh );
        setMM( mm );
        setSS( ss );

    }

    const wheel_mm = ( e ) => {

        let { deltaY } = e;
        let change_sec = 0;

        if( deltaY > 0 ){ // 'низ'
            change_sec = -60;
        }else{// 'верх'
            change_sec = 60;
        };

        let { hh, mm, ss } = get_wheel_value({
            HH,
            MM,
            SS,
            change_sec,
        });

        setHH( hh );
        setMM( mm );
        setSS( ss );

    }


    const wheel_ss = ( e ) => {

        let { deltaY } = e;
        let change_sec = 0;

        if( deltaY > 0 ){ // 'низ'
            change_sec = -1;
        }else{// 'верх'
            change_sec = 1;
        };

        let { hh, mm, ss } = get_wheel_value({
            HH,
            MM,
            SS,
            change_sec,
        });

        setHH( hh );
        setMM( mm );
        setSS( ss );

    }

    return (
        <div className = 'InputDuration'>

            <input 
                type =          'text'
                ref =           { hhRef }
                className =     'ID_input'
                value =         { HH }
                placeholder =   'HH'
                maxLength =     '2'
                onKeyDown =     { key_down_hh }
                onChange =      { change_hh }
                onBlur =        { blur }    
                onWheel =       { wheel_hh }
            />
            <span>:</span>
            <input 
                type =          'text'
                ref =           { mmRef }
                className =     'ID_input'
                value =         { MM }
                placeholder =   'MM'
                maxLength =     '2'
                onKeyDown =     { key_down_mm }
                onChange =      { change_mm }
                onBlur =        { blur }   
                onWheel =       { wheel_mm }  
            />
            <span>:</span>
            <input 
                type =          'text'
                ref =           { ssRef }
                className =     'ID_input'
                value =         { SS }
                placeholder =   'SS'
                maxLength =     '2'
                onKeyDown =     { key_down_ss }
                onChange =      { change_ss }
                onBlur =        { blur }  
                onWheel =       { wheel_ss }   
            />


        </div>
    )

};

export function InputDuration( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <InputDurationComponent
            { ...props }
            // companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
