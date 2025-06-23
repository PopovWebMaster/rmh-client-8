
import React, { useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddCategoryComponent.scss';

// import { selectorData as layoutSlice, setCategoryList } from './../../../../../../redux/layoutSlice.js';

import { ItemName } from './components/ItemName.js';
import { ItemPrefix } from './components/ItemPrefix.js';
import { ItemColors } from './components/ItemColors.js';
import { ItemExemple } from './components/ItemExemple.js';
import { CreateButton } from './components/CreateButton.js';


const AddCategoryComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

    } = props;

    let [ name, setName ] = useState( '' );
    let [ prefix, setPrefix ] = useState( '' );
    let [ colorText, setColorText ] = useState( '#000000' );
    let [ colorBG, setColorBG ] = useState( '#ffffff' );

    useEffect( () => {
        if( isOpen === false ){
            setName( '' );
            setPrefix( '' );
            setColorText( '#000000' );
            setColorBG( '#ffffff' );

        };
    }, [ isOpen ]);

    return (

        <div className = 'LC_addCategoryComponent' >

            <ItemName 
                name =      { name }
                setName =   { setName }
            />

            <ItemPrefix 
                prefix =    { prefix }
                setPrefix = { setPrefix }
            />

            <ItemExemple 
                name =      { name }
                colorText = { colorText }
                colorBG =   { colorBG }
            />

            <ItemColors 
                colorText =     { colorText }
                colorBG =       { colorBG }
                setColorText =  { setColorText }
                setColorBG =    { setColorBG }
            />

            <CreateButton 
                name  =         { name }
                prefix  =       { prefix }
                colorText  =    { colorText }
                colorBG  =      { colorBG }
                setIsOpen  =    { setIsOpen }
            />
   
        </div>

    )

};

export function AddCategoryComponent( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AddCategoryComponentComponent
            { ...props }
            // categoryesIsChanged = { layout.categoryesIsChanged }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
