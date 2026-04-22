
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportExcelDownload.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { ExcelPassportClass } from './../../../../../../../../../../../../classes/ExcelPassportClass.js';


const PasportExcelDownloadComponent = ( props ) => {
    
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
        
    } = props;


    const click = () => {

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


        ExcelPassport.Download();





    };


    
    
    return (
        <div className = 'SA_PasportExcelDownload'>

            <div 
                className = 'SA_PasExcel_btn'
                onClick = { click }
            >
                <span className = 'SA_PasExcel_icon icon-download-alt'></span>
                <span className = 'SA_PasExcel_text'>Скачать</span>


            </div>

            

        </div>
    )

};

export function PasportExcelDownload( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportExcelDownloadComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
