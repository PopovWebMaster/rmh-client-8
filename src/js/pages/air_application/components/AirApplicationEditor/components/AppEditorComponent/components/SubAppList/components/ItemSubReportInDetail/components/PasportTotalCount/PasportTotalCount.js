
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportTotalCount.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


const PasportTotalCountComponent = ( props ) => {

    let {
        
        pasportTotalCount
    } = props;


    
    
    return (
        <div className = 'SA_PasportTotalCount'>
            <h4>Всего выпусков:</h4>
            <input
                type = 'text'
                value = { pasportTotalCount }
                className = 'SAPTC_input_text'
                onChange = { () => {} }
            />


        </div>
    )

};

export function PasportTotalCount( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportTotalCountComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
