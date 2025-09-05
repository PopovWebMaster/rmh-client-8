
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PremieraToggle.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js';



const PremieraToggleComponent = ( props ) => {

    let {
        id,
        is_premiere,
        firstSegmentId,

        layout,
        gridCurrentDay,
        gridDayEventsList,
        
    } = props;

    let [ isShow, setIsShow ] = useState( false );

    useEffect( () => {

        if( firstSegmentId === id || firstSegmentId === null ){
            setIsShow( true );
        }else{
            setIsShow( false );
        };

    }, [ firstSegmentId, id ]);

    const click = () => {

        console.dir( {
            layout,
            id,
        } );



        if( isShow ){
            if( firstSegmentId === null ){
                set_grid_event_changes_to_store( id, { is_premiere: !is_premiere } );
            }else{

                let idList = [];
                for( let i = 0; i < gridDayEventsList[ gridCurrentDay ].length; i++ ){
                    if( firstSegmentId === gridDayEventsList[ gridCurrentDay ][ i ].firstSegmentId ){
                        idList.push( gridDayEventsList[ gridCurrentDay ][ i ].id );
                    };
                };
                for( let i = 0; i < idList.length; i++ ){
                    set_grid_event_changes_to_store( idList[ i ], { is_premiere: !is_premiere } );
                };
            };
        };
        
    }

    return (
        <div className = 'CTS_PremieraToggleItem'>

            { isShow? (
                <span 
                    className = { `CTS_PremieraToggleItem_btn ${ is_premiere? 'isActive': ''}` }
                    onClick = { click }
                >premiere</span>
            ): '' }

            

        </div>
    )

};

export function PremieraToggle( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <PremieraToggleComponent
            { ...props }
            layout = { layout }
            gridCurrentDay = { layout.gridCurrentDay }
            gridDayEventsList = { layout.gridDayEventsList }
            // categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
