
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as logsForwardTASlise, setSelectedAll } from './../../../../../../../../../../../../redux/logsForwardTASlise.js';

import './ListHeader.scss';

const ListHeaderComponent = ( props ) => {

    let {
        server,

    } = props;

    /*
        НЕ УДАЛЯТЬ!!!!!
        по любому понадобятся какие-нибудь кнопки для списка и это место предназначено для них
    */

    return (

        <div className = 'TA_ListHeader'></div>
    )

};

export function ListHeader( props ){

    // const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <ListHeaderComponent
            { ...props }


            // setSelectedAll = { ( val ) => { dispatch( setSelectedAll( val ) ) } }

        />
    );


}
