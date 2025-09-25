
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './FoundFiles.scss';

const FoundFilesComponent = ( props ) => {

    let {
        filteredList,
        detailDataIsActive,

    } = props;

    let [ val, setVal ] = useState( '' );

  

    useEffect( () => {

        if( detailDataIsActive ){
            let list = get_file_list( filteredList );
            let str = list.join('\n');
            setVal( str );

        }else{
            setVal( '' );
        };

    }, [ filteredList, detailDataIsActive ] );

    const change = ( e ) => {
        let value = e.target.value;
        setVal( value );
    };

    const get_file_list = ( arr ) => {
        let result = [];

        let obj = {};

        for( let i = 0; i < arr.length; i++ ){
            let { type, file } = arr[ i ];

            if( type === 'movie' ){
               obj[ file.name ] = true;
            };
        };

        for( let name in obj ){
            result.push( name );
        };

        return result;

    }


    return (

        <div className = 'DDW_FoundFiles'>

            <p>Найденные файлы:</p>

            <textarea   
                className = ''
                value = { val }
                rows = { 2 }
                onChange = { change }
            />

        </div>
        
    )

};


export function FoundFiles( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <FoundFilesComponent
            { ...props }
   

            filteredList = { playReport.filteredList }
            detailDataIsActive = { playReport.detailDataIsActive }


            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            // setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
