

export const get_grid_event_parts_arr = ( gridOneDayList, gridEventId ) => {

    let result = [];

    let parts = [];

    for( let sectorIndex = 0; sectorIndex < gridOneDayList.length; sectorIndex++ ){
        let { sector_list } = gridOneDayList[ sectorIndex ];
        for( let i = 0; i < sector_list.length; i++ ){
            let { id, firstSegmentId } = sector_list[ i ];
            if( id === gridEventId ){
                parts.push( { ...sector_list[ i ] } );
            }else if( firstSegmentId !== null && firstSegmentId === gridEventId ){
                console.dir( sector_list[ i ] );
                parts.push( { ...sector_list[ i ] } );
            };
        };
    };

    /*

        здесь, возможно, понадобится сортировка по startTime
        по этому возвращает parts, а не result
    
    
    */

    return parts;


};