
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
        
    } = props;

    let [ value, setValue ] = useState( '' );
    let [ isFilled, setIsFilled ] = useState( false );
    let [ isReserved, setIsReserved ] = useState( false );




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
                // setValue( releaseName );

                if( modeShort ){
                    setValue( Schedule.SubApplication.duration_sec );
                }else{
                    setValue( releaseName );
                };


                setIsFilled( true );
            };
            setIsReserved( false );
        };

        // Schedule.SubApplication.duration_sec
        

    }, [ fill_count, modeShort ] );
    
    const releaseToggle = ( YYYY_MM_DD, sec ) => {
        if( is_reserved ){

        }else{
            Schedule.ReleaseToggle( YYYY_MM_DD, sec );
        }
        
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
        };
        
    }

    const mouse_leave = () => {
        if( modeShort ){
            const boxes = document.querySelectorAll( `.SB_TTD_MatrixCell.${col_class_name}` ); 
            boxes.forEach( ( box ) => { 
                box.style.backgroundColor = ''; 
                box.style.borderColor = '';

            });
        };
    }


    return (
            // <div className = 'SB_TTD_MatrixCell'>
            <div 
                className = { `SB_TTD_MatrixCell ${modeShort? 'SB_TTD_modeShort': ''} ${col_class_name} ${ isFilled? 'filled': ''} ${ isReserved? 'reserved': '' }` }
                onClick = { click }
                onMouseOver = { mouse_over }
                onMouseLeave = { mouse_leave }
            >
                { modeShort? (
                    <span className = { `SB_TTD_MatrixCell_short ${isReserved? 'short_res': ''}'` }>{ isReserved? 'x': value }</span>
                ):
                (<>
                    <MatrixCellTime time = { title }/>

                    <div className = 'SB_TTD_MatrixCell_inp'>
        
                        <div className = 'SB_TTD_MatrixCell_inp_wrap'>
                            <input 
                                type = 'text'
                                value = { value }
                                onChange = { () => {} }
                            />
                        </div>
        
                        { charType === CHAR_TYPE.BLOCK? (
                            <MixContent 
                                grid_event_id = { grid_event_id }
                                YYYY_MM_DD =    { YYYY_MM_DD }
                            />
                        ): '' }
        
                        <div className = 'SB_TTD_MatrixCell_inp_curt'></div>
                    </div>

                    { charType === CHAR_TYPE.BLOCK? (
                        <ItemBlockInfo 
                            className =     { 'SEC_block' }
                            Schedule =      { Schedule }
                            grid_event_id = { grid_event_id }
                            fill_count =    { fill_count }
                            YYYY_MM_DD =    { YYYY_MM_DD }
        
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

            charType = { schedule.charType }
            releaseName = { schedule.releaseName }

            modeShort = { currentSubApplication.modeShort }


            setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }
            


        />
    );


}
