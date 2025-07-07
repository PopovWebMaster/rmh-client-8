

export const get_week_point_list_type_blind = ( TimePoints ) => {

    let result =  [ [], [], [], [], [], [], [], ];

    let list = TimePoints.GetTimePointList();

    result[ 0 ] = [ ...list ];
    result[ 1 ] = [ ...list ];
    result[ 2 ] = [ ...list ];
    result[ 3 ] = [ ...list ];
    result[ 4 ] = [ ...list ];
    result[ 5 ] = [ ...list ];
    result[ 6 ] = [ ...list ];



    console.dir( 'TimePoints' );
    console.dir( TimePoints );



    return result;


}