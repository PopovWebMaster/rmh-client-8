
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetCurrentManager.scss';

import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';
import { selectorData as applicationSlice, setCurrentManagerId } from './../../../../redux/applicationSlice.js';

import { access_right } from './../../../../helpers/access_right.js';


const SetCurrentManagerComponent = ( props ) => {

    let {
        currentManagerId,
        setCurrentManagerId,
        user_id,

        children
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        if( access_right( 'application_other_managers_see' ) ){
            setCurrentManagerId( null );
        }else{
            setCurrentManagerId( user_id );
        };

        setIsReady( true );

    }, [] );


    return (
        <>{ isReady? children: '' }</>
    )

};


export function SetCurrentManager( props ){

    const application = useSelector( applicationSlice );
    const userInfo = useSelector( userInfoSlice );


    
    const dispatch = useDispatch();

    return (
        <SetCurrentManagerComponent
            { ...props }

            currentManagerId = { application.currentManagerId }

            user_id = { userInfo.user_id }

            setCurrentManagerId = { ( val ) => { dispatch( setCurrentManagerId( val ) ) } }

        />
    );


}
