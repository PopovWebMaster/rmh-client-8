
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportName.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AWInputText } from './../../../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';


const PasportNameComponent = ( props ) => {

    let {
        pasportName,
        setPasportName,
        
    } = props;

    const change = ( e ) => {
        let val = e.target.value;
        setPasportName( val );
    };

    
    return (
        <div className = 'SA_PasportName'>

            <AWInputText
                title = { 'Название выпуска:' }
                value = { pasportName }
                onChange = { change }
            />

            

        </div>
    )

};

export function PasportName( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportNameComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
