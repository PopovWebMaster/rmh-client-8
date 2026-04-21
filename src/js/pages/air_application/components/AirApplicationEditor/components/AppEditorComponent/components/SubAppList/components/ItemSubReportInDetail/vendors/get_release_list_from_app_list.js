

export const get_release_list_from_app_list = ( params ) => {

    let {
        application_list,
        application_id,
        sub_application_id,
    } = params;

    let result = [];

    for( let i = 0; application_list.length; i++ ){
        if( application_list[ i ].application_id === application_id ){

            let { sub_application_list } = application_list[ i ];
            for( let y = 0; y < sub_application_list.length; y++ ){
                if( sub_application_list[ y ].id === sub_application_id ){

                    let { release_list } = sub_application_list[ y ];

                    for( let index = 0; index < release_list.length; index++ ){
                        result.push( structuredClone( release_list[ index ] ) );
                    };


                    break;

                };
            };

            break;
        };
    }



    return result;

}