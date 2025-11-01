
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemReleaseFileName.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';


const ItemReleaseFileNameComponent = ( props ) => {

    let {
        isOpen,
        releaseFileName,
        setReleaseFileName,
        setDurationSec,

    } = props;

    
    const inputRef = useRef();

    const click = () => {

        let accept = [ '.mp4', '.mxf' ];
        let input = inputRef.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();

    };

    useEffect( () => {
        if( isOpen ){

        }else{
            setReleaseFileName( '' );
        };

    }, [ isOpen ] );


    const inputHandler = (e) => {

        if( !e.target.files.length ){
            return;
        };
        let files = e.target.files;
        let arr = [];
        const finish = () => {
            if( arr.length > 0 ){
                let {
                    file_name,
                    file_duration,
                } = arr[ 0 ];
                setReleaseFileName( file_name );
                setDurationSec( file_duration );

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


    const change_input = ( e ) => {
        let val = e.target.value;
        setReleaseFileName( val );
    };



    return (
        <div className = 'NSA_item_release_file_names'>
            <h3>Имя файла:</h3>
            <div className = 'NSA_IRFN_wrap'>

                <input
                    type =      'text'
                    className = 'NSA_IRFN_inp_text'
                    value =         { releaseFileName }
                    onChange =  { change_input }
                />

                <span
                    onClick = { click }
                    className = 'NSA_IRFN_btn'
                >Взять из папки</span>

                <input 
                    type =          'file' 
                    ref =           { inputRef }
                    className =     'NSA_IRFN_inp_file'
                    onChange =      { inputHandler }
                />

            </div>

        </div>

    )

};

export function ItemReleaseFileName( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemReleaseFileNameComponent
            { ...props }
            // currentAppNum =     { application.currentAppNum }
            // currentAppName =    { application.currentAppName }
            // currentAppType =    { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
