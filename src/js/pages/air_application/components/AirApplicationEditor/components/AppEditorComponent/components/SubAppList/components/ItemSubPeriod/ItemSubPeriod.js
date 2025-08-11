// ItemSubPeriod


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubPeriod.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
import { convert_date_str_to_format } from './../../../../../../../../../../helpers/convert_date_str_to_format.js';

import { ItemEditComponent } from './../ItemEditComponent/ItemEditComponent.js';
import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';

import { save_sub_app_changes_on_server } from './../../../../../../vendors/save_sub_app_changes_on_server.js';
import { MAX_CHAR_DAY_LENGTH } from './../../../../../../../../../../config/application.js';

const ItemSubPeriodComponent = ( props ) => {

    let {
        id,
        application_id,
        period_from,
        period_to,
        
    } = props;
    let max_ms_diference = MAX_CHAR_DAY_LENGTH * 24 * 60 * 60 * 1000;

    let [ isReady, setIsReady ] = useState( false );

    let [ dataFromValue, setDataFromValue ] = useState( period_from );
    let [ dataToValue, setDataToValue ] = useState( period_to );

    useEffect( () => {
        if( dataFromValue === period_from && dataToValue === period_to  ){
            setIsReady( false );
        }else{
            setIsReady( true );
        };

    }, [ dataFromValue, dataToValue ] );

    useEffect(() => {
        setDataFromValue( period_from );
        setDataToValue( period_to );

    }, [ period_from, period_to ]);


    const save_click = () => {
        save_sub_app_changes_on_server({
            subApplicationId: id,
            applicationId: application_id,
            changedData: {
                period_from: dataFromValue,
                period_to: dataToValue,

            },
            callback: ( response ) => {
                setIsReady( false );
            },
        });
    }

    const change_date_from = ( e ) => {
        // let val = e.target.value;
        // console.dir({
        //     dataFromValue,
        //     dataToValue,
        // });
        // setDataFromValue( val );


        let val = e.target.value;
        let date = new Date( val );
        let from_ms = date.getTime();

        let date_2 = new Date( dataToValue );
        let to_ms = date_2.getTime();
        if( from_ms <= to_ms ){
            if( to_ms - from_ms < max_ms_diference ){
                setDataFromValue( val );
            };
        }else{
            
            if( to_ms - from_ms < max_ms_diference ){
                setDataFromValue( val );
                setDataToValue( val );
            };
        };

        
    };

    const change_date_to = ( e ) => {
        // let val = e.target.value;
        // console.dir({
        //     dataFromValue,
        //     dataToValue,
        // });
        // setDataToValue( val );
        // setDataFromValue( period_from );
        // setDataToValue( period_to );

        let val = e.target.value;
        let date = new Date( val );
        let to_ms = date.getTime();

        let date_2 = new Date( dataFromValue );
        let from_ms = date_2.getTime();
        if( to_ms >= from_ms ){
            if( to_ms - from_ms < max_ms_diference ){
                setDataToValue( val );
            }
        };
    };
    
    
    return (
        <div className = 'SA_ItemSubPeriod'>

            <span className = 'SA_ItemSubPeriod_data' >{ convert_date_str_to_format.YY_MM_DD_points( period_from ) }</span>
            <span className = 'SA_ItemSubPeriod_data_tire'>-</span>
            <span className = 'SA_ItemSubPeriod_data second' > { convert_date_str_to_format.YY_MM_DD_points( period_to ) }</span>

            <ItemEditComponent>
            
                <div className = 'SA_ItemSubPeriod_edit'>
                    <h3>Период:</h3>

                    <span>с</span>

                    <input 
                        type = 'date'
                        value =     { dataFromValue }
                        max =       { dataToValue }
                        onChange =  { change_date_from }
                    />

                    <span>по</span>
                    <input 
                        type = 'date'
                        value =     { dataToValue }
                        min =       { dataFromValue }
                        onChange =  { change_date_to }
                    />

                    

                </div>

                <AlertWindowContainerSaveAdd 
                    isActive =      { isReady }
                    clickHandler =  { save_click }
                />
            </ItemEditComponent>

           

        </div>
    )

};

export function ItemSubPeriod( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubPeriodComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
