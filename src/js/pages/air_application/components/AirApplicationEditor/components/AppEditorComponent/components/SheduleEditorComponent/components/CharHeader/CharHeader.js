//
import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CharHeader.scss';


import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../../../redux/companySlice.js';

import { CHAR_TYPE } from './../../../../../../../../../../config/application.js';
import { EVENT_TYPE } from './../../../../../../../../../../config/layout.js';

import { convert_sec_to_time } from './../../../../../../../../../../helpers/convert_sec_to_time.js';

import { PageBodySaveButton } from './../../../../../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';

// import { send_request_to_server } from './../../../../../../../../../../helpers/send_request_to_server.js';

// import { set_application_data_to_store } from './../../../../../../vendors/set_application_data_to_store.js';




const CharHeaderComponent = ( props ) => {

    let {
        charType,
        
        releaseName,
        category,
        event, 
        
        releareCount,
        releaseDuration,
        allReleaseDuration,

        periodFrom,
        periodTo,
        save_release_list,
        isChanged,
        // setIsChanged,

        setSpinnerIsActive,


    } = props;

    let [ typeValue, setTypeValue ] = useState( '' );

    useEffect( () => {
        if( charType === CHAR_TYPE.BLOCK ){
            setTypeValue( EVENT_TYPE.BLOCK );
        }else if( charType === CHAR_TYPE.FILE || charType === CHAR_TYPE.BLIND  ){
            setTypeValue( EVENT_TYPE.FILE );
        };
    }, [ charType ] );

    const getCharTitle = ( type  ) => {
        let result = 'Слепой график'

        if( type === CHAR_TYPE.BLOCK ){
            result = `${event.name}`
        }else if( type === CHAR_TYPE.FILE ){
            result = `${event.name}`
        };
        return result;
        

    }
    const getStyle = ( type ) => {
        let result = {
            backgroundColor: '#fff2e4',
            color: '#e76969',
            borderColor: '#dfdfdf',
        };

        if( type === CHAR_TYPE.BLOCK ){
            result.backgroundColor = '#00000000';
            result.borderColor = category.colorBg;
            result.color = category.colorBg;
        }else if( type === CHAR_TYPE.FILE ){
            result.backgroundColor = category.colorBg;
            result.borderColor = category.colorBg;
            result.color = category.colorText;
        };

        return result;

    }

    const getDate = ( str ) => {
        let result = '';
        if( str !== null ){
            let arr = str.split( '-' );
            result = `${arr[0]}.${arr[1]}.${arr[2]}`

        };
        return result;
    }

    // const save_release_list = () => {
    //     let data = getReleaseDataForServer();

    //     console.dir( 'data' );
    //     console.dir( data );

    //     setSpinnerIsActive( true );

    //     const send = () => {
    //         send_request_to_server({
    //             route: 'save-sub-application-release',
    //             data,
    //             successCallback: ( response ) => {
    //                 console.dir( 'response' );
    //                 console.dir( response );

    //                 if( response.ok ){
    //                     setSpinnerIsActive( true );
    //                     set_application_data_to_store( response.application, response.applicationList );


    //                 };
    //             },
    //             errorCallback: () => {
    //                 send();
    //             }
    //         });
    //     };

    //     send();

    // }



    return (

        <div className = 'SEC_header'>

            <div className = 'SEC_header_col'>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title'>Выпуск:</span>
                    <span className = 'SEC_row_name'>{ releaseName }</span>
                </h2>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title'>График:</span>
                    <span 
                        className = 'SEC_row_name'
                        style = { getStyle( charType ) }
                    >{ getCharTitle( charType ) }</span>

                    <span className = 'SEC_row_type'>{ typeValue }</span>
                </h2>

                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title'>Период:</span>
                    <span className = 'SEC_row_period' style = {{ marginLeft: '1em' }}>{ getDate( periodFrom ) }</span>

                    <span className = 'SEC_row_tire'>-</span>
                    <span className = 'SEC_row_period'>{ getDate( periodTo ) }</span>
                </h2>
            </div>

            <div className = 'SEC_header_col'>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title w11'>Хронометраж ролика:</span>
                    <span className = 'SEC_row_hron_time'>{ convert_sec_to_time( releaseDuration ) }</span>
                    <span className = 'SEC_row_hron_sec'>{ releaseDuration }</span>
                </h2>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title w11'>Хронометраж общий:</span>
                    <span className = 'SEC_row_hron_time'>{ convert_sec_to_time( allReleaseDuration ) }</span>
                    <span className = 'SEC_row_hron_sec'>{ allReleaseDuration }</span>
                </h2>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title w11'>Всего выпусков:</span>
                    <span className = 'SEC_row_filled_count'>{ releareCount }</span>
                </h2>
            </div>

            <div className = 'SEC_header_col SEC_header_col_last'>

                <PageBodySaveButton
                    isChanged = { isChanged }
                    clickHandler = { save_release_list }
                />


            </div>


            
            

        </div>

               
    )

};

export function CharHeader( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <CharHeaderComponent
            { ...props }

            currentApplicationId = { application.currentApplicationId }
            application = { application }

            currentCompanyAlias = { company.currentCompanyAlias }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


            setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
