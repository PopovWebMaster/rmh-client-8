
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../../../redux/playReportSlice.js';

import './Graphics.scss';


const GraphicsComponent = ( props ) => {

    let {
        
        graphics,
        startTime,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    useEffect( () => {
        setIsOpen( false );
    }, [] );

    const create = ( arr ) => {
        let li = arr.map( ( item, index ) => {

            let sec = Math.round( (item.startTime.ms - startTime.ms)/1000 );
            return (<li key = { index }>
                
                <span className = 'PRL_ItemGraphics_item_file'>{ item.file.name }</span>
                <span className = 'PRL_ItemGraphics_item_markIn'>{ sec }<span className = 'PRL_ItemGraphics_item_markInsec'>sec</span></span>
                
            </li>)
        } );

        return li;
    }
    
    return (
        <div className = 'PRL_ItemGraphics'>
            { graphics.length > 0? (<>
                <h2
                    onClick = { () => { setIsOpen( !isOpen ) } }
                >Графика +{ graphics.length }</h2>

                { isOpen? (
                    <div className = 'PRL_ItemGraphics_list'>
                        <ul>
                            { create( graphics ) }
                        </ul>
                    </div>

                ): '' }

                

            </>): '' }

            {/* <input 
                type = 'text'
                value = { file.name }
                onChange = { () => {}}
            />
            <input 
                type = 'text'
                value = { file.puth  }
                onChange = { () => {}}
            /> */}
            

        </div> 

    )

};

export function Graphics( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <GraphicsComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}


