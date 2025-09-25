

import React, { useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './DetailDataWindow.scss';

import { WindowControl } from './components/WindowControl/WindowControl.js';

import { ResultOnlyTimes } from './components/ResultOnlyTimes/ResultOnlyTimes.js';
import { ResultColsDateAndTime } from './components/ResultColsDateAndTime/ResultColsDateAndTime.js';
import { ResultTitles } from './components/ResultTitles/ResultTitles.js';

import { DataDisplayStatusButton } from './components/DataDisplayStatusButton/DataDisplayStatusButton.js';

import { FoundFiles } from './components/FoundFiles/FoundFiles.js';
import { CountOfFiles } from './components/CountOfFiles/CountOfFiles.js';
import { CurrentDatePointsFormat } from './components/CurrentDatePointsFormat/CurrentDatePointsFormat.js';

import { CountOfAllDuration } from './components/CountOfAllDuration/CountOfAllDuration.js';

const DetailDataWindowComponent = ( props ) => {

    let {

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
{/* Pogoda_Донецк_ */}

    
    return (
        <div className = 'PR_DetailDataWindow'>
            <WindowControl>

                <DataDisplayStatusButton />
                <CurrentDatePointsFormat />
                <CountOfFiles />
                <FoundFiles />

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

                <CountOfAllDuration />
  
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
            // detailDataWindow_isOpen = { playReport.detailDataWindow_isOpen }

            // setSearchFocus = { ( callback ) => { dispatch( setSearchFocus( callback ) ) } }


            

        />
    );


}
