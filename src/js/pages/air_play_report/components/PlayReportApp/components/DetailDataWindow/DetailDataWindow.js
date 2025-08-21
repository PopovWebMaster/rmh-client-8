

import React, { useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './DetailDataWindow.scss';

import { WindowControl } from './components/WindowControl/WindowControl.js';

import { ResultOnlyTimes } from './components/ResultOnlyTimes/ResultOnlyTimes.js';
import { ResultColsDateAndTime } from './components/ResultColsDateAndTime/ResultColsDateAndTime.js';
import { ResultTitles } from './components/ResultTitles/ResultTitles.js';

const DetailDataWindowComponent = ( props ) => {

    let {
        detailDataWindow_isOpen,

    } = props;

    let [ variant, setVariant ] = useState( 'only_times' );

    const selectVariant = ( str ) => {
        switch( str ){
            case 'only_times':
                return <ResultOnlyTimes />

            case 'cols_date_time':
                return <ResultColsDateAndTime />

            case 'points':
                return <ResultTitles />

            default:
                return '';
        }

    }


    
    return (
        <div className = 'PR_DetailDataWindow'>
            <WindowControl>

                <div className = 'DDW_menu'>
                    <span
                        className = { `${ variant === 'only_times'? 'isActive': '' }` }
                        onClick = { () => { setVariant( 'only_times' ) } }
                    >Times</span>

                    <span
                        className = { `${ variant === 'cols_date_time'? 'isActive': '' }` }
                        onClick = { () => { setVariant( 'cols_date_time' ) } }
                    >Col date-time</span>

                    <span
                        className = { `${ variant === 'points'? 'isActive': '' }` }
                        onClick = { () => { setVariant( 'points' ) } }
                    >Points</span>

                </div>




                { selectVariant( variant ) }
                




            </WindowControl>
        </div>  

    )

};

export function DetailDataWindow( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <DetailDataWindowComponent
            { ...props }
            detailDataWindow_isOpen = { playReport.detailDataWindow_isOpen }
            // searchDate = { playReport.searchDate }
            // setSearchValue = { ( callback ) => { dispatch( setSearchValue( callback ) ) } }
            // setSearchFocus = { ( callback ) => { dispatch( setSearchFocus( callback ) ) } }


            

        />
    );


}
