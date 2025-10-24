
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AssignEventForChecked.scss';

import { selectorData as airFilesSlice } from './../../../../../../redux/airFilesSlice.js';

import { FilterButtonContainer } from './../FilterButtonContainer/FilterButtonContainer.js';

import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWEventSelect }        from './../../../../../../components/AlertWindowContainer/AWEventSelect/AWEventSelect.js';
import { AWButtonAdd }          from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { set_air_files_to_store } from './../../../../vendors/set_air_files_to_store.js';

const AssignEventForCheckedComponent = ( props ) => {

    let {
        issetChackedValues,
        filteredList,
        airFiles,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ eventId, setEventId ] = useState( null );

    useEffect(() => {
        if( isOpen ){

        }else{
            setEventId( null );
        };

    }, [ isOpen ]);

    const changheEvent = ( id ) => {
        setEventId( id );

    };
    

    const click = () => {
        setIsOpen( true );
    }

    const applayEvent = () => {

        let obj = {};
        for( let i = 0; i < filteredList.length; i++ ){
            let { name, isSelected } = filteredList[ i ];
            if( isSelected ){
                obj[ name ] = filteredList[ i ];
            };
        };

        let newAirFiles = structuredClone( airFiles );

        for( let name in obj ){
            newAirFiles[ name ].event_id = eventId;
        };

        set_air_files_to_store( newAirFiles, true );

        setIsOpen( false );
    }

    return (
        <div className = 'assignEventForChecked'>

            { issetChackedValues? (<>
                <AlertWindowContainer
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }
                    title =     'Назначить событие'
                    width =     '30em'
                    height =    '65vh'
                >
                    <div className = 'FPAEFC_wrap'>

                        <AWEventSelect
                            value = { eventId }
                            changeHandler = { changheEvent }
                            alwaysIsOpen = { true }
                        />

                        <AWButtonAdd
                            isReady  = { true }
                            clickHandler = { applayEvent }
                        />

                    </div>

                </AlertWindowContainer>  

                <FilterButtonContainer
                    isActive =      { true }
                    title =         { 'Назначить событие' }
                    clickHandler =  { click }
                />
            </>): '' }
    </div>)

};


export function AssignEventForChecked( props ){

    const airFiles_ = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <AssignEventForCheckedComponent
            { ...props }

            issetChackedValues = { airFiles_.issetChackedValues }
            filteredList = { airFiles_.filteredList }
            airFiles = { airFiles_.airFiles }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
