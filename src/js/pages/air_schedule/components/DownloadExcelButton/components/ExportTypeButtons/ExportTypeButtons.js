
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ExportTypeButtons.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

// import { get_event_style } from './../../../../../../helpers/get_event_style.js';


const ExportTypeButtonsComponent = ( props ) => {

    let {
        exportType,
        setExportType,

    } = props;


    return (
        <div className = 'S_DExcelComponent_ExportTypeButtons'>
            {/* <span className = 'exportTitle'>Вид: </span> */}

            <span 
                className = { `exportItem ${ exportType === 'schedule'? 'isActive': ''}` }
                onClick = { () => { setExportType( 'schedule' ) } }
            >Расписание</span>

            <span 
                className = { `exportItem ${ exportType === 'TV_program'? 'isActive': ''}` }
                onClick = { () => { setExportType( 'TV_program' ) } }
            >Tелепрограмма</span>

        </div>
        
    )

};


export function ExportTypeButtons( props ){

    // const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <ExportTypeButtonsComponent
            { ...props }
            // categoryListById = { layout.categoryListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
