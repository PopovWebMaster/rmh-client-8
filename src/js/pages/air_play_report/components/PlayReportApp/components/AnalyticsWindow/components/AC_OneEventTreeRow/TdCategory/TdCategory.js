// TdCategory

// AC_OneEventTreeRow


import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';
import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../../redux/playReportAnalyticsSlise.js';


import './TdCategory.scss';

import { AnalitycsEventsTreeClass } from './../../../../../../../../../classes/AnalitycsEventsTreeClass.js';

import { DEFAULT_CATEGORY } from './../../../../../../../../../config/layout.js';

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
                let { isUsed, count } = evenstTree[ category_id ][ event_id ][ fileName ];
                if( count > 0 ){
                    if( isUsed === false ){
                        val = false;
                        break;
                    };
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

        let name = 'Без категории';
        let colorBG = DEFAULT_CATEGORY.colorBG;
        let colorText = DEFAULT_CATEGORY.colorText;

        if( category_id !== null ){
            if( categoryListById[ category_id ] ){

                name = categoryListById[ category_id ].name;
                colorBG = categoryListById[ category_id ].colorBG;
                colorText = categoryListById[ category_id ].colorText;

            };
        };

        return (
            <td 
                rowSpan = { list_length + 1 } 
                className = 'TdCategory'
            >
                <div>
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
                </div>

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
