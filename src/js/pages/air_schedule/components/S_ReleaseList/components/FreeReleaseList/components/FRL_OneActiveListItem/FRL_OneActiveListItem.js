
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_OneActiveListItem.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';



const FRL_OneActiveListItemComponent = ( props ) => {

    let {
        fileName,
        duration,
        count,
        eventId,
       
    } = props;



    return (
        <div className =     'FRL_ActiveList_item'>
            <span className = 'FRL_ActiveList_item_duration'>{ convert_sec_to_time( duration ) }</span>
            <span className = 'FRL_ActiveList_item_name'>{ fileName }</span>
            <span className = 'FRL_ActiveList_item_count'>{ count }</span>
        </div>
    )

};

export function FRL_OneActiveListItem( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FRL_OneActiveListItemComponent
            { ...props }

            // freeReleasesFilterCategoryId = { scheduleResult.freeReleasesFilterCategoryId }
            // freeReleasesFilterEventId = { scheduleResult.freeReleasesFilterEventId }
            // freeReleasesFiltered = { scheduleResult.freeReleasesFiltered }



            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}


