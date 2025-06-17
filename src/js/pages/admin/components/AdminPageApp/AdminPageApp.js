
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageApp.scss';

import { SetDataFromHtmlMeta } from './../../../../components/SetDataFromHtmlMeta/SetDataFromHtmlMeta.js';
import { SetStartingDataFromServer } from './../../../../components/SetStartingDataFromServer/SetStartingDataFromServer.js';


const AdminPageAppComponent = ( props ) => {

    let {

    } = props;

    useEffect(() => {



    }, [])



    return (

        <SetDataFromHtmlMeta>
            <SetStartingDataFromServer >
                
                <div>
                    AdminPageApp
                </div>

            </SetStartingDataFromServer>
        </SetDataFromHtmlMeta>


    )

};


export function AdminPageApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageAppComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
