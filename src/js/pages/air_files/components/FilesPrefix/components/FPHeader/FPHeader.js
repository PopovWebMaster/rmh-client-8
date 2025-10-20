
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FPHeader.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWInputText } from './../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWEventSelect } from './../../../../../../components/AlertWindowContainer/AWEventSelect/AWEventSelect.js';
import { AWButtonAdd } from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';


const FPHeaderComponent = ( props ) => {

    let {

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ isReady, setIsReady ] = useState( false );


    let [ newPrefix, setNewPrefix ] = useState( '' );
    let [ eventId, setEventId ] = useState( null );

    useEffect(() => {
        if( isOpen ){

        }else{
            setNewPrefix( '' );
            setEventId( null );

        };

    }, [ isOpen ]);

    useEffect( () => {
        if( newPrefix.trim() !== '' && eventId !== null ){
            setIsReady( true );
        }else{
            setIsReady( false );
        };

    }, [
        newPrefix,
        eventId
    ] );


    const changhePrefix = ( e ) => {
        let val = e.target.value;
        setNewPrefix( val );

    };

    const changheEvent = ( id ) => {
        setEventId( id );

    };

    const create_prexix_on_server = () => {

        if( isReady ){

            send_request_to_server({
                route: 'create-new-file-prefix',
                data: {
                    prefix: newPrefix.trim(),
                    eventId,
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );
                },
            });



        };

        console.dir({
            newPrefix,
            eventId,

        });

        

    }




    return (
        <div className = 'FPHeader'>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                title =     'Новый префикс'
                width =     '30em'
                height =    '62vh'
            >

                <div className = 'FPHeader_wrap'>
                    <AWInputText
                        title =         'Новый префикс'
                        value =         { newPrefix }
                        onChange =      { changhePrefix }
                        max =           { 60 }
                        min =           { 0 }
                        placeholder =   'prefix'
                    />

                    <AWEventSelect
                        value = { eventId }
                        changeHandler = { changheEvent }
                        alwaysIsOpen = { true }
                    />

                    <AWButtonAdd
                        isReady  = { isReady }
                        clickHandler = { create_prexix_on_server }
                    />
                </div>

            </AlertWindowContainer>


            <h3 className = 'FPHeader_title'>Список префиксов</h3>
            <span
                className = 'FPHeader_btn'
                onClick = { () => { setIsOpen( true ) } }
            >Добавить</span>

        </div>
    )

};


export function FPHeader( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <FPHeaderComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
