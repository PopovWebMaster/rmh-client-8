
import React, { useEffect, useState } from "react";
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';

import { addBackligthPrefix } from './../../../../../../../../../../redux/playReportSlice.js';

import './BacklightAddBtn.scss';


const BacklightAddBtnComponent = ( props ) => {

    let {
        addBackligthPrefix,

        
    } = props;

    const click = () => {
        var new_prefix = prompt( 'Пожалуйста, введите новый префих для поиска' );
        if( new_prefix !== null ){
            let prefix_upper = new_prefix.toUpperCase();
            addBackligthPrefix( prefix_upper );
        };
    }

    return (

        <div className = 'PR_BacklightAddBtn' >
            <span 
                className = 'icon-plus'
                onClick = { click }
            ></span>
        </div>
    )

};

export function BacklightAddBtn( props ){

    // const config = useSelector( configSlise );
    const dispatch = useDispatch();

    return (
        <BacklightAddBtnComponent
            { ...props }

            addBackligthPrefix = { ( item ) => { dispatch( addBackligthPrefix( item ) ) } }

            // activeListType =    { config.activeListType }
            // moviePrefixList =    { config.moviePrefixList }
            // activeFile =    { config.activeFile }
            // movieListMain =    { config.movieListMain }
            // movieListBackup =    { config.movieListBackup }

            // addMoviePrefix = { ( val ) => { dispatch( addMoviePrefix( val ) ) } }

            // setMovieListMain = { ( list ) => { dispatch( setMovieListMain( list ) ) } }
            // setMovieListBackup = { ( list ) => { dispatch( setMovieListBackup( list ) ) } }




            

        />
    );


}


