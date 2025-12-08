


export const separate_events_and_releases = ( scheduleList ) => {

    let scheduleEvents = [];
    let only_releases = [];

    for( let i = 0; i < scheduleList.length; i++ ){
        let item = structuredClone( scheduleList[ i ] );
        let { id, gridEventId } = item;
        let releases = structuredClone( item.releases );
        item.releases = [];

        only_releases.push( {
            gridEventId: id,
            releases,
        } );

        scheduleEvents.push( item );
    };

    return {
        scheduleEvents,
        only_releases,
    }


}