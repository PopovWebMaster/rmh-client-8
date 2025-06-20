
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './Backligth.scss';

import { BacklightAddBtn } from './components/BacklightAddBtn/BacklightAddBtn.js';
import { BacklightBtn } from './components/BacklightBtn/BacklightBtn.js';
 
const BackligthComponent = ( props ) => {

    let {
        filteredList,
        backligthPrefixList,
    } = props;

    const createList = ( obj ) => {

        let arr = Object.keys( obj );

        let list = arr.map( ( key, index ) => {
            return (
                <BacklightBtn 
                    key = { index }
                    status = { obj[ key ] }
                    name = { key }
                />
            );
        } );

        return list;

    }
    
    return (
        <>{ filteredList.length > 0? (
            <div className = 'PR_Backligth'>
                <h2>Подсветка: </h2>
                { createList( backligthPrefixList ) }
                <BacklightAddBtn />
            </div> 
        ): '' }</>

    )

};

export function Backligth( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <BackligthComponent
            { ...props }
            filteredList = { playReport.filteredList }
            backligthPrefixList = { playReport.backligthPrefixList }

            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
