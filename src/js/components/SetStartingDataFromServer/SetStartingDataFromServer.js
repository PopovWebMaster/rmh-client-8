
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


import { selectorData as commonSlice } from './../../redux/commonSlice.js';
import { send_request_to_server } from './../../helpers/send_request_to_server.js';

const SetStartingDataFromServerComponent = ( props ) => {

    let {
        children,


        // setPage,
        // setCompanyAlias,
        // setCompanyName,
        // setCompanyType,
        // setCompanyProgramSystem,
        // setCompanyList,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect(() => {

        send_request_to_server( {
            route: 'get-starting-data',
            data: {

            },
            successCallback: ( resp ) => {
                console.dir( 'resp 1' );
                console.dir( resp );

            },
            errorCallback: ( resp ) => {
                console.dir( 'resp 2' );
                console.dir( resp );

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

            // common = { common }
            // page = { common.page }

            // userInfo = { userInfo }
            // setPage =                   { ( val ) => { dispatch( setPage( val ) ) } }
            // setCompanyAlias =           { ( val ) => { dispatch( setCompanyAlias( val ) ) } }
            // setCompanyName =            { ( val ) => { dispatch( setCompanyName( val ) ) } }
            // setCompanyType =            { ( val ) => { dispatch( setCompanyType( val ) ) } }
            // setCompanyProgramSystem =   { ( val ) => { dispatch( setCompanyProgramSystem( val ) ) } }
            // setCompanyList =            { ( val ) => { dispatch( setCompanyList( val ) ) } }


        />
    );


}
