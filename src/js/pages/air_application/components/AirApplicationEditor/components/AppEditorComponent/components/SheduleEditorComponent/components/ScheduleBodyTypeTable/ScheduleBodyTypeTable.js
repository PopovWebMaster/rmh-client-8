
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleBodyTypeTable.scss';

import { selectorData as currentSubApplicationSlise } from './../../../../../../../../../../redux/currentSubApplicationSlise.js';

import { ScheduleTimeColumn } from './../ScheduleTimeColumn/ScheduleTimeColumn.js';
import { ScheduleTable } from './../ScheduleTable/ScheduleTable.js';
import { round_to_number } from './../../../../../../../../../../helpers/round_to_number.js';

const ScheduleBodyTypeTableComponent = ( props ) => {

    let {
        Schedule,
        modeMix,
    } = props;

    useEffect( () => {
        if( Schedule !== null ){

            let timerId = setTimeout( () => {

                // я не знаю что здксь происходит

                let dom_list = document.querySelectorAll( '.SEC_CharDay' );
                let arr_height_px = [];
                let font_size = 1;

                if( modeMix ){
                    for( let i = 0; i < dom_list.length; i++ ){
                        let SEC_CharDayTimePoint = dom_list[ i ].querySelectorAll( '.SEC_CharDayTimePoint' );
                        for( let y = 0; y < SEC_CharDayTimePoint.length; y++ ){
                            if( i == 0 ){
                                arr_height_px.push( 0 );
                            };
                            let { height, fontSize } = window.getComputedStyle( SEC_CharDayTimePoint[ y ] );
                            let val = parseFloat( height );
                            if( arr_height_px[ y ] < val ){
                                arr_height_px[ y ] = val;
                            };
                            font_size = parseFloat( fontSize );
                        };
                    };

                    for( let i = 0; i < dom_list.length; i++ ){
                        let SEC_CharDayTimePoint = dom_list[ i ].querySelectorAll( '.SEC_CharDayTimePoint' );
                        for( let y = 0; y < SEC_CharDayTimePoint.length; y++ ){
                            let height = round_to_number( arr_height_px[ y ]/font_size, 3 );
                            SEC_CharDayTimePoint[ y ].style.height = `${height}em`;
                        };
                    };
                }else{
                    for( let i = 0; i < dom_list.length; i++ ){
                        let SEC_CharDayTimePoint = dom_list[ i ].querySelectorAll( '.SEC_CharDayTimePoint' );
                        for( let y = 0; y < SEC_CharDayTimePoint.length; y++ ){
                            SEC_CharDayTimePoint[ y ].style.height = 'auto';
                        };
                    };
                };

                clearTimeout( timerId );

            }, 700 );

        };

    }, [ Schedule, modeMix ] );





    return (
        <div className = 'ScheduleBodyTypeTable'>

            <div className = 'SEC_body_left'>
                <ScheduleTimeColumn 
                    Schedule = { Schedule }
                />

            </div>

            <div className = 'SEC_body_center'>

                <ScheduleTable 
                    Schedule = { Schedule }
                />

            </div>

           

        </div>
    )

};

export function ScheduleBodyTypeTable( props ){

    const currentSubApplication = useSelector( currentSubApplicationSlise );
    // const dispatch = useDispatch();

    return (
        <ScheduleBodyTypeTableComponent
            { ...props }

            modeMix = { currentSubApplication.modeMix }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
