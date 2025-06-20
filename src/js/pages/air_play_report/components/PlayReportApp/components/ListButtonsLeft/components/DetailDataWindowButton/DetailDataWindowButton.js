
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportSlice, setDetailDataWindowIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './DetailDataWindowButton.scss';

import { ButtonLeft } from './../ButtonLeft/ButtonLeft.js';


const DetailDataWindowButtonComponent = ( props ) => {

    let {
        setDetailDataWindowIsOpen
    } = props;

    const click = () => {
        setDetailDataWindowIsOpen( true );
    }



    
    return (
        <div className = 'PRL_DetailDataWindowButton'>
            <ButtonLeft 
                icon = 'icon-tools'
                text = 'Для отчёта'
                click = { click }
            />
        </div>
    )

};

export function DetailDataWindowButton( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <DetailDataWindowButtonComponent
            { ...props }
            // filteredList = { playReport.filteredList }
            // dateListSelected = { playReport.dateListSelected }

            setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }

        />
    );


}

