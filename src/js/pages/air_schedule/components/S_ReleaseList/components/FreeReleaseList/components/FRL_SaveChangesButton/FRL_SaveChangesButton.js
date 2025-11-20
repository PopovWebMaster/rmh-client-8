
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FRL_SaveChangesButton.scss';

import { selectorData as scheduleResultSlise, setFreeReleasesIsChanges } from './../../../../../../../../redux/scheduleResultSlise.js';

import { PageBodySaveButton } from './../../../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';


const FRL_SaveChangesButtonComponent = ( props ) => {

    let {
       freeReleasesIsChanges,
       setFreeReleasesIsChanges,
    } = props;

    const save = () => {

        setFreeReleasesIsChanges( false );

    }


    return (
        <PageBodySaveButton
            isChanged =     { freeReleasesIsChanges }
            clickHandler =  { save }
        />
    )

};

export function FRL_SaveChangesButton( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <FRL_SaveChangesButtonComponent
            { ...props }

            freeReleasesIsChanges = { scheduleResult.freeReleasesIsChanges }
            setFreeReleasesIsChanges = { ( val ) => { dispatch( setFreeReleasesIsChanges( val ) ) } }

        />
    );


}
