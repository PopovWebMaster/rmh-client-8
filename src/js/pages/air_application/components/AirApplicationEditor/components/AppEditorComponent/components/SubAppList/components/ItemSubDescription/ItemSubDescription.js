
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubDescription.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ItemEditComponent } from './../ItemEditComponent/ItemEditComponent.js';
import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';

import { save_sub_app_changes_on_server } from './../../../../../../vendors/save_sub_app_changes_on_server.js';


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



    const getTitle = ( val ) => {

        let title = '';
        let className = '';
        let classNameIcon = '';

        if( val ){
            title = 'Есть';
            className = 'SA_ItemSubDescription_yes';
            classNameIcon = 'icon-ok-3 icon'
        }else{
            title = 'Нет';
            className = 'SA_ItemSubDescription_no';
            classNameIcon = 'icon'
        };

        return (
            <span className = 'SA_ItemSubDescription_title'>
                <span className = { classNameIcon }></span>
                <span className = { className }>{ title }</span>
            </span>
        );

    }



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
           
            <h3>Описание: { getTitle( description ) }</h3>


            <ItemEditComponent>
                        
                <div className = 'SA_ItemSubDescription_edit'>
                    <h3>Описание содержимого файла:</h3>

                    <textarea
                        value = { descriptionValue }
                        onChange = { change }
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
