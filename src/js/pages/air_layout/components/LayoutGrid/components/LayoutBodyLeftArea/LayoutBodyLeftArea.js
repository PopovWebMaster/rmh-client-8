
import React, { useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutBodyLeftArea.scss';

import { PageBodyCounters } from './../../../../../../components/PageBodyCounters/PageBodyCounters.js';


const LayoutBodyLeftAreaComponent = ( props ) => {

    let {

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const get_item_class = ( val ) => {
        return val? 'icon-angle-left': 'icon-angle-right'
    }

    
    return (
        <div className = 'layoutBodyLeftArea'>

            <div className = { `LBLA_body ${ isOpen? 'open': '' }` }>
                <PageBodyCounters />
            </div>

            <div 
                className = 'LBLA_btn'
                onClick = { () => { setIsOpen( !isOpen ) } }
            >
                <span className = { get_item_class( isOpen ) }></span>
            </div>


 
        </div>
    )

};

export function LayoutBodyLeftArea( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutBodyLeftAreaComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
