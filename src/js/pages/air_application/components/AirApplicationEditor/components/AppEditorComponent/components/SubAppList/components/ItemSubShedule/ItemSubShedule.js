
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubShedule.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { SheduleEditorComponent } from './../../../SheduleEditorComponent/SheduleEditorComponent.js';

const ItemSubSheduleComponent = ( props ) => {

    let {
        id,
        application_id,
        release_list,
        
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );


    
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
                onClick = { () => { setIsOpen( true ) } }
            >Расписание</span>

            <span className = 'SA_ItemSubShedule_count'>{ release_list.length }</span>

        </div>
    )

};

export function ItemSubShedule( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubSheduleComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
