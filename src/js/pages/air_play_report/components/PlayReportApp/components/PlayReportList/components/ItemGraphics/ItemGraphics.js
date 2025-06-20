
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './ItemGraphics.scss';


const ItemGraphicsComponent = ( props ) => {

    let {

    } = props;
    
    return (
        <div className = 'PRL_ItemGraphics'>

ItemGraphics
        </div> 

    )

};

export function ItemGraphics( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ItemGraphicsComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
