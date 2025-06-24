

/*

    здесь мы берём группу событий сетки, которое делится на порезку
    создаём новую группу в которую добавляем новое событие сетки с id = null
    и всеми настройками по времени, длительности и прочим для остальных элементов массива
    
    На сервере, при записи группы, если цикл находит id = null то он создаёт новую запись grid_event
    а другие события просто перезаписывает их данные.

*/

export const add_cut_path_to_grid_events_groupe = ( params ) => {
    let {
        cut_point,
        gridEventsParts,
    } = params;

    let start_time_of_group = 0;
    let new_group = [];

    let first_segment_id = null;
    let next_cut_part = 1;
    let cut_point_into_day = 0;

    console.dir( 'gridEventsParts' );
    console.dir( gridEventsParts );


    for( let i = 0; i < gridEventsParts.length; i++ ){
        let { 
            firstSegmentId,
            id,
            startTime,
            durationTime,
            cutPart,
        } = { ...gridEventsParts[ i ] };

        if( i === 0 ){
            first_segment_id = id;
            start_time_of_group = startTime;
            cut_point_into_day = start_time_of_group + cut_point;
        }else{

        };

        firstSegmentId = first_segment_id;
        cutPart = next_cut_part;

        if( startTime < cut_point_into_day && cut_point_into_day < startTime + durationTime ){
            let start_time_0 = startTime;
            let duration_time_0 = cut_point - ( startTime - start_time_of_group ) - 1;
            let start_time_1 = cut_point_into_day;
            let duration_time_1 = durationTime - duration_time_0 - 1;
            let cuted_item =            { ...gridEventsParts[ i ] };
            cuted_item.startTime =      start_time_0;
            cuted_item.durationTime =   duration_time_0;
            cuted_item.cutPart =        cutPart;
            cuted_item.firstSegmentId = firstSegmentId;
            if( i === 0 ){
                // cuted_item.isKeyPoint = true;
            }else{
                cuted_item.isKeyPoint = false;
            };
            let new_item = { ...gridEventsParts[ i ] };
            next_cut_part = next_cut_part + 1;
            new_item.id = null;
            new_item.startTime = start_time_1;
            new_item.durationTime = duration_time_1;
            new_item.cutPart = next_cut_part;
            new_item.firstSegmentId = first_segment_id;
            new_item.isKeyPoint = false;
            new_group.push( cuted_item );
            new_group.push( new_item );


        }else{
            let item = { ...gridEventsParts[ i ] }
            if( i === 0 ){
                // item.isKeyPoint = true;
            }else{
                item.isKeyPoint = false;
            };
            item.cutPart = next_cut_part;
            new_group.push( item );
        };

        next_cut_part = next_cut_part + 1;
    };


    let result = new_group.sort((a, b) => { 
        let res = 0;
        if( a.startTime > b.startTime ){ res = 1 };
        if( a.startTime < b.startTime ){ res = -1 };
        return res          
    });

    return result;

};