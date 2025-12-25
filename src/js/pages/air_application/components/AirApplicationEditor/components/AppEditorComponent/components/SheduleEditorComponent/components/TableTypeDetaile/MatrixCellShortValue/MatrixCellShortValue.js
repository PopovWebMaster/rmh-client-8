
import React, { useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './MatrixCellShortValue.scss';

// import { selectorData as scheduleSlise } from './../../../../../../../../../../../redux/scheduleSlise.js';

const MatrixCellShortValueComponent = ( props ) => {

    let {
        isReserved,
        value,

        blockTime,
        filedTime,
        contentList,
       
        
    } = props;

    let [ posY, setPosY ] = useState( 'pos_y_top');
    let [ posX, setPosX ] = useState('pos_x_left');
    


    const get_filled_class = ( filed_time, block_time  ) => {
        let result = 'block_few';

        let isOverflowing = filed_time > block_time;
        if( isOverflowing ){
                result = 'block_isOverflowing';
        }else{
            if( block_time - filed_time < 10 ){
                result = 'block_middle';
            };
        };

        return result;

    }

    const create = ( arr ) => {
        let div = arr.map( ( item, index) => {
            return ( 
                <div 
                    className = { `SEC_ttd_block_list_item`}
                    key = { index }
                >
                    <span className = { `SEC_block_list_name`}>{ item.name }</span>
                    <span className = { `SEC_block_list_time`}>{ item.time }</span>
                </div>
            );
        } );

        return div;
    }

    const mouse_over = ( e ) => {
        let SEC_body = document.querySelector( '.SEC_body' );
        let X = e.clientX;
        let Y = e.clientY;
        let width = SEC_body.clientWidth;
        let height = SEC_body.clientHeight;

        if( Y < height ){
            if( Y < height*0.8 ){
                setPosY('pos_y_top');
            }else{
                setPosY('pos_y_bottom');
            };
        }else{
            setPosY('pos_y_bottom');
        };

        if( X < width ){
            if( X < width/3 ){
                
            }else if( X < width*0.7 ){
                setPosX( 'pos_x_center' );
            }else{
                setPosX( 'pos_x_right' );
            };
        }else{
            setPosX( 'pos_x_right' );
        };
        



        // pos_y_top
        // pos_y_center
        // pos_y_bottom
        // pos_x_left
        // pos_x_center
        // pos_x_right

    }


    return (

        <div 
            className = { `SB_TTD_MatrixCell_short ${isReserved? 'short_res': ''}' ${get_filled_class( filedTime, blockTime )}` }
            onMouseOver = { mouse_over }
        >
            { isReserved? '🞨': value }

            <div className = { `SB_TTD_MatrixCell_sh_info ${posY} ${posX}` } >
                <div className = 'SEC_ttd_block_list_item'>
                    <span className = { `SEC_block_list_name`}>{ '' }</span>
                    <span className = { `SEC_block_list_time`}>{ `${filedTime} / ${blockTime}` }</span>
                </div>

                { create( contentList ) }
            </div>
        </div>

    );

};

export function MatrixCellShortValue( props ){

    // const schedule = useSelector( scheduleSlise );
    // const currentSubApplication = useSelector( currentSubApplicationSlise );

    // const dispatch = useDispatch();

    return (
        <MatrixCellShortValueComponent
            { ...props }

            // charType = { schedule.charType }
            // setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }

        />
    );


}
