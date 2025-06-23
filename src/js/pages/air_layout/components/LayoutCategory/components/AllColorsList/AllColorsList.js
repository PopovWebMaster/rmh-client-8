
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AllColorsList.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';


const AllColorsListComponent = ( props ) => {

    let {
        setValue,
        allUsedColors,

    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( color, index ) => {

            return (
                <div
                    key = { index }
                    onClick = { () => { setValue( color ) } }
                >
                    <div
                        style = { {
                            backgroundColor: color
                        } }
                    ></div>
                </div>
            );
        } );

        return div;

    };





    return (

        <div className = 'LC_AllColorsList' >
            { create( allUsedColors ) }
        </div>

    )

};

export function AllColorsList( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <AllColorsListComponent
            { ...props }
            allUsedColors = { layout.allUsedColors }


            // setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
