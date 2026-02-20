// ColorCellButtons




import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ColorCellButtons.scss';

import { selectorData as layoutSlice } from './../../../../../../../redux/layoutSlice.js';

import { COLOR } from './../../../vendors/download_excel_as_schedule_oplot/excel_config.js';


import { set_cell_color_to_localStorage } from './../../../vendors/set_cell_color_to_localStorage.js';



const ColorCellButtonsComponent = ( props ) => {

    let {
        eventId,
        cellColor,
        change_cell_color,

    } = props;

    const getStyle = ( color ) => {

        let result = {
            backgroundColor: '#00000000',
        };
        if( color ){
            result.backgroundColor = `#${color.toLowerCase()}`;
        };

        return result;

    }

    const click = ( color ) => {
        change_cell_color( color, eventId );
        set_cell_color_to_localStorage( eventId, color );
    }


    return (
        <div className = { `S_ColorCellButtons` }>

            <div 
                className = 'SCCB_current'
                style = { getStyle( cellColor ) }
                onClick = { () => { click( null ) } }
            >
            </div>

            <div className = 'S_ColorCellButtons_wrap'>

                

                <div 
                    className = 'SCCB_item'
                    style = { getStyle( COLOR.ORANGE ) }
                    onClick = { () => { click( COLOR.ORANGE ) } }
                >
                </div>
                <div 
                    className = 'SCCB_item'
                    style = { getStyle( COLOR.LIGHT_YELLOW ) }
                    onClick = { () => { click( COLOR.LIGHT_YELLOW ) } }
                >
                </div>
                <div 
                    className = 'SCCB_item'
                    style = { getStyle( COLOR.LIGHT_GRAY ) }
                    onClick = { () => { click( COLOR.LIGHT_GRAY ) } }
                >
                </div>

                <div 
                    className = 'SCCB_item'
                    style = { getStyle( COLOR.PALE_GREEN ) }
                    onClick = { () => { click( COLOR.PALE_GREEN ) } }
                >
                </div>

                <div 
                    className = 'SCCB_item'
                    style = { getStyle( COLOR.PALE_BLUE ) }
                    onClick = { () => { click( COLOR.PALE_BLUE ) } }
                >
                </div>

                <div 
                    className = 'SCCB_item'
                    style = { getStyle( COLOR.RED ) }
                    onClick = { () => { click( COLOR.RED ) } }
                >
                </div>



            </div>



            
        </div>
        
    )

};


export function ColorCellButtons( props ){

    const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <ColorCellButtonsComponent
            { ...props }
            eventListById = { layout.eventListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
