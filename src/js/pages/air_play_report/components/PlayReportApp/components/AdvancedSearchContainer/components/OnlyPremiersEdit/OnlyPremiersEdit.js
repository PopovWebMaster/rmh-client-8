
import React from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportSlice, setAdvancedSearchisOnlyPremiers } from './../../../../../../../../redux/playReportSlice.js';

import './OnlyPremiersEdit.scss';

const OnlyPremiersEditComponent = ( props ) => {

    let {
        // isOnlyPremiers, 
        // setIsOnlyPremiers,


        advancedSearchisOnlyPremiers,
        setAdvancedSearchisOnlyPremiers,

    } = props;


    return (
        <div className = 'PR_ASC_premiersOnly'>

            <h3>Включить только премьеры? </h3>
            <span
                className = { `PR_ASC_premiersOnly_btn ${advancedSearchisOnlyPremiers? 'isActive': '' }`}
                onClick = { () => { setAdvancedSearchisOnlyPremiers( !advancedSearchisOnlyPremiers ) } }
            >{ advancedSearchisOnlyPremiers? 'Да': 'Нет' }</span>

        </div>

    )

};

export function OnlyPremiersEdit( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <OnlyPremiersEditComponent
            { ...props }
            advancedSearchisOnlyPremiers = { playReport.advancedSearchisOnlyPremiers }
            setAdvancedSearchisOnlyPremiers = { ( val ) => { dispatch( setAdvancedSearchisOnlyPremiers( val ) ) } }

        />
    );


}
