
import React from "react";

// import './AC_EmptyRow.scss';

import { ANALYTICS_TABLE } from './../../../../../../../../config/playReport.js';


export const AC_EmptyRow = ( props ) => {

    let {} = props;


    const create = () => {
        let td = ANALYTICS_TABLE.HEADER.map( ( item, index ) => {
            return (
                <td 
                    key = { index }
                ></td>
            );
        } );
        return td;
    }


    return (
        <tr>{ create() }</tr>
    )

};


