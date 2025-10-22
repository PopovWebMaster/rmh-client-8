
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FilterSearsh.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const FilterSearshComponent = ( props ) => {

    let {
        
    } = props;

    return (
        <div className = 'FL_FilterSearsh'>
FL_FilterSearsh
            
        </div>
    )

};


export function FilterSearsh( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <FilterSearshComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
