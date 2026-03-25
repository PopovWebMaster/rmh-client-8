
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


import { saveAs } from 'file-saver';

import './DownloadAirComments.scss';

import { selectorData as scheduleResultDragEventSlise } from './../../../../redux/scheduleResultDragEventSlise.js';

import { get_commets_matrix } from './vendors/get_commets_matrix.js';
import { get_file_name_from_matrix } from './vendors/get_file_name_from_matrix.js';
import { get_comments_text_from_matrix } from './vendors/get_comments_text_from_matrix.js';

const DownloadAirCommentsComponent = ( props ) => {

    let {

        altKayList,
    } = props;

    let [ isActive, setIsActive ] = useState( false );

    useEffect( () => {

        let arr = Object.keys( altKayList );
        if( arr.length > 0 ){
            setIsActive( true );
        }else{
            setIsActive( false );
        };

    }, [ altKayList ] );


    const click = () => {

        let matrix = get_commets_matrix();
        let fileName = get_file_name_from_matrix( matrix );
        let text = get_comments_text_from_matrix( matrix );

        const blob = new Blob([text], {});
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = fileName;
        downloadLink.click();


        // var file = new File([text], "hello world.txt", {type: "text/plain;charset=utf-8"});

        // // (async() => {
        //     // let answer = await fetch('text.txt'),
        //     //     data = await answer.blob();
        //     let reader = new FileReader();
        
        //     reader.readAsText(file,'windows-1251');
        
        //     reader.addEventListener('loadend',() => {

        //         console.dir( reader.result );

        //         const blob = new Blob([reader.result], {type: "text/plain;windows-1252"});
        //         const downloadLink = document.createElement('a');
        //         downloadLink.href = URL.createObjectURL(blob);
        //         downloadLink.download = fileName;
        //         downloadLink.click();


        //         // document.querySelector('#res').innerHTML = reader.result;
        //     });
        // // })();








        // // const blob = new Blob([new TextEncoder().encode(text)], { type: 'text/plain;charset=windows-1252' }); 
        // const blob = new Blob([text], { type: 'airx;charset=windows-1252' });
        // // var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=WINDOWS-1251"});
        // // saveAs(file);
        
        // saveAs(blob, fileName, { autoBom: true })

        // console.dir( saveAs );

        // const blob = new Blob([text], { type: 'text/plain;charset=utf16le' });

        // // const blob = new Blob([text], {});

        // const link = document.createElement('a');
        // link.href = URL.createObjectURL(blob);
        // link.download = fileName; 
        // link.click();
        // URL.revokeObjectURL(link.href);



        // (async () => {
        //     // const text = `Some text with nice line endings\nand special characters like é and ü.`;
        //     const encoding = 'windows-1252'; // a.k.a ANSI

        //     const utf8_blob = new Blob( [text], { endings: "native" } );
        //     const utf_8_txt = await utf8_blob.text();

        //     const encoder = new TextEncoder(encoding, {
        //         NONSTANDARD_allowLegacyEncoding: true
        //     });
        //     const data = encoder.encode(utf_8_txt); // now `data` is an Uint8Array
        //     const encoded_as_ANSI = new Blob([data], { type: 'text/plain;charset=utf16le' });

        //     const read_as_ANSI = await readAsText(encoded_as_ANSI, encoding)
        //         console.log(read_as_ANSI);

        //         const link = document.createElement('a');
        //         link.href = URL.createObjectURL(encoded_as_ANSI);
        //         link.download = fileName; 
        //         link.click();
        //         URL.revokeObjectURL(link.href);


        //     })();

        //     function readAsText(blob, encoding) {
        //     return new Promise(res => {
        //         const reader = new FileReader();
        //         reader.onload = e => res(reader.result);
        //         reader.readAsText(blob, encoding);
        //     });
        // }





    // (async()=> {
    //     // const text = text;
    //     const encoding = 'windows-1252'; // a.k.a ANSI

    //     const encoder = new TextEncoder(encoding, {
    //         NONSTANDARD_allowLegacyEncoding: true
    //     });
    //     const data = encoder.encode(text); // `data` is an Uint8Array
    //     const encoded_as_ANSI = new Blob([data]);

    //     // for demo only
    //     const encoded_as_UTF8 = new Blob([text]);

    //     const ANSI_read = await readAsText(encoded_as_ANSI, encoding);
    //     const UTF8_read = await readAsText(encoded_as_UTF8, encoding);

    //         const blob = new Blob([data], { type: 'text/plain;charset=ANSI' });

    //         const link = document.createElement('a');
    //         link.href = URL.createObjectURL(blob);
    //         link.download = fileName; 
    //         link.click();
    //         URL.revokeObjectURL(link.href);


    //     console.log("(ANSI)", ANSI_read);
    //     console.log("(UTF8)", UTF8_read);
    //     })();

    //     function readAsText(blob, encoding) {
    //     return new Promise(res => {
    //         const reader = new FileReader();
    //         reader.onload = e => res(reader.result);
    //         reader.readAsText(blob, encoding);
    //     });
    // }


















        // //Создаём ссылку
        // let aElement = document.createElement('a');
        // aElement.href = url;
        // aElement.download = 'filenameCP1251.txt';
        // aElement.textContent = 'Скачай меня полностью!';
        // document.body.appendChild(aElement);





        
        
        // const blob = new Blob([text], { type: 'text/plain' });
        // const blob = new Blob([text], { type: 'AIRX;charset=utf-8' });
        // const blob = new Blob([text], { type: 'text/plain;charset=ansy' });
        // const blob = new Blob([text], { type: 'text/plain;charset=cp367' });


        // const ansiText = text;  
// Создать Blob с кодировкой ANSI  
// const blob = new Blob([new TextEncoder().encode(ansiText)], { type: 'text/plain;charset=windows-1252' });  


        // const blob = new Blob([text], { type: 'text/plain;charset=CP1251' });

        // const blob = new Blob([text], {});

        // const link = document.createElement('a');
        // link.href = URL.createObjectURL(blob);
        // link.download = fileName; 
        // link.click();
        // URL.revokeObjectURL(link.href);




        // const ansiText = 'Hello, ANSI!';
        // const blob = new Blob([new TextEncoder().encode(text)], { type: 'text/plain;charset=windows-1252' });
        // const blob = new Blob([new TextEncoder('ansi').encode(text)], { type: 'AIRX;charset=ansi' });
        // const blob = new Blob([new TextEncoder().encode(text)], { type: 'AIRX;charset=ansi' });


        // const blob = new Blob([text], {});
        // const downloadLink = document.createElement('a');
        // downloadLink.href = URL.createObjectURL(blob);
        // downloadLink.download = fileName;
        // downloadLink.click();


    };

    return (<>{ isActive? (
        <div 
            className = 'S_DownloadAirComments'
            onClick = { click }
        >
            <span className = 'icon-download-alt icon'></span>
            <span className = 'text'>Эфир Скачать</span>
        </div>
    ): '' }</>
        
    )

};


export function DownloadAirComments( props ){

    const scheduleResultDragEvent = useSelector( scheduleResultDragEventSlise );

    // const dispatch = useDispatch();

    return (
        <DownloadAirCommentsComponent
            { ...props }

            altKayList = { scheduleResultDragEvent.altKayList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
