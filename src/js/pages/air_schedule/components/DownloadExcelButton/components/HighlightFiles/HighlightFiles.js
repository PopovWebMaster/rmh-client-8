// HighlightFiles


import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './HighlightFiles.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

// import { get_event_style } from './../../../../../../helpers/get_event_style.js';

import { ScrollContainer } from './../../../../../../components/ScrollContainer/ScrollContainer.js'


const HighlightFilesComponent = ( props ) => {

    let {
        allUsedFiles,
        setAllUsedFiles,
        allFiles,
        filterList,

    } = props;

    useEffect( () => {

        let usedEvents = get_used_events( filterList );

        let all_used_files = [];

        for( let i = 0; i < usedEvents.length; i++ ){
            let eventId = usedEvents[ i ];

            if( allFiles[ eventId ] ){

                
                for( let fileName in allFiles[ eventId ] ){

                    all_used_files.push( {
                        fileName,
                        isUsed: false,
                    } );
                     
                };

            };
        };

        setAllUsedFiles( all_used_files );

    }, [ filterList, allFiles ] );


    const get_used_events = ( filter_list ) => {
        let result = [];

        for( let i = 0; i < filter_list.length; i++ ){
            if( filter_list[ i ].isUsed === true ){
                result.push( filter_list[ i ].eventId );
            };
        };

        return result;

    }

    let file_click = ( fileName ) => {

        let arr = [];
        for( let i = 0; i < allUsedFiles.length; i++ ){
            let item = { ...allUsedFiles[ i ] };
            if( item.fileName === fileName ){
                item.isUsed = !item.isUsed
            };
            arr.push( item );
        };
        setAllUsedFiles( arr );
        

    };

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let {
                fileName,
                isUsed
            } = item;

            return (
                <div
                    className = { `exportFile ${ isUsed? 'isActive': ''}` }
                    key = { index }
                    onClick = { () => { file_click( fileName ) } }
                >
                    <span>{ fileName }</span>
                </div>
            );

        } );

        return div;

    }


    return (
        <div className = 'S_DExcelComponent_HighlightFiles'>

            <span className = 'exportFilesTitle'>Отметить файлы</span>

            <div className = 'exportFilesWrap'>

                <ScrollContainer height = '6em'>

                    { create( allUsedFiles ) }


                </ScrollContainer>

            </div>

        </div>
        
    )

};


export function HighlightFiles( props ){

    // const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <HighlightFilesComponent
            { ...props }
            // categoryListById = { layout.categoryListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
