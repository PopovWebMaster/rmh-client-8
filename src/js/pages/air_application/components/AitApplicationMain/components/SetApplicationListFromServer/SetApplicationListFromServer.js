
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetApplicationListFromServer.scss';

import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';

// import { selectorData as applicationSlice }     from './../../../../../../../../redux/applicationSlice.js';

// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';


// import { get_filtred_app_list } from './vendors/get_filtred_app_list.js';

// import { DEFAULT_CATEGORY, EVENT_TYPE, BLIND_STYLE  } from './../../../../../../../../config/layout.js';
// import { ROUTE } from './../../../../../../../../config/routes.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { set_starting_response_to_store } from './../../../../../../components/SetStartingDataFromServer/vendors/set_starting_response_to_store.js';


const SetApplicationListFromServerComponent = ( props ) => {

    let {
        children,

        setSpinnerIsActive,

    } = props;
    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        // setIsReady( true );
        setSpinnerIsActive( true );

        send_request_to_server( {
            route: 'get-starting-application-list',
            data: {},
            successCallback: ( resp ) => {
                console.dir( 'resp<<' );
                console.dir( resp );

                set_starting_response_to_store( resp );
                setIsReady( true );
                setSpinnerIsActive( false );

            },
        } );
        

    }, [] );




    
    return (
        <>{ isReady? children: '' }</>
    )

};

export function SetApplicationListFromServer( props ){

    // const application = useSelector( applicationSlice );
    // const layout = useSelector( layoutSlice );
    // const company = useSelector( companySlice );
    const dispatch = useDispatch();

    return (
        <SetApplicationListFromServerComponent
            { ...props }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

            // applicationList = { application.applicationList }
            // currentManagerId = { application.currentManagerId }
            // currentCategoryIdOfListFilter = { application.currentCategoryIdOfListFilter }

            // currentEventIdOfListFilter = { application.currentEventIdOfListFilter }

            // currentCompanyAlias = { company.currentCompanyAlias }

            // categoryListById = { layout.categoryListById }

            // eventListById = { layout.eventListById }


            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
