
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubShedule.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
import { 
    selectorData as currentSubApplicationSlise,
    setCurrentSubAppId,
    setReleaseDuration,
    setReleaseName,
    setPeriodFrom,
    setPeriodTo,
} from './../../../../../../../../../../redux/currentSubApplicationSlise.js';


import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { SheduleEditorComponent } from './../../../SheduleEditorComponent/SheduleEditorComponent.js';

const ItemSubSheduleComponent = ( props ) => {

    let {
        id,
        application_id,
        release_list,
        duration_sec,
        period_from,
        period_to,
        name,

        setCurrentSubAppId,
        setReleaseDuration,
        setReleaseName,
        setPeriodFrom,
        setPeriodTo,
        
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setCurrentSubAppId( id );
        setReleaseDuration( duration_sec );
        setReleaseName( name );
        setPeriodFrom( period_from );
        setPeriodTo( period_to );
        setIsOpen( true )
    };


    
    return (
        <div className = 'SA_ItemSubShedule'>
            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     { '98vw' }
                height =    { '91vh' }
            >
                <SheduleEditorComponent 
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }
                    sub_application_id = { id }
                />
            </AlertWindowContainer>

            <span 
                className = 'SA_ItemSubShedule_btn'
                onClick = { click }
            >Расписание</span>

            <span className = 'SA_ItemSubShedule_count'>{ release_list.length }</span>

        </div>
    )

};

export function ItemSubShedule( props ){

    const application = useSelector( applicationSlice );
    const currentSubApplication = useSelector( currentSubApplicationSlise );

    
    // const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <ItemSubSheduleComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            currentSubApplication = { currentSubApplication }


            setCurrentSubAppId = { ( val ) => { dispatch( setCurrentSubAppId( val ) ) } }
            setReleaseDuration = { ( val ) => { dispatch( setReleaseDuration( val ) ) } }
            setReleaseName = { ( val ) => { dispatch( setReleaseName( val ) ) } }

            setPeriodFrom = { ( val ) => { dispatch( setPeriodFrom( val ) ) } }
            setPeriodTo = { ( val ) => { dispatch( setPeriodTo( val ) ) } }


            

            


        />
    );


}
