
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise, setSelectedAll } from './../../../../../../../../../../redux/logsForwardTASlise.js';

import './SelectedAllButton.scss';

import { SSWHeaderButton } from './../SSWHeaderButton/SSWHeaderButton.js';

const SelectedAllButtonComponent = ( props ) => {

    let {

        server,

        selectedAll,
        setSelectedAll,

    } = props;


    return (

        <SSWHeaderButton
            isActive =      { selectedAll === server }
            clickHandler =  { () => { setSelectedAll( server ) } }
            title =         { 'Выделить все' }
            server =        { server }
            className =     'selectedAllButton'
        >
            <span className = 'selectedAllButton_chackBox'>
                { selectedAll === server? (<span>🗸</span>): ''  }
            </span>
        </SSWHeaderButton>
    )

};

export function SelectedAllButton( props ){
    const logsForwardTA = useSelector( logsForwardTASlise );
    const dispatch = useDispatch();

    return (
        <SelectedAllButtonComponent
            { ...props }

            selectedAll = { logsForwardTA.selectedAll }
            setSelectedAll = { ( val ) => { dispatch( setSelectedAll( val ) ) } }

        />
    );


}
