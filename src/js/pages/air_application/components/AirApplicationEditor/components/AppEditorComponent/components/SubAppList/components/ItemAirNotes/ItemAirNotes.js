
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemAirNotes.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ItemEditComponent } from './../ItemEditComponent/ItemEditComponent.js';
import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';
import { save_sub_app_changes_on_server } from './../../../../../../vendors/save_sub_app_changes_on_server.js';

import { YesOrNoTitle } from './../YesOrNoTitle/YesOrNoTitle.js';

const ItemAirNotesComponent = ( props ) => {

    let {
        id,
        application_id,
        air_notes,
        
    } = props;

    let [ notesValue, setNotesValue ] = useState( '' );
    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        if( notesValue === '' ){
            setIsReady( false );
        }else{
            if( air_notes === notesValue ){
                setIsReady( false );
            }else{
                setIsReady( true );
            };
        };

    }, [ notesValue ] );

    useEffect(() => {
        setNotesValue( air_notes === null? '': air_notes );
    }, [ air_notes ]);


    const change_notes = ( e ) => {
        let val = e.target.value;
        setNotesValue( val );
    };



    const save_click = () => {
        save_sub_app_changes_on_server({
            subApplicationId: id,
            applicationId: application_id,
            changedData: {
                air_notes:  notesValue.trim(),
            },
            callback: ( response ) => {

                console.dir( response );
                setIsReady( false );
                
                // setNameValue( '' );

            },
        });
    }






    return (
        <div className = 'SA_ItemAirNotes'>

           <YesOrNoTitle
                title = { 'Заметки' }
                booleanValue = { notesValue === ''? false: true }
           />

            <ItemEditComponent>

                <div className = 'SA_ItemAirNotes_edit'>
                    <h3>Заметки для эфирщика:</h3>

                    <textarea
                        value =         { notesValue }
                        onChange =      { change_notes }
                        maxLength =     { 255 }
                    
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

export function ItemAirNotes( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemAirNotesComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
