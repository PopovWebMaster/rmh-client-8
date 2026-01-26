
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FRL_CategoryButtons.scss';

import { 
    selectorData as scheduleResultSlise,
    setFreeReleasesFilterCategoryId,
    setFreeReleasesFilterEventId,
} from './../../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';



const FRL_CategoryButtonsComponent = ( props ) => {

    let {
        isOpen,

        freeReleasesFiltered,
        freeReleasesFilterCategoryId,
        freeReleasesFilterEventId,
        setFreeReleasesFilterCategoryId,
        setFreeReleasesFilterEventId,

        // scheduleResult,
        categoryListById,


    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {

        if( isOpen ){

            let idList = Object.keys( freeReleasesFiltered );
            let arr = [];

            for( let i = 0; i < idList.length; i++ ){
                let categoryId = Number( idList[ i ] );

                if( categoryListById[ categoryId ] ){
                    let { colorBG, colorText, name } = categoryListById[ categoryId ];


                    arr.push({
                        categoryId,
                        categoryName: name,
                        categoryStyle: {
                            backgroundColor: colorBG,
                            color: colorText,
                        },
                    });
                };

            };

            setList( arr );

        }else{
            setList( [] );
        };

    }, [
        isOpen,
        freeReleasesFiltered,
        freeReleasesFilterCategoryId
    ] );

    
    const click = ( categoryId ) => {
        setFreeReleasesFilterCategoryId( categoryId );

        let event_id = null;

        if( freeReleasesFiltered[ categoryId ] ){
            if( freeReleasesFiltered[ categoryId ][ freeReleasesFilterEventId ] ){
                event_id = freeReleasesFilterEventId;
            };
        };

        setFreeReleasesFilterEventId( event_id );

    }

    const create = ( arr ) => {
        let span = arr.map( ( item, index ) => {
            let {
                categoryId,
                categoryName,
                categoryStyle,


            } = item;

            return (
                <span
                    className = { `FRL_CategoryBtn ${ freeReleasesFilterCategoryId === categoryId? 'isActive': '' }` }
                    onClick =       { () => { click( categoryId ) } }
                    style =         { categoryStyle }
                    key =           { index }
                >{ categoryName }</span>
            );
        } );

        return span;

    }
    

    return (
        <div className = 'FRL_CategoryButtons'>
            <span
                className = { `FRL_CategoryBtnAll ${ freeReleasesFilterCategoryId === null? 'isActive': '' }` }
                onClick = { () => { click( null ) } }
            >Все</span>

            { create( list ) }

        </div>
    )

};

export function FRL_CategoryButtons( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );


    const dispatch = useDispatch();

    return (
        <FRL_CategoryButtonsComponent
            { ...props }

            freeReleasesFiltered = { scheduleResult.freeReleasesFiltered }
            freeReleasesFilterCategoryId = { scheduleResult.freeReleasesFilterCategoryId }
            freeReleasesFilterEventId = { scheduleResult.freeReleasesFilterEventId }

            // scheduleResult = { scheduleResult }



            categoryListById = { layout.categoryListById }



            setFreeReleasesFilterCategoryId = { ( val ) => { dispatch( setFreeReleasesFilterCategoryId( val ) ) } }
            setFreeReleasesFilterEventId = { ( val ) => { dispatch( setFreeReleasesFilterEventId( val ) ) } }


            

        />
    );


}


