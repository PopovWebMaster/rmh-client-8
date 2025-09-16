
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CreateScheduleButton.scss';

import { selectorData as scheduleResultSlise } from './../../../../redux/scheduleResultSlise.js';

import { TopCenterButtonComponent } from './../TopCenterButtonComponent/TopCenterButtonComponent.js';
import { StoreScheduleResultEventsClass } from './../../../../classes/StoreScheduleResultEventsClass.js';
import { AlertWindowContainer } from './../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWConfirm } from './../../../../components/AlertWindowContainer/AWConfirm/AWConfirm.js';


const CreateScheduleButtonComponent = ( props ) => {

    let {
        scheduleEventsList
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );


    const create = () => {
        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateFromGridEvents();
        let isChanged = true; // тут только для наглядности
        StoreScheduleResultEvents.SetListToStore( isChanged );
        setIsOpen( false );
    };
    

    const click = () => {

        if( scheduleEventsList.length > 0 ){
            setIsOpen( true );
        }else{
            create();
        };

    };

    return (

        <div className = 'createScheduleButton'>

            <AlertWindowContainer
                isOpen =        { isOpen }
                setIsOpen =     { setIsOpen }
                title =         'Подтвердите пересоздание расписания'
                width =         '30em'
                height =        '13em'
            >
                <AWConfirm
                    text = { [ 'Вы действительно хотите создать новое расписание?', 'Текущее расписание будет удалено.' ] }
                    type = 'warning'

                    continueHandler =   { create }
                    cancelHandler =     { () => { setIsOpen( false ); } }

                    titleContinue = 'Удалить'
                />
                
            </AlertWindowContainer>

            <TopCenterButtonComponent
                icon =          'icon-feather'
                title =         'Создать из сетки'
                isActive =      { true }
                clickHandler =  { click }
            />
        </div>
        
    )

};


export function CreateScheduleButton( props ){

    const scheduleResult = useSelector( scheduleResultSlise );

    // const dispatch = useDispatch();

    return (
        <CreateScheduleButtonComponent
            { ...props }

            scheduleEventsList = { scheduleResult.scheduleEventsList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
