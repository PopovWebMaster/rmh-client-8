
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_FilterList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';


const FRL_FilterListComponent = ( props ) => {

    let {
        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
        freeReleasesFiltered,
       
    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {

        if( freeReleasesFiltered[ freeReleasesFilterCategoryId ] ){
            if( freeReleasesFiltered[ freeReleasesFilterCategoryId ][ freeReleasesFilterEventId ] ){
                setList( freeReleasesFiltered[ freeReleasesFilterCategoryId ][ freeReleasesFilterEventId ] );
            }else{
                setList( [] );
            };
        }else{
            setList( [] );
        };

    }, [
        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
        freeReleasesFiltered,
    ] );


    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let {
                fileName,
                duration,
                eventId,
            } = item;

            return (
                <div 
                    className = 'FRL_FilterList_item'
                    key = { index }
                >
                    <span>{ fileName }</span>
                </div>
            );

        } );

        return div;

    }

    

    return (
        <div className = 'FRL_FilterList' id = 'FRL_FilterList'>
            { create( list ) }
        </div>
    )

};

export function FRL_FilterList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FRL_FilterListComponent
            { ...props }

            freeReleasesFilterCategoryId = { scheduleResult.freeReleasesFilterCategoryId }
            freeReleasesFilterEventId = { scheduleResult.freeReleasesFilterEventId }
            freeReleasesFiltered = { scheduleResult.freeReleasesFiltered }



            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}


