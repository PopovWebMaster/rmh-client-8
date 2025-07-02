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
                is_premiere,
            } = arr[ i ];

            if( obj_filter[ category.id ] ){

                obj_filter[ category.id ].duration = obj_filter[ category.id ].duration + duration;

                if( is_premiere ){
                    obj_filter[ category.id ].duration_premiere = obj_filter[ category.id ].duration_premiere + duration;
                }else{
                    obj_filter[ category.id ].duration_repeat = obj_filter[ category.id ].duration_repeat + duration;
                };

            }else{
                obj_filter[ category.id ] = {
                    category: { ...category },
                    duration,
                    is_premiere,
                    duration_premiere: is_premiere? duration: 0,
                    duration_repeat: is_premiere? 0: duration,

                };
            };
        };



        let day_sec = 24 * 60 * 60;

        for( let key in obj_filter ){
            let { duration, duration_premiere, duration_repeat } = obj_filter[ key ];
            let time = convert_sec_to_time( duration );
            let time_premiere = convert_sec_to_time( duration_premiere );
            let time_repeat = convert_sec_to_time( duration_repeat );

            let procent = round_to_number( duration * 100 / day_sec, 3 );
            let procent_premiere = round_to_number( duration_premiere * 100 / day_sec, 3 );
            let procent_repeat = round_to_number( duration_repeat * 100 / day_sec, 3 );

            obj_filter[ key ].time = time;
            obj_filter[ key ].time_premiere = time_premiere;
            obj_filter[ key ].time_repeat = time_repeat;

            obj_filter[ key ].procent = procent;
            obj_filter[ key ].procent_premiere = procent_premiere;
            obj_filter[ key ].procent_repeat = procent_repeat;

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
                procent_premiere,
                procent_repeat,

                time,
                time_premiere,
                time_repeat,

                duration_premiere,
                duration_repeat,
                is_premiere,

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
                        <span className = 'PBS_name' ><span className = 'PBS_name_total'>всего</span></span>
                        <span className = 'PBS_time' >{ time }</span>
                        <span className = 'PBS_procent' >{ procent }%</span>
                        <span className = 'PBS_duration' >{ duration } <span>сек</span></span>

                    </div>

                    <div>
                        <span className = 'PBS_name' ><span className = 'PBS_name_premier'>премьера</span></span>
                        <span className = 'PBS_time isPremiere' >{ time_premiere }</span>
                        <span className = 'PBS_procent isPremiere' >{ procent_premiere }%</span>
                        <span className = 'PBS_duration isPremiere' >{ duration_premiere } <span>сек</span></span>

                    </div>

                    <div>
                        <span className = 'PBS_name' ><span className = 'PBS_name_repeat'>повторы</span></span>
                        <span className = 'PBS_time' >{ time_repeat }</span>
                        <span className = 'PBS_procent' >{ procent_repeat }%</span>
                        <span className = 'PBS_duration' >{ duration_repeat } <span>сек</span></span>

                    </div>

                </div>
            );

        } );




        return div;


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
