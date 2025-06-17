
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './HomePageApp.scss';




import { SetDataFromHtmlMeta } from './../../../../components/SetDataFromHtmlMeta/SetDataFromHtmlMeta.js';
import { SetStartingDataFromServer } from './../../../../components/SetStartingDataFromServer/SetStartingDataFromServer.js';


const HomePageAppComponent = ( props ) => {

    let {

    } = props;

    useEffect(() => {



    }, [])



    return (

        <SetDataFromHtmlMeta>
            <SetStartingDataFromServer >
                
                <div>
                    HomePageApp
                </div>

            </SetStartingDataFromServer>
        </SetDataFromHtmlMeta>


    )

};


export function HomePageApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <HomePageAppComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
