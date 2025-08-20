
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './ShowAsTextComponent.scss';

const ShowAsTextComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        content,
        setContent,
        
    } = props;

    useEffect( () => {
        if( isOpen === false ){
            setContent( '' );
        };

    }, [ isOpen ] );

    return (
        <div className = 'PRL_ShowAsTextComponent'>
           

           <textarea
                className = 'PRL_ShowAsTextComponent_text'
                value = { content }
                onChange = { () => {} }
                 
           />
        </div>
    )

};

export function ShowAsTextComponent( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <ShowAsTextComponentComponent
            { ...props }
            // filteredList = { playReport.filteredList }
            // dateListSelected = { playReport.dateListSelected }

            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

