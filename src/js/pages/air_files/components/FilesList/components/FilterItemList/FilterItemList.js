
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterItemList.scss';

import { selectorData as airFilesSlice, setCurrentFilterEventId } from './../../../../../../redux/airFilesSlice.js';


const FilterItemListComponent = ( props ) => {

    let {
        filterItems,
        currentFilterEventId,
        airFiles,
        airFilesByEventId,
        filterItemsByEventId,
        filterSearchValue,

        setCurrentFilterEventId,

    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {

        let arr = [];

        

        if( airFilesByEventId[ currentFilterEventId ] ){
            console.dir( 'airFilesByEventId[ currentFilterEventId ]' );
            console.dir( airFilesByEventId[ currentFilterEventId ] );

            for( let i = 0; i < airFilesByEventId[ currentFilterEventId ].length; i++ ){
                
                if( filterSearchValue === '' ){
                    arr.push( airFilesByEventId[ currentFilterEventId ][ i ] );
                }else{
                    let { name } = airFilesByEventId[ currentFilterEventId ][ i ];
                    if( name.indexOf( filterSearchValue ) !== -1 ){
                        arr.push( airFilesByEventId[ currentFilterEventId ][ i ] );
                    };
                };
            };

            let arr_sort = arr.sort( ( a, b ) => {
                if( a.name > b.name ){
                    return -1;
                }else{
                    return 1;
                };
            } );

            setList( arr_sort );

            // const secs = arr_sort[ 0 ].premiereSec;
            // const output = new Date( secs * 1000 ).toLocaleDateString( 'ru-RU' );
            // const outpu_2 = new Date().toLocaleTimeString('ru-RU', { hour: "numeric", minute: "numeric"});



            // console.log('output');
            // console.log(  output, outpu_2 );


        };



    }, [ 
        currentFilterEventId,
        airFilesByEventId,
        filterSearchValue,
    ] );

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {

            let { premiereSec, count, event_id, name } = item
            // premiereSec: 1754006406, count: 230, event_id: null, name: 'LOGO_ НОЧЬ.mp4'

            const output = new Date( premiereSec * 1000 ).toLocaleDateString( 'ru-RU' );
            const outpu_2 = new Date().toLocaleTimeString('ru-RU', { hour: "numeric", minute: "numeric"});

            let premiere = `${output} - ${outpu_2}`;



            return (
                <div
                    key = { index }
                    className = 'FL_FilterItemList_item'
                >
                    <span className = 'FL_item_fileName'>{ name }</span>
                    <span className = 'FL_item_count'>Повторов: { count }</span>
                    <span className = 'FL_item_premiere'>{ premiere }</span>



                </div>
            );

        } );

        return div;


    };
    



    return (
        <div className = 'FL_FilterItemList'>

            { create( list ) }


        </div>
    )

};


export function FilterItemList( props ){

    const airFiles = useSelector( airFilesSlice );
    const dispatch = useDispatch();

    return (
        <FilterItemListComponent
            { ...props }

            filterItems =           { airFiles.filterItems }
            currentFilterEventId =  { airFiles.currentFilterEventId }
            airFiles =              { airFiles.airFiles }
            airFilesByEventId =     { airFiles.airFilesByEventId }
            filterItemsByEventId =  { airFiles.filterItemsByEventId }
            filterSearchValue =     { airFiles.filterSearchValue }

            setCurrentFilterEventId = { ( val ) => { dispatch( setCurrentFilterEventId( val ) ) } }

        />
    );


}
