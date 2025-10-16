
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneSubApplication.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ItemSubName }              from './../ItemSubName/ItemSubName.js';
import { ItemSubPeriod }            from './../ItemSubPeriod/ItemSubPeriod.js';
import { ItemSubFiles }             from './../ItemSubFiles/ItemSubFiles.js';
import { ItemSubDuration }          from './../ItemSubDuration/ItemSubDuration.js';
import { ItemSubDescription }       from './../ItemSubDescription/ItemSubDescription.js';
import { ItemSubShedule }           from './../ItemSubShedule/ItemSubShedule.js';
import { ItemSubReportInDetail }    from './../ItemSubReportInDetail/ItemSubReportInDetail.js';
import { ItemSubRemove }            from './../ItemSubRemove/ItemSubRemove.js';

import { ItemAirNotes } from './../ItemAirNotes/ItemAirNotes.js';

;

const OneSubApplicationComponent = ( props ) => {

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

    } = props;
    
    
    return (
        <div className = 'oneSubApplication'>

            <ItemSubName 
                id =                { id }
                application_id =    { application_id }
                name =              { name }
            />
            <ItemSubPeriod 
                id =                { id }
                application_id =    { application_id }
                period_from =       { period_from }
                period_to =         { period_to }

            />
            <ItemSubFiles 
                id =                { id }
                application_id =    { application_id }
                file_names = { file_names }
            />

            <ItemSubDuration 
                id =                { id }
                application_id =    { application_id }
                duration_sec =      { duration_sec }
            />

            <ItemSubDescription 
                id =                { id }
                application_id =    { application_id }
                description =       { description }
            />

            <ItemAirNotes
                id =                { id }
                application_id =    { application_id }
                air_notes =         { air_notes }
            />


            <ItemSubShedule 
                id =                { id }
                application_id =    { application_id }
                release_list =      { release_list }
                duration_sec =      { duration_sec }
                period_from =       { period_from }
                period_to =         { period_to }
                name = { name }

            />


            {/* <ItemSubReportInDetail 
                id =                { id }
                application_id =    { application_id }
            /> */}
            
            <ItemSubRemove
                id =                { id }
                application_id =    { application_id }
                type =              { type }
            />
           

        </div>
    )

};

export function OneSubApplication( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <OneSubApplicationComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
