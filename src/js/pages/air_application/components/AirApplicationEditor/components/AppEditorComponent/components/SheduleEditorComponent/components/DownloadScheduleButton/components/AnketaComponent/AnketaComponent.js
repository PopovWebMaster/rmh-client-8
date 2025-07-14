// AnketaComponent


import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AnketaComponent.scss';

// import { selectorData as applicationSlice  } from './../../../../../../../../../../../../redux/applicationSlice.js';

// import { AlertWindowContainer } from './../../../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { SelectAnketaType } from './../SelectAnketaType/SelectAnketaType.js';
import { AnketaTypeTable } from './../AnketaTypeTable/AnketaTypeTable.js';
import { AnketaTypeThema } from './../AnketaTypeThema/AnketaTypeThema.js';
import { AnketaTypeList } from './../AnketaTypeList/AnketaTypeList.js';


const AnketaComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        Schedule,

    } = props;

    let [ anketaType, setAnketaType ] = useState( 'table' ); // 'table' 'thema'

    let [ tableHeader, setTableHeader ] = useState( 'Приложение 1 к Договору №_01-61/02 от 14.01.2025  на оказание услуг (выполнения работ) в сфере телевещания' )
    let [ executor, setExecutor ] = useState( 'ГУП ДНР  "РМХ"' );
    let [ customer, setCustomer ] = useState( '' );
    let [ price, setPrice ] = useState( 28 );

    let [ mediaName, setMediaName] = useState( 'ПЕРВЫЙ РЕСПУБЛИКАНСКИЙ КАНАЛ ДОНЕЦКОЙ НАРОДНОЙ РЕСПУБЛИКИ' );


    const download_table = () => {

        Schedule.GetDataForDownloadExcelFormatTable();



    }



    const create = ( type ) => {
        let result = '';

        switch( type ){
            case 'table':
                result = (
                    <AnketaTypeTable 
                        tableHeader =       { tableHeader }
                        setTableHeader =    { setTableHeader }
                        executor =          { executor }
                        setExecutor =       { setExecutor }
                        customer =          { customer }
                        setCustomer =       { setCustomer }
                        price =             { price }
                        setPrice =          { setPrice }
                        mediaName =         { mediaName }
                        setMediaName =      { setMediaName }
                        download_table =    { download_table }
                    />
                );
                break;

            case 'thema':
                result = (
                    <AnketaTypeThema />
                );
                break;

            case 'list':
                result = (
                    <AnketaTypeList />
                );
                break;

        };

        return result;
         
    }

    return (
        <div  className = 'SEC_AnketaComponent'>
            <SelectAnketaType 
                anketaType =    { anketaType }
                setAnketaType = { setAnketaType }
                itemList = { [
                    {
                        type: 'table',
                        name: 'Таблица',
                    },
                    {
                        type: 'thema',
                        name: 'Сюжет',
                    },
                    {
                        type: 'list',
                        name: 'Список',
                    },
                ] }
            />

            { create( anketaType ) }
        </div>
    )

};

export function AnketaComponent( props ){

    // const application = useSelector( applicationSlice );

    // const dispatch = useDispatch();

    return (
        <AnketaComponentComponent
            { ...props }

            // currentApplicationId = { application.currentApplicationId }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
