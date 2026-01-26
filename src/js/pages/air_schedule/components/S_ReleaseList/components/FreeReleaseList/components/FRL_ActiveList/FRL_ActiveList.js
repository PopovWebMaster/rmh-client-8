
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_ActiveList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { get_filtered_list } from './../../vendors/get_filtered_list.js';
import { sort_filtered_list_by } from './../../vendors/sort_filtered_list_by.js';

import { FRL_OneActiveListItem } from './../FRL_OneActiveListItem/FRL_OneActiveListItem.js';
import { FRL_DragAndDropEventStart } from './../FRL_DragAndDropEventStart/FRL_DragAndDropEventStart.js';


const FRL_ActiveListComponent = ( props ) => {

    let {
        isOpen,
        buttonsHeight,

        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
        freeReleasesFiltered,
        usedFreeReleaseById,
        freeReleasesFilterSortBy,
       
    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {

        if( isOpen ){
            // let arr = get_filtered_list();

            // let sort_arr = sort_filtered_list_by( arr, freeReleasesFilterSortBy );
            // setList( sort_arr );

            setList( get_filtered_list() );

        }else{
            setList( [] );
        };

    }, [
        isOpen,
        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
        freeReleasesFiltered,
        freeReleasesFilterSortBy,
    ] );

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let {
                fileName,
                duration,
                eventId,
                // count,
            } = item;

            let count = 0;

            if( usedFreeReleaseById[ fileName ] ){
                count = usedFreeReleaseById[ fileName ].count;
            };

            return (
                <React.Fragment key = { index }>
                    <FRL_DragAndDropEventStart
                            fileName =  { fileName }
                            duration =  { duration }
                            eventId =   { eventId }
                    >
                        <FRL_OneActiveListItem
                            fileName =  { fileName }
                            duration =  { duration }
                            count =     { count }
                            eventId =   { eventId }
                        />
                    </FRL_DragAndDropEventStart>

                </React.Fragment>
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

            freeReleasesFilterSortBy = { scheduleResult.freeReleasesFilterSortBy }



            usedFreeReleaseById = { scheduleResult.usedFreeReleaseById }




            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}


