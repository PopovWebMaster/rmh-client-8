
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
import { ScheduleTimeColumn }   from './components/ScheduleTimeColumn/ScheduleTimeColumn.js';
import { ScheduleTable }        from './components/ScheduleTable/ScheduleTable.js';
import { DownloadScheduleButton } from './components/DownloadScheduleButton/DownloadScheduleButton.js';
import { MixModeButton } from './components/MixModeButton/MixModeButton.js';


const SheduleEditorComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,


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
                        <div className = 'SEC_body_left'>
                            <ScheduleTimeColumn 
                                Schedule = { Schedule }
                            />

                        </div>

                        <div className = 'SEC_body_center'>

                            <ScheduleTable 
                                Schedule = { Schedule }
                            />

                        </div>
                        
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

            // setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

        />
    );


}
