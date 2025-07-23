

import store from './../../../redux/store.js';

export class SSRE_Methods{
    constructor( props ){

        this.GetGridEventsList = this.GetGridEventsList.bind(this);
        this.GetScheduleEventsList = this.GetScheduleEventsList.bind(this);
        this.SetLastGridEventId = this.SetLastGridEventId.bind(this);


    }

    GetGridEventsList(){
        let { layout, scheduleResult } = store.getState();
        let { gridDayEventsList } = layout;
        let { currentDayNum } = scheduleResult;
        let result = [];
        for( let i = 0; i < gridDayEventsList[ currentDayNum ].length; i++ ){
            result.push({ ...gridDayEventsList[ currentDayNum ][ i ] });
        };
        return result;
    }

    GetScheduleEventsList(){
        let result = [];
        for( let i = 0; i < this.list.length; i++ ){
            result.push( this.list[ i ].GetData() );
        };
        return result
    }

    SetLastGridEventId( ScheduleEvent ){
        let id = ScheduleEvent.gridEventId;
        if( this.lastGridEventId < id ){
            this.lastGridEventId = id;
        };
    }

}