// AWShowErrors


import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './AWShowErrors.scss';

const AWShowErrorsComponent = ( props ) => {

    let {
        errors = [], // array or string
        onlyErrorInfo = false,
        

    } = props;

    const create = ( arr ) => {
        let p = '';
        if( typeof arr === "string" ){
            /*
                Моя частая ошибка воткнуть строку вместо массива...
            */
            p  = <p>{ arr }</p>;
        }else{
            p = arr.map( ( text, index ) => {
                return <p key = { index }>{ text }</p>
            } );
        };
        return p;


    };


    return (<>
        { errors.length === 0? '': (
            <div className = 'AW_item AWShowErrors'>
                { onlyErrorInfo? '': <h3 className = 'error_h3'>Ошибка!</h3> }
                
                { create( errors ) }
            </div>
        ) }
    </>

    )

};

export function AWShowErrors( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AWShowErrorsComponent
            { ...props }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
