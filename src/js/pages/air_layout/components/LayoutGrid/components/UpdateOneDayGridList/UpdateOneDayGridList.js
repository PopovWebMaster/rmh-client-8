
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './UpdateOneDayGridList.scss';

import { selectorData as layoutSlice, setGridOneDayList } from './../../../../../../redux/layoutSlice.js';

import { get_grid_one_day_list_by_sector } from './vendors/get_grid_one_day_list_by_sector.js'

const UpdateOneDayGridListComponent = ( props ) => {

    let {
        children,
        gridCurrentDay,
        gridDayEventsList,
        setGridOneDayList,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        let result = get_grid_one_day_list_by_sector( gridDayEventsList[ gridCurrentDay ] );
        setGridOneDayList( result );
        setIsReady( true );

    }, [
        gridCurrentDay,
        gridDayEventsList
    ] );



    return (<>{ isReady? children: '' }</>)

};

export function UpdateOneDayGridList( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <UpdateOneDayGridListComponent
            { ...props }
            gridCurrentDay = { layout.gridCurrentDay }
            gridDayEventsList = { layout.gridDayEventsList }

            setGridOneDayList = { ( arr ) => { dispatch( setGridOneDayList( arr ) ) } }

        />
    );


}
