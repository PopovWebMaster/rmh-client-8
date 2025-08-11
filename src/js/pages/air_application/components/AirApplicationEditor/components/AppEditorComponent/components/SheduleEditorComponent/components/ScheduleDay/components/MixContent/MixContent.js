
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './MixContent.scss';

import { selectorData as scheduleSlise } from './../../../../../../../../../../../../redux/scheduleSlise.js';
import { selectorData as currentSubApplicationSlise } from './../../../../../../../../../../../../redux/currentSubApplicationSlise.js';
import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';




const MixContentComponent = ( props ) => {

    let {
        // className,
        // Schedule,
        grid_event_id,
        // fill_count,
        YYYY_MM_DD,

        gridEventTable,
        currentSubAppId,
        currentSubAppListById,
        modeMix,

    } = props;

    let [ namesList, setNamesList ] = useState( [] );

    useEffect( () => {
        if( modeMix ){
            if( gridEventTable[ YYYY_MM_DD ][ grid_event_id ] ){
                let { content } = gridEventTable[ YYYY_MM_DD ][ grid_event_id ];
                let arr = [];
                for( let sub_app_id in content ){
                    let { name } = content[ sub_app_id ];
                    if( sub_app_id !== `${currentSubAppId}` ){
                        if( currentSubAppListById[ sub_app_id ] ){
                            arr.push( name );
                        };
                    };
                };

                setNamesList( arr );

            };
        }else{
            setNamesList( [] );
        };


    }, [ gridEventTable, modeMix ] );

    const create = ( arr ) => {

        let div = arr.map( ( name, index ) => {
            return (
                <div
                    className = 'SEC_CharDayTimePoint_inp_wrap'
                    key = { index }
                >
                    <input 
                        type = 'text'
                        className = 'block_mix'
                        value = { name }
                        onChange = { () => {} }
                    />
                </div>
            );
            

        } );

        return div;

    }

    return (
        <>{ create( namesList ) }</>
    )

};

export function MixContent( props ){
    const schedule = useSelector( scheduleSlise );
    const currentSubApplication = useSelector( currentSubApplicationSlise );
    const application = useSelector( applicationSlice );


    
    const dispatch = useDispatch();

    return (
        <MixContentComponent
            { ...props }
            charType = { schedule.charType }
            releaseName = { schedule.releaseName }
            gridEventTable = { schedule.gridEventTable }


            currentSubAppId = { currentSubApplication.currentSubAppId }
            modeMix = { currentSubApplication.modeMix }
            currentSubAppListById = { application.currentSubAppListById }

            setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }



        />
    );


}
