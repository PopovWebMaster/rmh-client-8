
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveGridEventsList.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { PageBodySaveButton } from './../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';

import { save_grid_events_changes_on_server } from './../../vendors/save_grid_events_changes_on_server.js';

import { IsAllowedContainer } from './../../../../../../components/IsAllowedContainer/IsAllowedContainer.js';

const SaveGridEventsListComponent = ( props ) => {

    let {
        gridDayEventsIsChanges,

    } = props;

    useEffect(() => {
        if( gridDayEventsIsChanges ){
            window.onbeforeunload = ( ev ) => {
                ev.preventDefault();
                ev.returnValue = 'Are you sure you want to close?';
                // return 
            };
        }else{
            window.onbeforeunload = null
        };
    }, [ gridDayEventsIsChanges ]);

    let [ isAllowed, setIsAllowedResult ] = useState( false );

    const click = () => {
        if( isAllowed ){
            save_grid_events_changes_on_server( () => {} );
        };
    }
    
    return (

        <IsAllowedContainer
            accessName =            'layout_grid_edit'
            setIsAllowedResult =    { setIsAllowedResult }
        >
            <PageBodySaveButton 
                isChanged = { gridDayEventsIsChanges }
                clickHandler = { click }

            />
        </IsAllowedContainer>

    )

};

export function SaveGridEventsList( props ){

    const layout = useSelector( layoutSlice );

    const dispatch = useDispatch();

    return (
        <SaveGridEventsListComponent
            { ...props }
            gridDayEventsIsChanges =    { layout.gridDayEventsIsChanges }


        />
    );


}
