
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportFileName.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AWInputText } from './../../../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';

const PasportFileNameComponent = ( props ) => {

    let {
        pasportFileName,
        setPasportFileName,
        
    } = props;

    const change = ( e ) => {
        let val = e.target.value;
        setPasportFileName( val );
    };


    
    
    return (
        <div className = 'SA_PasportFileName'>
            <AWInputText
                title = { 'Имя файла' }
                value = { pasportFileName }
                onChange = { change }
            />
            
        </div>
    )

};

export function PasportFileName( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportFileNameComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
