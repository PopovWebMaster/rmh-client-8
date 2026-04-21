
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportDescription.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AWTextarea } from './../../../../../../../../../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';


const PasportDescriptionComponent = ( props ) => {

    let {
        pasportDescription,
        setPasportDescription 
        
    } = props;

    const change = ( e ) => {
        let val = e.target.value;
        setPasportDescription( val );
    };
    
    
    return (
        <div className = 'SA_PasportDescription'>
            <AWTextarea
                title = 'Описание:'
                value = { pasportDescription }
                onChange = { change }
            />

            

        </div>
    )

};

export function PasportDescription( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportDescriptionComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
