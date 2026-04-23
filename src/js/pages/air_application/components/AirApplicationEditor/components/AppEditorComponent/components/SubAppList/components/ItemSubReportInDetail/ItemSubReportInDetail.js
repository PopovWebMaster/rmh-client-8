
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubReportInDetail.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../../../redux/applicationSlice.js';
import { selectorData as companySlice } from './../../../../../../../../../../redux/companySlice.js';

// import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../../../redux/applicationSlice.js';

import { 
    selectorData as currentSubApplicationSlise,
    setCurrentSubAppId,
    setReleaseDuration,
    setReleaseName,
    setPeriodFrom,
    setPeriodTo,
    // setModeMix,
    // setModeShort
} from './../../../../../../../../../../redux/currentSubApplicationSlise.js';


import { set_current_application_data_from_server } from './../../../../../../vendors/set_current_application_data_from_server.js';



import JSZip from 'jszip';
import FileSaver from 'file-saver';

import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';
import { PasportName } from './components/PasportName/PasportName.js';
import { PasportFileName } from './components/PasportFileName/PasportFileName.js';
import { PasportPeriod } from './components/PasportPeriod/PasportPeriod.js';
import { PasportDuration } from './components/PasportDuration/PasportDuration.js';
import { PasportNotes } from './components/PasportNotes/PasportNotes.js';
import { PasportDescription } from './components/PasportDescription/PasportDescription.js';
import { PasportTotalCount } from './components/PasportTotalCount/PasportTotalCount.js';
import { PasportTotalDuration } from './components/PasportTotalDuration/PasportTotalDuration.js';
import { PasportExcelDownload } from './components/PasportExcelDownload/PasportExcelDownload.js';
import { PasportAppName } from './components/PasportAppName/PasportAppName.js';
import { PasportColontitul } from './components/PasportColontitul/PasportColontitul.js';
import { PasportExecutor } from './components/PasportExecutor/PasportExecutor.js';
import { PasportPrice } from './components/PasportPrice/PasportPrice.js';
import { PasportPricePrime } from './components/PasportPricePrime/PasportPricePrime.js';
import { PasportZipDownload } from './components/PasportZipDownload/PasportZipDownload.js';

 
import { TabTitle } from './components/TabTitle/TabTitle.js';

import { SelectAnketaType } from './../../../SheduleEditorComponent/components/DownloadScheduleButton/components/SelectAnketaType/SelectAnketaType.js';

import { get_application_list_for_period_from_server }  from './../../../../../../vendors/get_application_list_for_period_from_server.js';
import { set_application_data_to_store }                from './../../../../../../vendors/set_application_data_to_store.js';

import { get_release_list_from_app_list } from './vendors/get_release_list_from_app_list.js';
 

const ItemSubReportInDetailComponent = ( props ) => {

    let {
        id,
        air_notes,
        application_id,
        duration_sec,
        name,
        period_from,
        period_to,
        serial_num,
        type,
        file_names,
        description,
        release_list,
        release_list_count,

        currentAppName,


        currentAppEventId,
        companyLegalName,
        
        setApplicationList,
        setCurrentSubAppId,
        setReleaseDuration,
        setReleaseName,
        setPeriodFrom,
            setPeriodTo,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ isFinishUpdate, setIsFinishUpdate ] = useState( false );

    useEffect( () => {
        if( isOpen === false && isFinishUpdate === true ){
            set_current_application_data_from_server( () => {} );
            setIsFinishUpdate( false );
        };

    }, [ isOpen, isFinishUpdate ] );

    let [ anketaType, setAnketaType ] = useState( 'table' ); // 'table' 'thema' table_vizitka


    let [ pasportName, setPasportName ] = useState( '' );
    let [ pasportColontitul, setPasportColontitul ] = useState( 'Приложение 1 к Договору №_01-61/02 от 14.01.2025  на оказание услуг (выполнения работ) в сфере телевещания' );
    let [ pasportExecutor, setPasportExecutor ] = useState( 'ГУП ДНР  "РМХ"' );
    let [ pasportPrice, setPasportPrice ] = useState( 28 );
    let [ pasportPricePrime, setPasportPricePrime ] = useState( 36 );
    let [ pasportMediaName, setPasportMediaName ] = useState( companyLegalName );


    let [ pasportAppName, setPasportAppName ] = useState( '' );
    let [ pasportFileName, setPasportFileName ] = useState( '' );
    let [ pasportNotes, setPasportNotes ] = useState( '' );
    let [ pasportDescription, setPasportDescription ] = useState( '' );
    let [ pasportTotalCount, setPasportTotalCount ] = useState( 0 );
    let [ pasportReleaseList, setPasportReleaseList ] = useState( [] );


    useEffect( () => {
        if( isOpen ){

            get_application_list_for_period_from_server({
                period_from,
                period_to,
                eventId: currentAppEventId,
                applicationId: application_id,
                callback: ( list ) => {

                    setPasportName( name );
                    setPasportFileName( getFileName( file_names ) );
                    setPasportNotes( air_notes === null? '': air_notes );
                    setPasportDescription( description === null? '': description );
                    setPasportTotalCount( release_list_count );
                    setPasportAppName( currentAppName );

                    setPasportColontitul( 'Приложение 1 к Договору №_01-61/02 от 14.01.2025  на оказание услуг (выполнения работ) в сфере телевещания' );
                    setPasportExecutor( 'ГУП ДНР  "РМХ"' );
                    setPasportPrice( 28 );
                    setPasportPricePrime( 36 );

                    setCurrentSubAppId( id );
                    setReleaseDuration( duration_sec );
                    setReleaseName( name );
                    setPeriodFrom( period_from );
                    setPeriodTo( period_to );

                    setIsFinishUpdate( true );


                    let new_rel_list = get_release_list_from_app_list({
                        application_list: list,
                        application_id: application_id,
                        sub_application_id: id,
                    });

                    setPasportReleaseList( new_rel_list );

                    setApplicationList( list );

                    for( let i = 0; i < list.length; i++ ){
                        if( list[ i ].id === application_id ){
                            set_application_data_to_store( list[ i ] );
                            break;
                        };
                    };

                    // set_application_data_to_store( new_rel_list );

                }
            });

        }else{
            setPasportName( '' );
            setPasportFileName( '' );
            setPasportNotes( '' );
            setPasportDescription( '' );
            setPasportTotalCount( 0 );
            setPasportAppName( '' );
            setPasportReleaseList( [] );
        };

    }, [ 
        isOpen,
    ] );

    const click = () => {

        setIsOpen( true );


    }

    const getFileName = ( file_names ) => {
        let result = '';

        if( file_names !== null ){
            if( file_names[ file_names.length - 1 ] ){
                result = file_names[ file_names.length - 1 ];
            };
        };
        return result;
    };




    
    
    return (
        <div className = 'SA_ItemSubReportInDetail'>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                title =     'Проект'
                width =     '65vw'
                height =    '90vh'
            >
                <ScrollContainer height = 'calc( 90vh - 1.6em )'>


                    <div className = 'SA_Item_PasportWrap'>

                        <div className = 'SA_Item_PasportButtons_wrap'>

                            <PasportExcelDownload 
                                anketaType =            { anketaType }
                                pasportColontitul =     { pasportColontitul }
                                pasportExecutor =       { pasportExecutor }
                                pasportPrice =          { pasportPrice }
                                pasportPricePrime =     { pasportPricePrime }
                                pasportMediaName =      { pasportMediaName }
                                pasportAppName =        { pasportAppName }
                                pasportName =           { pasportName }
                                pasportFileName =       { pasportFileName }
                                pasportNotes =          { pasportNotes }
                                pasportDescription =    { pasportDescription }
                                period_from =           { period_from }
                                period_to =             { period_to }
                                duration_sec =          { duration_sec }
                                pasportReleaseList =    { pasportReleaseList }
                            />

                            <PasportZipDownload 
                                anketaType =            { anketaType }
                                pasportColontitul =     { pasportColontitul }
                                pasportExecutor =       { pasportExecutor }
                                pasportPrice =          { pasportPrice }
                                pasportPricePrime =     { pasportPricePrime }
                                pasportMediaName =      { pasportMediaName }
                                pasportAppName =        { pasportAppName }
                                pasportName =           { pasportName }
                                pasportFileName =       { pasportFileName }
                                pasportNotes =          { pasportNotes }
                                pasportDescription =    { pasportDescription }
                                period_from =           { period_from }
                                period_to =             { period_to }
                                duration_sec =          { duration_sec }
                                pasportReleaseList =    { pasportReleaseList }
                            />



                            

                        </div>

                        <PasportExecutor
                            pasportExecutor =       { pasportExecutor }
                            setPasportExecutor =    { setPasportExecutor }
                        />

                        <PasportAppName
                            pasportAppName =       { pasportAppName }
                            setPasportAppName =    { setPasportAppName }
                        />

                        <PasportName 
                            pasportName =       { pasportName }
                            setPasportName =    { setPasportName }
                        />

                        <PasportFileName
                            pasportFileName = { pasportFileName }
                            setPasportFileName = { setPasportFileName }
                        />

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

                        {/* <PasportColontitul
                            pasportColontitul = { pasportColontitul }
                            setPasportColontitul = { setPasportColontitul }
                        /> */}

                        <SelectAnketaType 
                            anketaType =    { anketaType }
                            setAnketaType = { setAnketaType }
                            itemList = { [
                                {
                                    type: 'table',
                                    name: 'Таблица',
                                },
                                {
                                    type: 'thema',
                                    name: 'Сюжет',
                                },
                                {
                                    type: 'table_vizitka',
                                    name: 'Визитка',
                                },
                            ] }
                        />

                        { anketaType === 'table'? (<>
                            <PasportPrice
                                pasportPrice = { pasportPrice }
                                setPasportPrice = { setPasportPrice }
                            />

                            <PasportPricePrime
                                pasportPricePrime = { pasportPricePrime }
                                setPasportPricePrime = { setPasportPricePrime }
                            />
                        </>): '' }


                    </div> 
                </ScrollContainer>
            </AlertWindowContainer>

            <span 
                className = 'SA_ItemSubReportInDetail_btn'
                onClick = { click }
            >Passport</span>
           

        </div>
    )

};

export function ItemSubReportInDetail( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );


    
    // const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <ItemSubReportInDetailComponent
            { ...props }
            // application = { application }
            currentAppEventId = { application.currentAppEventId }
            currentAppName = { application.currentAppName }
            companyLegalName = { company.companyLegalName }





            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }
            setCurrentSubAppId = { ( val ) => { dispatch( setCurrentSubAppId( val ) ) } }
            setReleaseDuration = { ( val ) => { dispatch( setReleaseDuration( val ) ) } }
            setReleaseName = { ( val ) => { dispatch( setReleaseName( val ) ) } }
            setPeriodFrom = { ( val ) => { dispatch( setPeriodFrom( val ) ) } }
            setPeriodTo = { ( val ) => { dispatch( setPeriodTo( val ) ) } }




        />
    );


}
