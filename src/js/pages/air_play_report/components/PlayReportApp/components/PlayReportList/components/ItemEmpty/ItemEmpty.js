
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './ItemEmpty.scss';

import { Time } from './../ItemMovie/components/Time/Time.js';


const ItemEmptyComponent = ( props ) => {

    let {
        item
    } = props;

    const trim_ms = ( str ) => {
        let arr = str.split('.');
        return arr[0];

    }
    
    return (
        <div className = 'PRL_ItemEmpty'>
            <Time 
                startTime = { item.startTime }
                date =      { item.date }
            />

            <div className = 'PRL_ItemEmpty_title'>
                <span>Пусто</span>
            </div>

            <div className = 'PRL_ItemEmpty_duration'>
                <span>{ trim_ms( item.duration.time ) }</span>
            </div>


        </div> 

    )

};

export function ItemEmpty( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ItemEmptyComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
