
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportPricePrime.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AWInputText } from './../../../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';


const PasportPricePrimeComponent = ( props ) => {

    let {
        pasportPricePrime,
        setPasportPricePrime
        
    } = props;

    const change = ( e ) => {
        let val = Number( e.target.value );
        if( /^-?\d+$/.test( val ) ){
            setPasportPricePrime( val )
        };
    };

    
    return (
        <div className = 'SA_PasportPricePrime'>

            <AWInputText
                title = { 'Стоимость ПРАЙМ (17:00-23:00) 1 рос. руб.:' }
                value = { pasportPricePrime }
                onChange = { change }
            />

            

        </div>
    )

};

export function PasportPricePrime( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportPricePrimeComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
