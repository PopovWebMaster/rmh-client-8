
import React, { useState }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemBlockInfo.scss';

// import { selectorData as scheduleSlise } from './../../../../../../../../../../../redux/scheduleSlise.js';


const ItemBlockInfoComponent = ( props ) => {

    let {
        blockTime,
        filedTime,
        contentList,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setIsOpen( !isOpen );
    };
    const leave = () => {
        setIsOpen( false );
    }

    const create = ( arr ) => {
        let div = arr.map( ( item, index) => {
            return ( 
                <div 
                    className = { `SEC_block SEC_block_list_item`}
                    key = { index }
                >
                    <span className = { `SEC_block SEC_block_list_name`}>{ item.name }</span>
                    <span className = { `SEC_block SEC_block_list_time`}>{ item.time }</span>
                </div>
            );
        } );

        return div;

    }

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

    return (

        <div 
            className = { `SEC_block SB_TTD_MatrixCell_block ${ get_filled_class( filedTime, blockTime   ) }` }
            onMouseLeave = { leave }
            onClick = { click }
        >
            <span className = { `SEC_block SB_TTD_MatrixCell_block_filled` }>{ filedTime } </span>
            <span className = { `SEC_block SB_TTD_MatrixCell_block_slash` }>/</span>
            <span className = { `SEC_block SB_TTD_MatrixCell_block_all` }>{ blockTime }</span>

            { isOpen? (
               <div className = { `SEC_block SEC_block_list` }>
                    { create( contentList ) }
                </div> 
            ): '' }
            
        </div>
    )

};

export function ItemBlockInfo( props ){
    // const schedule = useSelector( scheduleSlise );
    // const dispatch = useDispatch();

    return (
        <ItemBlockInfoComponent
            { ...props }
            // charType = { schedule.charType }
            // releaseName = { schedule.releaseName }
            // gridEventTable = { schedule.gridEventTable }
            // setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }

        />
    );


}
