
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneCategory.scss';

import { selectorData as layoutSlice, setCategoryesIsChanged, setCategoryList } from './../../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../redux/spinnerSlice.js';

import { RemoveCategoryButton } from './components/RemoveCategoryButton/RemoveCategoryButton.js';

import { access_right } from './../../../../../../helpers/access_right.js';

const OneCategoryComponent = ( props ) => {

    let {
        id,
        name,
        prefix,
        colorText,
        colorBG,

        categoryList,

        setCategoryesIsChanged,
        setCategoryList,

    } = props;

    let [ nameValue, setNameValue ] = useState( name );
    let [ prefixValue, setPrefixValue ] = useState( prefix );
    let [ colorTextValue, setColorTextValue ] = useState( colorText );
    let [ colorBGValue, setColorBGValue] = useState( colorBG );

    useEffect( () => {
        setNameValue( name );
        setPrefixValue( prefix );
        setColorTextValue( colorText );
        setColorBGValue( colorBG );
    }, [
        id,
        name,
        prefix,
        colorText,
        colorBG,
    ] );

    const set_changes_to_store = () => {
        access_right( 'layout_category_edit', () => {
            let newArr = [];

            for( let i = 0; i < categoryList.length; i++ ){

                if( categoryList[ i ].id === id ){
                    let item = { ...categoryList[ i ] };
                    item.name = nameValue;
                    item.prefix = prefixValue;
                    item.colorText = colorTextValue;
                    item.colorBG = colorBGValue;
                    newArr.push( item );
                }else{
                    newArr.push({ ...categoryList[ i ] });
                };

            };

            setCategoryList( newArr ); 
        } );


        
    }

    const change_prefix = ( e ) => {

        access_right( 'layout_category_edit', () => {
            let val = e.target.value;
            setPrefixValue( val );
            setCategoryesIsChanged( true );
        } );

    }

    const change_name = ( e ) => {
        access_right( 'layout_category_edit', () => {
            let val = e.target.value;
            setNameValue( val );
            setCategoryesIsChanged( true );
        } );
        
    }

    const change_colorText = ( e ) => {
        access_right( 'layout_category_edit', () => {
            let val = e.target.value;
            setColorTextValue( val );
            setCategoryesIsChanged( true );
        } );
        
    }
    const change_colorBG = ( e ) => {
        access_right( 'layout_category_edit', () => {
           let val = e.target.value;
            setColorBGValue( val );
            setCategoryesIsChanged( true ); 
        } );
        
    }

    const enter = ( e ) => {
        if( e.which === 13 ){
            set_changes_to_store();
        };
    };

    const blur = ( e ) => {
        set_changes_to_store();
    }

    return (

        <div className = 'LC_OneCategory' >

            <div className = 'LC_OneCategory_wrap'>
                <input 
                    type =      'text'
                    className = 'LC_OneCategory_prefix'
                    value =     { prefixValue }
                    maxLength = { 255 }
                    onChange =  { change_prefix }
                    onKeyDown = { enter }
                    onBlur =    { blur }
                />

                <input 
                    type =      'text'
                    style = { {
                        color: colorTextValue,
                        backgroundColor: colorBGValue,

                    } }
                    className = 'LC_OneCategory_name'
                    value =     { nameValue }
                    maxLength = { 255 }
                    onChange =  { change_name }
                    onKeyDown = { enter }
                    onBlur =    { blur }
                />

                <div className = 'LC_OneCategory_color'>
                    <span>Текст</span>
                    <input 
                        type =      'color'
                        value =     { colorTextValue }
                        onChange =  { change_colorText }
                        onBlur =    { blur }
                    />
                </div>

                <div className = 'LC_OneCategory_color'>
                    <span>Фон</span>
                    <input 
                        type =      'color'
                        value =     { colorBGValue }
                        onChange =  { change_colorBG }
                        onBlur =    { blur }
                    />
                </div>

                <div className = 'LC_OneCategory_control'>

                    { access_right( 'layout_category_remove' )? (
                        <RemoveCategoryButton
                            categoryId = { id }
                        />
                    ): '' }

                    

                </div>

            </div>

        </div>

    )

};

export function OneCategory( props ){

    const layout = useSelector( layoutSlice );

    const dispatch = useDispatch();

    return (
        <OneCategoryComponent
            { ...props }
            categoryList = { layout.categoryList }
            categoryesIsChanged = { layout.categoryesIsChanged }


            setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


            setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
