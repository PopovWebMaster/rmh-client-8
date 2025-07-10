
import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SheduleEditorComponent.scss';

// import { useNavigate } from "react-router-dom";

import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../redux/companySlice.js';

import { 
    selectorData as scheduleSlise,
    // shceduleCreate,
    // shceduleRemove,

} from './../../../../../../../../redux/scheduleSlise.js';


import { UpdateCurrentSubAppData } from './../UpdateCurrentSubAppData/UpdateCurrentSubAppData.js';
import { CharClass } from './../../../../../../../../classes/CharClass.js';
import { ScheduleClass } from './../../../../../../../../classes/ScheduleClass.js';

import { ScrollContainer } from './../../../../../../../..//components/ScrollContainer/ScrollContainer.js';

import { CharHeader } from './components/CharHeader/CharHeader.js';
import { CharTimeColumn } from './components/CharTimeColumn/CharTimeColumn.js';
import { CharTable } from './components/CharTable/CharTable.js';

import { EnvironmentShow } from './components/EnvironmentShow/EnvironmentShow.js';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

import { set_application_data_to_store } from './../../../../vendors/set_application_data_to_store.js';

import { ScheduleHeader } from './components/ScheduleHeader/ScheduleHeader.js';
import { ScheduleSaveButton } from './components/ScheduleSaveButton/ScheduleSaveButton.js';
import { ScheduleTimeColumn } from './components/ScheduleTimeColumn/ScheduleTimeColumn.js';
import { ScheduleTable } from './components/ScheduleTable/ScheduleTable.js';


const SheduleEditorComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        application,
        sub_application_id,


        setSpinnerIsActive,






        // shceduleCreate,
        // shceduleRemove,






    } = props;

    let [ Char, setChar ] = useState( null );
    let [ Schedule, setSchedule ] = useState( null );




    let [ isReady, setIsReady ] = useState( false );
    let [ isChanged, setIsChanged ] = useState( false );



    let [ timePoints, setTimePoints ] = useState( [] );
    let [ charType, setCharType ] = useState( null );
    let [ releaseCount, setReleaseCount ] = useState( 0 );
    let [ releaseName, setReleaseName ] = useState( '' );
    let [ releaseDuration, setReleaseDuration ] = useState( 0 );
    let [ allReleaseDuration, setAllReleaseDuration ] = useState( 0 );

    let [ periodFrom, setPeriodFrom ] = useState( null );
    let [ periodTo, setPeriodTo ] = useState( null );





    let [ category, setCategory ] = useState( null );
    let [ event, setEvent ] = useState( null );

    let [ dayList, setDayList ] = useState( [] );



    useEffect( () => {
        if( isOpen ){
            // setChar( new CharClass() );
            setSchedule( new ScheduleClass() );


        }else{
            // setChar( null );

            // Schedule.Remove();
            setSchedule( null );

        };
    }, [ isOpen ] );

    // useEffect( () => {
    //     if( Char === null ){
    //         // clearData();
    //         setIsReady( false );
    //     }else{
    //         // updateData();
    //         setIsReady( true );
    //     };

    // }, [ Char ] );


    useEffect( () => {
        if( Schedule === null ){
            setIsReady( false );
        }else{
            
            Schedule.Create();
            setIsReady( true );
        };

    }, [ Schedule ] );








    const updateData = () => {
        setCharType( Char.charType );// est'
        setReleaseName( Char.SubApplication.name );// est'
        setReleaseDuration( Char.SubApplication.duration_sec );// est'
        setCategory( Char.Category.GetData() );// est'
        setEvent( Char.Event.GetData() ); // est'
        setPeriodFrom( Char.SubApplication.period_from ); // est'
        setPeriodTo( Char.SubApplication.period_to ); // est'

        
        setDayList( Char.Days.GetDayList() ); // est'
        setReleaseCount( Char.Days.GetAllReleaseLength() ); // est'
        setAllReleaseDuration( Char.Days.GetAllReleaseDuration() ); // est'

        setTimePoints( Char.GetTimePointList() ); // est'
        setIsChanged( false );

    };
    const clearData = () => {
        setCharType( null );
        setReleaseCount( 0 );
        setReleaseName( '' );
        setReleaseDuration( 0 );
        setAllReleaseDuration( 0 );
        setCategory( null );
        setEvent( null );
        setPeriodFrom( null );
        setPeriodTo( null );
        setTimePoints( [] );
        setIsChanged( false );
    }

    const addTimePoints = ( sec ) => {
        // Char.AddTimePoint( sec );
        // setTimePoints( Char.GetTimePointList() );
        // setDayList( Char.Days.GetDayList() );
        // setReleaseCount( Char.Days.GetAllReleaseLength() );
        // setAllReleaseDuration( Char.Days.GetAllReleaseDuration() );
        // setIsChanged( true );

    };

    const releaseToggle = ( data ) => {
        // Char.ReleaseInDayToggle( data );
        // setDayList( Char.Days.GetDayList() );
        // setReleaseCount( Char.Days.GetAllReleaseLength() );
        // setAllReleaseDuration( Char.Days.GetAllReleaseDuration() );
        // setIsChanged( true );
    }

    const dayReleaseToggle = ( YYYY_MM_DD ) => {
        // Char.AllDayReleaseToggle( YYYY_MM_DD );
        // setDayList( Char.Days.GetDayList() );
        // setReleaseCount( Char.Days.GetAllReleaseLength() );
        // setAllReleaseDuration( Char.Days.GetAllReleaseDuration() );
        // setIsChanged( true );
    }

    const timePointReleaseToggle = ( sec ) => {
        // Char.TimePointReleaseToggle( sec );
        // setDayList( Char.Days.GetDayList() );
        // setReleaseCount( Char.Days.GetAllReleaseLength() );
        // setAllReleaseDuration( Char.Days.GetAllReleaseDuration() );
        // setIsChanged( true );
    }


    const save_release_list = () => {

        // setSpinnerIsActive( true );

        // const send = () => {
        //     send_request_to_server({
        //         route: 'save-sub-application-release',
        //         data: Char.GetReseaseData(),
        //         successCallback: ( response ) => {
        //             console.dir( 'response' );
        //             console.dir( response );
        //             if( response.ok ){
        //                 setSpinnerIsActive( false );
        //                 set_application_data_to_store( response.application, response.applicationList );

        //                 setIsChanged( false );

        //                 setChar( new CharClass() );
        //             };
        //         },
        //         errorCallback: () => {
        //             send();
        //         }
        //     });
        // };

        // send();

    }




    return (
        <div className = 'sheduleEditorComponent'>

            <EnvironmentShow />

            <UpdateCurrentSubAppData>

                { isReady? (<>

                    {/* <CharHeader 
                        charType =      { charType }
                        releareCount =  { releaseCount }
                        releaseName =   { releaseName }
                        category =      { category }
                        event =         { event }

                        releaseDuration =       { releaseDuration }
                        allReleaseDuration =    { allReleaseDuration }

                        periodFrom =    { periodFrom }
                        periodTo =    { periodTo }
                        save_release_list = { save_release_list }
                        isChanged = { isChanged }

                    /> */}

                    <ScheduleHeader>
                        <ScheduleSaveButton
                            Schedule =      { Schedule }
                            setSchedule =   { setSchedule }
                        />
                    </ScheduleHeader>
                    

                    <div className = 'SEC_body'>
                        <div className = 'SEC_body_left'>

                            {/* <CharTimeColumn 
                                charType =      { charType }
                                timePoints =    { timePoints }
                                addTimePoints = { addTimePoints }
                                clickTimePoint = { timePointReleaseToggle }
                                
                            /> */}

                            <ScheduleTimeColumn 
                                Schedule = { Schedule }
                            />

                        </div>

                        <div className = 'SEC_body_center'>

                            <ScheduleTable 
                                Schedule = { Schedule }
                            />

                            {/* <CharTable 
                                dayList =   { dayList }
                                charType =  { charType }
                                releaseName =   { releaseName }
                                releaseToggle = { releaseToggle }
                                dayReleaseToggle = { dayReleaseToggle }
                            /> */}

                        </div>
                        
                    </div>
                
                </>): '' }

            </UpdateCurrentSubAppData>

        </div>
    )

};

export function SheduleEditorComponent( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <SheduleEditorComponentComponent
            { ...props }
            

// shceduleCreate = { ( val ) => { dispatch( shceduleCreate( val ) ) } }
// shceduleRemove = { ( val ) => { dispatch( shceduleRemove( val ) ) } }







            currentApplicationId = { application.currentApplicationId }
            application = { application }

            currentCompanyAlias = { company.currentCompanyAlias }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


            setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }







        />
    );


}
