// AnketaComponent


import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AnketaComponent.scss';

import * as XLSX from 'xlsx-js-style';

import { selectorData as scheduleSlise  } from './../../../../../../../../../../../../redux/scheduleSlise.js';

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
import { get_row_10 } from './../../vendors/get_row_10.js';
import { get_row_11 } from './../../vendors/get_row_11.js';
import { get_row_12 } from './../../vendors/get_row_12.js';
import { get_row_13 } from './../../vendors/get_row_13.js';
import { get_row_14 } from './../../vendors/get_row_14.js';
import { get_row_15 } from './../../vendors/get_row_15.js';
import { get_table_martix_rows } from './../../vendors/get_table_martix_rows.js';

import { get_full_day_info_from_day_seconds } from './../../../../../../../../../../../../helpers/get_full_day_info_from_day_seconds.js';
import { MOUNTH_NAME } from './../../../../../../../../../../../../config/mounth.js';


const AnketaComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        Schedule,

        allTimePointsGroupeList,

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
    let [ martix, setMatrix] = useState( [] );


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

            

            // setReleaseList( data.releaseList );

            setMatrix( getReleaseMatrix( data.releaseList, data.releaseDuration ) );

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
            setMatrix( [] );
            // setReleaseList( [] );
        };
    }, [ isOpen ] );


    const getReleaseMatrix = ( release_list, duration ) => {
        let result = [];

        for( let i = 0; i < allTimePointsGroupeList.length; i++ ){
            let { title, interval } = allTimePointsGroupeList[ i ];

            let obj = {
                title,
                sec_from: interval.from,
                sec_to: interval.to,
                days: {},
                isFilled: false,
            };

            for( let y = 0; y < release_list.length; y++ ){
                // let { date, time_sec } = release_list[ y ];
                let YYYY_MM_DD = release_list[ y ].date;
                let time_sec = release_list[ y ].time_sec;


                if( obj.days[ YYYY_MM_DD ] ){
                    // сюда не писать ничего !!!!!!!!!
                }else{

                    let date_class = new Date( YYYY_MM_DD );
                    let date_seconds = date_class.getTime() / 1000;
                    let { 
                        mounth,
                        date,
                        dayNameShort,
                    } = get_full_day_info_from_day_seconds( date_seconds );
                    let mounthName = MOUNTH_NAME[ mounth ];

                    obj.days[ YYYY_MM_DD ] = {
                        title,
                        duration: 0,
                        dayName: dayNameShort.toLowerCase(),
                        dateName: `${ date } ${ mounthName.toLowerCase() }`,
                    };
                };

                if( time_sec >= obj.sec_from && time_sec < obj.sec_to ){
                    obj.days[ YYYY_MM_DD ].duration = obj.days[ YYYY_MM_DD ].duration + duration;
                    obj.isFilled = true;
                };
            };

            if( obj.isFilled ){
                result.push( { ...obj.days } );
            };
        };

        return result;

    }



    const getPeriod = ( from , to ) => {

        let arr_0 = from.split( '-' );
        let arr_1 = to.split( '-' );

        let str_from = arr_0[2]? `${arr_0[2]}.${arr_0[1]}.${arr_0[0]}`: '';
        let str_t0 = arr_1[2]? `${arr_1[2]}.${arr_1[1]}.${arr_1[0]}`: ''
        
        return `${str_from} - ${str_t0}`


    }
/*
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
            get_row_9( getPeriod( periodFrom, periodTo ) ),
            get_row_10( materialName ),
            get_row_11(),
            get_row_12( releaseDuration ),
            get_row_13( releaseDuration, mediaName ),
            get_row_14( martix ),
            get_row_15( martix ),
            ...get_table_martix_rows( martix, price, releaseDuration ),
        ]);

        ws['!cols'] = get_array_of_colum_width();
        ws['!rows'] = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { hpx: 38.25 }, {}, { hpx: 77.25 } ];

        ws["!merges"] = [
            XLSX.utils.decode_range("A1:AO1"),
            XLSX.utils.decode_range("A2:AO2"),
            XLSX.utils.decode_range("A3:AO3"),
            XLSX.utils.decode_range("A4:AO4"),
            XLSX.utils.decode_range("D6:AO6"),
            XLSX.utils.decode_range("D7:AO7"),
            XLSX.utils.decode_range("D8:AO8"),
            XLSX.utils.decode_range("D9:AO9"),
            XLSX.utils.decode_range("D10:R10"),XLSX.utils.decode_range("S10:AO10"),
            XLSX.utils.decode_range("F13:AO13"),
            XLSX.utils.decode_range("A14:A15"),XLSX.utils.decode_range("B14:B15"),XLSX.utils.decode_range("C14:C15"),XLSX.utils.decode_range("D14:D15"),XLSX.utils.decode_range("E14:E15"),
            XLSX.utils.decode_range("AM14:AM15"),XLSX.utils.decode_range("AN14:AN15"),


        ];

        XLSX.utils.book_append_sheet(wb, ws, "readme demo");

        // XLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");
        XLSX.writeFile(wb, `Медиа план ${customer}_${materialName} ${getPeriod( periodFrom, periodTo )}.xlsx`);

    }
*/

    const download_table = () => {

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
                        Schedule = { Schedule }
                        // download_table =    { download_table }
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
            {/* <SelectAnketaType 
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
            /> */}

            { create( anketaType ) }
        </div>
    )

};

export function AnketaComponent( props ){

    const schedule = useSelector( scheduleSlise );

    // const dispatch = useDispatch();

    return (
        <AnketaComponentComponent
            { ...props }

            allTimePointsGroupeList = { schedule.allTimePointsGroupeList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
