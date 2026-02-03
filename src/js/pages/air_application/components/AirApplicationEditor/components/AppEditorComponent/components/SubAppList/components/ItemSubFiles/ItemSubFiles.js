
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubFiles.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

// import { ItemEditComponent } from './../ItemEditComponent/ItemEditComponent.js';
// import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';
import { save_sub_app_changes_on_server } from './../../../../../../vendors/save_sub_app_changes_on_server.js';

// import { new_file_name_is_unic } from './vendors/new_file_name_is_unic.js';

import { YesOrNoTitle } from './../YesOrNoTitle/YesOrNoTitle.js';

// import { get_metadata_from_video_file } from './../../../../../../../../../../helpers/get_metadata_from_video_file.js';

import { AWGetFileForEvent } from './../../../../../../../../../../components/AlertWindowContainer/AWGetFileForEvent/AWGetFileForEvent.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../../../config/layout.js';

import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

const ItemSubFilesComponent = ( props ) => {

    let {
        id,
        application_id,
        file_names,

        
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    let [ isOpen, setIsOpen ] = useState( false );
    
    let [ nameValue,    setNameValue ] = useState( '' );
    let [ isError,      setIsError ] =  useState( false );
    let [ errorText,    setErrorText ] = useState( '' );

    let [ fileDuration, setFileDuration ] = useState( MIN_EVENT_DURATION_SEC );
    let [ fileDuration_, setFileDuration_ ] = useState( MIN_EVENT_DURATION_SEC );





    let inputRef = useRef();

    // const inputRef_hidden = useRef();
    
    // const click = () => {

    //     let accept = [ '.mp4', '.mxf' ];
    //     let input = inputRef_hidden.current;
    //     input.setAttribute('accept', accept.join(',') );
    //     input.click();

    // };

    // const inputHandler = (e) => {

    //     if( !e.target.files.length ){
    //         return;
    //     };

    //     get_metadata_from_video_file( e.target.files[0], ( fileName, fileDuration ) => {

    //         setNameValue( fileName );
    //         setIsError( false );
    //         setErrorText( '' );

    //         if( fileDuration !== null ){
    //             setFileDuration( fileDuration )
    //         };

    //     } );

    // };

    useEffect( () => {
        if( nameValue.trim() === '' ){
            setIsReady( false );
        }else{
            
            if( isError ){
                setIsReady( false );
            }else{
                setIsReady( true );
            };

            // setFileDuration( MIN_EVENT_DURATION_SEC );
        };

    }, [ nameValue, isError ] );

    // useEffect( () => {

    //     console.dir( 'fileDuration <<<<<<<<<' );
    //     console.dir( fileDuration );

    //     if( fileDuration === null  ){
    //         setFileDuration( MIN_EVENT_DURATION_SEC );
    //     }else{
            
           
    //     };

    // }, [ fileDuration ] );

    // const change_name = ( e ) => {
    //     let val = e.target.value;
    //     setNameValue( val );
    //     setIsError( false );
    //     setErrorText( '' );
    // };

    const acceptName = () => {
        let nameTrim = nameValue.trim();
        if( nameTrim === '' ){
            setIsReady( false );
        }else{
            // let chackRes = new_file_name_is_unic( nameTrim );
            // if( chackRes.isUnic ){
                setNameValue( nameTrim );
            // }else{
                
                // setIsError( true );
            //     setErrorText( `В эфире уже существует файл с таким именем, это имя нельзя использовать. Повтор в заявке - "${chackRes.repeatApplication}", выпуск -  ${chackRes.repeatSubApplication}` );
            // };
        };
    };


    
    const enter = ( e ) => {
        if( e.which === 13 ){
            acceptName();
            inputRef.current.blur();
        };
    };

    const blur = () => {
        acceptName();
    }

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


    return (

        // <div className = 'SA_ItemEditComponent'>
            

            <div className = 'SA_ItemSubFiles'>

                <YesOrNoTitle
                        title = { 'Имя файла' }
                        booleanValue = { file_names.length > 0 }
                />

                <AlertWindowContainer
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }
                    title =     'Привязать файл'
                    width =     '45vw'
                    height =    '60vh'
                >

                    {/* <div className = 'SA_ItemEditComponent'>
                                <span 
                                    className = 'icon-edit'
                                    onClick = { () => { setIsOpen( true ) } }
                                ></span>
                    
                                <AlertWindowContainer
                                    isOpen =    { isOpen }
                                    setIsOpen = { setIsOpen }
                                    width =     { '40em' }
                                    height =    { '60em' }
                                >
                                    <>{ children }</>
                    
                                </AlertWindowContainer>
                            </div> */}

                    <div className = 'SA_ItemSubFiles_edit'>
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
                            fileDuration =      { fileDuration_ }
                            setFileDuration =   { setFileDuration_ }
                        
                        />

                    </div>

                
                </AlertWindowContainer>

                

            
            </div>

            // <span 
            //     className = 'icon-edit'
            //     onClick = { () => { setIsOpen( true ) } }
            // ></span>
        // </div>
    )

};









// <ItemEditComponent>

//                 <div className = 'SA_ItemSubFiles_edit'>
//                     <h3>Новое названия для файла:</h3>

//                     <input 
//                         type =          'text'
//                         ref =           { inputRef }
//                         value =         { nameValue }
//                         onChange =      { change_name }
//                         maxLength =     { 255 }
//                         onKeyDown =     { enter }
//                         onBlur =        { blur }
//                         placeholder =   { "имя новой версии файла" }
//                     />

//                     { isError? (
//                         <p className = 'error'>{ errorText }</p>
//                     ): '' }

//                     <div className = 'SA_ItemSubFiles_edit_version_take_from_folder'>
//                         <span
//                             onClick = { click }
//                             className = 'SA_take_from_folder_btn'
//                         >Взять из папки</span>
//                         <input 
//                             type =          'file' 
//                             ref =           { inputRef_hidden }
//                             className =     'SA_take_from_folder_inp_file'
//                             onChange =      { inputHandler }
//                         />
//                     </div>










//                     <div className = 'SA_ItemSubFiles_edit_version'>
//                         <h3>Существующие версии:</h3>
                        

//                         { createList( file_names ) }

//                     </div>

//                     <AWGetFileForEvent
//                         fileName =          { nameValue }
//                         setFileName =       { setNameValue }
//                         fileDuration =      { fileDuration_ }
//                         setFileDuration =   { setFileDuration_ }
                    
//                     />


//                 </div>

//                 <AlertWindowContainerSaveAdd 
//                     isActive =      { isReady }
//                     clickHandler =  { save_click }
//                 />
//             </ItemEditComponent>































export function ItemSubFiles( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubFilesComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
