
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';

import './FilesApp.scss';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';

import { FilesTopPanel } from './../FilesTopPanel/FilesTopPanel.js';
import { FilesBody } from './../FilesBody/FilesBody.js';
import { FilesPrefix } from './../FilesPrefix/FilesPrefix.js';
import { FilesList } from './../FilesList/FilesList.js';

import { FilesPeriodButton } from './../FilesPeriodButton/FilesPeriodButton.js';
import { FilesCollectDataButton } from './../FilesCollectDataButton/FilesCollectDataButton.js';

const FilesAppComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageContainer className = 'filesApp' >

            <FilesTopPanel>

                <div className = 'filesApp_left'>
                    <FilesPeriodButton />
                    <FilesCollectDataButton />
                </div>
                
                <div className = 'filesApp_right'>

                </div>

            </FilesTopPanel>

            <FilesBody>

                <FilesPrefix />

                <FilesList />


            </FilesBody>

        </PageContainer>
    

    )

};

export function FilesApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <FilesAppComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
