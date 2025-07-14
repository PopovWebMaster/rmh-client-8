

import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AnketaTypeTable.scss';

// import { selectorData as applicationSlice  } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AWTextarea } from './../../../../../../../../../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';
import { AWInputText } from './../../../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWButtonAdd } from './../../../../../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';


const AnketaTypeTableComponent = ( props ) => {

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

        download_table,

    } = props;

    const change_tableHeader = ( e ) => {
        setTableHeader( e.target.value )
    }

    const change_executor = ( e ) => {
        setExecutor( e.target.value )
    }

    const change_customer = ( e ) => {
        setCustomer( e.target.value )
    }

    const change_mediaName = ( e ) => {
        setMediaName( e.target.value )
    }

    const change_price = ( e ) => {
        let val = Number( e.target.value );
        if( /^-?\d+$/.test( val ) ){
            setPrice( val )
        };
    }

    


    return (
        <div  className = 'SEC_AnketaTypeTable'>

            <AWTextarea 
                title =     'Колонтитул'
                value =     { tableHeader }
                onChange =  { change_tableHeader }
            />

            <AWInputText 
                title =     'Исполнитель'
                value =     { executor }
                onChange =  { change_executor }
            />

            
            <AWInputText 
                title =     'Заказчик'
                value =     { customer }
                onChange =  { change_customer }
            />

            <AWInputText 
                title =     'СМИ'
                value =     { mediaName }
                onChange =  { change_mediaName }
            />

            <AWInputText 
                title =     'Прайсовая стоимость 1 рос. руб.'
                value =     { price }
                onChange =  { change_price }
            />

            <AWButtonAdd
                title =         "Скачать"
                isReady =       { true }
                clickHandler =  {  download_table }
            />
            

        </div>
    )

};

export function AnketaTypeTable( props ){

    // const application = useSelector( applicationSlice );

    // const dispatch = useDispatch();

    return (
        <AnketaTypeTableComponent
            { ...props }

            // currentApplicationId = { application.currentApplicationId }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
