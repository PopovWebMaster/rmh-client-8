
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_ButtonSaveAsTXTFile.scss';

// import { get_filtered_list } from './../../vendors/get_filtered_list.js';
import { get_filtered_list } from './../../../../vendors/get_filtered_list.js';
import { convert_sec_to_time } from './../../../../../../../../../../helpers/convert_sec_to_time.js';

const FRL_ButtonSaveAsTXTFileComponent = ( props ) => {

    let {
        newFilesList,
        setNewFilesList,

    } = props;


    const click = () => {
        let list = get_filtered_list();

        let text = '';
        for( let i = 0; i < list.length; i++ ){
            let { duration, fileName } = list[ i ];
            let row = `${convert_sec_to_time(duration)}\t${fileName}`;
            text = text + row + '\n';

        };

        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'download-text.txt'; 
        link.click();
        URL.revokeObjectURL(link.href);

    };


    return (

        <div className = 'FRL_ButtonSaveAsTXTFile'>
            <span
                onClick = { click }
                className = 'FRL_btn'
            >Скачать всё как файл .txt</span>
        </div>


    )

};

export function FRL_ButtonSaveAsTXTFile( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <FRL_ButtonSaveAsTXTFileComponent
            { ...props }

            // eventListById = { layout.eventListById }

            // setFreeReleasesIsChanges = { ( val ) => { dispatch( setFreeReleasesIsChanges( val ) ) } }

        />
    );


}
