
import React, { useRef, useState, useEffect } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemUserId.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

const ItemUserIdComponent = ( props ) => {

    let {
        userId,
        
    } = props;

    return (
        <div className = 'ACE_ItemUserId'>
            <input 
                type = 'text'
                value = { userId }
                onChange = { () => {} }
            />
        </div>
    )

};

export function ItemUserId( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemUserIdComponent
            { ...props }
            // currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
