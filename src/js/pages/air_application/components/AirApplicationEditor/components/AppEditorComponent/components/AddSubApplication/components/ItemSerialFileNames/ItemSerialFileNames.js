
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemSerialFileNames.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { convert_sec_to_time } from './../../../../../../../../../../helpers/convert_sec_to_time.js'


const ItemSerialFileNamesComponent = ( props ) => {

    let {
        isOpen,

        serialNames,
        serialFileNames,
        setSerialFileNames,
        durationSec,

    } = props;

    let [ dataFolder, setDataFolder ] = useState( [] );
    let [ dataFolderActiveIndex, setDataFolderActiveIndex] = useState( null );


    
    const inputRef = useRef();

    const click = () => {

        let accept = [ '.mp4', '.mxf' ];
        let input = inputRef.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();

    };

    useEffect( () => {
        if( isOpen ){
            updateFileNames();
        }else{
            setSerialFileNames( {} );
            setDataFolder( [] );
            setDataFolderActiveIndex( null );
        };

    }, [ isOpen ] );

    useEffect( () => {
        updateFileNames();
    }, [ serialNames, durationSec ] );

    const updateFileNames = () => {
        let obj = {};
        for( let key in serialNames ){
            obj[ key ] = {
                name: '',
                duration: durationSec,
            };
        };
        setSerialFileNames( obj );

    }

    const change_file = ( e, key ) => {
        let val = e.target.value;
        let obj = { ...serialFileNames };

        if( dataFolder[ dataFolderActiveIndex ] ){

            let {
                file_name,
                file_duration
            } = dataFolder[ dataFolderActiveIndex ];
            obj[ key ].name = file_name;
            obj[ key ].duration = file_duration;
            setSerialFileNames( obj );

            let new_dataFolder = [];
            for( let i = 0; i < dataFolder.length; i++ ){
                if( i !== dataFolderActiveIndex ){
                    new_dataFolder.push( { ...dataFolder[ i ] } );
                };
            };

            setDataFolder( new_dataFolder );
            if( new_dataFolder.length > 0 ){
                setDataFolderActiveIndex( 0 );
            }else{
                setDataFolderActiveIndex( null );
            };


        }else{
            obj[ key ].name = val;
            setSerialFileNames( obj );
        };


    }

    const create = ( obj ) => {

        let arr = Object.keys( obj );
        let div = arr.map( ( item, index ) => {

            return (
                <div
                    className = 'NSA_ISFN_list_item'
                    key = { index }
                >
                    <input
                        type =      'text'
                        className = 'NSA_ISFN_seriaName'
                        value =     { serialNames[ item ] }
                        onChange =  { () => {} }
                    />

                    <input
                        type =      'text'
                        className = 'NSA_ISFN_fileName'
                        value =     { serialFileNames[ item ].name }
                        onChange =  { ( e ) => { change_file( e, item ) } }
                        onFocus =   { ( e ) => { change_file( e, item ) }  }
                    />

                    <span className = 'NSA_ISFN_fileDuration'>{ convert_sec_to_time( serialFileNames[ item ].duration ) }</span>



                </div>
            );

        } );

        return div;


    }

    const inputHandler = (e) => {

        if( !e.target.files.length ){
            return;
        };
        let files = e.target.files;
        let arr = [];
        const finish = () => {
            setDataFolder( arr );
            if( arr.length > 0  ){
                setDataFolderActiveIndex( 0 );
            }else{
                setDataFolder( [] );
                setDataFolderActiveIndex( null );
            };
        };

        const recursive_get = ( files, index ) => {
            if( files[ index ] ){
                let file = files[index];
                let file_name = file.name;
                let file_duration = 0;
                let video = document.createElement('video');
                video.preload = `metadata`;
                video.src = URL.createObjectURL( file );
                video.onloadedmetadata = function() {
                    window.URL.revokeObjectURL(video.src);
                    file_duration = Math.round( video.duration );
                    arr.push( {
                        file_name,
                        file_duration,
                    } );
                    recursive_get( files, index + 1 )
                };
            }else{
                finish();
            };
        };
        recursive_get( files, 0 );
    };

    const create_dataFolder = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            // console.dir( item );
            // file_duration

            return (
                <div
                    className = 'from_folder_list_item'
                    key = { index }
                    onClick = { () => { setDataFolderActiveIndex( index ) }}
                >
                    <input
                        type = 'text'
                        value = { item.file_name }
                        onChange = { () => {} }
                    />

                    <span className = 'from_folder_list_item_dur'>{ convert_sec_to_time( item.file_duration ) }</span>

                </div>
            );

        } );

        return div;

    };



    return (
        <div className = 'NSA_item_serial_file_names'>
            <h3>Имена файлов и хроноетраж:</h3>

            <div className = 'NSA_ISFN_list_wrap'>
                <div className = 'NSA_ISFN_list'>
                    <ScrollContainer height = '10em'>
                        { create( serialFileNames ) }
                    </ScrollContainer>
                </div>

                <div className = 'NSA_ISFN_list_from_folder'>
                    <div className = 'from_folder'>
                        <span
                            onClick = { click }
                        >Взять из папки</span>

                        <input 
                            type =          'file' 
                            ref =           { inputRef }
                            className =     'hiddenInput'
                            onChange =      { inputHandler }
                            multiple = { true }
                        />

                    </div>

                    <div className = 'from_folder_list'>

                        { dataFolder[ dataFolderActiveIndex ]? (
                            <div className = 'from_folder_list_active'>
                                <input
                                    type = 'text'
                                    value = { dataFolder[ dataFolderActiveIndex ]? dataFolder[ dataFolderActiveIndex ].file_name: '' }
                                    onChange = { () => {} }
                                />

                                <span className = 'from_folder_list_item_dur'>{ dataFolder[ dataFolderActiveIndex ]? convert_sec_to_time( dataFolder[ dataFolderActiveIndex ].file_duration ): '' }</span>

                            </div>

                        ): '' }


                        <ScrollContainer height = '7.4em' >
                            { create_dataFolder( dataFolder ) }
                        </ScrollContainer>
                        
                    </div>


                </div>

            </div>



        </div>

    )

};

export function ItemSerialFileNames( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSerialFileNamesComponent
            { ...props }
            // currentAppNum =     { application.currentAppNum }
            // currentAppName =    { application.currentAppName }
            // currentAppType =    { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
