
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubReportInDetail.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';


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


import { get_application_list_for_period_from_server } from './../../../../../../vendors/get_application_list_for_period_from_server.js';

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
        
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ pasportName, setPasportName ] = useState( '' );
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

                    let new_rel_list = get_release_list_from_app_list({
                        application_list: list,
                        application_id: application_id,
                        sub_application_id: id,
                    });

                    setPasportReleaseList( new_rel_list );

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
                width =     '60vw'
                height =    '80vh'
            >
                <ScrollContainer height = 'calc( 80vh - 1.6em )'>
                    <div className = 'SA_Item_PasportWrap'>

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

                        <div className = 'SA_Item_PasportButtons_wrap'>

                            <PasportExcelDownload 
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
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubReportInDetailComponent
            { ...props }
            // application = { application }
            currentAppEventId = { application.currentAppEventId }
            currentAppName = { application.currentAppName }


            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
