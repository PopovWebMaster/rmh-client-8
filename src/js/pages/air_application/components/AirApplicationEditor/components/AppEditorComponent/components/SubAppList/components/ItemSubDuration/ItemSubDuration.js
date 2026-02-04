
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubDuration.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ItemEditComponent } from './../ItemEditComponent/ItemEditComponent.js';
import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';

import { save_sub_app_changes_on_server } from './../../../../../../vendors/save_sub_app_changes_on_server.js';

import { convert_sec_to_time } from './../../../../../../../../../../helpers/convert_sec_to_time.js';
import { convert_time_str_to_sec } from './../../../../../../../../../../helpers/convert_time_str_to_sec.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../../../config/layout.js';

import { InputDuration } from './../../../../../../../../../../components/InputDuration/InputDuration.js';

const ItemSubDurationComponent = ( props ) => {

    let {
        id,
        application_id,
        duration_sec,
        
    } = props;

    let [ isReady, setIsReady ] = useState( false );
    let [ durationValue, setDurationValue ] = useState( duration_sec );

    let [ HH, setHH ] = useState( '00' );
    let [ MM, setMM ] = useState( '00' );
    let [ SS, setSS ] = useState( `${MIN_EVENT_DURATION_SEC}`.padStart( 2, "0" ) );

    useEffect( () => {

        enter();

    }, [ HH, MM, SS ] );


    useEffect( () => {
        if( durationValue === duration_sec ){
            setIsReady( false );
        }else{
            setIsReady( true );
        };

    }, [ durationValue ] );

    useEffect( () => {
        setDurationValue( duration_sec );

        let time = convert_sec_to_time( duration_sec );
        let arr = time.split( ':' );
        setHH( arr[ 0 ] );
        setMM( arr[ 1 ] );
        setSS( arr[ 2 ] );


    }, [ duration_sec ] );


    const enter = () => {
        let time = `${HH}:${MM}:${SS}`;
        let sec = convert_time_str_to_sec( time );
        setDurationValue( sec );
    };




    const save_click = () => {

        save_sub_app_changes_on_server({
            subApplicationId: id,
            applicationId: application_id,
            changedData: {
                duration_sec: durationValue,
            },
            callback: ( response ) => {
                setIsReady( false );

            },
        });
    };
    


    
    
    return (
        <div className = 'SA_ItemSubDuration'>

            <h3>Хрон: <span className = 'SA_ItemSubDuration_dur'>{ convert_sec_to_time( duration_sec ) }</span></h3>

            <ItemEditComponent buttonType = 'by_body'>
            
                <div className = 'SA_ItemSubDuration_edit'>
                    <h3>Длительность файла:</h3>

                    <InputDuration 
                        HH =            { HH }
                        MM =            { MM }
                        SS =            { SS }
                        setHH =         { setHH }
                        setMM =         { setMM }
                        setSS =         { setSS }
                        enterHandler =  { enter }
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

export function ItemSubDuration( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubDurationComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
