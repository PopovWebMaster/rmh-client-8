

import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ScheduleSaveButton.scss';

import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';
import { selectorData as scheduleSlise, setIsChanged }     from './../../../../../../../../../../redux/scheduleSlise.js';

import { PageBodySaveButton } from './../../../../../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';

import { send_request_to_server } from './../../../../../../../../../../helpers/send_request_to_server.js';
import { set_application_data_to_store } from './../../../../../../vendors/set_application_data_to_store.js';
import { ScheduleClass } from './../../../../../../../../../../classes/ScheduleClass.js';


const ScheduleSaveButtonComponent = ( props ) => {

    let {
        isChanged,

        Schedule,
        setSchedule,
        setSpinnerIsActive,
        setIsChanged,

    } = props;

    const save_release_list = () => {


        setSpinnerIsActive( true );

        let send_data = Schedule.GetReseaseData();

        console.dir( 'send_data' );
        console.dir( send_data );

        const send = () => {
            send_request_to_server({
                route: 'save-sub-application-release',
                data: send_data,
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        setSpinnerIsActive( false );
                        set_application_data_to_store( response.application, response.applicationList );

                        setIsChanged( false );

                        setSchedule( new ScheduleClass() );
                    }else{
                        let conf = confirm( 'Ошибка соединения, попробовать снова?' );
                        if( conf ){
                            send();
                        }else{

                        };
                    };
                },
                errorCallback: () => {
                    let conf = confirm( 'Ошибка соединения, попробовать снова?' );
                    if( conf ){
                        send();
                    }else{

                    };
                }
            });
        };

        send();

    }


    return (
        <PageBodySaveButton
            isChanged = { isChanged }
            clickHandler = { save_release_list }
        />      
    )

};

export function ScheduleSaveButton( props ){

    const schedule = useSelector( scheduleSlise );
    const dispatch = useDispatch();

    return (
        <ScheduleSaveButtonComponent
            { ...props }

            isChanged =             { schedule.isChanged }

            setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setIsChanged =          { ( val ) => { dispatch( setIsChanged( val ) ) } }

        />
    );


}
