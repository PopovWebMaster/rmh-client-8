
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TableTypeDetaile.scss';

import { selectorData as currentSubApplicationSlise } from './../../../../../../../../../../redux/currentSubApplicationSlise.js';

import { selectorData as scheduleSlise } from './../../../../../../../../../../redux/scheduleSlise.js';

// import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';
// import { BlindTimePointAddRow } from './BlindTimePointAddRow/BlindTimePointAddRow.js';
import { SetMatrixToStore } from './SetMatrixToStore/SetMatrixToStore.js';

import { MartixHeader } from './MartixHeader/MartixHeader.js';

import { MatrixFirstCell } from './MatrixFirstCell/MatrixFirstCell.js';
import { MatrixCell } from './MatrixCell/MatrixCell.js';


const TableTypeDetaileComponent = ( props ) => {

    let {
        // isActive,
        Schedule,

        scheduleMatrix,
        allTimePointsGroupeList,
        dayList,
        modeShort,

    } = props;

    const createCells = ( row, day_list, mode_short ) => {

        let div = row.map( ( cell, index ) => {


            if( day_list[ index ] ){

            }else{
                // console.dir( 'day_list[ index ] <<<<<<<<<<<<<<<<<<<<<<<' );
                // console.dir( day_list[ index ] );
                return '';
            };

            let col_class_name = `col_${index}`;


            let { YYYY_MM_DD } = day_list[ index ];

            let arr_keys = Object.keys( cell );

            let get_cells = ( arr ) => {

                let div_cell = arr.map( ( secStr, index_2 ) => {

                    let {
                        fill_count,
                        grid_event_id,
                        sec,
                        time,
                        title,
                        is_reserved = null,
                        reserved_name = null,
                    } = cell[ secStr ];

                    // console.dir( cell[ secStr ] );

                    return (
                        <MatrixCell
                            key =           { index_2 }

                            fill_count =    { fill_count }
                            grid_event_id = { grid_event_id }
                            sec =           { sec }
                            time =          { time }
                            title =         { title }
                            is_reserved =   { is_reserved }
                            reserved_name = { reserved_name }


                            YYYY_MM_DD =    { YYYY_MM_DD }
                            Schedule =      { Schedule }
                            col_class_name = { col_class_name }

                        />
                    );

                } );
                return div_cell;
            };

            return (
                <div 
                    className = { `SB_TTD_cellWrap ${mode_short? 'mode_short': ''}` }
                    key = { index }
                >
                    { get_cells( arr_keys ) }
                    
                </div>
            );

        } );

        return div;

        

    }

    const create = ( matrix, pointsGroup, day_list, mode_short ) => {

        let div = matrix.map( ( row, index ) => {

            if( pointsGroup[ index ] ){

            }else{
                console.dir( 'pointsGroup[ index ] <<<<<<<<<<<<<<<<<<<<<<<' );
                console.dir( day_list[ index ] );
                return '';
            };

            let { sec, title, sec_list, interval } = pointsGroup[ index ];

            // console.dir( 'pointsGroup[ index ] <<<<<<<<<<<<<<<<<<<<<<<' );
            //     console.dir( pointsGroup[ index ] );
            
            return (
                <div
                    className = 'SB_TTD_row'
                    key = { index }
                >
                    <MatrixFirstCell
                        Schedule = { Schedule }
                        sec =       { sec }
                        title =     { title }
                        sec_list =  { sec_list }
                        interval =  { interval }
                    />

                    { createCells( row, day_list, mode_short ) }

                </div>
            );

        } );

        return div;

    }






    return (
        <SetMatrixToStore>
            <div className = 'SB_tableTypeDetaile'>

                <MartixHeader Schedule = { Schedule }/>

                <div className = 'SB_tableTypeDetaile_body'>

                    { create( scheduleMatrix, allTimePointsGroupeList, dayList, modeShort ) }

                </div>

            </div>

        </SetMatrixToStore>
        
    )

};

export function TableTypeDetaile( props ){

    const schedule = useSelector( scheduleSlise );
    const currentSubApplication = useSelector( currentSubApplicationSlise );


    
    // const dispatch = useDispatch();

    return (
        <TableTypeDetaileComponent
            { ...props }

            scheduleMatrix = { schedule.scheduleMatrix }
            allTimePointsGroupeList = { schedule.allTimePointsGroupeList }
            dayList = { schedule.dayList }

            modeShort = { currentSubApplication.modeShort }



            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
