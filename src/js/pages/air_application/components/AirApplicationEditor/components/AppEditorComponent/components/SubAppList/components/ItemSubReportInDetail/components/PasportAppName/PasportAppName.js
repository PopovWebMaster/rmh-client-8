
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportAppName.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AWInputText } from './../../../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';


const PasportAppNameComponent = ( props ) => {

    let {
        pasportAppName,
        setPasportAppName
        
    } = props;

    const change = ( e ) => {
        let val = e.target.value;
        setPasportAppName( val );
    };

    
    return (
        <div className = 'SA_PasportAppName'>

            <AWInputText
                title = { 'Заявка:' }
                value = { pasportAppName }
                onChange = { change }
            />

            

        </div>
    )

};

export function PasportAppName( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportAppNameComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
