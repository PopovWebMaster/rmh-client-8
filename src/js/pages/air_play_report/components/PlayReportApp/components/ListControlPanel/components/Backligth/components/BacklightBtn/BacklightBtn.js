
import React from "react";

import './BacklightBtn.scss';

import { toggle_backlight_item } from './../../vendors/toggle_backlight_item.js';


export const BacklightBtn = ( props ) => {

    let {
        status,
        name,
    } = props;

    return (
        <div className = 'PR_BacklightBtn' >
            <span 
                className = { status? 'active': '' }
                onClick = { () => {
                    toggle_backlight_item( name )
                } }
            >{ name }</span>
        </div>
        
    )

};

