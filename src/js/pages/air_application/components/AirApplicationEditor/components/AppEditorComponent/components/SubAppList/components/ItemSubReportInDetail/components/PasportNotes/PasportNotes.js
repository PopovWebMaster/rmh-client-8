// PasportNotes

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportNotes.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AWTextarea } from './../../../../../../../../../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';


const PasportNotesComponent = ( props ) => {

    let {
        pasportNotes,
        setPasportNotes,
        
    } = props;


    const change = ( e ) => {
        let val = e.target.value;
        setPasportNotes( val );
    };
    
    return (
        <div className = 'SA_PasportNotes'>

            <AWTextarea
                title = 'Доп. инфо.:'
                value = { pasportNotes }
                onChange = { change }
            />

            

        </div>
    )

};

export function PasportNotes( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportNotesComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
