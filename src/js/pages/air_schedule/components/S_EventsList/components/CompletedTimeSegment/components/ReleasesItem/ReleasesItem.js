
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ReleasesItem.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../../classes/StoreScheduleResultEventsClass.js'


const ReleasesItemComponent = ( props ) => {

    let {
        releases,
        gridEventId,
        scheduleEventsList,

        scheduleEventsListByGridEventId,

    } = props;

    const remove = ( release_id ) => {
        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
        StoreScheduleResultEvents.RemoveRelease( gridEventId, release_id  );
        StoreScheduleResultEvents.SetListToStore( true );
    }


    const releaseMoveUp = ( id ) => {

        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
        StoreScheduleResultEvents.ReleaseMoveUp( gridEventId, id  );
        StoreScheduleResultEvents.SetListToStore( true );

        // ReleaseMoveUp

    }

    const releaseMoveDown = ( id ) => {

        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
        StoreScheduleResultEvents.ReleaseMoveDown( gridEventId, id  );
        StoreScheduleResultEvents.SetListToStore( true );

    }

    const create = ( arr ) => {

        // console.dir( 'releases' );
        // console.dir( arr );

        let releasStartTimePosition = 0;

        let div = arr.map( ( item, index ) => {
            let {
                applicationName,
                releaseName,
                releaseDuration,
                file_list,
                id,
                startTime,
                air_notes,
            } = item;

            let notesValue = air_notes === null? '': air_notes;

            if( notesValue !== '' ){
                notesValue = <span className = 'air_notes'>{ `(${ notesValue })` }</span>;
            };

            let startTime_sec = 0;
            if( scheduleEventsListByGridEventId[ gridEventId ] ){
                startTime_sec = scheduleEventsListByGridEventId[ gridEventId ].startTime + releasStartTimePosition;
            };
            
            releasStartTimePosition = releasStartTimePosition + releaseDuration;

            let file = '';
            if( file_list.length > 0 ){
                // file = `${file_list[ file_list.length - 1 ]} ${ notesValue }`;
                file = <>{`${file_list[ file_list.length - 1 ]}`}{ notesValue }</>;

            };

            // let name = file === ''? <>{`${releaseName}/`} {notesValue}</>`${releaseName}/  ${ notesValue }`: file;
            let name = file === ''? <>{`${releaseName}/`} {notesValue}</>: file;

            let is_app = false;
            if( typeof id === 'number' ){
                /*
                    да, именно так по-тупому. 
                    Если не заявка, то в релизе в id записано имя этого файла а не номер
                */
                is_app = true;
            };

            return (
                <div
                    className = 'CTS_RI_Item'
                    key = { index }
                >

                    <div className = 'CTS_RI_Item_time'>
                        


                        <span className = 'CTS_RI_Item_time_fact' >{ convert_sec_to_time( startTime_sec ) }</span>
                        <span className = 'CTS_RI_Item_time_plan'>{ convert_sec_to_time( startTime ) }</span>

                    </div>


                    <span
                        className = 'icon-angle-up arrow'
                        onClick = { () => { releaseMoveUp( id ) } }
                    ></span>
                    <span
                        className = 'icon-angle-down arrow'
                        onClick = { () => { releaseMoveDown( id ) } }
                    ></span>

                    <span className = 'name'>{ name }</span>

                    { is_app? <span className = 'is_app'>Заявка!</span>: '' }

                
                    <span className = 'duration'>{ convert_sec_to_time( releaseDuration ) }</span>
                    <span
                        onClick = { () => { remove( id ) } }
                        className = 'remove'>Снять</span>
                </div>
            );
        } );

        return div;

    };



    return (<>{ releases.length > 0? (
        <div className = 'CTS_ReleasesItemItem'>
            { create( releases ) }
        </div>
    ): '' }  </>
        
    )

};

export function ReleasesItem( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <ReleasesItemComponent
            { ...props }
            scheduleEventsList = { scheduleResult.scheduleEventsList }
            scheduleEventsListByGridEventId = { scheduleResult.scheduleEventsListByGridEventId }

            // categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
