
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as layoutSlice } from './../../../../../../../redux/layoutSlice.js';

import { AllColorsList } from './../../AllColorsList/AllColorsList.js'

const ItemColorsComponent = ( props ) => {

    let {
        colorText,
        colorBG,
        setColorText,
        setColorBG,

    } = props;

    const changeColorText = ( e ) => {
        let val = e.target.value;
        setColorText( val );
    };

    const changeColorGB = ( e ) => {
        let val = e.target.value;
        setColorBG( val );
    };

    return (
        <div className = 'LCACC_item'>
            <h3>
                <span>Цвет текста:</span>
                <input 
                    type =      'color'
                    value =     { colorText }
                    onChange =  { changeColorText }
                />
                <div className = 'allColors'>
                    <AllColorsList 
                        setValue = { ( val ) => { setColorText( val ) } }
                    />
                </div>
            </h3>

            <h3>
                <span>Цвет фона: </span>
                <input 
                    type =      'color'
                    value =     { colorBG }
                    onChange =  { changeColorGB }
                />
                <div className = 'allColors'>
                    <AllColorsList 
                    setValue = { ( val ) => { setColorBG( val ) } }
                    />
                </div>
            </h3>
            
        </div>
    )

};

export function ItemColors( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ItemColorsComponent
            { ...props }


        />
    );


}
