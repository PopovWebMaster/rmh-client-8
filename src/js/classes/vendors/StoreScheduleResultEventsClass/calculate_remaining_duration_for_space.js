

export const calculate_remaining_duration_for_space = ( space_before, space_after, allEvents ) => {

    let result = 0;

    let spaceFrom = space_before.startTimeFrom;
    let spaceTo = space_after.startTimeTo;

    let space_duration = spaceTo - spaceFrom - 1;
    let all_filled_duration = space_after.filledDuration + space_before.filledDuration;

    let other_events_all_duration = 0;

    for( let gridEventId in allEvents ){
        let { startTime, allocatedDuration } = allEvents[ gridEventId ];
        if( startTime >= spaceFrom && startTime < spaceTo ){
            other_events_all_duration = other_events_all_duration + allocatedDuration;
        };
    };

    result = space_duration - all_filled_duration - other_events_all_duration;

    return result;

}