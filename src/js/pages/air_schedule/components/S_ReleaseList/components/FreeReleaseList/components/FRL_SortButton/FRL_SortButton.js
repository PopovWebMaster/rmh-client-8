
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FRL_SortButton.scss';

import { selectorData as scheduleResultSlise, setFreeReleasesFilterSortBy } from './../../../../../../../../redux/scheduleResultSlise.js';

import { FRL_TopButton } from './../FRL_TopButton/FRL_TopButton.js';



const FRL_SortButtonComponent = ( props ) => {

    let {
        // title,
        // icon = '',
        // clickHandler = () => {},
        // setListIsActive = () => {},

        freeReleasesFilterSortBy,

        setFreeReleasesFilterSortBy,
       
    } = props;



    const clickNum = () => {
        if( freeReleasesFilterSortBy === 'num_asc' ){
            setFreeReleasesFilterSortBy( 'num_desc' );
        }else{
            setFreeReleasesFilterSortBy( 'num_asc' );
        };

        // 'num_asc' 'num_desc' 'alph_asc' 'alph_desc'
        // setIsOpen( true );
    }

    const clickAlph = () => {
        if( freeReleasesFilterSortBy === 'alph_asc' ){
            setFreeReleasesFilterSortBy( 'alph_desc' );
        }else{
            setFreeReleasesFilterSortBy( 'alph_asc' );
        };

        // 'num_asc' 'num_desc' 'alph_asc' 'alph_desc'
        // setIsOpen( true );
    }

    return (<>

        <FRL_TopButton
            title = ''
            icon = 'icon-sort-numeric'
            clickHandler = { clickNum }
        />
    
        <FRL_TopButton
            title = ''
            icon = 'icon-sort-alphabet'
            clickHandler = { clickAlph }
        />

    </>)

};

export function FRL_SortButton( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <FRL_SortButtonComponent
            { ...props }

            freeReleasesFilterSortBy = { scheduleResult.freeReleasesFilterSortBy }

            setFreeReleasesFilterSortBy = { ( val ) => { dispatch( setFreeReleasesFilterSortBy( val ) ) } }

        />
    );


}
