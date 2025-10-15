

import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AnketaTypeThema.scss';

// import { selectorData as applicationSlice  } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AWInputText } from './../../../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
// import { AWTextarea } from './../../../../../../../../../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';
import { AWButtonAdd } from './../../../../../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

// import { download_excel_plot } from './vendors/download_excel_plot.js';
import { download_excel_plot } from './../vendors/download_excel_plot.js';


const AnketaTypeThemaComponent = ( props ) => {

    let {
        tableHeader,
        setTableHeader,
        executor,
        setExecutor,
        customer,
        setCustomer,
        price,
        setPrice,
        mediaName,
        setMediaName,
        materialName,
        setMaterialName,
        Schedule,

    } = props;

    const change_executor = ( e ) => {
        setExecutor( e.target.value )
    }

    
    const change_customer = ( e ) => {
        setCustomer( e.target.value )
    }

    const change_mediaName = ( e ) => {
        setMediaName( e.target.value )
    }

    const download_table = () => {

        console.dir( 'props' );
        console.dir( props );
        console.dir( Schedule );


        download_excel_plot({
            customer,
            executor,
            mediaName,
            Schedule,
        });


    }




    return (
        <div  className = 'SEC_AnketaTypeThema'>

            <AWInputText 
                title =     'Заказчик'
                value =     { customer }
                onChange =  { change_customer }
            />
            <AWInputText 
                title =     'Исполнитель'
                value =     { executor }
                onChange =  { change_executor }
            />
            <AWInputText 
                title =     'СМИ'
                value =     { mediaName }
                onChange =  { change_mediaName }
            />

            <AWButtonAdd
                title =         "Скачать"
                isReady =       { true }
                clickHandler =  {  download_table }
            />

        </div>
    )

};

export function AnketaTypeThema( props ){

    // const application = useSelector( applicationSlice );

    // const dispatch = useDispatch();

    return (
        <AnketaTypeThemaComponent
            { ...props }

            // currentApplicationId = { application.currentApplicationId }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
