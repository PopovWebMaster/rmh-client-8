
import React, { useEffect, useState } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import './IsAllowedContainer.scss';
// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { access_right } from './../../helpers/access_right.js';

const IsAllowedContainerComponent = ( props ) => {

    let {
        accessName,

        children,

        setIsAllowedResult = () => {},

    } = props;

    let [ isAllowed, setIsAllowed ] = useState( false );

    useEffect(() => {
        let res = access_right( accessName );
        if( res ){
            setIsAllowed( true );
            setIsAllowedResult( true );
        }else{
            setIsAllowed( false );
            setIsAllowedResult( false );
        };

    }, [] );

    return (
        <>{ isAllowed? children: '' }</>
    )
};

export function IsAllowedContainer( props ){
    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();
    return (
        <IsAllowedContainerComponent
            { ...props }
            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }
        />
    );


}
