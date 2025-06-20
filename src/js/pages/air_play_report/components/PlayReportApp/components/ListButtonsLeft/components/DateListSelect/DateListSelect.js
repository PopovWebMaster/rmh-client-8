

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setDateListSelected } from './../../../../../../../../redux/playReportSlice.js';

import './DateListSelect.scss';

import { OpenThisDayButton } from './../OpenThisDayButton/OpenThisDayButton.js';

const DateListSelectComponent = ( props ) => {

    let {
        entireList,
        dateListSelected,

        setDateListSelected,

    } = props;

    let [ list, setList ] = useState( [] );


    useEffect( () => {

        let obj = {};
        for( let i = 0; i < entireList.length; i++ ){
            let YYYY_MM_DD = entireList[ i ].date.YYYY_MM_DD;
            let ms = entireList[ i ].date.ms;
            obj[ YYYY_MM_DD ] = ms;
        };
        let arr = [];
        for( let key in obj ){
            arr.push( {
                YYYY_MM_DD: key,
                ms: obj[ key ],
            } );
        };

        let arr_sort = arr.sort( function( a, b ){ 
            return a.ms < b.ms? -1: 1; 
        });
        let result = [];
        for( let i = 0; i < arr_sort.length; i++ ){
            result.push( arr_sort[i].YYYY_MM_DD );
        };
        setList( result );

        if( result[0] ){
            if( result.length === 2 ){
                setDateListSelected( result[1] );
            }else{
                setDateListSelected( result[0] );
            };
            
        }else{
            setDateListSelected( null );
        };


        


    }, [ entireList ] );

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            return (
                <div className = 'PRL_DateListSelect_item' key = { index }>
                    <span
                        onClick = { () => { setDateListSelected( item ) } }
                        className = { dateListSelected === item? 'isActive': ''  }
                    >{ item }</span>
                </div>
            )
        } );
        return div;

    }

    return (
        <div className = 'PRL_DateListSelect'>
            
            <div className = 'PRL_DateListSelect_selected'>
                <span>
                    { dateListSelected }
                </span>

                <OpenThisDayButton />
                
            </div>

            <div className = 'PRL_DateListSelect_list'>
                { create( list ) }
            </div>
        </div>


    )

};

export function DateListSelect( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <DateListSelectComponent
            { ...props }
            entireList = { playReport.entireList }
            dateListSelected = { playReport.dateListSelected }
            setDateListSelected = { ( callback ) => { dispatch( setDateListSelected( callback ) ) } }

        />
    );


}


