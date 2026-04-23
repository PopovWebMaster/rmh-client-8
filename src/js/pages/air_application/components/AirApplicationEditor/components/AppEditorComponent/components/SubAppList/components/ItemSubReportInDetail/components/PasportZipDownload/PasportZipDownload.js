
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportZipDownload.scss';

import * as XLSX from 'xlsx-js-style';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';
import { selectorData as companySlice } from './../../../../../../../../../../../../redux/companySlice.js';


import { AlertWindowContainer } from './../../../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { ExcelPassportClass } from './../../../../../../../../../../../../classes/ExcelPassportClass.js';

import JSZip from 'jszip';
import FileSaver from 'file-saver';


const PasportZipDownloadComponent = ( props ) => {
    
    let {
        anketaType, // 'table' 'thema' table_vizitka
        pasportColontitul,
        pasportExecutor,
        pasportPrice,
        pasportPricePrime,
        pasportMediaName,

        pasportAppName,
        pasportName,
        pasportFileName,
        pasportNotes,
        pasportDescription,
        period_from,
        period_to,
        duration_sec,
        pasportReleaseList,

        companyLegalName,
        
    } = props;


    const click = () => {


        const zip = new JSZip();
        const folder = zip.folder( pasportName );
        folder.folder( 'Факт' );
        folder.folder( 'Для клиента' );


        let ExcelPassport = new ExcelPassportClass();
        ExcelPassport.SetOrderName( pasportAppName );
        ExcelPassport.SetReleaseName( pasportName );
        ExcelPassport.SetFileName( pasportFileName );
        ExcelPassport.SetNotes( pasportNotes );
        ExcelPassport.SetDescription( pasportDescription );
        ExcelPassport.SetPeriodFrom( period_from );
        ExcelPassport.SetPeriodTo( period_to );
        ExcelPassport.SetDurationSec( duration_sec );
        ExcelPassport.SetReleaseList( pasportReleaseList );
        ExcelPassport.SetAnketaType( anketaType );
        ExcelPassport.SetColontitul( pasportColontitul );
        ExcelPassport.SetExecutor( pasportExecutor );
        ExcelPassport.SetPrice( pasportPrice );
        ExcelPassport.SetPricePrime( pasportPricePrime );
        ExcelPassport.SetMediaName( pasportMediaName );

        const wb = XLSX.utils.book_new();

        let sheets = ExcelPassport.GetSheets();
        for( let i = 0; i < sheets.length; i++ ){
            XLSX.utils.book_append_sheet(wb, sheets[ i ].WS, sheets[ i ].name );
        };


        const workbookBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const fileData = new Blob([workbookBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        folder.file(`Passport ${pasportName}.xlsx`, fileData);


        const wb_2 = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb_2, sheets[1].WS, '1' );

        const workbookBuffer_2 = XLSX.write(wb_2, { bookType: 'xlsx', type: 'array' });
        const fileData_2 = new Blob([workbookBuffer_2], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        folder.file( `Медиа план ${pasportName}.xlsx`, fileData_2 );





        zip.generateAsync({ type: 'blob' }).then(blob => saveAs(blob, `${pasportName}.zip`));





        // let ExcelPassport = new ExcelPassportClass();
        // ExcelPassport.SetOrderName( pasportAppName );
        // ExcelPassport.SetReleaseName( pasportName );
        // ExcelPassport.SetFileName( pasportFileName );
        // ExcelPassport.SetNotes( pasportNotes );
        // ExcelPassport.SetDescription( pasportDescription );
        // ExcelPassport.SetPeriodFrom( period_from );
        // ExcelPassport.SetPeriodTo( period_to );
        // ExcelPassport.SetDurationSec( duration_sec );
        // ExcelPassport.SetReleaseList( pasportReleaseList );


        // ExcelPassport.SetAnketaType( anketaType );
        // ExcelPassport.SetColontitul( pasportColontitul );
        // ExcelPassport.SetExecutor( pasportExecutor );
        // ExcelPassport.SetPrice( pasportPrice );
        // ExcelPassport.SetPricePrime( pasportPricePrime );
        // ExcelPassport.SetMediaName( pasportMediaName );


        // ExcelPassport.Download();





    };


    
    
    return (
        <div className = 'SA_PasportZipDownload'>

            <div 
                className = 'SA_PasExcel_btn'
                onClick = { click }
            >
                <span className = 'SA_PasExcel_icon icon-download-alt'></span>
                <span className = 'SA_PasExcel_text'>Zip-проект</span>


            </div>

            

        </div>
    )

};

export function PasportZipDownload( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );


    
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportZipDownloadComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }
            companyLegalName = { company.companyLegalName }


            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
