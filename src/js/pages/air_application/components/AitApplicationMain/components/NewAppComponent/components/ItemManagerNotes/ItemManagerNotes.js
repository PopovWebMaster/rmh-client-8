
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemManagerNotes.scss';

// import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../redux/applicationSlice.js';

const ItemManagerNotesComponent = ( props ) => {

    let {
        managerNotes,
        setManagerNotes,
    } = props;


    const change = ( e ) => {
        let val = e.target.value;
        setManagerNotes( val );
    }

    return (
        <div className = 'ANAppl_manager_notes' >
            <h4>Заметки для менеджера: </h4>

            <textarea 
                value =     { managerNotes }
                onChange =  { change }
                maxLength = { 255 }
            />
           
        </div>

    )

};

export function ItemManagerNotes( props ){

    // const application = useSelector( applicationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemManagerNotesComponent
            { ...props }

            // applicationList = { application.applicationList }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
