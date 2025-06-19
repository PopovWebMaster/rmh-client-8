
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


import { selectorData as commonSlice } from './../../redux/commonSlice.js';
import { selectorData as companySlice } from './../../redux/companySlice.js';


import { setSpinnerIsActive } from './../../redux/spinnerSlice.js';
import { send_request_to_server } from './../../helpers/send_request_to_server.js';
import { set_starting_response_to_store } from './vendors/set_starting_response_to_store.js';

import { ROUTE } from './../../config/routes.js';

const SetStartingDataFromServerComponent = ( props ) => {

    let {
        children,

        currentPage,
        currentCompanyAlias,

        setSpinnerIsActive

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect(() => {

        setSpinnerIsActive( true );

        let route = 'get-starting-data';

        switch( currentPage ){
            case ROUTE.PAGE.AIR_MAIN:
                route = `get-starting-data/${ currentCompanyAlias }`;
                break;

            case ROUTE.PAGE.AIR_SCHEDULE:
                route = `get-starting-data/${ currentCompanyAlias }`;
                break;

            case ROUTE.PAGE.AIR_APPLICATION:
                route = `get-starting-data/${ currentCompanyAlias }`;
                break;

            case ROUTE.PAGE.AIR_LAYOUT:
                route = `get-starting-data/${ currentCompanyAlias }`;
                break;

            case ROUTE.PAGE.AIR_PLAY_REPORT:
                route = `get-starting-data/${ currentCompanyAlias }`;
                break;

            case ROUTE.PAGE.AIR_LOGS:
                route = `get-starting-data/${ currentCompanyAlias }`;
                break;
        }


        send_request_to_server( {
            route,
            data: {},
            successCallback: ( resp ) => {
                console.dir( 'resp 1' );
                console.dir( resp );

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
    const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <SetStartingDataFromServerComponent
            { ...props }

            currentPage = { common.currentPage }

            currentCompanyAlias = { company.currentCompanyAlias }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }



        />
    );


}
