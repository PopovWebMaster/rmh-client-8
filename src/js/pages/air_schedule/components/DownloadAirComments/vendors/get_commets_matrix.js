
import store  from './../../../../../redux/store.js';

import { CommentsMatrixClass } from './CommentsMatrixClass.js';


export const get_commets_matrix = () => {

    let { scheduleResultDragEvent, scheduleResult } = store.getState();
    let { altKayList } = scheduleResultDragEvent;
    let { scheduleEventsListByGridEventId } = scheduleResult;

    let list = [];

    for( let gridEventId in altKayList ){
        list.push( structuredClone( scheduleEventsListByGridEventId[ gridEventId ] ) );
    };

    let sort = list.sort( ( a, b ) => {
        if( a.startTime > b.startTime ){
            return 1;
        }else{
            return -1;
        };
    } );
    

    let CommentsMatrix = new CommentsMatrixClass();
    for( let i = 0; i < sort.length; i++ ){
        CommentsMatrix.AddGridEvent( sort[ i ] );
    };

    let matrix = CommentsMatrix.GetMatrix();

    return matrix

}