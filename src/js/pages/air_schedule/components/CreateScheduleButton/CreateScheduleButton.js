
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CreateScheduleButton.scss';

// import { selectorData as scheduleResultSlise } from './../../../../redux/scheduleResultSlise.js';

import { TopCenterButtonComponent } from './../TopCenterButtonComponent/TopCenterButtonComponent.js';
import { StoreScheduleResultEventsClass } from './../../../../classes/StoreScheduleResultEventsClass.js';


const CreateScheduleButtonComponent = ( props ) => {

    let {
    } = props;

    const click = () => {

        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateFromGridEvents();
        StoreScheduleResultEvents.SetListToStore();

    };

    return (
        <TopCenterButtonComponent
            icon =          'icon-feather'
            title =         'Создать расписание'
            isActive =      { true }
            clickHandler =  { click }
        />
    )

};


export function CreateScheduleButton( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );

    // const dispatch = useDispatch();

    return (
        <CreateScheduleButtonComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
