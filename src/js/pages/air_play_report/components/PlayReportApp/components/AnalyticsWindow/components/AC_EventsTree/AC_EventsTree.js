
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../redux/playReportAnalyticsSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


import './AC_EventsTree.scss';


// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { AC_OneEventTreeRow } from './../AC_OneEventTreeRow/AC_OneEventTreeRow.js';

import { AC_TableHeaderRow } from './../AC_TableHeaderRow/AC_TableHeaderRow.js';
import { AC_TableHeaderRow_TopFixed } from './../AC_TableHeaderRow_TopFixed/AC_TableHeaderRow_TopFixed.js';



const AC_EventsTreeComponent = ( props ) => {

    let {

        analitycsIsActive,
        evenstTree,

        eventListById,
        categoryListById,

    } = props;

 

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

        <AC_TableHeaderRow_TopFixed />

        <div className = 'AC_EventsTree'>
            <table>
                <thead>
                    <AC_TableHeaderRow />
                </thead>

                <tbody>

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
