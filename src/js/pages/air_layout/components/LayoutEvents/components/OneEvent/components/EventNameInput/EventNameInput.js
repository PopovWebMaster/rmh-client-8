
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventNameInput.scss';

import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';
import { EVENT_TYPE } from './../../../../../../../../config/layout.js';

const EventNameInputComponent = ( props ) => {

    let {
        id,
        name,
        category,
        type,

        eventList,
        setEventListAsChanged,

    } = props;

    let [ nameValue, setNameValue] = useState( name );

    let inputRef = useRef();

    useEffect( () => {
        setNameValue( name );
    }, [ name ] );

    const set_changes_to_store = () => {

        if( nameValue !== name ){
            let newArr = [];

            for( let i = 0; i < eventList.length; i++ ){
                if( eventList[ i ].id === id ){
                    let item = { ...eventList[ i ] };
                    item.name = nameValue;
                    newArr.push( item );
                }else{
                    newArr.push({ ...eventList[ i ] });
                };
            };

            setEventListAsChanged( newArr );
        };

    };

    const change = ( e ) => {
        let val = e.target.value;
        setNameValue( val );

    };

    const enter = ( e ) => {
        if( e.which === 13 ){
            set_changes_to_store();
            inputRef.current.blur();
        };
    };

    const blur = ( e ) => {
        set_changes_to_store();
    };

    const get_style = ( type, category ) => {
        let result = {
            backgroundColor: '',
            color: '',
        };
        if( type === EVENT_TYPE.FILE ){
            result.backgroundColor = category.colorBG;
            result.color = category.colorText;

        }else if( type === EVENT_TYPE.BLOCK ){
            result.backgroundColor = '#ffffff17';
            result.color = '#ffffff';
            result.borderColor = category.colorBG;
        };

        return result;

    }

    return (

        <div className = 'LE_EventNameInput'>
            <input 
                type =      'text'
                value =     { nameValue }
                maxLength = { 255 }
                onChange =  { change }
                onKeyDown = { enter }
                onBlur =    { blur }
                ref =       { inputRef }
                style = { get_style( type, category ) }
            />
        </div>
                

    )

};

export function EventNameInput( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <EventNameInputComponent
            { ...props }
            eventList = { layout.eventList }

            setEventListAsChanged = { ( val ) => { dispatch( setEventListAsChanged( val ) ) } }


        />
    );


}
