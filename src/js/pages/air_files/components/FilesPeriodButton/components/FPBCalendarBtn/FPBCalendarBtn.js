// FPBCalendarBtn


import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';

// import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';

import './FPBCalendarBtn.scss';

import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js'



const FPBCalendarBtnComponent = ( props ) => {

    let {
        value,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    let [ dataFromValue, setDataFromValue ] = useState( '' );
    let [ dataToValue, setDataToValue ] = useState( '' );



    const change_date_from = ( e ) => {

        let val = e.target.value;
        let date = new Date( val );
        let from_ms = date.getTime();

        let date_2 = new Date( dataToValue );
        let to_ms = date_2.getTime();
        if( from_ms <= to_ms ){
            setDataFromValue( val );
        }else{
            setDataFromValue( val );
            setDataToValue( val );
        };

        
    };

    const change_date_to = ( e ) => {
        let val = e.target.value;
        let date = new Date( val );
        let to_ms = date.getTime();

        let date_2 = new Date( dataFromValue );
        let from_ms = date_2.getTime();
        if( to_ms >= from_ms ){
            setDataToValue( val );
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
               <div className = 'FPBCalendarBtn_wrap'>

                    <input 
                        type = 'date'
                        value =     { dataFromValue }
                        max =       { dataToValue }
                        onChange =  { change_date_from }
                    />

                    <span>-</span>
                    <input 
                        type = 'date'
                        value =     { dataToValue }
                        min =       { dataFromValue }
                        onChange =  { change_date_to }
                    />
               </div>

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

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <FPBCalendarBtnComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
