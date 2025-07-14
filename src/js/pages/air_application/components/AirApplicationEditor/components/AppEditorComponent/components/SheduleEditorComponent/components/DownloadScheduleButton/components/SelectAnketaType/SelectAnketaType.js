
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SelectAnketaType.scss';

// import { selectorData as applicationSlice  } from './../../../../../../../../../../../../redux/applicationSlice.js';

const SelectAnketaTypeComponent = ( props ) => {

    let {
        anketaType,
        setAnketaType,
        itemList = [],

    } = props;

    const create = ( arr, currentType ) => {

        let div = arr.map( ( item, index ) => {
            let { type, name } = item;
            let isActive = currentType === type;
            return (
                <div 
                    key = { index }
                    className = { `SEC_SelectAnketaType_item ${ isActive? 'isActive': ''}` }
                    onClick = { () => { setAnketaType( type ) } }
                >
                    <span>{ name }</span>
                </div>
            );
        } );

        return div;

    }



    return (
        <div  className = 'SEC_SelectAnketaType'>
            { create( itemList, anketaType ) }

        </div>
    )

};

export function SelectAnketaType( props ){

    // const application = useSelector( applicationSlice );

    // const dispatch = useDispatch();

    return (
        <SelectAnketaTypeComponent
            { ...props }

            // currentApplicationId = { application.currentApplicationId }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
