
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './PageContainer.scss';

import { SetDataFromHtmlMeta }          from './../SetDataFromHtmlMeta/SetDataFromHtmlMeta.js';
import { SetStartingDataFromServer }    from './../SetStartingDataFromServer/SetStartingDataFromServer.js';
import { Spinner }                      from './../Spinner/Spinner.js';
import { SiteBackground }               from './components/SiteBackground/SiteBackground.js';
import { BodyContainer }                from './components/BodyContainer/BodyContainer.js';

import { TopMenu } from './components/TopMenu/TopMenu.js';

const PageContainerComponent = ( props ) => {

    let {
        children,
        className = '',
    } = props;
    

    return (
        <div className = 'pageContainer'>

            <Spinner />

            <SetDataFromHtmlMeta>
                <SetStartingDataFromServer >
                    <SiteBackground>
                        <BodyContainer>

                            <TopMenu />

                            <div className = {className}>
                                { children }
                            </div>

                        </BodyContainer>
                    </SiteBackground>
                </SetStartingDataFromServer>
            </SetDataFromHtmlMeta>
                            
        </div>
    )

};

export function PageContainer( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <PageContainerComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
