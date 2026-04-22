
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TabTitle.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';


import { PasportName }          from './../PasportName/PasportName.js';
import { PasportFileName }      from './../PasportFileName/PasportFileName.js';
import { PasportPeriod }        from './../PasportPeriod/PasportPeriod.js';
import { PasportDuration }      from './../PasportDuration/PasportDuration.js';
import { PasportNotes }         from './../PasportNotes/PasportNotes.js';
import { PasportDescription }   from './../PasportDescription/PasportDescription.js';
import { PasportTotalCount }    from './../PasportTotalCount/PasportTotalCount.js';
import { PasportTotalDuration } from './../PasportTotalDuration/PasportTotalDuration.js';
// import { PasportExcelDownload } from './../PasportExcelDownload/PasportExcelDownload.js';
import { PasportAppName }       from './../PasportAppName/PasportAppName.js';

const TabTitleComponent = ( props ) => {

    let {
        // pasportAppName,
        // setPasportAppName,
        // pasportName,
        // setPasportName,
        // pasportFileName,
        // setPasportFileName,
        period_from,
        period_to,
        duration_sec,
        pasportTotalCount,
        pasportNotes,
        setPasportNotes,
        pasportDescription,
        setPasportDescription,

        
    } = props;


    return (
        <div className = 'SA_TabTitle'>

          
            {/* <PasportAppName
                pasportAppName =       { pasportAppName }
                setPasportAppName =    { setPasportAppName }
            /> */}

            {/* <PasportName 
                pasportName =       { pasportName }
                setPasportName =    { setPasportName }
            /> */}

            {/* <PasportFileName
                pasportFileName = { pasportFileName }
                setPasportFileName = { setPasportFileName }
            /> */}
            <PasportPeriod
                period_from =   { period_from }
                period_to =     { period_to }
            />

            <PasportDuration
                duration_sec = { duration_sec }
            />

            <PasportTotalCount
                pasportTotalCount = { pasportTotalCount }
            />
            <PasportTotalDuration
                duration_sec = { duration_sec*pasportTotalCount }
            />

            <PasportNotes
                pasportNotes = { pasportNotes }
                setPasportNotes = { setPasportNotes }
            />
            <PasportDescription
                pasportDescription = { pasportDescription }
                setPasportDescription = { setPasportDescription }
            />

                       
                    
        </div>
    )

};

export function TabTitle( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <TabTitleComponent
            { ...props }
            // application = { application }
            // currentAppEventId = { application.currentAppEventId }
            // currentAppName = { application.currentAppName }


            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
