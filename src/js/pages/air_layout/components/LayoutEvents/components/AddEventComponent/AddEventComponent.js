
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddEventComponent.scss';

import { selectorData as layoutSlice, setEventList }    from './../../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../redux/spinnerSlice.js';

import { send_request_to_server }   from './../../../../../../helpers/send_request_to_server.js';
import { convert_sec_to_time }      from './../../../../../../helpers/convert_sec_to_time.js';

import { EVENT_TYPE, MIN_EVENT_DURATION_SEC } from './../../../../../../config/layout.js';

import { AWInputText }              from './../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWInputDuration }          from './../../../../../../components/AlertWindowContainer/AWInputDuration/AWInputDuration.js';
import { AWButtonAdd }              from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';
import { AWEventTypeEventSelect }   from './../../../../../../components/AlertWindowContainer/AWEventTypeEventSelect/AWEventTypeEventSelect.js';
import { AWCategorySelect }         from './../../../../../../components/AlertWindowContainer/AWCategorySelect/AWCategorySelect.js';

const AddEventComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        setSpinnerIsActive,
        setEventList,

    } = props;

    let [ name, setName ] = useState( '' );
    let [ duration, setDuration ] = useState( convert_sec_to_time( MIN_EVENT_DURATION_SEC ) );
    let [ eventType, setEventType ] = useState( EVENT_TYPE.FILE ); // block
    let [ notes, setNotes ] = useState( '' );

    let [ categoryIdValue, setCategoryIdValue ] = useState( null );

    useEffect( () => {
        if( isOpen === false ){
            setName( '' );
            setDuration( convert_sec_to_time( MIN_EVENT_DURATION_SEC ) );
            setNotes( '' );
            setEventType( EVENT_TYPE.FILE );
            setCategoryIdValue( null );
        };
    }, [ isOpen ]);

    const changeName = ( e ) => {
        let val = e.target.value;
        setName( val );
    }

    const chengeDuration = ( sec, time ) => {
        if( sec >= MIN_EVENT_DURATION_SEC ){
            setDuration( time );
        };
    };

    const changeNotes = ( e ) => {
        let val = e.target.value;
        setNotes( val );
    }

    const create = () => {

        setSpinnerIsActive( true );

        send_request_to_server({
            route: `add-new-event`,
            data: { 
                eventName:  name,
                eventNotes: notes,
                eventType:  eventType, // file block
                categoryId: categoryIdValue,
                eventDurationTime: duration,
            },

            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );
                if( response.ok ){
                    setSpinnerIsActive( false );
                    setEventList( response.list );
                    setIsOpen( false );
                };
            },
        });
    }

    const eventIsReady = ( name ) => {
        let result = false;
        if( name.trim() !== '' ){
            result = true;
        };
        return result;
    };
    
    return (

        <div className = 'LE_AddEventComponent' >

            <AWInputText 
                title = { 'Название:' }
                value = { name }
                onChange = { changeName }
            />

            <AWInputDuration 
                value =         { duration }
                changeHandler = { chengeDuration }
            />

            <AWEventTypeEventSelect 
                value = { eventType }
                changeHandler = { setEventType }
            />

            <AWInputText 
                title = { 'Дополнительная информация:' }
                value = { notes }
                onChange = { changeNotes }
                placeholder = '16+, курение, алкоголь... всё, что нельзя забыть, тут пишем'
            
            />

            <AWCategorySelect 
                value = { categoryIdValue }
                changeHandler = { setCategoryIdValue }
            />

            <AWButtonAdd 
                isReady = { eventIsReady( name ) }
                clickHandler = { create }
            />

        </div>

    )

};

export function AddEventComponent( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <AddEventComponentComponent
            { ...props }
            categoryList = { layout.categoryList }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setEventList = { ( val ) => { dispatch( setEventList( val ) ) } }


        />
    );


}
