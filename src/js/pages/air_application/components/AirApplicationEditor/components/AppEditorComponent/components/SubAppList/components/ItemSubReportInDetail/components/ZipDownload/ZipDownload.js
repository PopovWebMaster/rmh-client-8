
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ZipDownload.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';
import JSZip from 'jszip';
import FileSaver from 'file-saver';

import { AlertWindowContainer } from './../../../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


const ZipDownloadComponent = ( props ) => {

    let {
        
        
    } = props;

            /*
        
        // const zip = new JSZip();
        // zip.file('idlist.txt', 'текст мекст');
        // zip.generateAsync({ type: 'blob' }).then(function (content) {
        //     FileSaver.saveAs(content, 'download.zip');
        // });

        const zip = new JSZip();

        zip.file("Hello.txt", "Hello World\n");

        const img = zip.folder("images");
        // img.file("smile.gif", imgData, {base64: true});
        img.file('idlist.txt', 'текст мекст')

        zip.generateAsync({type:"blob"}).then(function(content) {
            // see FileSaver.js
            // saveAs(content, "example.zip");
            FileSaver.saveAs(content, 'download.zip');
        });

        */


    
    
    return (
        <div className = 'SA_ZipDownload'>

            

        </div>
    )

};

export function ZipDownload( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ZipDownloadComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
