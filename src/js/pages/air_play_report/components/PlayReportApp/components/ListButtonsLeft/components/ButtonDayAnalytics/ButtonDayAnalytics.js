

import React from "react";
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setAnalitycsIsActive } from './../../../../../../../../redux/playReportAnalyticsSlise.js';

import './ButtonDayAnalytics.scss';

import { ButtonLeft } from './../ButtonLeft/ButtonLeft.js';


const ButtonDayAnalyticsComponent = ( props ) => {

    let {
        setAnalitycsIsActive,

    } = props;

    const click = () => {

        setAnalitycsIsActive( true );
        

    };

    
    return (
        <div className = 'PRL_ButtonDayAnalytics'>
            
            <ButtonLeft 
                icon = 'icon-chart-bar'
                // text = { <>Аналитика <span className = 'PRL_ButtonLeft_textSecond'>ВСЕ ДНИ</span></> }
                text = { <>Аналитика</> }

                click = { click }
            />
        </div>
    )

};

export function ButtonDayAnalytics( props ){

    // const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ButtonDayAnalyticsComponent
            { ...props }



            setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}

