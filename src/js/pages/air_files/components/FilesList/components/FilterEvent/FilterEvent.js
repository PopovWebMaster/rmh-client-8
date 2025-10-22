

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterEvent.scss';

import { selectorData as airFilesSlice, setCurrentFilterEventId } from './../../../../../../redux/airFilesSlice.js';


const FilterEventComponent = ( props ) => {

    let {
        filterItems,
        currentFilterEventId,
        airFiles,
        airFilesByEventId,
        filterItemsByEventId,

        setCurrentFilterEventId,

    } = props;

    // console.dir( 'filterItems' );
    // console.dir( filterItems );
    let [ isOpen, setIsOpen ] = useState( false );

    let [ carrentEventName, setCarrentEventName ] = useState( '' );
    let [ carrentEventStyle, setCarrentEventStyle ] = useState( {} );
    let [ carrentCount, setCarrentCount ] = useState( 0 );



    useEffect( () => {
        if( filterItemsByEventId[ currentFilterEventId ] ){

            let {
                count,
                event,
            } = filterItemsByEventId[ currentFilterEventId ];

            setCarrentCount( count );
            setCarrentEventStyle( event.style );
            setCarrentEventName( event.name );

        }else{
            setCarrentCount( 0 );
            setCarrentEventStyle( {} );
            setCarrentEventName( '' );
        };

    }, [ currentFilterEventId, airFiles ] );

    const click = ( id ) => {
        setCurrentFilterEventId( id );
        setIsOpen( false );
    };

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            let { event, count } = item;

            return (
                <div
                    className = 'btnDD_list_item'
                    key = { index }
                    onClick = { () => { click( event.id ) } }
                >
                    <span className = 'name' style = { event.style }>{ event.name }</span>
                    <span className = 'count'>{ count }</span>
                </div>
            );

        } );

        return div;

    }

    return (
        <div className = 'FL_FilterEvent'>

            { filterItems.length > 1? (
                <div className = 'btnDD'>
                    <span 
                        className = { `icon ${isOpen? 'icon-up-open-1': 'icon-down-open-1'}`}
                        onClick = { () => { setIsOpen( !isOpen ) } }
                    ></span>

                    <div className = 'btnDD_list'>{ create( filterItems ) }</div>
                </div>
            ): '' }

            { carrentEventName === ''? '': (<>
                <h4 style = { carrentEventStyle }>{ carrentEventName }</h4>
                <span className = 'count' >{ carrentCount }</span>
            </>) }
            
        </div>
    )

};


export function FilterEvent( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <FilterEventComponent
            { ...props }

            filterItems =           { airFiles.filterItems }
            currentFilterEventId =  { airFiles.currentFilterEventId }
            airFiles =              { airFiles.airFiles }
            airFilesByEventId =     { airFiles.airFilesByEventId }
            filterItemsByEventId =  { airFiles.filterItemsByEventId }

            setCurrentFilterEventId = { ( val ) => { dispatch( setCurrentFilterEventId( val ) ) } }

        />
    );


}
