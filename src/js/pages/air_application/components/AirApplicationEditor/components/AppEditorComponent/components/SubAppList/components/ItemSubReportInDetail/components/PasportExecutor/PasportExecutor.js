// PasportExecutor


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportExecutor.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AWInputText } from './../../../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';

const PasportExecutorComponent = ( props ) => {

    let {

        pasportExecutor,
        setPasportExecutor
        
    } = props;

    const change = ( e ) => {
        let val = e.target.value;
        setPasportExecutor( val );
    };


    
    
    return (
        <div className = 'SA_PasportExecutor'>
            <AWInputText
                title = { 'Исполнитель' }
                value = { pasportExecutor }
                onChange = { change }
            />
            
        </div>
    )

};

export function PasportExecutor( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportExecutorComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
