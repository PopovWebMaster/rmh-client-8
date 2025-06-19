
import React from "react";
import { useSelector/*, useDispatch*/ } from 'react-redux';

import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import './CompanyMenu.scss';

import { ROUTE } from './../../../../config/routes.js';

const CompanyMenuComponent = ( props ) => {

    let {
        companyList,
    } = props;

    const click = ( alias ) => {
        // window.location.href = `${HOST_TO_API_SERVER}/${ROUTE.COMPANY_AIR}/${alias}`;
        window.location.href = `${HOST_TO_API_SERVER}/${ROUTE.COMPANY}/${ROUTE.PAGE.AIR_MAIN}/${alias}`;
    };

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            return (
                <div
                    key = { index }
                    className = 'companyMenu_btn'
                    onClick = { () => { click( item.alias ) } }
                >
                    <span>{ item.name }</span>
                    <span className = 'companyMenu_type'>{ item.type }</span>
                </div>
            );
        } );
        return div;
    };

    return (
        <div className = 'companyMenu'>
            { create( companyList ) }
        </div>
    )
};

export function CompanyMenu( props ){

    const company = useSelector( companySlice );

    // const dispatch = useDispatch();

    return (
        <CompanyMenuComponent
            { ...props }
            companyList =       { company.companyList }
            // setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            // setCompanyList =    { ( val ) => { dispatch( setCompanyList( val ) ) } }

        />
    );


}
