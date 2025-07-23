
import { SSRE_Methods } from './vendors/StoreScheduleResultEventsClass/SSRE_Methods.js';
import { ScheduleEventClass } from './vendors/StoreScheduleResultEventsClass/ScheduleEventClass.js';

import store from './../redux/store.js';
import { setScheduleEventsList } from './../redux/scheduleResultSlise.js';


export class StoreScheduleResultEventsClass extends SSRE_Methods{
    constructor( props ){
        super( props );

        this.list = [];

        this.lastGridEventId = 0;



        this.CreateFromGridEvents = this.CreateFromGridEvents.bind(this);
        this.SetListToStore = this.SetListToStore.bind(this);




    }

    CreateFromGridEvents(){
        let gridEventsList = this.GetGridEventsList();
        for( let i = 0; i < gridEventsList.length; i++ ){
            let ScheduleEvent = new ScheduleEventClass();
            ScheduleEvent.SetDataFromGridEvent( gridEventsList[ i ] );
            this.list.push( ScheduleEvent );
            this.SetLastGridEventId( ScheduleEvent );
        };
    }

    SetListToStore(){
        let scheduleEventsList = this.GetScheduleEventsList();
        store.dispatch( setScheduleEventsList( scheduleEventsList ) );
    }
    
}