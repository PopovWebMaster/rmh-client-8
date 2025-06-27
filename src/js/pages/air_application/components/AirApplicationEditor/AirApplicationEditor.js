
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AirApplicationEditor.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';
import { PageBodyContainer } from './../../../../components/PageBodyContainer/PageBodyContainer.js';
import { SaveApplicationChanges } from './components/SaveApplicationChanges/SaveApplicationChanges.js';
import { SetCurrentApplicationId } from './components/SetCurrentApplicationId/SetCurrentApplicationId.js';
import { GetCurrentApplicationDataFromServer } from './components/GetCurrentApplicationDataFromServer/GetCurrentApplicationDataFromServer.js';
import { AppEditorComponent } from './components/AppEditorComponent/AppEditorComponent.js';

const AirApplicationEditorComponent = ( props ) => {

    let {

    } = props;

    return (
        <PageBodyContainer
            className = 'applicationEditor'
            controlPanelContainer = {<>
                <SaveApplicationChanges />
            </>}
            bodyContainer = {<>
                <SetCurrentApplicationId>
                    <GetCurrentApplicationDataFromServer>
                        <AppEditorComponent />
                    </GetCurrentApplicationDataFromServer>
                </SetCurrentApplicationId>
            </>}
        />
    )

};


export function AirApplicationEditor( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirApplicationEditorComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
