
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AppEditorComponent.scss';

import { selectorData as applicationSlice } from './../../../../../../redux/applicationSlice.js';

import { A_Header }             from './components/A_Header/A_Header.js';
import { A_Name }               from './components/A_Name/A_Name.js';
import { A_CategoryNoEdit }     from './components/A_CategoryNoEdit/A_CategoryNoEdit.js';
import { A_ManagerNotes }       from './components/A_ManagerNotes/A_ManagerNotes.js';
import { AddSubApplication }    from './components/AddSubApplication/AddSubApplication.js';
import { RemoveApplication }    from './components/RemoveApplication/RemoveApplication.js';
import { SubAppList }           from './components/SubAppList/SubAppList.js';

import { A_Chart } from './components/A_Chart/A_Chart.js';

import { AppointAManager } from './components/AppointAManager/AppointAManager.js'

const AppEditorComponentComponent = ( props ) => {

    let {
        currentAppType
    } = props;


    
    
    return (
        <div className = 'appEditorComponent'>
            <div className = 'AEC_wrap'>

                <A_Header />
                
                <A_Name>
                    <AppointAManager />
                </A_Name>

                <A_CategoryNoEdit />
                <A_Chart />
                <A_ManagerNotes />

                <div className = 'AEC_button_panel'>

                    <div className = 'AEC_left'>
                        <AddSubApplication />
                    </div>

                    

                    <div className = 'AEC_right'>
                        <RemoveApplication />
                    </div>

                    


                </div>

                <div className = 'AEC_orders_wrap'>
                    
                    <SubAppList />

                </div>

            </div>

        </div>
    )

};

export function AppEditorComponent( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AppEditorComponentComponent
            { ...props }
            currentAppType = { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
