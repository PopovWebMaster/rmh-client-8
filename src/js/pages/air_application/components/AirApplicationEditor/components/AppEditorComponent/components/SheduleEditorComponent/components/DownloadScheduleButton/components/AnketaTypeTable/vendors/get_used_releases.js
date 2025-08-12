
import store from './../../../../../../../../../../../../../redux/store.js';

export const get_used_releases = () => {

    let releases  = {};
    let used_sab_app_id = [];
    let used_sab_app_id_obj = {};

    let { schedule, application, currentSubApplication } = store.getState();
    let { gridEventTable } = schedule;
    let { currentSubAppListById } = application;
    let { currentSubAppId, modeMix } = currentSubApplication;

    for( let YYYY_MM_DD in gridEventTable ){
        let dayList = [];
        for( let grid_id in gridEventTable[ YYYY_MM_DD ] ){
            
            let { content, grid_event } = gridEventTable[ YYYY_MM_DD ][ grid_id ];
            let { startTime, id } = grid_event;

            if( modeMix ){
                for( let sub_app_id in content ){
                    if( currentSubAppListById[ sub_app_id ] ){
                        let { fill_count } = content[ sub_app_id ];
                        for( let i = 0; i < fill_count; i++ ){
                            dayList.push({
                                startTime,
                                grid_event_id: id,
                                sub_app_id: Number( sub_app_id ),
                            });
                        };

                        used_sab_app_id_obj[ sub_app_id ] = true;
                    };
                };

            }else{
                if( content[ currentSubAppId ] ){
                    let { fill_count } = content[ currentSubAppId ];
                    for( let i = 0; i < fill_count; i++ ){
                        dayList.push({
                            startTime,
                            grid_event_id: id,
                            sub_app_id: Number( currentSubAppId ),
                        });
                    };

                    used_sab_app_id_obj[ currentSubAppId ] = true;
                };
            };

            
        };
        if( dayList.length > 0){
            let sort_arr = dayList.sort( ( a, b ) => {
                if( a.startTime > b.startTime ){
                    return 1;
                }else{
                    return -1
                };
            } );
            releases[ YYYY_MM_DD ] = sort_arr;
        }else{
            releases[ YYYY_MM_DD ] = [];
        };
    };

    for( let sub_app_id in used_sab_app_id_obj ){
        used_sab_app_id.push( Number( sub_app_id ) );
    };

    return {
        releases,
        used_sab_app_id,
    };
};