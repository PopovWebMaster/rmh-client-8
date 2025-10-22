
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as airFilesSlice, setPeriodFrom, setPeriodTo } from './../../../../../../redux/airFilesSlice.js';

import './FPBCalendarBtn.scss';

import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWButtonAdd } from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

const FPBCalendarBtnComponent = ( props ) => {

    let {
        value,

        periodFrom,
        periodTo,
        setPeriodFrom,
        setPeriodTo,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    // let [ dataFromValue, setDataFromValue ] = useState( '' );
    // let [ dataToValue, setDataToValue ] = useState( '' );

    // useEffect( () => {
    //     setDataFromValue( periodFrom );
    //     setDataToValue( periodTo );
    // }, [ periodFrom, periodTo ]);



    const change_date_from = ( e ) => {

        let val = e.target.value;
        let date = new Date( val );
        let from_ms = date.getTime();

        let date_2 = new Date( periodTo );
        let to_ms = date_2.getTime();
        if( from_ms <= to_ms ){
            // setDataFromValue( val );
            setPeriodFrom( val );
        }else{
            // setDataFromValue( val );
            setPeriodFrom( val );
            // setDataToValue( val );
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
            // setDataToValue( val );
            setPeriodTo( val );
        };
    };

    
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
                            max =       { periodTo }
                            onChange =  { change_date_from }
                        />

                        <span>-</span>
                        <input 
                            type = 'date'
                            value =     { periodTo }
                            min =       { periodFrom }
                            onChange =  { change_date_to }
                        />
                    </div>

                    <AWButtonAdd
                        // title = 'Готово'
                        isReady = { true }
                        clickHandler = { () => { setIsOpen( false ) } }
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


        />
    );


}
