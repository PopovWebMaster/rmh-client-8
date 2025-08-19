
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './A_Header.scss';

import { useNavigate } from "react-router-dom";

// import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as companySlice } from './../../../../../../../../redux/companySlice.js';

import { InputAppNum } from './../InputAppNum/InputAppNum.js';

import { ROUTE } from './../../../../../../../../config/routes.js';

const A_HeaderComponent = ( props ) => {

    let {
        currentCompanyAlias,
    } = props;

    let navigate = useNavigate();

    const click = () => {
        navigate( `/${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_APPLICATION}` );
    }

    return (
        <div className = 'A_Header'>
            <h4>Заявка №:</h4>
            <InputAppNum />

            <div className = 'A_Header_last'>
                 <div className = 'A_BackCross'>
                    <span
                        className = 'icon-cancel-2 A_BackCross_icon'
                        onClick = { click }
                    ></span>
                </div>
            </div>
            
        </div>
    )

};

export function A_Header( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <A_HeaderComponent
            { ...props }
            // currentAppNum = { application.currentAppNum }
            // currentAppName = { application.currentAppName }
            // currentAppType = { application.currentAppType }

            currentCompanyAlias = { company.currentCompanyAlias }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
