
import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SheduleEditorComponent.scss';

// import { useNavigate } from "react-router-dom";

import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../redux/companySlice.js';


import { UpdateCurrentSubAppData } from './../UpdateCurrentSubAppData/UpdateCurrentSubAppData.js';
import { CharClass } from './../../../../../../../../classes/CharClass.js';

import { ScrollContainer } from './../../../../../../../..//components/ScrollContainer/ScrollContainer.js';

import { CharHeader } from './components/CharHeader/CharHeader.js';
import { CharTimeColumn } from './components/CharTimeColumn/CharTimeColumn.js';
import { CharTable } from './components/CharTable/CharTable.js';

import { EnvironmentShow } from './components/EnvironmentShow/EnvironmentShow.js';


const SheduleEditorComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        application,
        sub_application_id,

    } = props;

    let [ Char, setChar ] = useState( null );
    let [ isReady, setIsReady ] = useState( false );


    let [ timePoints, setTimePoints ] = useState( [] );
    let [ charType, setCharType ] = useState( null );
    let [ releareCount, setReleareCount ] = useState( 0 );
    let [ releareName, setReleareName ] = useState( '' );
    let [ releaseName, setReleaseName ] = useState( '' );

    let [ category, setCategory ] = useState( null );
    let [ event, setEvent ] = useState( null );

    let [ dayList, setDayList ] = useState( [] );







    useEffect( () => {
        if( isOpen ){
            setChar( new CharClass() );
        }else{
            setChar( null );
        };
    }, [ isOpen ] );

    useEffect( () => {
        if( Char === null ){
            clearData();
            setIsReady( false );
        }else{
            updateData();
            setIsReady( true );
        };

    }, [ Char ] );

    // let Char = useMemo( () => {
    //     if( isOpen ){
    //         let Char = new CharClass();
    //         Char.SetSubApplicationData( sub_application_id );
    //         return Char;
    //     }else{
    //         return null;
    //     };
        
    // }, [ isOpen ] );

    const updateData = () => {
        setCharType( Char.charType );
        setReleareCount(100);
        setReleaseName( Char.SubApplication.name );
        setCategory( Char.Category.GetData() );
        setEvent( Char.Event.GetData() );

    };
    const clearData = () => {
        setCharType( null );
        setReleareCount( 0 );
        setReleaseName( '' );
        setCategory( null );
        setEvent( null );
    }

    const addTimePoints = ( sec ) => {
        Char.AddTimePoint( sec );
        setTimePoints( Char.GetTimePointList() );
        setDayList( Char.GetDayList() );

        
    };
    const clickTimePoint = ( sec ) => {
        // Char.ClickTimePoint( sec );
    }

    const releaseToggle = ( data ) => {
        Char.ReleaseInDayToggle( data );
        setDayList( Char.GetDayList() );
    }

    const dayReleaseToggle = ( YYYY_MM_DD ) => {
        Char.AllDayReleaseToggle( YYYY_MM_DD );
        setDayList( Char.GetDayList() );
    }

    const timePointReleaseToggle = ( sec ) => {
        Char.TimePointReleaseToggle( sec );
        setDayList( Char.GetDayList() );
    }






    return (
        <div className = 'sheduleEditorComponent'>

            <EnvironmentShow />

            <UpdateCurrentSubAppData>

                { isReady? (<>

                    <CharHeader 
                        charType =      { charType }
                        releareCount =  { releareCount }
                        releaseName =   { releaseName }
                        category =      { category }
                        event =         { event }
                        

                    />
                    

                    <div className = 'SEC_body'>
                        <div className = 'SEC_body_left'>

                            <CharTimeColumn 
                                charType =      { charType }
                                timePoints =    { timePoints }
                                addTimePoints = { addTimePoints }
                                clickTimePoint = { timePointReleaseToggle }
                                
                            />

                        </div>

                        <div className = 'SEC_body_center'>

                            <CharTable 
                                dayList =   { dayList }
                                charType =  { charType }
                                releaseName =   { releaseName }
                                releaseToggle = { releaseToggle }
                                dayReleaseToggle = { dayReleaseToggle }
                            />

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
