// PasportPrice

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportPrice.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AWInputText } from './../../../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';


const PasportPriceComponent = ( props ) => {

    let {
        pasportPrice,
        setPasportPrice
        
    } = props;

    const change = ( e ) => {
        let val = Number( e.target.value );
        if( /^-?\d+$/.test( val ) ){
            setPasportPrice( val )
        };
    };

    
    return (
        <div className = 'SA_PasportPrice'>

            <AWInputText
                title = { 'Стоимость 1 рос. руб.:' }
                value = { pasportPrice }
                onChange = { change }
            />

            

        </div>
    )

};

export function PasportPrice( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportPriceComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
