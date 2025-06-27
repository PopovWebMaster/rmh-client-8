
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SubAppList.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';

import { OneSubApplication } from './components/OneSubApplication/OneSubApplication.js'



const SubAppListComponent = ( props ) => {

    let {
        currentSubAppList
    } = props;

    const create = ( arr ) => {

        let div = arr.map(( item, index ) => {

            let {
                air_notes,
                application_id,
                duration_sec,
                id,
                name,
                period_from,
                period_to,
                serial_num,
                type,
                file_names,
                description,
                release_list,
            } = item;

            return (
                <OneSubApplication 
                    key =               { index }
                    id =                { id }
                    application_id =    { application_id }
                    name =              { name }
                    air_notes =         { air_notes }
                    duration_sec =      { duration_sec }
                    period_from =       { period_from }
                    period_to =         { period_to }
                    serial_num =        { serial_num }
                    type =              { type }

                    file_names =        { file_names }
                    description =       { description }
                    release_list =      { release_list }

                />
            );

        });

        return div;

    }


    
    
    return (
        <div className = 'subAppList'>
            { create( currentSubAppList ) }

        </div>
    )

};

export function SubAppList( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <SubAppListComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
