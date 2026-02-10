
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ExportExcelViewType.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';


const ExportExcelViewTypeComponent = ( props ) => {

    let {
        excelVewType, // 'classic' 'oplot'
        setExcelVewType,
        isOpen,
        filterList,
        setFilterList,
        
    } = props;

    useEffect( () => {
        let last_val = localStorage.getItem('ExportExcelViewType');
        if( last_val === 'oplot' ){
            setExcelVewType( 'oplot' );
        }else{
            setExcelVewType( 'classic' )
        };
    }, [] );

    useEffect( () => {
        if( isOpen ){
            if( excelVewType === 'oplot' ){

                let newList = [];
                for( let i = 0; i < filterList.length; i++ ){
                    let item = structuredClone( filterList[ i ] );
                    item.isUsed = true;
                    newList.push( item );
                };
                setFilterList( newList );
            };
        };

    }, [ isOpen, excelVewType ] );


    const click_classic = () => {
        setExcelVewType( 'classic' );
        localStorage.setItem( 'ExportExcelViewType', 'classic' );
    }

    const click_oplot = () => {
        setExcelVewType( 'oplot' );
        localStorage.setItem( 'ExportExcelViewType', 'oplot' );
    }





    return (
        <div className = 'ExportExcelViewType'>

            <h4>Форма Excel:</h4>

            <span
                className = {`EXEVT_btn EXEVT_btn_classic ${excelVewType === 'classic'? 'isActive': ''}`}
                onClick = { click_classic }
            >Classic</span>

            <span
                className = {`EXEVT_btn ${excelVewType === 'oplot'? 'isActive': ''}`}
                onClick = { click_oplot }
            >Оплот</span>


        </div>

    )

};


export function ExportExcelViewType( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );

    // const dispatch = useDispatch();

    return (
        <ExportExcelViewTypeComponent
            { ...props }

            // scheduleEventsList = { scheduleResult.scheduleEventsList }
            // currentDate =       { scheduleResult.currentDate }
            // currentDayNum =     { scheduleResult.currentDayNum }
            // currentMonth =      { scheduleResult.currentMonth }
            // currentYear =       { scheduleResult.currentYear }



            

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
