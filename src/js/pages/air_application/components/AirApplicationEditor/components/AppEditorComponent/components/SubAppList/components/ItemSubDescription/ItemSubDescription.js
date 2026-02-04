
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubDescription.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ItemEditComponent } from './../ItemEditComponent/ItemEditComponent.js';
import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';

import { save_sub_app_changes_on_server } from './../../../../../../vendors/save_sub_app_changes_on_server.js';

import { YesOrNoTitle } from './../YesOrNoTitle/YesOrNoTitle.js';


const ItemSubDescriptionComponent = ( props ) => {

    let {
        id,
        application_id,
        description,
        
    } = props;

    let [ isReady, setIsReady ] = useState( false );
    let [ descriptionValue, setSetDescriptionValue ] = useState( description );

    useEffect( () => {


        if( descriptionValue.trim() === description ){
            setIsReady( false );
        }else{
            setIsReady( true );
        };

    }, [ descriptionValue ] );

    useEffect( () => {

        setSetDescriptionValue( description );

    }, [ description ] );

    const save_click = () => {

        save_sub_app_changes_on_server({
            subApplicationId: id,
            applicationId: application_id,
            changedData: {
                description: descriptionValue,
            },
            callback: ( response ) => {
                setIsReady( false );

            },
        });
    };

    const change = ( e ) => {
        let val = e.target.value;
        setSetDescriptionValue( val );

    }
    
    return (
        <div className = 'SA_ItemSubDescription'>

            <YesOrNoTitle
                title = { 'Описание' }
                booleanValue = { description }
            />
            <ItemEditComponent buttonType = 'by_body'>
                        
                <div className = 'SA_ItemSubDescription_edit'>
                    <h3>Описание содержимого файла:</h3>

                    <textarea
                        value = { descriptionValue }
                        onChange = { change }
                    />

                </div>

                <AlertWindowContainerSaveAdd 
                    isActive =      { true }
                    clickHandler =  { save_click }
                />
            </ItemEditComponent>
        </div>
    )

};

export function ItemSubDescription( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubDescriptionComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
