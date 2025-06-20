
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as logsForwardTASlise, setSelectedAll } from './../../../../../../../../../../../../redux/logsForwardTASlise.js';

import './SSWHeaderButton.scss';

const SSWHeaderButtonComponent = ( props ) => {

    let {

        isActive,
        clickHandler,
        title,
        server,
        className,
        children,

    } = props;

    return (

        <div 
            className = { `SSWHeaderButton ${className} ${ isActive? 'isActive': ''}`}
            onClick = { clickHandler }
        >
            { children }
            <span className = 'SSWHeaderBtn_title'>{ title }</span>
            <span className = 'SSWHeaderBtn_serverName'>{ server }</span>
        </div>
    )

};

export function SSWHeaderButton( props ){

    // const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <SSWHeaderButtonComponent
            { ...props }


            // setSelectedAll = { ( val ) => { dispatch( setSelectedAll( val ) ) } }

        />
    );


}
