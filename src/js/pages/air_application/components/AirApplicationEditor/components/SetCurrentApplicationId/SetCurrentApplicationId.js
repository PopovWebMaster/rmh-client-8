
import React, { useRef, useState, useEffect }   from "react";

import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './SetCurrentApplicationId.scss';

import { selectorData as applicationSlice, setCurrentApplicationId } from './../../../../../../redux/applicationSlice.js';

import { ROUTE } from './../../../../../../config/routes.js';

const SetCurrentApplicationIdComponent = ( props ) => {

    let {
        children,

        setCurrentApplicationId,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    const location = useLocation();

    useEffect( () => {
        let { pathname } = location;
        let arr = pathname.split( '/' );
        let index = arr.indexOf( ROUTE.PAGE.AIR_APPLICATION );
        if( index === -1 ){
            setCurrentApplicationId( null );
            setIsReady( false );
        }else{
            if( arr[ index + 1 ] ){
                setCurrentApplicationId( Number( arr[ index + 1 ] ) );
                setIsReady( true );
            }else{
                setCurrentApplicationId( null );
                setIsReady( false );
            };
        };
    }, [ location ] );

    return (<>{ isReady? children: '' }</>)

};

export function SetCurrentApplicationId( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <SetCurrentApplicationIdComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

        />
    );


}
