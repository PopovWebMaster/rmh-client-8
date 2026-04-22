// SelecteTabType



import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SelecteTabType.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';


const SelecteTabTypeComponent = ( props ) => {

    let {
        activeTabType,
        setActiveTabType,

        itemList = [],

    } = props;

    const create = ( arr, currentType ) => {

        let div = arr.map( ( item, index ) => {
            let { type, name } = item;
            let isActive = currentType === type;
            return (
                <div 
                    key = { index }
                    className = { `SA_SelecteTabType_item ${ isActive? 'isActive': ''}` }
                    onClick = { () => { setActiveTabType( type ) } }
                >
                    <span>{ name }</span>
                </div>
            );
        } );

        return div;

    }


    return (
        <div className = 'SA_SelecteTabType'>
            { create( itemList, activeTabType ) }
        </div>
    )

};

export function SelecteTabType( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <SelecteTabTypeComponent
            { ...props }
            // application = { application }
            // currentAppEventId = { application.currentAppEventId }
            // currentAppName = { application.currentAppName }


            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
