
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemBlockInfo.scss';

import { selectorData as scheduleSlise } from './../../../../../../../../../../../../redux/scheduleSlise.js';


import { convert_sec_to_time } from './../../../../../../../../../../../../helpers/convert_sec_to_time.js';

const ItemBlockInfoComponent = ( props ) => {

    let {
        className,
        Schedule,
        grid_event_id,
        fill_count,
        YYYY_MM_DD,

        gridEventTable,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    let [ blockTime, setBlockTime ] = useState( 0 );
    let [ filedTime, setFiledTime ] = useState( 0 );
    let [ contentList, setContentList ] = useState( [] );

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

        };

    }, [ gridEventTable ] );

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
                    className = { `${className} SEC_block_list_item`}
                    key = { index }
                >
                    <span className = { `${className} SEC_block_list_name`}>{ item.name }</span>
                    <span className = { `${className} SEC_block_list_time`}>{ item.time }</span>
                </div>
            );
        } );

        return div;

    }

    return (

        <div 
            className = { `${className} SEC_CharDayTimePoint_block ` }
            onMouseLeave = { leave }
            onClick = { click }
        >
            

            <span className = { `${ className } SEC_CharDayTimePoint_block_title` }>Блок: </span>
            <span className = { `${ className } SEC_CharDayTimePoint_block_filled` }>{ filedTime } </span>
            <span className = { `${ className } SEC_CharDayTimePoint_block_slash` }>/</span>
            <span className = { `${ className } SEC_CharDayTimePoint_block_all` }>{ blockTime }</span>

            { isOpen? (
               <div className = { `${className} SEC_block_list` }>
                    { create( contentList ) }
                </div> 
            ): '' }
            

        </div>
    )

};

export function ItemBlockInfo( props ){
    const schedule = useSelector( scheduleSlise );
    const dispatch = useDispatch();

    return (
        <ItemBlockInfoComponent
            { ...props }
            charType = { schedule.charType }
            releaseName = { schedule.releaseName }
            gridEventTable = { schedule.gridEventTable }


            setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }



        />
    );


}
