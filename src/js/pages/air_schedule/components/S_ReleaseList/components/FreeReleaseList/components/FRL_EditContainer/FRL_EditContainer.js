
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_EditContainer.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { AWEventSelect } from './../../../../../../../../components/AlertWindowContainer/AWEventSelect/AWEventSelect.js';
import { AWButtonAdd } from './../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { PageBodySaveButton } from './../../../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { get_metadata_from_video_file } from './../../../../../../../../helpers/get_metadata_from_video_file.js';

import { FRL_SaveChangesButton } from './../FRL_SaveChangesButton/FRL_SaveChangesButton.js';
 
import { FRL_AddNewFiles } from './../FRL_AddNewFiles/FRL_AddNewFiles.js';

import { FRL_FilterButtons } from './../FRL_FilterButtons/FRL_FilterButtons.js';
import { FRL_FilterList } from './../FRL_FilterList/FRL_FilterList.js';


const FRL_EditContainerComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

    } = props;

    let [ buttonsHeight, setButtonsHeight ] = useState( 0 );

    



    



    return (
        <div className = 'FRL_EditContainer'>

            <div className = 'FRL_EditContainer_topPanel'>
                <FRL_SaveChangesButton />
            </div>

            <FRL_AddNewFiles
                isOpen = { isOpen }
            />

            <FRL_FilterButtons
                isOpen = { isOpen }
                setButtonsHeight = { setButtonsHeight }
            />

            <FRL_FilterList
                isOpen =        { isOpen }
                buttonsHeight = { buttonsHeight }
            />

        </div>
    )

};

export function FRL_EditContainer( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FRL_EditContainerComponent
            { ...props }

            // releaseList = { scheduleResult.releaseList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
