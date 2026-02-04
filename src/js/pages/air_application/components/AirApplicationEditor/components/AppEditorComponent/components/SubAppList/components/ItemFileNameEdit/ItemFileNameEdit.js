// ItemFileNameEdit


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemFileNameEdit.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

// import { ItemEditComponent } from './../ItemEditComponent/ItemEditComponent.js';
import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';
import { save_sub_app_changes_on_server } from './../../../../../../vendors/save_sub_app_changes_on_server.js';

// import { new_file_name_is_unic } from './vendors/new_file_name_is_unic.js';

import { YesOrNoTitle } from './../YesOrNoTitle/YesOrNoTitle.js';

// import { get_metadata_from_video_file } from './../../../../../../../../../../helpers/get_metadata_from_video_file.js';

import { AWGetFileForEvent } from './../../../../../../../../../../components/AlertWindowContainer/AWGetFileForEvent/AWGetFileForEvent.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../../../config/layout.js';

import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { ItemEditComponent } from './../ItemEditComponent/ItemEditComponent.js';

const ItemFileNameEditComponent = ( props ) => {

    let {
        id,
        application_id,
        file_names,

        
    } = props;

    let [ isReady,      setIsReady ] = useState( false );
    let [ isOpen,       setIsOpen ] = useState( false );
    let [ nameValue,    setNameValue ] = useState( '' );
    let [ isError,      setIsError ] =  useState( false );
    let [ errorText,    setErrorText ] = useState( '' );
    let [ fileDuration, setFileDuration ] = useState( null );

    useEffect( () => {
        if( isOpen ){

        }else{
            setNameValue( '' );
            setFileDuration( null );
        };

    }, [ isOpen ] );

    useEffect( () => {
        if( nameValue.trim() === '' ){
            setIsReady( false );
        }else{
            
            if( isError ){
                setIsReady( false );
            }else{
                setIsReady( true );
            };
        };

    }, [ nameValue, isError ] );

    const createList = ( arr ) => {

        let h4 = arr.map( ( item, index ) => {
            return (
                <div
                    key = { index }
                >
                    <h4>{ item }</h4>
                    <span
                        className = 'SA_ItemSubFiles_remove icon-cancel-2'
                        onClick = { () => { removeFileName( item ) } }
                    ></span>

                </div>
                
            );
        } );
        return h4;

    };



    const save_click = () => {

        let changedData = {
            file_names: [ ...file_names, nameValue.trim() ],
        };

        if( fileDuration !== null ){
            changedData.duration_sec = fileDuration;
        };

        save_sub_app_changes_on_server({
            subApplicationId: id,
            applicationId: application_id,
            changedData,
            callback: ( response ) => {
                setIsReady( false );
                
                setNameValue( '' );
                setIsError( false );
                setErrorText( '' );
                setFileDuration( null );

            },
        });
    }
    
    const removeFileName = ( fileName ) => {

        let fileNames = [];
        for( let i = 0; i < file_names.length; i++ ){
            if( fileName !== file_names[ i ] ){
                fileNames.push( file_names[ i ] );
            };
        };

        save_sub_app_changes_on_server({
            subApplicationId: id,
            applicationId: application_id,
            changedData: {
                file_names: fileNames,
            },
            callback: ( response ) => {
                setIsReady( false );
                
                setNameValue( '' );
                setIsError( false );
                setErrorText( '' );
                setFileDuration( null );

            },
        });


    }

    const clickOpen = ( e ) => {
        if( e.target.className = 'SA_ItemFileNameEdit'){
            alert( 'opacha' );

        }

    }


    return (

        <div className = 'SA_ItemFileNameEdit'>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                title = 'Имя файла'
                width = '40em'
                height = '60vh'
            >

                { isError? (
                    <p className = 'error'>{ errorText }</p>
                ): '' }

                <div className = 'SA_ItemSubFiles_edit_version'>
                    <h3>Существующие версии:</h3>
                    

                    { createList( file_names ) }

                </div>

                <AWGetFileForEvent
                    fileName =          { nameValue }
                    setFileName =       { setNameValue }
                    fileDuration =      { fileDuration }
                    setFileDuration =   { setFileDuration }
                />

                
                <AlertWindowContainerSaveAdd 
                    isActive =      { isReady }
                    clickHandler =  { save_click }
                />


            </AlertWindowContainer>


            <YesOrNoTitle
                title = { 'Имя файла' }
                booleanValue = { file_names.length > 0 }
            />
            {/* <span 
                className = 'icon-edit'
                onClick = { () => { setIsOpen( true ) } }
            ></span> */}

            <div
                className = 'SA_ItemFileNameEdit_btn'
                onClick = { () => { setIsOpen( true ) } }
            ></div>


        </div>
    )

};



export function ItemFileNameEdit( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemFileNameEditComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
