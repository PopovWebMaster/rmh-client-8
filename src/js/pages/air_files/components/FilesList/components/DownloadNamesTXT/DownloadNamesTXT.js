// DownloadNamesTXT


import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './DownloadNamesTXT.scss';

import { selectorData as airFilesSlice } from './../../../../../../redux/airFilesSlice.js';

import { FilterButtonContainer } from './../FilterButtonContainer/FilterButtonContainer.js';

// import { set_air_files_to_store } from './../../../../vendors/set_air_files_to_store.js';

const DownloadNamesTXTComponent = ( props ) => {

    let {
        issetChackedValues,
        filePrefixList,
        airFiles,
            airFiles_,
            filteredList,
    } = props;


    const click = () => {

        let text = '';
        for( let i = 0; i < filteredList.length; i++ ){
            let { isSelected, name } = filteredList[ i ];
            if( isSelected ){
                text = `${ text }\n${name}`;
            };
        };

        const blob = new Blob([text.trim()], {});
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `список имён.txt`;
        downloadLink.click();



    }

    return (
        <div className = 'downloadNamesTXT'>

            { issetChackedValues? (<>

                <FilterButtonContainer
                    isActive =      { true }
                    title =         { 'Скачать .txt' }
                    clickHandler =  { click }
                />
            </>): '' }
    </div>)

};


export function DownloadNamesTXT( props ){

    const airFiles_ = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <DownloadNamesTXTComponent
            { ...props }

            issetChackedValues = { airFiles_.issetChackedValues }
            filePrefixList = { airFiles_.filePrefixList }
            airFiles = { airFiles_.airFiles }
            airFiles_ = { airFiles_ }

            filteredList = { airFiles_.filteredList }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
