
import store from './../../../redux/store.js';
import { setScheduleEventsList, setScheduleEventsListIsChanged } from './../../../redux/scheduleResultSlise.js';

import { StoreScheduleResultEventsClass } from './../../../classes/StoreScheduleResultEventsClass.js';

export const set_schedule_list_changes_to_store = ( gridEventId, objWithChanges, chackFlag = true ) => {

    /*
        Этот кусок говно-кода нужен, чтоб при изменении isKeyPoint возвращать скролл на нужнгое место
    */
    let schEventContainer  = document.querySelector( `.schEventContainer[data-grid-event-id='${gridEventId}']` );
    let procent = 0;
    let isScrolled = false;
    function recursiveGetOfccet( elem, callback ){
        let { classList } = elem;
        let isFinish = false;
        if( classList ){
            for( let i = 0; i < classList.length; i++ ){
                if( classList[ i ] === 'scrollContainer' ){
                    isFinish = true;
                    break;
                };
            };
        };

        if( isFinish ){
            let { scrollHeight, scrollTop } = elem;
            let val = scrollTop*100/scrollHeight;
            callback( val, elem );
        }else{
            recursiveGetOfccet( elem.parentElement, callback );
        };
    }
    if( objWithChanges.isKeyPoint !== undefined ){
        let { scheduleResult } = store.getState();
        let {
            scheduleEventsListByGridEventId
        } = scheduleResult; 
        if( scheduleEventsListByGridEventId[ gridEventId ].isKeyPoint !== objWithChanges.isKeyPoint ){
            isScrolled = true;
        };
    }
    if( isScrolled ){
        recursiveGetOfccet( schEventContainer, ( val ) => {
            procent = val
        } );
    };
    // конец говно-кода






    if( chackFlag ){

        let { scheduleResult } = store.getState();
        let {
            scheduleEventsList

        } = scheduleResult; 

        let newArr = [];

        for( let i = 0; i <scheduleEventsList.length; i++ ){
            if( scheduleEventsList[ i ].gridEventId === gridEventId ){

                newArr.push( { ...scheduleEventsList[ i ], ...objWithChanges } );
            }else{
                newArr.push( { ...scheduleEventsList[ i ] } );
            };
        };

         let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateList({
            gridEventsList: newArr,
        });

        StoreScheduleResultEvents.UpdateData();
        StoreScheduleResultEvents.SetListToStore( true );
        

        // store.dispatch( setScheduleEventsList( newArr ) );
        // store.dispatch( setScheduleEventsListIsChanged( true ) );





        // кусок говно-кода начало
        if( isScrolled ){
            let timerId = setTimeout( () => {
                let schEventContainer_2  = document.querySelector( `.schEventContainer[data-grid-event-id='${gridEventId}']` );
                recursiveGetOfccet( schEventContainer_2, ( val, elem ) => {
                    let { scrollHeight, scrollTop } = elem;
                    let newVal = Math.floor( procent * scrollHeight / 100 );
                    elem.scrollTop = newVal;
                } );
                clearTimeout( timerId );
            }, 50 );
        };
        // конец говно-кода
        


    };
}