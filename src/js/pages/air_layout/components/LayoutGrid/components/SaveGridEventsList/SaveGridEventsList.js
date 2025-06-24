
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveGridEventsList.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { PageBodySaveButton } from './../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';

import { save_grid_events_changes_on_server } from './../../vendors/save_grid_events_changes_on_server.js'

const SaveGridEventsListComponent = ( props ) => {

    let {
        gridDayEventsIsChanges,

    } = props;

    const click = () => {
        save_grid_events_changes_on_server( () => {} );
    }
    
    return (
        <PageBodySaveButton 
            isChanged = { gridDayEventsIsChanges }
            clickHandler = { click }

        />
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
