
import React, { useState, useEffect }  from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './DateItem.scss';

const DateItemComponent = ( props ) => {

    let {
        item,
    } = props;

    let [ isPremiereValue, setIsPremiereValue ] = useState( false );
    let [ YYYY_MM_DD, setYYYY_MM_DD ] = useState( '' );

    useEffect( () => {
        let { type } = item;
        if( type === 'movie' ){
            let { date, premiere,  } = item;

            setYYYY_MM_DD( date.YYYY_MM_DD );
            if( premiere.isPremiere ){
                setIsPremiereValue( true );
            };
        };
    }, [] );





    
    return (
        <div className = 'PRL_ItemMovie2_date'>
            <span className = 'PRL_ItemMovie2_date_str' >{ YYYY_MM_DD }</span>
            { isPremiereValue? (
                <span className = 'PRL_ItemMovie2_date_premiere' >Премьера!</span>
            ): '' }
            
        </div> 

    )

};

export function DateItem( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <DateItemComponent
            { ...props }
            // searchValue = { playReport.searchValue }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
