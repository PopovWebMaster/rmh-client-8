
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './ButtonDownloadAsReport.scss';

import { ButtonLeft } from './../ButtonLeft/ButtonLeft.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

const ButtonDownloadAsReportComponent = ( props ) => {

    let {
        filteredList,
        dateListSelected,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ content, setContent ] = useState( '' );

    const click = () => {

        console.dir( 'ButtonDownloadAsReport' );

        const toDataURL = url => fetch( url ).then( response => response.blob() ).then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }))


        toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0').then(dataUrl => {
            console.log('RESULT:', dataUrl)
        })

    };

    
    return (
        <div className = 'PRL_ButtonDownloadAsReport'>
            

            {/* <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                title =     'Текст для вставки в Excel'
                width =     '95vw'
                height =    '95vh'
            >
               <div>
                <></>


               </div>

            </AlertWindowContainer> */}

            <ButtonLeft 
                icon = 'icon-eye-4'
                text = { 'Скачать как отчёт !!!!!!' }
                click = { click }
            />
        </div>
    )

};

export function ButtonDownloadAsReport( props ){

    const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <ButtonDownloadAsReportComponent
            { ...props }
            filteredList = { playReport.filteredList }
            dateListSelected = { playReport.dateListSelected }

            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

