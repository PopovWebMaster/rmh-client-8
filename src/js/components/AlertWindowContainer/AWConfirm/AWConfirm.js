
import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './AWConfirm.scss';

const AWConfirmComponent = ( props ) => {

    let {
        text = null,  // 'string' || [ 'string', 'string', ... , 'string', ]

        type = 'confirm', // 'confirm' 'warning'

        continueHandler = () => {},
        cancelHandler = () => {},

        titleContinue = 'Продолжить',
        titlecancel = 'Отмена',



        children

    } = props;

    const createText = () => {

        let p = '';
        if( typeof text === 'string' ){
            p = <p>{ text }</p>;
        }else if( typeof text === 'object' ){
            if( Array.isArray( text ) ){
                p = text.map( ( item, index ) => {
                    return <p key = { index } >{ item }</p>
                } );
            };
        };
        return p

    };


    return (
        <div className = 'AW_item AWConfirm'>
            { text === null? '': createText() }

            { children? children: '' }

            <div className = 'AWConfirm_buttons'>

                <div
                    className = { `btn ${ type === 'confirm'? 'confirm': 'warning'}` }
                    onClick = { continueHandler }
                >
                    <span>{ titleContinue }</span>
                </div>

                <div 
                    className = 'btn cancel'
                    onClick = { cancelHandler }
                >
                    <span>{ titlecancel }</span>
                </div>

            </div>

        </div>
    )

};

export function AWConfirm( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AWConfirmComponent
            { ...props }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
