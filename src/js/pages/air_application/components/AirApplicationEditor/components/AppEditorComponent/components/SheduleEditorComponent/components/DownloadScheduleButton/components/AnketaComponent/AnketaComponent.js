// AnketaComponent


import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AnketaComponent.scss';

import * as XLSX from 'xlsx-js-style';

// import { selectorData as applicationSlice  } from './../../../../../../../../../../../../redux/applicationSlice.js';

// import { AlertWindowContainer } from './../../../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { SelectAnketaType } from './../SelectAnketaType/SelectAnketaType.js';
import { AnketaTypeTable } from './../AnketaTypeTable/AnketaTypeTable.js';
import { AnketaTypeThema } from './../AnketaTypeThema/AnketaTypeThema.js';
import { AnketaTypeList } from './../AnketaTypeList/AnketaTypeList.js';

import { get_array_of_colum_width } from './../../vendors/get_array_of_colum_width.js';
import { get_row_1 } from './../../vendors/get_row_1.js';
import { get_row_6 } from './../../vendors/get_row_6.js';
import { get_row_7 } from './../../vendors/get_row_7.js';
import { get_row_8 } from './../../vendors/get_row_8.js';
import { get_row_9 } from './../../vendors/get_row_9.js';


const AnketaComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        Schedule,

    } = props;

    let [ anketaType, setAnketaType ] = useState( 'table' ); // 'table' 'thema'

    let [ tableHeader, setTableHeader ] = useState( '' )
    let [ executor, setExecutor ] = useState( '' );
    let [ customer, setCustomer ] = useState( '' );
    let [ price, setPrice ] = useState( 0 );
    let [ mediaName, setMediaName] = useState( '' );
    let [ materialName, setMaterialName] = useState( '' );

    let [ releaseDuration, setReleaseDuration] = useState( 0 );
    let [ releaseDescription, setReleaseDescription] = useState( '' );
    let [ releaseList, setReleaseList] = useState( [] );

    let [ periodFrom, setPeriodFrom] = useState( '' );
    let [ periodTo, setPeriodTo] = useState( '' );



    useEffect( () => {
        if( isOpen ){
            let data = Schedule.GetDataForDownloadExcelFormatTable();
            setAnketaType( 'table' );
            setTableHeader( data.colintitul );
            setExecutor( data.executor );
            setCustomer( data.customer );
            setPrice( data.price );
            setMediaName( data.mediaName );
            setMaterialName( data.releaseName );

            setReleaseDuration( data.releaseDuration );
            setReleaseDescription( data.releaseDescription );
            setReleaseList( data.releaseList );

            if( data.releaseList[ 0 ] ){
                setPeriodFrom( data.releaseList[ 0 ].date );
                setPeriodTo( data.releaseList[ data.releaseList.length - 1 ].date );
            };

        }else{
            setAnketaType( 'table' );
            setTableHeader( '' );
            setExecutor( '' );
            setCustomer( '' );
            setPrice( '' );
            setMediaName( '' );
            setMaterialName( '' );

            setReleaseDuration( 0 );
            setReleaseDescription( '' );
            setReleaseList( [] );
        };
    }, [ isOpen ] );



    const getPeriod = ( from , to ) => {
        let arr_0 = from.split( '-' );
        let arr_1 = to.split( '-' );
        return `${arr_0[2]}.${arr_0[1]}.${arr_0[0]} - ${arr_1[2]}.${arr_1[1]}.${arr_1[0]}`


    }

    const download_table = () => {

        const wb = XLSX.utils.book_new();

        const ws = XLSX.utils.aoa_to_sheet([
            get_row_1( tableHeader ),
            [],
            [],
            [],
            [],
            get_row_6( executor ),
            get_row_7( customer ),
            get_row_8( mediaName ),
            get_row_9( getPeriod( periodFrom, periodTo ) )
        ]);

        ws['!cols'] = get_array_of_colum_width();
  
        ws["!merges"] = [
            XLSX.utils.decode_range("A1:AO1"),
            XLSX.utils.decode_range("A2:AO2"),
            XLSX.utils.decode_range("A3:AO3"),
            XLSX.utils.decode_range("A4:AO4"),
            XLSX.utils.decode_range("D6:AO6"),
            XLSX.utils.decode_range("D7:AO7"),
            XLSX.utils.decode_range("D8:AO8"),
            XLSX.utils.decode_range("D9:AO9"),
        ];


        XLSX.utils.book_append_sheet(wb, ws, "readme demo");

        XLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");
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
                        materialName =      { materialName }
                        setMaterialName =   { setMaterialName }
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
