
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './RequestListEdit.scss';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

const RequestListEditComponent = ( props ) => {

    let {
        requestList,
        setRequestList,
    } = props;


    const removeRequest = ( str ) => {
        let arr = [];
        for( let i = 0; i < requestList.length; i++ ){
            if( requestList[ i ] === str ){

            }else{
                arr.push( requestList[ i ] );
            };
        };
        setRequestList( arr );
    }

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            return (
                <div 
                    className = 'PR_ASC_list_item'
                    key = { index }
                >
                    <span className = 'PR_ASC_list_text'>{ item }</span>
                    <span
                        className = 'PR_ASC_list_remove icon-cancel-2'
                        onClick = { () => { removeRequest( item ) } }
                    ></span>


                </div>
            );

        } );

        return div;

    }
 

    return (

        <ScrollContainer>
            <div className = 'PR_ASC_list'>
                { create( requestList ) }
            </div>
        </ScrollContainer>



    )

};

export function RequestListEdit( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <RequestListEditComponent
            { ...props }
            searchFocus = { playReport.searchFocus }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
