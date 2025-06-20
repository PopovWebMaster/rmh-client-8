
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../redux/playReportSlice.js';

import './PlayReportList.scss';

import { SetFilteredList } from './../SetFilteredList/SetFilteredList.js';

// import { ItemMovie } from './components/ItemMovie/ItemMovie.js';
import { ItemMovie2 } from './components/ItemMovie2/ItemMovie2.js';

import { ItemEmpty } from './components/ItemEmpty/ItemEmpty.js';


const PlayReportListComponent = ( props ) => {

    let {
        filteredList,
        backligthPrefixList,
    } = props;




    const create = ( arr, obj ) => {

        let keyList = [];
        for( let key in obj ){
            if( obj[ key ]){
                keyList.push( key );
            };
        };

        let div = arr.map( ( item, index ) => {

            let result = '';
            switch( item.type ){

                case 'movie':
                    let isBacklight = false;

                    let { file } = item;
                    let name = file.name;
                    let name_upper = name.toUpperCase();

                    for( let i = 0; i < keyList.length; i++ ){
                        if( name_upper.indexOf( keyList[ i ] ) !== -1 ){
                            isBacklight = true;
                            break
                        };
                    };

                    result = <ItemMovie2 item = { item } isBacklight = { isBacklight } key = { index }/>
                    break;

                case 'empty':
                    
                    result = <ItemEmpty item = { item } key = { index }/>
                    break;
            };

            return result;
        } );
        return div;
    };
    
    return (

        <SetFilteredList>

            <div className = 'PR_PlayReportList'>
                { create( filteredList, backligthPrefixList ) }
            </div> 

        </SetFilteredList>

    )

};

export function PlayReportList( props ){

    const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <PlayReportListComponent
            { ...props }
            filteredList = { playReport.filteredList }
            backligthPrefixList = { playReport.backligthPrefixList }

            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
