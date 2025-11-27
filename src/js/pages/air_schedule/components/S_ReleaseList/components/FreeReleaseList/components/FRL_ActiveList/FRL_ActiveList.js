// FRL_ActiveList


import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_ActiveList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { get_event_by_id } from './../../../../../../../../helpers/get_event_by_id.js';

import { FreeReleasesListClass } from './../../../../../../../../classes/FreeReleasesListClass.js';
import { access_right } from './../../../../../../../../helpers/access_right.js';

import { get_filtered_list } from './../../vendors/get_filtered_list.js';



const FRL_ActiveListComponent = ( props ) => {

    let {
        isOpen,

        buttonsHeight,


        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
        freeReleasesFiltered,
       
    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {

        if( isOpen ){
            setList( get_filtered_list() );
        }else{
            setList( [] );
        };

    }, [
        isOpen,
        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
        freeReleasesFiltered,
    ] );

    // const remove = ( fileName ) => {
    //     if( access_right( 'schedule_edit' ) ){
    //         let FreeReleasesList = new FreeReleasesListClass();
    //         FreeReleasesList.SetListFromStore();
    //         FreeReleasesList.RemoveFile( fileName );
    //         FreeReleasesList.SetToStore( true );
    //     };
    // };

    const drag_start = ( e, fileName, duration, eventId ) => {
        // let {
        //     event_id, 
        //     id,
        //     force_event_id,
        //     category_id,
        // } = item;

        // let work_event_id = event_id;
        // if( category_id === null && event_id === null ){
        //     work_event_id = force_event_id;
        // };

        // setDragebleReleaseId( id )
        // // setDragebleReleaseEventId( event_id );
        // setDragebleReleaseEventId( work_event_id );

        
    }

    const drag_end = () => {
        // setDragebleReleaseId( null )
        // setDragebleReleaseEventId( null )
    }

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let {
                fileName,
                duration,
                eventId,
            } = item;

            return (
                <div 
                    className =     'FRL_ActiveList_item'
                    key =           { index }
                    draggable = { true }
                    onDragStart = { ( e ) => { drag_start( e, fileName, duration, eventId ) } }
                    onDragEnd = { drag_end }
                >
                    <span className = 'FRL_ActiveList_item_duration'>{ convert_sec_to_time( duration ) }</span>
                    <span className = 'FRL_ActiveList_item_name'>{ fileName }</span>
                    <span className = 'FRL_ActiveList_item_count'>{ 0 }</span>
                </div>
            );

        } );

        return div;

    }

    const getHeight = ( buttons_height ) => {
        let height_1 = 8.4;
        let height_2 = 1.4;
        return `calc( 100vh - ${ height_1 + height_2 + buttons_height }em )`;
    }


    return (
        <div 
            className = 'FRL_ActiveList'
            style = { { height: getHeight( buttonsHeight ) } }
        >
            <ScrollContainer
                height = { getHeight( buttonsHeight ) }
            >
                { create( list ) }
            </ScrollContainer>
        </div>
    )

};

export function FRL_ActiveList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FRL_ActiveListComponent
            { ...props }

            freeReleasesFilterCategoryId = { scheduleResult.freeReleasesFilterCategoryId }
            freeReleasesFilterEventId = { scheduleResult.freeReleasesFilterEventId }
            freeReleasesFiltered = { scheduleResult.freeReleasesFiltered }



            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}


