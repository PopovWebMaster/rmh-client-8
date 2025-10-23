
import React, { useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


import { selectorData as airFilesSlice, setPeriodFrom, setPeriodTo } from './../../../../../../redux/airFilesSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';

import './FPBCalendarBtn.scss';

import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWButtonAdd }          from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { get_date_now_YYYY_MM_DD }  from './../../../../../../helpers/get_date_now_YYYY_MM_DD.js';
import { send_request_to_server }   from './../../../../../../helpers/send_request_to_server.js';

import { set_air_files_to_store } from './../../../../vendors/set_air_files_to_store.js';

const FPBCalendarBtnComponent = ( props ) => {

    let {
        periodFrom,
        periodTo,
        setPeriodFrom,
        setPeriodTo,

        setSpinnerIsActive,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        if( periodFrom !== '' && periodTo !== '' ){
            setIsReady( true );
        }else{
            setIsReady( false );
        };

    }, [
        periodFrom,
        periodTo,
    ] );

    const change_date_from = ( e ) => {

        let val = e.target.value;
        let date = new Date( val );
        let from_ms = date.getTime();

        let date_2 = new Date( periodTo );
        let to_ms = date_2.getTime();
        if( from_ms <= to_ms ){
            setPeriodFrom( val );
        }else{
            setPeriodFrom( val );
            setPeriodTo( val );
        };

        
    };

    const change_date_to = ( e ) => {
        let val = e.target.value;
        let date = new Date( val );
        let to_ms = date.getTime();

        let date_2 = new Date( periodFrom );
        let from_ms = date_2.getTime();
        if( to_ms >= from_ms ){
            setPeriodTo( val );
        };
    };

    const collect = () => {

        if( isReady ){
            setSpinnerIsActive( true );
            send_request_to_server( {
                route: 'collect-files-data',
                data: {
                    periodFrom,
                    periodTo,
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        let { airFiles } = response;

                        set_air_files_to_store( airFiles );

                        setSpinnerIsActive( false );
                        setIsOpen( false );

                    };


                }

            } );


        };


    }

    
    return (<>
            <AlertWindowContainer
                isOpen =        { isOpen }
                setIsOpen =     { setIsOpen }
                title = 'Период'
                width = '25em'
                height = '15em'
            >
                <>
                    <div className = 'FPBCalendarBtn_wrap'>
                        <input 
                            type = 'date'
                            value =     { periodFrom }
                            max =       { get_date_now_YYYY_MM_DD() }
                            onChange =  { change_date_from }
                        />

                        <span>-</span>
                        <input 
                            type = 'date'
                            value =     { periodTo }
                            max =       { get_date_now_YYYY_MM_DD() }
                            onChange =  { change_date_to }
                        />
                    </div>

                    <AWButtonAdd
                        title =         'Собрать данные'
                        isReady =       { isReady }
                        icon  =         { 'icon-folder-open' }
                        clickHandler =  { collect }
                    />
                </>


            </AlertWindowContainer>

            <div
                className = 'FPBCalendarBtn'
                onClick = { () => { setIsOpen( true ) } }
            >
                <span 
                    className = 'fa-calendar'
                ></span>
    
            </div>
    </>)

};

export function FPBCalendarBtn( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <FPBCalendarBtnComponent
            { ...props }
            periodFrom = { airFiles.periodFrom }
            periodTo = { airFiles.periodTo }

            setPeriodFrom = { ( val ) => { dispatch( setPeriodFrom( val ) ) } }
            setPeriodTo = { ( val ) => { dispatch( setPeriodTo( val ) ) } }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }



        />
    );


}
