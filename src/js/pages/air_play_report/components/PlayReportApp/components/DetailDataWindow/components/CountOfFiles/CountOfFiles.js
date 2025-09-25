// CountOfFiles


import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './CountOfFiles.scss';

const CountOfFilesComponent = ( props ) => {

    let {
        filteredList,
        detailDataIsActive,

    } = props;

    let [ count, setCount] = useState( 0 );

  

    useEffect( () => {

        if( detailDataIsActive ){
            setCount( filteredList.length );



        }else{
            setCount( 0 );
        };

    }, [ filteredList, detailDataIsActive ] );

    const change = ( e ) => {
        let value = e.target.value;
        setVal( value );
    };




    return (

        <div className = 'DDW_CountOfFiles'>
           <p> <span>Найдено:</span> <span>{ count }</span> </p>
        </div>
        
    )

};


export function CountOfFiles( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <CountOfFilesComponent
            { ...props }
   

            filteredList = { playReport.filteredList }
            detailDataIsActive = { playReport.detailDataIsActive }


            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            // setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
