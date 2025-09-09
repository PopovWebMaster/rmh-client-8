
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
        scheduleEventsList
    } = props;

    const remove = ( release_id ) => {
        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
        StoreScheduleResultEvents.RemoveRelease( gridEventId, release_id  );
        StoreScheduleResultEvents.SetListToStore();
    }


    const releaseMoveUp = ( id ) => {

        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
        StoreScheduleResultEvents.ReleaseMoveUp( gridEventId, id  );
        StoreScheduleResultEvents.SetListToStore();

        // ReleaseMoveUp

    }

    const releaseMoveDown = ( id ) => {

        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
        StoreScheduleResultEvents.ReleaseMoveDown( gridEventId, id  );
        StoreScheduleResultEvents.SetListToStore();

    }

    const create = ( arr ) => {

        // console.dir( 'releases' );
        // console.dir( arr );

        let div = arr.map( ( item, index ) => {
            let {
                applicationName,
                releaseName,
                releaseDuration,
                file_list,
                id,
            } = item;
            let file = '';
            if( file_list.length > 0 ){
                file = `${file_list[ file_list.length - 1 ]}`;
            };

            let name = file === ''? `${releaseName}/`: file;
            return (
                <div
                    className = 'CTS_RI_Item'
                    key = { index }
                >
                    <span
                        className = 'icon-angle-up arrow'
                        onClick = { () => { releaseMoveUp( id ) } }
                    ></span>
                    <span
                        className = 'icon-angle-down arrow'
                        onClick = { () => { releaseMoveDown( id ) } }
                    ></span>

                    <span className = 'name'>{ name }</span>
                    <span className = 'duration'>{ convert_sec_to_time( releaseDuration ) }</span>
                    <span
                        onClick = { () => { remove( id ) } }
                        className = 'remove'>Снять с эфира</span>
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
            // categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
