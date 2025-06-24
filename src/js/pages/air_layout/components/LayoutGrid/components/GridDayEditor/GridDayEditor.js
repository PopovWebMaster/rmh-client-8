
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './GridDayEditor.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';



import { UpdateOneDayGridList } from './../UpdateOneDayGridList/UpdateOneDayGridList';
import { set_max_height_em_for_empty_time_segment } from './vendors/set_max_height_em_for_empty_time_segment.js';

// import { ListOfSegments } from './../ListOfSegments/ListOfSegments.js';
// import { ListBySectors } from './../ListBySectors/ListBySectors.js';
// import { set_max_height_em_for_empty_time_segment } from './../../../../vendors/set_max_height_em_for_empty_time_segment.js';
import { ListBySectors } from './../ListBySectors/ListBySectors.js';

const GridDayEditorComponent = ( props ) => {

    let {
    } = props;

    let refEd = useRef();

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        set_max_height_em_for_empty_time_segment( refEd.current.parentElement );
        setIsReady( true );
    }, [] );


    return (
       <div 
            className = 'gridDayEditor'
            ref = { refEd }
        >
            { isReady? (
                <UpdateOneDayGridList>
                    <ListBySectors />
                </UpdateOneDayGridList>
            ): '' }
       </div>
    )

};

export function GridDayEditor( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <GridDayEditorComponent
            { ...props }
            // gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
