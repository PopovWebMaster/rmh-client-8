
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


import { selectorData as commonSlice } from './../../redux/commonSlice.js';

import { setSpinnerIsActive } from './../../redux/spinnerSlice.js';
import { send_request_to_server } from './../../helpers/send_request_to_server.js';
import { set_starting_response_to_store } from './vendors/set_starting_response_to_store.js';

const SetStartingDataFromServerComponent = ( props ) => {

    let {
        children,

        setSpinnerIsActive

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect(() => {

        setSpinnerIsActive( true );

        send_request_to_server( {
            route: 'get-starting-data',
            data: {},
            successCallback: ( resp ) => {
                // console.dir( 'resp 1' );
                // console.dir( resp );

                set_starting_response_to_store( resp );
                setIsReady( true );
                setSpinnerIsActive( false );

            },
        } );

    }, [])



    return (<>{ isReady? children: '' }</>)

};


export function SetStartingDataFromServer( props ){

    const common = useSelector( commonSlice );
    const dispatch = useDispatch();

    return (
        <SetStartingDataFromServerComponent
            { ...props }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }



        />
    );


}
