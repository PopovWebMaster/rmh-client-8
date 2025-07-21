
import React, { useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './DropDownTable.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';
import { Close } from './components/Close/Close.js';
import { MonthBtn } from './components/MonthBtn/MonthBtn.js';
import { Table } from './components/Table/Table.js';



const DropDownTableComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,


    } = props;



    return (<>{ isOpen? (
            <div className = 'dropDownTable'>
                <Close
                    setIsOpen = { setIsOpen }
                />
                <MonthBtn />

                <Table
                    setIsOpen = { setIsOpen }
                />

                
            </div>
    ): '' }</>

    )

};


export function DropDownTable( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <DropDownTableComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
