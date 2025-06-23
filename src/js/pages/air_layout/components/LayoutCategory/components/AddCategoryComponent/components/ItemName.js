
import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { check_category_name_for_uniq } from './../vendors/check_category_name_for_uniq.js';

const ItemNameComponent = ( props ) => {

    let {
        name,
        setName,
    } = props;

    let [ isUniq, setIsUniq ] = useState( false );

    useEffect( () => {
        setIsUniq( check_category_name_for_uniq( name ) );
    }, [ name ] );

    const changeName = ( e ) => {
        let val = e.target.value;
        setName( val );
    }

    return (
        <div className = 'LCACC_item'>
            { isUniq? (
                <h3>Название:</h3>
            ): (
                <h3 className = 'LCACC_h3_error'>Уже есть категория с таким названием!</h3>
            ) }
            <input 
                type =      'text'
                className = { `LCACC_input_text ${ isUniq? '': 'LCACC_input_text_error' }` }
                maxLength = '255'
                value =     { name }
                onChange =  { changeName }
            />
        </div>
    )

};

export function ItemName( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ItemNameComponent
            { ...props }


        />
    );


}
