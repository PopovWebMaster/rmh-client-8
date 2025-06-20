
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setFilteredList } from './../../../../../../redux/playReportSlice.js';

import './SetFilteredList.scss';


const SetFilteredListComponent = ( props ) => {

    let {
        entireList,
        setFilteredList,
        dateListSelected,
        children,
    } = props;

    useEffect( ()  => {
        // setFilteredList( entireList );

        let arr = [];

        for( let i = 0; i < entireList.length; i++ ){
            let YYYY_MM_DD = entireList[ i ].date.YYYY_MM_DD;
            if( dateListSelected === YYYY_MM_DD ){
                arr.push( entireList[ i ] );
            };
        };

        setFilteredList( arr );




    }, [ 
        entireList,
        dateListSelected
    ] );
    
    return (
        <>{ children }</>
    )

};

export function SetFilteredList( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <SetFilteredListComponent
            { ...props }
            entireList = { playReport.entireList }
            dateListSelected = { playReport.dateListSelected }
            setFilteredList = { ( callback ) => { dispatch( setFilteredList( callback ) ) } }

        />
    );


}
