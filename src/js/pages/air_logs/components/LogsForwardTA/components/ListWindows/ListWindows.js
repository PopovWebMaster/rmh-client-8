
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../redux/logsForwardTASlise.js';

import './ListWindows.scss';

import { SingleServerWindow } from './components/SingleServerWindow/SingleServerWindow.js';
// import { BorderMover } from './components/BorderMover/BorderMover.js';

import { TimeButtons } from './components/SingleServerWindow/components/TimeButtons/TimeButtons.js';
import { SetAutoResize } from './components/SetAutoResize/SetAutoResize.js';
   
const ListWindowsComponent = ( props ) => {

    let {

    } = props;

    return (
        <div 
            className = 'FTA_ListWindows'
        >
            <TimeButtons />

            <SetAutoResize>
                <SingleServerWindow 
                    location = { 'left' }
                    server = { 'main' }
                />

                {/* <BorderMover /> */}

                <SingleServerWindow 
                    location = { 'right' }
                    server = { 'backup' }
                />
            </SetAutoResize>



        </div>
    )

};

export function ListWindows( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <ListWindowsComponent
            { ...props }
            logDateMain = { logsForwardTA.logDateMain }
            logDateBackup = { logsForwardTA.logDateBackup }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
