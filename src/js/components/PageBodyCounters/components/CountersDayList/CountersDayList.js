// CountersDayList

import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CountersDayList.scss';

import { selectorData as countersSlise } from './../../../../redux/countersSlise.js';
import { ScrollContainer } from './../../../ScrollContainer/ScrollContainer.js';

import { convert_sec_to_time } from './../../../../helpers/convert_sec_to_time.js';
import { round_to_number } from './../../../../helpers/round_to_number.js';


const CountersDayListComponent = ( props ) => {

    let {
        counterList,
        
    } = props;

    const create = ( arr ) => {

        let obj_filter = {};

        for( let i = 0; i < arr.length; i++ ){
            let {
                category,
                duration,
            } = arr[ i ];

            if( obj_filter[ category.id ] ){
                obj_filter[ category.id ].duration = obj_filter[ category.id ].duration + duration;
            }else{
                obj_filter[ category.id ] = {
                    category: { ...category },
                    duration,
                };
            };
        };

        let day_sec = 24 * 60 * 60;

        for( let key in obj_filter ){
            let { duration } = obj_filter[ key ];
            let time = convert_sec_to_time( duration );
            let procent = round_to_number( duration * 100 / day_sec, 3 );
            obj_filter[ key ].time = time;
            obj_filter[ key ].procent = procent;
        };

        let arr_result = [];

        for( let key in obj_filter ){
            arr_result.push( obj_filter[ key ] );
        };

        let div = arr_result.map( ( item, index ) => {
            let {
                category,
                duration,
                procent,
                time,
            } = item

            let {
                colorBG,
                colorText,
                name,
            } = category;

            return (
                <div className = 'PBC_one_counter_day' key = { index }>
                    <h4>
                        <span
                            style = {{
                                backgroundColor: colorBG,
                                color: colorText,
                            }}
                        >{ name }</span>
                    </h4>

                    <div>
                        <span className = 'PBS_time' >{ time }</span>
                        <span className = 'PBS_procent' >{ procent }%</span>
                        <span className = 'PBS_duration' >{ duration }sec</span>

                    </div>

                </div>
            );

        } );




        return div

    }


    
    return (
        <div className = 'PBC_CountersDayList'>

            <ScrollContainer>

                { create( counterList ) }


            </ScrollContainer>

        </div>

    )

};

export function CountersDayList( props ){

    const counters = useSelector( countersSlise );
    // const dispatch = useDispatch();

    return (
        <CountersDayListComponent
            { ...props }
            counterList = { counters.counterList }

            // setCurrentCounterType = { ( val ) => { dispatch( setCurrentCounterType( val ) ) } }


        />
    );


}
