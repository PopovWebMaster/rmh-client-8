

export const get_item_name_value = ( params ) => {
    let {
        filterList,
        eventId,
    } = params;

     let result = [];
    
    for( let i = 0; i < filterList.length; i++ ){
        if( filterList[ i ].eventId === eventId ){

            let {
                name,
                quotationMarks,
                upperCase,
                staples,
            } = filterList[ i ];

            console.dir( 'filterList[ i ]' );
            console.dir( filterList[ i ] );


            
        };;
    };

    return result;

}