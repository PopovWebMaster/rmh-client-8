
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './A_Chart.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { DEFAULT_CATEGORY, EVENT_TYPE, BLIND_STYLE } from './../../../../../../../../config/layout.js';

const A_ChartComponent = ( props ) => {

    let {
        currentAppCategoryId,
        categoryListById,
        currentAppEventId,
        eventListById,
    } = props;

    let [ categoryName, setCategoryName ] = useState( '' );
    let [ categoryColorBG, setCategoryColorBG ] = useState( '' );
    let [ categoryColorText, setCategoryColorText ] = useState( '' );
    let [ categoryPrefix, setCategoryPrefix ] = useState( '' );


    let [ eventName, setEventName ] = useState( 'Слепой график' );
    let [ eventType, setEventType ] = useState( EVENT_TYPE.FILE );



    useEffect( () => {

        if( categoryListById[ currentAppCategoryId ] ){
            let {
                name,
                prefix,
                colorText,
                colorBG,
            } = categoryListById[ currentAppCategoryId ];

            setCategoryName( name );
            setCategoryColorBG( colorBG );
            setCategoryColorText( colorText );
            setCategoryPrefix( prefix );


        }else{
            let {
                name,
                prefix,
                colorText,
                colorBG,
            } = DEFAULT_CATEGORY;

            setCategoryName( name );
            setCategoryColorBG( colorBG );
            setCategoryColorText( colorText );
            setCategoryPrefix( prefix );

        };

    }, [ currentAppCategoryId ] );

    useEffect( () => {

        if( eventListById[ currentAppEventId ] ){
            let { type, name } = eventListById[ currentAppEventId ];
            setEventName( name );
            setEventType( type );

        }else{

            setEventName( 'Слепой график' );
            setEventType( EVENT_TYPE.FILE );
        };

    }, [ currentAppEventId ] );

    const getCharStyle = ( type, colorText, colorBG, eventId ) => {

        let result = {
            backgroundColor: '',
            color: '',
            borderColor: '',
        };
        
        if( eventId === null ){
            // result.backgroundColor = '#fff2e4';
            // result.color = '#e76969';
            // result.borderColor = '#dfdfdf';

            result = BLIND_STYLE;
        }else{
            if( type === EVENT_TYPE.FILE ){
                result.backgroundColor = colorBG;
                result.color = colorText;
                result.borderColor = colorBG;
            }else if( type === EVENT_TYPE.BLOCK ){
                result.backgroundColor = '#00000000';
                result.color = colorBG;
                result.borderColor = colorBG;
            };
        };

        return result;

    };

    



    return (
        <div className = 'A_ChartNoEdit'>
            <h4>График:</h4>

           <span 
                className = 'A_ChartNoEdit_name'
                style = { getCharStyle( eventType, categoryColorText, categoryColorBG, currentAppEventId ) }
            >{ eventName }</span>


        </div>
    )

};

export function A_Chart( props ){

    const application = useSelector( applicationSlice );
    const layout = useSelector( layoutSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <A_ChartComponent
            { ...props }

            categoryListById = { layout.categoryListById }
            eventListById = { layout.eventListById }

            currentAppCategoryId = { application.currentAppCategoryId }
            currentAppEventId = { application.currentAppEventId }


            // setCurrentAppCategoryId = { ( val ) => { dispatch( setCurrentAppCategoryId( val ) ) } }


        />
    );


}

