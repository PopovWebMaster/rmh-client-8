
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './WordTest.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

// import { render, Document, Text } from 'redocx'


const WordTestComponent = ( props ) => {

    let {

    } = props;

    console.dir( '__dirname' );
    console.dir( __dirname );


    return (
        <Document>
            <Text>Hello World</Text>
        </Document>
    )

};


export function WordTest( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <WordTestComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
