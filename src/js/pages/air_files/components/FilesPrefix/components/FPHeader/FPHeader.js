
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FPHeader.scss';

import { selectorData as airFilesSlice } from './../../../../../../redux/airFilesSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';


import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWInputText } from './../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWEventSelect } from './../../../../../../components/AlertWindowContainer/AWEventSelect/AWEventSelect.js';
import { AWButtonAdd } from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';
import { AWShowErrors } from './../../../../../../components/AlertWindowContainer/AWShowErrors/AWShowErrors.js';


import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { set_air_file_prefix_list_to_store } from './../../../../vendors/set_air_file_prefix_list_to_store.js';


const FPHeaderComponent = ( props ) => {

    let {
        filePrefixList,

        setSpinnerIsActive,

    } = props;


    let [ isOpen, setIsOpen ] = useState( false );
    let [ isReady, setIsReady ] = useState( false );
    let [ errorMessage, setErrorMessage] = useState( [] );
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
        setErrorMessage([]);

    };

    const changheEvent = ( id ) => {
        setEventId( id );

    };

    const create_prexix_on_server = () => {

        let isValid = true;
        let newPrefixTrim = newPrefix.trim();
        let error = '';
        
        for( let i = 0; i < filePrefixList.length; i++ ){
            if( filePrefixList[ i ].prefix === newPrefixTrim ){
                isValid = false;
                error = newPrefixTrim;
                break;
            };
        };

        if( isValid ){
            if( isReady ){

                setSpinnerIsActive( true );
                send_request_to_server({
                    route: 'create-new-file-prefix',
                    data: {
                        prefix: newPrefixTrim,
                        eventId,
                    },
                    successCallback: ( response ) => {
                        console.dir( 'response' );
                        console.dir( response );

                        if( response.ok ){
                            setSpinnerIsActive( false );
                            if( response.airFilePrefix ){
                                set_air_file_prefix_list_to_store( response.airFilePrefix );

                                setIsOpen( false );
                            };
                        };


                    },
                });
            };
        }else{
            setErrorMessage([ `Такой префикс "${error}" уже существует. Нельзя так.`]);
        };

    }

    return (
        <div className = 'FPHeader'>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                title =     'Новый префикс'
                width =     '30em'
                height =    '65vh'
            >

                <div className = 'FPHeader_wrap'>
                    <AWShowErrors
                        errors = { errorMessage }
                    />
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

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <FPHeaderComponent
            { ...props }

            filePrefixList = { airFiles.filePrefixList }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
