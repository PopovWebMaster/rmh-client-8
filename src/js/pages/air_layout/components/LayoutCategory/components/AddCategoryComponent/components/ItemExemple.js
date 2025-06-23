
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as layoutSlice } from './../../../../../../../redux/layoutSlice.js';

const ItemExempleComponent = ( props ) => {

    let {
        name,
        colorText,
        colorBG,

    } = props;

    return (
        <div className = 'LCACC_item'>
            <div className = 'LCACC_item_example'>
                <span 
                    className = 'LCACC_text_example'
                    style = {{
                        color: colorText,
                        backgroundColor: colorBG,
                    }}
                >{ name }</span>
            </div>
        </div>
    )

};

export function ItemExemple( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ItemExempleComponent
            { ...props }


        />
    );


}
