
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PremieraToggle.scss';

// import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js';



const PremieraToggleComponent = ( props ) => {

    let {
        id,
        is_premiere,
        
    } = props;

    const click = () => {
        // set_grid_event_changes_to_store( id, { is_premiere: !is_premiere } );
        set_grid_event_changes_to_store( id, { is_premiere: !is_premiere } );
    }



    return (
        <div className = 'CTS_PremieraToggleItem'>

            <span 
                className = { `CTS_PremieraToggleItem_btn ${ is_premiere? 'isActive': ''}` }
                onClick = { click }
            >premiere</span>

            
        </div>
    )

};

export function PremieraToggle( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <PremieraToggleComponent
            { ...props }
            // eventListById = { layout.eventListById }
            // categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
