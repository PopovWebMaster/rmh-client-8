
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice, setResultPointsSec } from './../../../../../../../../../../redux/playReportSlice.js';

import './Points.scss';


const PointsComponent = ( props ) => {

    let {
        filteredList,
        resultPointsSec,
        setResultPointsSec,

    } = props;

    let [ valueSec, setValueSec ] = useState( 0 );




    const change = ( e ) => {
        let val = e.target.value;

        setValueSec( Number( val ) );
    }

    const create = ( arr ) => {

        let result = arr.map( ( item, index ) => {
            return (
                <span key = { index }>{ item },</span>
            );
        } );

        return result;

    }

    const enter = ( e ) => {
        if( e.which === 13 ){

            let arr = [ ...resultPointsSec, Number( e.target.value ) ];
            let arr_2 = arr.sort( ( a, b ) => {
                if(a < b ){
                    return -1
                }else{
                    return 1;
                }
            } );

            setResultPointsSec( arr_2 );
            setValueSec( 0 );

        }

    };

    const clear_click = () => {
        setResultPointsSec( [] );
    }

    return (

        <div className = 'DDW_ResultPoints'>

            <h2>Точки (sec):</h2>
            { create( resultPointsSec ) }

            
            <input 
                type = 'number'
                value = { valueSec }
                onChange = { change }
                onKeyDown = { enter }
            />
            <span
                className = 'DDW_ResultPoints_clear'
                onClick = { clear_click }
            >clear</span>
        </div>
        
    )

};


export function Points( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <PointsComponent
            { ...props }
   

            filteredList = { playReport.filteredList }
            resultPointsSec = { playReport.resultPointsSec }


            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            setResultPointsSec = { ( val ) => { dispatch( setResultPointsSec( val ) ) } }


        />
    );


}
