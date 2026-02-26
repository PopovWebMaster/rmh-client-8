
export const scroll_to_grid_event = ( startTime ) => {

    let list = document.querySelectorAll( '.schEventContainer' );

    for( let i = 0; i < list.length; i++ ){
        if( startTime <= Number( list[ i ].dataset.startTime ) ){
            if( list[ i-1 ] ){
                list[ i-1 ].scrollIntoView({ behavior: "smooth" });
            }else{
                list[ i ].scrollIntoView({ behavior: "smooth" });
            };
            break;
        };
    }

}