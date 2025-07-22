

export const get_filtered_list = ( params ) => {
    let {
        activeCategoryId,
        activeEventId,
        activeSubAppId,
        activeReleaseName,
        releaseList
    } = params;

    let result = [];

    for( let i = 0; i < releaseList.length; i++ ){
        let {
            category_id,
            event_id,
            application_id,
            applicationName,
            id,
            releaseName
        } = releaseList[ i ];

        let category_isValid = false;
        let event_isValid = false;
        let sub_app_isValid = false;
        let release_isValid = false;

        if( activeCategoryId === null ){
            category_isValid = true;
        }else{
            if( activeCategoryId === category_id ){
                category_isValid = true;
            };
        };

        if( activeEventId === null ){
            event_isValid = true;
        }else{
            if( activeEventId === event_id ){
                event_isValid = true;
            };
        };

        if( activeSubAppId === null ){
            sub_app_isValid = true;
        }else{
            if( activeSubAppId === application_id ){
                sub_app_isValid = true;
            };
        };

        if( activeReleaseName === null ){
            release_isValid = true;
        }else{
            if( activeReleaseName === releaseName ){
                release_isValid = true;
            };
        };

        if( category_isValid && event_isValid && sub_app_isValid && release_isValid ){
            result.push( { ...releaseList[ i ] } );
        };


    };



    return result;

}