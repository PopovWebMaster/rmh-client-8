
import React, { useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';
import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../redux/playReportAnalyticsSlise.js';


import './AC_AllCounterTable.scss';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { round_to_number } from './../../../../../../../../helpers/round_to_number.js';






const AC_AllCounterTableComponent = ( props ) => {

    let {
        evenstTree,
    } = props;

    let [ countAll, setCountAll ] = useState( 0 );
    let [ countPremiere, setCountPremiere] = useState( 0 );
    let [ countRepeats, setcCountRepeats ] = useState( 0 );

    let [ durationAll, setDurationAll ] = useState( 0 );
    let [ durationPremiere, setDurationPremiere ] = useState( 0 );
    let [ durationRepeats, setDurationRepeats ] = useState( 0 );


    let [ procAll, setProcAll ] = useState( 0 );
    let [ procPremiere, setProcPremiere ] = useState( 0 );
    let [ procRepeats, setProcRepeats ] = useState( 0 );

    useEffect(() => {

        let count_all = 0;
        let count_premiere = 0;

        let duration_all = 0;
        let duration_premiere = 0;

        let day_sec = 24*60*60;


        for( let category_id in evenstTree ){
            // let arr = [];
            // let eventsCount = {};
            for( let event_id in evenstTree[ category_id ] ){
                
                for( let fileName in evenstTree[ category_id ][ event_id ] ){
                    let {
                        count,
                        duration,
                        isPremiere,
                        isUsed,
                        startTime,
                    } = evenstTree[ category_id ][ event_id ][ fileName ];
                    if( isUsed ){
                        count_all = count_all + count;
                        duration_all = duration_all + ( duration * count );

                        if( isPremiere ){
                            count_premiere = count_premiere + 1;
                            duration_premiere = duration_premiere + duration ;
                        };
                    };
                };
            };

        };

        setCountAll( count_all );
        setCountPremiere( count_premiere );
        setcCountRepeats( count_all - count_premiere );

        setDurationAll( duration_all );
        setDurationPremiere( duration_premiere );
        setDurationRepeats( duration_all - duration_premiere );

        let pros_all = round_to_number( duration_all * 100 / day_sec, 5 );
        let pros_premiere = round_to_number( duration_premiere * 100 / day_sec, 5 );
        let pros_repeats = round_to_number( ( duration_all - duration_premiere ) * 100 / day_sec, 5 );

        setProcAll( pros_all );
        setProcPremiere( pros_premiere );
        setProcRepeats( pros_repeats );

    }, [ evenstTree ] );





    

    
    return (

        <div className = 'AC_AllCounterTable'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>шт</th>
                        <th>Хрон. время</th>
                        <th>Хрон. сек</th>
                        <th>% от суток</th>
                    </tr>
                </thead>



                <tbody>
                    <tr className = 'AC_AllCounterTable_tr_all'>
                        <td className = 'td_name' >Всего:</td>
                        <td>
                            <input
                                className = 'td_count' 
                                type = 'text'
                                value = { countAll }
                                onChange = { () => {} }
                            />
                        </td>
                        <td>
                            <input
                                className = 'td_duration' 
                                type = 'text'
                                value = { convert_sec_to_time( durationAll ) }
                                onChange = { () => {} }
                            />
                        </td>
                        <td>
                            <input
                                className = 'td_duration_sec' 
                                type = 'text'
                                value = { durationAll }
                                onChange = { () => {} }
                            />
                        </td>
                        <td>
                            <input
                                className = 'td_duration_proc' 
                                type = 'text'
                                value = { procAll }
                                onChange = { () => {} }
                            />
                            <span className = 'proc_znak' >%</span>
                        </td>
                    </tr>

                    <tr className = 'AC_AllCounterTable_tr_premiere'>
                        <td className = 'td_name' >Премьеры:</td>
                       <td>
                            <input
                                className = 'td_count' 
                                type = 'text'
                                value = { countPremiere }
                                onChange = { () => {} }
                            />
                        </td>
                        <td>
                            <input
                                className = 'td_duration' 
                                type = 'text'
                                value = { convert_sec_to_time( durationPremiere ) }
                                onChange = { () => {} }
                            />
                        </td>
                        <td>
                            <input
                                className = 'td_duration_sec' 
                                type = 'text'
                                value = { durationPremiere }
                                onChange = { () => {} }
                            />
                        </td>
                        <td>
                            <input
                                className = 'td_duration_proc' 
                                type = 'text'
                                value = { procPremiere }
                                onChange = { () => {} }
                            />
                            <span className = 'proc_znak' >%</span>
                        </td>
                    </tr>
                    <tr className = 'AC_AllCounterTable_tr_repeat'>
                        <td className = 'td_name' >Повторы:</td>
                        <td>
                            <input
                                className = 'td_count' 
                                type = 'text'
                                value = { countRepeats }
                                onChange = { () => {} }
                            />
                        </td>
                        <td>
                            <input
                                className = 'td_duration' 
                                type = 'text'
                                value = { convert_sec_to_time( durationRepeats ) }
                                onChange = { () => {} }
                            />
                        </td>
                        <td>
                            <input
                                className = 'td_duration_sec' 
                                type = 'text'
                                value = { durationRepeats }
                                onChange = { () => {} }
                            />
                        </td>
                        <td>
                            <input
                                className = 'td_duration_proc' 
                                type = 'text'
                                value = { procRepeats }
                                onChange = { () => {} }
                            />
                            <span className = 'proc_znak' >%</span>
                        </td>
                    </tr>

                </tbody>

            </table>

        </div>

    )

};

export function AC_AllCounterTable( props ){

    const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    const dispatch = useDispatch();

    return (
        <AC_AllCounterTableComponent
            { ...props }
            evenstTree = { playReportAnalytics.evenstTree }
            // dateListSelected = { playReport.dateListSelected }
            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
