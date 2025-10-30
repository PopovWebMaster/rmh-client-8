// TdCategory

// AC_OneEventTreeRow


import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';
import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../../redux/playReportAnalyticsSlise.js';


import './TdCategory.scss';

import { AnalitycsEventsTreeClass } from './../../../../../../../../../classes/AnalitycsEventsTreeClass.js';

const TdCategoryComponent = ( props ) => {

    let {

        index,
        list_length = 0,
        category_id,

        categoryListById,

        evenstTree,

    } = props;

    let [ chackValue, setChackValue ] = useState( false );

    useEffect( () => {
    
        let val = true;
        for( let event_id in evenstTree[ category_id ] ){
            for( let fileName in evenstTree[ category_id ][ event_id ] ){
                let { isUsed } = evenstTree[ category_id ][ event_id ][ fileName ];
                if( isUsed === false ){
                    val = false;
                    break;
                };
            };
        };
       
        setChackValue( val );

    }, [ evenstTree ] );


    const chack = ( e ) => {
        let AnalitycsEventsTree = new AnalitycsEventsTreeClass();
        AnalitycsEventsTree.CreateFromStore();

        let next_value = !chackValue;

        for( let event_id in evenstTree[ category_id ] ){
            for( let fileName in evenstTree[ category_id ][ event_id ] ){
                AnalitycsEventsTree.SetChanges({
                    category_id,
                    event_id,
                    fileName,
                    changeObject: {
                        isUsed: next_value
                    },
                });
            };
        };

        AnalitycsEventsTree.SetEventsTreeToStore();
    };


    const get_td = () => {

        let { name, colorBG, colorText } = categoryListById[ category_id ];

        // console.dir( categoryListById[ category_id ] );

        return (
            <td 
                rowSpan = { list_length + 1 } 
                className = 'TdCategory'
            >
                <input
                    type =      'checkbox'
                    value =     { true }
                    checked =   { chackValue }
                    onChange =  { chack }
                />
                <span
                    style = {{
                        backgroundColor: colorBG,
                        color: colorText
                    }}
                >{ name }</span>
            </td>
        ) 

    }
    
    return (<>{ index === 0? get_td(): '' }</>
       

    )

};

export function TdCategory( props ){

    const layout = useSelector( layoutSlice );
    const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    const dispatch = useDispatch();

    return (
        <TdCategoryComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }
            
            evenstTree = { playReportAnalytics.evenstTree }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
