
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetFilteredListByManager.scss';

import { selectorData as applicationSlice, setFilteredList } from './../../../../redux/applicationSlice.js';

const SetFilteredListByManagerComponent = ( props ) => {

    let {
        currentManagerId,
        setFilteredList,

        applicationList,

        children,

    } = props;


    useEffect( () => {
        let list = [];

        if( currentManagerId === null ){
            for( let i = 0; i < applicationList.length; i++ ){
                list.push( structuredClone( applicationList[ i ] ) );
            };
        }else{
            for( let i = 0; i < applicationList.length; i++ ){
                let { manager } = applicationList[ i ];
                if( manager.id === currentManagerId ){
                    list.push( structuredClone( applicationList[ i ] ) );
                };
            };
        };

        setFilteredList( list );

    }, [ currentManagerId, applicationList ] );


    return (
        <>{ children }</>
    )

};

export function SetFilteredListByManager( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <SetFilteredListByManagerComponent
            { ...props }

            currentManagerId = { application.currentManagerId }
            applicationList = { application.applicationList }

            setFilteredList = { ( val ) => { dispatch( setFilteredList( val ) ) } }

        />
    );


}
