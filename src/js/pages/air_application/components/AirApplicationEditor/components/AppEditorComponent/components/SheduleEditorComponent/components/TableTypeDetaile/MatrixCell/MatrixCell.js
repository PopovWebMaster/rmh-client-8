
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './MatrixCell.scss';

import { selectorData as scheduleSlise } from './../../../../../../../../../../../redux/scheduleSlise.js';
import { selectorData as currentSubApplicationSlise } from './../../../../../../../../../../../redux/currentSubApplicationSlise.js';

import { selectorData as applicationSlice, setEnvIsOpen } from './../../../../../../../../../../../redux/applicationSlice.js';
// import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';
// import { BlindTimePointAddRow } from './BlindTimePointAddRow/BlindTimePointAddRow.js';
// import { SetMatrixToStore } from './SetMatrixToStore/SetMatrixToStore.js';

// import { MartixHeader } from './MartixHeader/MartixHeader.js';

import { MixContent } from './../MixContent/MixContent.js';
import { ItemBlockInfo } from './../ItemBlockInfo/ItemBlockInfo.js';
import { CHAR_TYPE } from './../../../../../../../../../../../config/application.js';
import { MatrixCellTime } from './../MatrixCellTime/MatrixCellTime.js';
import { MatrixCellShortValue } from './../MatrixCellShortValue/MatrixCellShortValue.js';
import { MatrixCellInput } from './../MatrixCellInput/MatrixCellInput.js';

import { convert_sec_to_time } from './../../../../../../../../../../../helpers/convert_sec_to_time.js';

const MatrixCellComponent = ( props ) => {

    let {
        fill_count,
        grid_event_id,
        sec,
        time,
        title,
        is_reserved,
        reserved_name,
        YYYY_MM_DD,
        Schedule,

        charType,
        releaseName,
        col_class_name,

        setEnvIsOpen,
        modeShort,
        gridEventTable,
        
    } = props;

    let [ value, setValue ] = useState( '' );
    let [ isFilled, setIsFilled ] = useState( false );
    let [ isReserved, setIsReserved ] = useState( false );

    let [ blockTime, setBlockTime ] = useState( 0 );
    let [ filedTime, setFiledTime ] = useState( 0 );
    let [ contentList, setContentList ] = useState( [] );


    useEffect( () => {
        if( is_reserved ){
            setIsFilled( false );
            setIsReserved( true );
            if( modeShort ){
                setValue( Schedule.SubApplication.duration_sec );
            }else{
                setValue( reserved_name );
            };
            
        }else{
            if( fill_count === 0 ){
                setIsFilled( false );
                setValue( '' );
            }else{

                if( modeShort ){
                    setValue( Schedule.SubApplication.duration_sec );
                }else{
                    setValue( releaseName );
                };

                setIsFilled( true );
            };
            setIsReserved( false );
        };

    }, [ fill_count, modeShort ] );


    useEffect( () => {
        if( gridEventTable[ YYYY_MM_DD ][ grid_event_id ] ){
            setBlockTime( gridEventTable[ YYYY_MM_DD ][ grid_event_id ].grid_event.duration );
            let { content } = gridEventTable[ YYYY_MM_DD ][ grid_event_id ];
            let duration_count = 0;
            let arr = [];

            for( let sub_app_id in content ){
                let {
                    duration,
                    fill_count,
                    name
                } = content[ sub_app_id ];
                duration_count = duration_count + ( duration * fill_count );

                arr.push( {
                    name,
                    time: convert_sec_to_time( duration ),
                } );
            };

            setFiledTime( duration_count );
            setContentList( arr );

            // setReleaseDuration( Schedule.SubApplication.duration_sec );

        };

    }, [ gridEventTable, fill_count ] );




    
    const releaseToggle = ( YYYY_MM_DD, sec ) => {
        if( is_reserved ){

        }else{
            Schedule.ReleaseToggle( YYYY_MM_DD, sec );
        };
    };

    const click = ( e ) => {
        let className = e.target.classList[ 0 ];

        if( className === 'environment' ){
            setEnvIsOpen( true );
        }else{
            if( className === 'SEC_block' ){

            }else{
                releaseToggle( YYYY_MM_DD, sec );
            };
        };
    };

    const mouse_over = () => {
        if( modeShort ){
            const boxes = document.querySelectorAll( `.SB_TTD_MatrixCell.${col_class_name}` ); 
            boxes.forEach( ( box ) => { 
                box.style.backgroundColor = '#c2faff6e'; 
                box.style.borderColor = '#81f1fcab';
            });
            const headerItem = document.querySelector( `.SB_TTD_CharDay_date_short.${col_class_name}` ); 
            headerItem.style.backgroundColor = '#2c5c9e';
        };
        
    }

    const mouse_leave = () => {
        if( modeShort ){
            const boxes = document.querySelectorAll( `.SB_TTD_MatrixCell.${col_class_name}` ); 
            boxes.forEach( ( box ) => { 
                box.style.backgroundColor = ''; 
                box.style.borderColor = '';

            });
            const headerItem = document.querySelector( `.SB_TTD_CharDay_date_short.${col_class_name}` ); 
            headerItem.style.backgroundColor = ''; 
        };
    }


    return (
        <div 
            className = { `SB_TTD_MatrixCell ${modeShort? 'SB_TTD_modeShort': ''} ${col_class_name} ${ isFilled? 'filled': ''} ${ isReserved? 'reserved': '' }` }
            onClick = { click }
            onMouseOver = { mouse_over }
            onMouseLeave = { mouse_leave }
        >
            { modeShort? (
                <MatrixCellShortValue
                    value =         { value }
                    isReserved =    { isReserved }

                    blockTime =    { blockTime }
                    filedTime =    { filedTime }
                    contentList =  { contentList }

                />
            ):
            (<>
                <MatrixCellTime time = { title }/>

                <MatrixCellInput
                    grid_event_id = { grid_event_id }
                    YYYY_MM_DD =    { YYYY_MM_DD }
                    value =         { value }
                />

                { charType === CHAR_TYPE.BLOCK? (
                    <ItemBlockInfo 
                        blockTime =     { blockTime }
                        filedTime =     { filedTime }
                        contentList =   { contentList }
                    />
                ): '' }

            </>) }
            

        </div>

    )

};

export function MatrixCell( props ){

    const schedule = useSelector( scheduleSlise );
    const currentSubApplication = useSelector( currentSubApplicationSlise );


    
    const dispatch = useDispatch();

    return (
        <MatrixCellComponent
            { ...props }

            charType =          { schedule.charType }
            releaseName =       { schedule.releaseName }
            gridEventTable =    { schedule.gridEventTable }

            modeShort = { currentSubApplication.modeShort }


            setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }
            


        />
    );


}
