
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ExportRunButton.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';


const ExportRunButtonComponent = ( props ) => {

    let {
        clickHandler,
    } = props;

    const get_puth = () => {
        if( IS_DEVELOPMENT ){
            return 'url( /assets/img/Gagarin_icon.jpg )';
        }else{
            return 'url( /public/assets/img/Gagarin_icon.jpg )';
        };
    };

    return (

        <div className = 'S_DExcelComponent_btn'>
            <span
                className = 'S_DExcelComponent_icon'
                style = {{
                    backgroundImage: get_puth(),
                }}
                onClick = { clickHandler }
            >
                Поехали
            </span>
        </div>
        
    )

};


export function ExportRunButton( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <ExportRunButtonComponent
            { ...props }

            // scheduleEventsList = { scheduleResult.scheduleEventsList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
