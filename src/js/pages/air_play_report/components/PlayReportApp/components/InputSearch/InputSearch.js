
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectorData as playReportSlice,
    setSearchFocus,
    setSearchValue,
    setCalendarIsOpen,
} from './../../../../../../redux/playReportSlice.js';

import './InputSearch.scss';


const InputSearchComponent = ( props ) => {

    let {
        searchHandler,
        searchValue,

        setSearchFocus,
        setSearchValue,
        setCalendarIsOpen,

       
    } = props;

    const change = ( e ) => {
        let val = e.target.value;
        setSearchValue( val );
        setCalendarIsOpen( false );
    }

    const enter = ( e ) => {
        if( e.which === 13 ){
            searchHandler();
        };
    }

    
    
    return (
        <input 
            className = 'PR_InputSearch'
            type = 'text'
            value = { searchValue }
            onBlur = { () => { setSearchFocus( false ) } }
            onFocus = { () =>{ setSearchFocus( true ) } }
            onChange = { change }
            placeholder = 'Поиск по имени файла'
            onKeyDown = { enter }

        />

    )

};

export function InputSearch( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <InputSearchComponent
            { ...props }
            searchValue = { playReport.searchValue }
            setSearchValue = { ( val ) => { dispatch( setSearchValue( val ) ) } }
            setSearchFocus = { ( val ) => { dispatch( setSearchFocus( val ) ) } }
            setCalendarIsOpen = { ( val ) => { dispatch( setCalendarIsOpen( val ) ) } }


            

        />
    );


}
