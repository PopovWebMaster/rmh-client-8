

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterEvent.scss';

import { selectorData as airFilesSlice, setCurrentFilterEventId, setFilterSearchValue } from './../../../../../../redux/airFilesSlice.js';

import { ScrollContainer } from './../../../../../../components/ScrollContainer/ScrollContainer.js';


const FilterEventComponent = ( props ) => {

    let {
        filterItems,
        currentFilterEventId,
        airFiles,
        airFilesByEventId,
        filterItemsByEventId,

        setCurrentFilterEventId,
        setFilterSearchValue,

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
        setFilterSearchValue( '' );
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
                    { isOpen? (
                        <div className = 'btnDD_list'>
                            <ScrollContainer height = '60vh' >
                                { create( filterItems ) }
                            </ScrollContainer>
                        </div>
                    ) : '' }
                </div>
            ): '' }
                
            { carrentEventName === ''? '': (<>
                <h4 style = { carrentEventStyle }>{ carrentEventName }</h4>
                <span className = 'count' >{ carrentCount }</span>
            </>) }
            { isOpen? <div className = 'FL_cutrain'></div>: '' }
            
            
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
            setFilterSearchValue = { ( val ) => { dispatch( setFilterSearchValue( val ) ) } }


            

        />
    );


}
