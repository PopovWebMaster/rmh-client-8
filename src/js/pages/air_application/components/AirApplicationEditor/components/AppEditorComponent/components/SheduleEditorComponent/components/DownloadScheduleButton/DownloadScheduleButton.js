

import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './DownloadScheduleButton.scss';

// import * as XLSX from 'xlsx';
// import * as XLSX from 'sheetjs-style';
import * as XLSX from 'xlsx-js-style';




import { selectorData as applicationSlice  } from './../../../../../../../../../../redux/applicationSlice.js';

import { get_array_of_colum_width } from './vendors/get_array_of_colum_width.js';
import { get_row_1 } from './vendors/get_row_1.js';
import { get_row_6 } from './vendors/get_row_6.js';
import { get_row_7 } from './vendors/get_row_7.js';
import { get_row_8 } from './vendors/get_row_8.js';

import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { AnketaComponent } from './components/AnketaComponent/AnketaComponent.js';



const DownloadScheduleButtonComponent = ( props ) => {

    let {
        Schedule,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );


    const open = () => {
        setIsOpen( true );
    }

    const click = () => {




    };


    return (<>
        <AlertWindowContainer
            isOpen = { isOpen }
            setIsOpen = { setIsOpen }
            title = 'Скачать Exclel'
            width = '40em'
            height = '70vh'
        >
            <AnketaComponent 
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                Schedule = { Schedule }
                
            />
        </AlertWindowContainer>

        <div 
            className = 'SEC_DownloadScheduleButton'
            onClick = { open }
        >
            <span className = 'icon-download-alt icon'></span>
            <span className = 'text'>Скачать Excel</span>

            
        </div>
    </>)

};

export function DownloadScheduleButton( props ){

    const application = useSelector( applicationSlice );

    const dispatch = useDispatch();

    return (
        <DownloadScheduleButtonComponent
            { ...props }

            // currentApplicationId = { application.currentApplicationId }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
