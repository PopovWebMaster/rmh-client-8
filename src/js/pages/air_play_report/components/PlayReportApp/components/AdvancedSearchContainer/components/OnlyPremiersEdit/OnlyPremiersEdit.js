
import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './OnlyPremiersEdit.scss';

const OnlyPremiersEditComponent = ( props ) => {

    let {
        isOnlyPremiers, 
        setIsOnlyPremiers


    } = props;


    return (
        <div className = 'PR_ASC_premiersOnly'>

            <h3>Включить только примьеры? </h3>
            <span
                className = { `PR_ASC_premiersOnly_btn ${isOnlyPremiers? 'isActive': '' }`}
                onClick = { () => { setIsOnlyPremiers( !isOnlyPremiers ) } }
            >{ isOnlyPremiers? 'Да': 'Нет' }</span>

        </div>

    )

};

export function OnlyPremiersEdit( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <OnlyPremiersEditComponent
            { ...props }
            // searchFocus = { playReport.searchFocus }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
