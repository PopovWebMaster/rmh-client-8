
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../../../../../redux/logsForwardTASlise.js';

import './SSW_List.scss';
import { SSW_ListItemMovie } from './../SSW_ListItemMovie/SSW_ListItemMovie.js';
import { SSW_ListItemEmpty } from './../SSW_ListItemEmpty/SSW_ListItemEmpty.js';

const SSW_ListComponent = ( props ) => {

    let {
        server,
        processedListOfLogsMain,
        processedListOfLogsBackup,


    } = props;

    let [ list, setList] = useState( [] );

    useEffect( () => {
        if( server === 'main' ){
            setList( [ ...processedListOfLogsMain ] );
        }else if( server === 'backup' ){
            setList( [ ...processedListOfLogsBackup ] );
        };

    }, [
        processedListOfLogsMain,
        processedListOfLogsBackup,
    ]);

    const create = ( arr ) => {

        let li = arr.map( ( item, index ) => {

            let result = '';

            switch( item.type ){
                case 'movie':
                    result = <SSW_ListItemMovie item = { item } key = { index }/>
                    break;

                case 'empty':
                    result = <SSW_ListItemEmpty item = { item } key = { index }/>
                    break;

            };

            return result;

        } );

        return li;

    }



    return (
        <div className = 'SSW_List'>
            { create( list ) }
           
        </div>

    )

};

export function SSW_List( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <SSW_ListComponent
            { ...props }
            processedListOfLogsMain = { logsForwardTA.processedListOfLogsMain }
            processedListOfLogsBackup = { logsForwardTA.processedListOfLogsBackup }

            // setSelectedAll = { ( val ) => { dispatch( setSelectedAll( val ) ) } }

        />
    );


}
