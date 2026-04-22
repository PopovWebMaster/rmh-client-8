// PasportColontitul

// PasportNotes

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportColontitul.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

// import { AWTextarea } from './../../../../../../../../../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';
import { AWInputText } from './../../../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';

const PasportColontitulComponent = ( props ) => {

    let {

        pasportColontitul,
        setPasportColontitul,
        
    } = props;


    const change = ( e ) => {
        let val = e.target.value;
        setPasportColontitul( val );
    };
    
    return (
        <div className = 'SA_PasportColontitul'>

            <AWInputText
                title = { 'Колонтитул:' }
                value = { pasportColontitul }
                onChange = { change }
            />

        </div>
    )

};

export function PasportColontitul( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportColontitulComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
