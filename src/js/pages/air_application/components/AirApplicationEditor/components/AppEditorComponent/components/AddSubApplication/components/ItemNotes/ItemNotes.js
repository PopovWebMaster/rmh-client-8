// ItemNotes


import React, { useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemNotes.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
// import { selectorData as layoutSlice }      from './../../../../../../../../../../redux/layoutSlice.js';

const ItemNotesComponent = ( props ) => {

    let {
        isOpen,
        notes,
        setNotes,


    } = props;

    // let [ text, setText ] = useState( '' );

    useEffect( () => {
        if( isOpen ){
            // setNotes( notes );
        }else{
            setNotes( '' )
        };

    }, [ isOpen ] );

    const change = ( e ) => {
        setNotes( e.target.value );
    }

    

    return (
        <div className = 'NS_item_notes'>
            <h3>Доп. инфо.</h3>

            <input 
                type =          'text'
                value =         { notes }
                onChange =      { change }
                placeholder =   'это прочтёт эфирщик'
                maxLength = { 255 }
            />

        </div>

    )

};

export function ItemNotes( props ){

    // const application = useSelector( applicationSlice );
    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ItemNotesComponent
            { ...props }
            // currentAppCategoryId =  { application.currentAppCategoryId }
            // categoryListById =    { layout.categoryListById }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
