
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './DownloadExcelButton.scss';

// import { selectorData as scheduleResultSlise } from './../../../../redux/scheduleResultSlise.js';

import { StoreScheduleResultEventsClass } from './../../../../classes/StoreScheduleResultEventsClass.js';
import { AlertWindowContainer } from './../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { DExcelComponent } from './components/DExcelComponent/DExcelComponent.js';


const DownloadExcelButtonComponent = ( props ) => {

    let {
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setIsOpen( true );
    };

    return (<>
        <AlertWindowContainer
            isOpen =        { isOpen }
            setIsOpen =     { setIsOpen }
            title =         'Настройки экспорта'
            width =         '45vw'
            height =        '90vh'
        >
            <DExcelComponent
                isOpen =        { isOpen }
                setIsOpen =     { setIsOpen }
            />
        </AlertWindowContainer>
    
        <div 
            className = 'S_DownloadExcelButton'
            onClick = { click }
        >
            <span className = 'icon-download-alt icon'></span>
            <span className = 'text'>Скачать Excel</span>
        </div>
    </>
        
    )

};


export function DownloadExcelButton( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );

    // const dispatch = useDispatch();

    return (
        <DownloadExcelButtonComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
