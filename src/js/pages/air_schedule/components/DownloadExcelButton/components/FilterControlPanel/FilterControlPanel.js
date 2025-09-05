
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FilterControlPanel.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { get_event_style } from './../../../../../../helpers/get_event_style.js';


const FilterControlPanelComponent = ( props ) => {

    let {
        filterList,
        setFilterList,
        isOpen,

    } = props;

    let [ allIsChack, setAllIsChack] = useState( false );


    useEffect( () => {
        if( isOpen ){

        }else{
            setAllIsChack( false );
        };

    }, [ isOpen ] );

    useEffect( () => {

        let allIsUsed = false;
        for( let i = 0; i < filterList.length; i++ ){
            let { isUsed } = filterList[ i ];
            if( isUsed ){
                allIsUsed = true;
            }else{
                allIsUsed = false;
                break;
            };
        };

        setAllIsChack( allIsUsed );

    }, [ filterList ] )

    const what_take = ( val ) => {
        let arr = [];
        for( let i = 0; i < filterList.length; i++ ){
            let item = structuredClone( filterList[ i ] );
            item.withOnlyApplications = val;
            arr.push( item );
        };
        setFilterList( arr );
    };

    const click_chack_all = () => {
        let arr = [];
        for( let i = 0; i < filterList.length; i++ ){
            let item = structuredClone( filterList[ i ] );
            item.isUsed = !allIsChack;
            arr.push( item );
        };
        setFilterList( arr );
    }

    const click_what_take_all = () => {
        what_take( true );
    }

    const click_what_take_only_applications = () => {
        what_take( false );
    }


    return (
        <div className = 'S_DExcelComponent_FilterControlPanel'>
            <div
                className = 'chackBtn'
                onClick = { click_chack_all }
            >
                { allIsChack? (<span className = 'icon-ok-3'></span>): '' }
            </div>

            <div className = 'chackName'>
                <span>Включить всё</span>
            </div>

            <div className = 'whatTake'>
                <span
                    onClick = { click_what_take_all }
                >только заявки</span>

                <span
                    onClick = { click_what_take_only_applications }
                >всё</span>

            </div>


            
        </div>
        
    )

};


export function FilterControlPanel( props ){

    const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <FilterControlPanelComponent
            { ...props }
            eventListById = { layout.eventListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
