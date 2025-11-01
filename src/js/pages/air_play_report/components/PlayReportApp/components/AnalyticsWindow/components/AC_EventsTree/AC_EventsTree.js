
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../redux/playReportAnalyticsSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


import './AC_EventsTree.scss';


// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { AC_OneEventTreeRow } from './../AC_OneEventTreeRow/AC_OneEventTreeRow.js';



const AC_EventsTreeComponent = ( props ) => {

    let {

        analitycsIsActive,
        evenstTree,

        eventListById,
        categoryListById,

    } = props;

    let [ SCH_style_0, setSCH_style_0 ] = useState( {} );
    let [ SCH_style_1, setSCH_style_1 ] = useState( {} );
    let [ SCH_style_2, setSCH_style_2 ] = useState( {} );
    let [ SCH_style_3, setSCH_style_3 ] = useState( {} );
    let [ SCH_style_4, setSCH_style_4 ] = useState( {} );
    let [ SCH_style_5, setSCH_style_5 ] = useState( {} );
    let [ SCH_style_5_2, setSCH_style_5_2 ] = useState( {} );

    let [ SCH_style_6, setSCH_style_6 ] = useState( {} );
    let [ SCH_style_7, setSCH_style_7 ] = useState( {} );
    let [ SCH_style_8, setSCH_style_8 ] = useState( {} );
    let [ SCH_thead_style, setSCH_thead_style ] = useState( {} );

    let SCH_ref_0 = useRef();
    let SCH_ref_1 = useRef();
    let SCH_ref_2 = useRef();
    let SCH_ref_3 = useRef();
    let SCH_ref_4 = useRef();
    let SCH_ref_5 = useRef();
    let SCH_ref_5_2 = useRef();

    let SCH_ref_6 = useRef();
    let SCH_ref_7 = useRef();
    let SCH_ref_8 = useRef();
    let SCH_thead_ref = useRef();
    let SCH_table_ref = useRef();




    useEffect( () => {

        correct_schadow_style();

        window.onresize = correct_schadow_style;

        return () => {
            window.onresize = null;
        }


    }, [] );

    const correct_schadow_style = () => {
        let style_thead = window.getComputedStyle( SCH_thead_ref.current );
        let thead_width_px = parseFloat( style_thead.width );


        setSCH_thead_style( { width: thead_width_px + 1 + 'px' } );

        const get_stile_width = ( width_str ) => {

            let width_px = parseFloat( width_str ) - 1;
            let proc = width_px * 100 / thead_width_px;

            return { width: proc + '%' };

        };

        let style = window.getComputedStyle( SCH_ref_0.current );
        setSCH_style_0( get_stile_width( style.width ) );

        style = window.getComputedStyle( SCH_ref_1.current );
        setSCH_style_1( get_stile_width( style.width ) );

        style = window.getComputedStyle( SCH_ref_2.current );
        setSCH_style_2( get_stile_width( style.width ) );

        style = window.getComputedStyle( SCH_ref_3.current );
        setSCH_style_3( get_stile_width( style.width ) );

        style = window.getComputedStyle( SCH_ref_4.current );
        setSCH_style_4( get_stile_width( style.width ) );

        style = window.getComputedStyle( SCH_ref_5.current );
        setSCH_style_5( get_stile_width( style.width ) );

        style = window.getComputedStyle( SCH_ref_5_2.current );
        setSCH_style_5_2( get_stile_width( style.width ) );

        style = window.getComputedStyle( SCH_ref_6.current );
        setSCH_style_6( get_stile_width( style.width ) );

        style = window.getComputedStyle( SCH_ref_7.current );
        setSCH_style_7( get_stile_width( style.width ) );

        style = window.getComputedStyle( SCH_ref_8.current );
        setSCH_style_8( get_stile_width( style.width ) );
    }



    const create = ( isActive, tree ) => {
        let result = '';
        if( isActive ){

            let matrix = [];

            for( let category_id in tree ){
                let arr = [];
                let eventsCount = {};
                for( let event_id in tree[ category_id ] ){
                    
                    for( let fileName in tree[ category_id ][ event_id ] ){
                        let {
                            count,
                            duration,
                            isPremiere,
                            isUsed,
                            startTime,
                        } = tree[ category_id ][ event_id ][ fileName ];

                        if( eventsCount[event_id] ){
                            eventsCount[event_id].count = eventsCount[event_id].count + 1;
                        }else{
                            eventsCount[event_id] = {
                                count: 1
                            };
                        };

                        arr.push({
                            category_id,
                            event_id,
                            fileName,
                            count,
                            duration,
                            isPremiere,
                            isUsed,
                            startTime,
                            eventCount: 0,
                        });
                    };
                };

                for( let i = 0; i < arr.length; i++ ){
                    let { event_id } = arr[ i ];
                    arr[ i ].eventCount = eventsCount[ event_id ];
                };

                matrix.push( arr );

            }


            result = matrix.map( ( list, index ) => { 
                return (
                    <AC_OneEventTreeRow 
                        key = { index }
                        list = { list }
                    />
                )

            });

        };


        return result;

    }

    return (<>
            <div className = 'AC_EventsTree_header_schadow' style = { SCH_thead_style }>

                <span className = 'AC_SCH_0' style = { SCH_style_0 }>Категория</span>
                <span className = 'AC_SCH_1' style = { SCH_style_1 }>Событие</span>
                <span className = 'AC_SCH_2' style = { SCH_style_2 }>Файл</span>
                <span className = 'AC_SCH_3' style = { SCH_style_3 }>Премьеры</span>
                <span className = 'AC_SCH_4' style = { SCH_style_4 }>шт.</span>
                <span className = 'AC_SCH_5' style = { SCH_style_5 }>Хрон. сек</span>
                <span className = 'AC_SCH_5_2' style = { SCH_style_5_2 }>Хрон.</span>

                <span className = 'AC_SCH_6' style = { SCH_style_6 }>Хрон. сек.</span>
                <span className = 'AC_SCH_7' style = { SCH_style_7 }>Хрон.</span>
                <span className = 'AC_SCH_8' style = { SCH_style_8 }>%/сутки</span>

            </div>
        <div className = 'AC_EventsTree'>
            <table>
                <thead ref = { SCH_thead_ref }>
                    <tr>
                        <th ref = { SCH_ref_0 } >Категория</th>
                        <th ref = { SCH_ref_1 } >Событие</th>
                        <th ref = { SCH_ref_2 } >Файл</th>
                        <th ref = { SCH_ref_3 } >Премьеры</th>
                        <th ref = { SCH_ref_4 } className = 'th_count'>шт.</th>
                        <th ref = { SCH_ref_5 } className = 'th_duration'>Хрон. сек</th>
                        <th ref = { SCH_ref_5_2 } className = 'th_duration'>Хрон.</th>
                        <th ref = { SCH_ref_6 } >Хрон. сек.</th>
                        <th ref = { SCH_ref_7 } >Хрон.</th>
                        <th ref = { SCH_ref_8 } >% от суток</th>
                        
                    </tr>
                </thead>

                <tbody ref = { SCH_table_ref }>

                    { create( analitycsIsActive, evenstTree ) }

                </tbody>

            </table>


        </div>

    </>)

};

export function AC_EventsTree( props ){

    const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    const layout = useSelector( layoutSlice );


    
    const dispatch = useDispatch();

    return (
        <AC_EventsTreeComponent
            { ...props }
            analitycsIsActive = { playReportAnalytics.analitycsIsActive }
            evenstTree = { playReportAnalytics.evenstTree }


            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
