
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../../../redux/logsForwardTASlise.js';

import './SingleServerWindow.scss';

import { get_style_for_server_window } from './vendors/get_style_for_server_window.js';

import { SSWHeader } from './components/SSWHeader/SSWHeader.js';

import { ListHeader } from './components/ListHeader/ListHeader.js';
// import { TimeButtons } from './components/TimeButtons/TimeButtons.js';
import { ListScrollContainer } from './components/ListScrollContainer/ListScrollContainer.js';
import { SSW_List } from './components/SSW_List/SSW_List.js';

// import { BorderMover } from './components/BorderMover/BorderMover.js';
import { BorderMover } from './../BorderMover/BorderMover.js';


const SingleServerWindowComponent = ( props ) => {

    let {

        location, // left right
        server,

        windowLeftWidth,
        windowRightWidth,


    } = props;



    return (
        <div 
            className = { `FTA_SingleServerWindow location_${ location }` }
            style = { get_style_for_server_window({ location, windowLeftWidth, windowRightWidth }) } 
        >
            <SSWHeader server = { server }/>

            <div className = 'FTA_List_body'>
                <ListHeader />
                <div className = 'FTA_List_body_wrap'>

                    {/* <TimeButtons server = { server }/> */}

                    <ListScrollContainer server = { server }>
                        <SSW_List server = { server } />
                    </ListScrollContainer>

                </div>

                { server === 'main'? <BorderMover position = 'right'/>: <BorderMover position = 'left'/>}
            </div>

            


        </div>

    )

};

export function SingleServerWindow( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <SingleServerWindowComponent
            { ...props }
            windowLeftWidth = { logsForwardTA.windowLeftWidth }
            windowRightWidth = { logsForwardTA.windowRightWidth }

            // setSelectedAll = { ( val ) => { dispatch( setSelectedAll( val ) ) } }

        />
    );


}
