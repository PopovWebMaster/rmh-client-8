

export const get_TV_P_releaseNamesList = ( releases, upperCase ) => {

    let result = [];

    let plus = 0;

    if( releases.length > 0 ){

        for( let i = 0; i < releases.length; i++ ){
            let { releaseName, releaseDuration } = releases[ i ];
            let value = releaseName;
            if( upperCase ){
                value = value.toUpperCase();
            };

            result.push({
                releaseName: value,
                startTimePlus: plus,

            });

            plus = plus + releaseDuration;

        };

    }else{
        result.push( {
            releaseName: '',
            startTimePlus: plus,
        } );
    };


    return result;

};