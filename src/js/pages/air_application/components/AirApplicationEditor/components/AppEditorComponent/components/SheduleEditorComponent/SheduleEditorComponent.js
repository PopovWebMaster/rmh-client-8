
import React, { useRef, useState, useEffect }   from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SheduleEditorComponent.scss';

// import { selectorData as applicationSlice} from './../../../../../../../../redux/applicationSlice.js';

import { UpdateCurrentSubAppData } from './../UpdateCurrentSubAppData/UpdateCurrentSubAppData.js';
import { ScheduleClass } from './../../../../../../../../classes/ScheduleClass.js';

import { EnvironmentShow }      from './components/EnvironmentShow/EnvironmentShow.js';
import { ScheduleHeader }       from './components/ScheduleHeader/ScheduleHeader.js';
import { ScheduleSaveButton }   from './components/ScheduleSaveButton/ScheduleSaveButton.js';
// import { ScheduleTimeColumn }   from './components/ScheduleTimeColumn/ScheduleTimeColumn.js';
// import { ScheduleTable }        from './components/ScheduleTable/ScheduleTable.js';
import { DownloadScheduleButton } from './components/DownloadScheduleButton/DownloadScheduleButton.js';
import { MixModeButton } from './components/MixModeButton/MixModeButton.js';
import { ShortModeButton } from './components/ShortModeButton/ShortModeButton.js';
 
// import { ScheduleBodyTypeTable } from './components/ScheduleBodyTypeTable/ScheduleBodyTypeTable.js';
import { TableTypeDetaile } from './components/TableTypeDetaile/TableTypeDetaile.js';


const SheduleEditorComponentComponent = ( props ) => {

    let {
        isOpen,
        // setIsOpen,

        // applicationList,


    } = props;

    let [ Schedule, setSchedule ] = useState( null );
    let [ isReady, setIsReady ] = useState( false );

    const tbl = useRef();

    useEffect( () => {
        if( isOpen ){
            setSchedule( new ScheduleClass() );
            
        }else{
            if( Schedule !== null ){
                Schedule.Remove();
            };
            setSchedule( null );

        };
    }, [ isOpen ] );



    useEffect( () => {

        if( Schedule === null ){
            setIsReady( false );
        }else{
            Schedule.Create();
            setIsReady( true );
        };

    }, [ Schedule ] );


    return (
        <div className = 'sheduleEditorComponent'>

            <EnvironmentShow />

            <UpdateCurrentSubAppData>

                { isReady? (<>

                    <ScheduleHeader>

                        <ShortModeButton />

                        <MixModeButton />

                        <DownloadScheduleButton 
                            Schedule =      { Schedule }
                        />

                        <ScheduleSaveButton
                            Schedule =      { Schedule }
                            setSchedule =   { setSchedule }
                        />

                    </ScheduleHeader>
                    

                    <div className = 'SEC_body'>

                        {/* <ScheduleBodyTypeTable Schedule = { Schedule } /> */}

                        <TableTypeDetaile 
                            isActive = { true }
                            Schedule = { Schedule }

                        />

                    
                    </div>
                
                </>): '' }

            </UpdateCurrentSubAppData>

        </div>
    )

};

export function SheduleEditorComponent( props ){

    // const application = useSelector( applicationSlice );
    // const dispatch = useDispatch();

    return (
        <SheduleEditorComponentComponent
            { ...props }

            // applicationList = { application.applicationList }

            // setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

        />
    );


}
