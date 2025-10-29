// TdCategory

// AC_OneEventTreeRow


import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdCategory.scss';


// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';



const TdCategoryComponent = ( props ) => {

    let {

        index,
        list_length = 0,
        category_id,

        categoryListById,

    } = props;

    let [ chackValue, setChackValue ] = useState( false );


    const chack = ( e ) => {
        console.dir({
            index,
            list_length,
            category_id,
        });
    };


    const get_td = () => {

        let { name, colorBG, colorText } = categoryListById[ category_id ];

        console.dir( categoryListById[ category_id ] );

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
    const dispatch = useDispatch();

    return (
        <TdCategoryComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
