
import store from './../../../redux/store.js';

import {
    clearAll,
    setCharType,
    setReleaseName,
    setReleaseDuration,
    setCategoryId,
    setCategoryColorBg,
    setCategoryColorText,
    setCategoryName,
    setCategoryPrefix,
    setEventId,
    setEventCategoryId,
    setEventName,
    setEventDurationTime,
    setEventNotes,
    setEventType,
    setPeriodFrom,
    setPeriodTo,
    setAllTimePointsList,
    setDayList,
    setAllReleaseLength,
    setAllReleaseDuration,
    setIsChanged,
    setGridEventTable,
    setAllTimePointsGroupeList,

} from './../../../redux/scheduleSlise.js';






export const set_to_store = ( name, value = null ) => {

    switch( name ){
        case 'charType':
            store.dispatch( setCharType( value ) );
            break;

        case 'releaseName':
            store.dispatch( setReleaseName( value ) );
            break;

        case 'releaseDuration':
            store.dispatch( setReleaseDuration( value ) );
            break;

        case 'categoryId':
            store.dispatch( setCategoryId( value ) );
            break;

        case 'categoryColorBg':
            store.dispatch( setCategoryColorBg( value ) );
            break;

        case 'categoryColorText':
            store.dispatch( setCategoryColorText( value ) );
            break;

        case 'categoryName':
            store.dispatch( setCategoryName( value ) );
            break;

        case 'categoryPrefix':
            store.dispatch( setCategoryPrefix( value ) );
            break;


        case 'eventId':
            store.dispatch( setEventId( value ) );
            break;

        case 'eventCategoryId':
            store.dispatch( setEventCategoryId( value ) );
            break;

        case 'eventName':
            store.dispatch( setEventName( value ) );
            break;

        case 'eventDurationTime':
            store.dispatch( setEventDurationTime( value ) );
            break;

        case 'eventNotes':
            store.dispatch( setEventNotes( value ) );
            break;

        case 'eventType':
            store.dispatch( setEventType( value ) );
            break;


        case 'period_from':
            store.dispatch( setPeriodFrom( value ) );
            break;

        case 'period_to':
            store.dispatch( setPeriodTo( value ) );
            break;

        case 'allTimePointsList':
            store.dispatch( setAllTimePointsList( value ) );
            break;

        case 'dayList':
            store.dispatch( setDayList( value ) );
            break;


        case 'allReleaseLength':
            store.dispatch( setAllReleaseLength( value ) );
            break;

        case 'allReleaseDuration':
            store.dispatch( setAllReleaseDuration( value ) );
            break;

        case 'isChanged':
            store.dispatch( setIsChanged( value ) );
            break;


        case 'gridEventTable':
            store.dispatch( setGridEventTable( value ) );
            break;

        case 'allTimePointsGroupeList':
            store.dispatch( setAllTimePointsGroupeList( value ) );
            break;


           
        case 'all':
            store.dispatch( clearAll() );
            break;

    }

};