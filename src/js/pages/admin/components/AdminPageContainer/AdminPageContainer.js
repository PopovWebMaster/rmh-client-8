
import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AdminPageContainer.scss';


const AdminPageContainerComponent = ( props ) => {

    let {
        className = '',
        topPanelComponents = '',
        bodyComponent = '',

    } = props;



    return (

        <div className = { `adminPageContainer ${className}` }>

            <div className = 'APC_top_panel'>
                { topPanelComponents }
            </div>

            <div className = 'APC_body'>
                { bodyComponent }
            </div>

        </div>

    )

};


export function AdminPageContainer( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageContainerComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
