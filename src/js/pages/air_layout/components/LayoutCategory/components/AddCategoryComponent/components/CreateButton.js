
import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice, setCategoryList } from './../../../../../../../redux/layoutSlice.js';
// import { selectorData as navigationSlice }              from './../../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../../../helpers/send_request_to_server.js';
import { check_category_name_for_uniq } from './../vendors/check_category_name_for_uniq.js';

const CreateButtonComponent = ( props ) => {

    let {
        name,
        prefix,
        colorText,
        colorBG,
        setIsOpen,

        // currentPage,
        setSpinnerIsActive,
        setCategoryList,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        let name_is_ready = nameIsReady( name );

        if( name_is_ready ){
            setIsReady( true );
        }else{
            setIsReady( false );
        };


    }, [ name, prefix ] );

    const nameIsReady = ( val ) => {
        let result = false;

        if( val.trim() !== '' ){
            if( check_category_name_for_uniq( val ) ){
                result = true;
            };
        };

        return result;
    }

    const create = () => {
        
        if( isReady ){
            setSpinnerIsActive( true );

            send_request_to_server({
                route: 'add-new-category',
                data: {
                    categoryName:       name.trim(),
                    categoryPrefix:     prefix.trim(),
                    categoryColorText:  colorText,
                    categoryColorBG:    colorBG,
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );
                    if( response.ok ){
                        setSpinnerIsActive( false );
                        setCategoryList( response.list );
                        setIsOpen( false );
                    };
                }
            });

        };
    }



    return (
        <div className = 'LCACC_item'>
            <div className = 'LCACC_create'>
                <span 
                    className = { isReady? 'icon-plus LCACC_create_isActive': 'icon-plus' }
                    onClick = { create }
                ><span>Добавить</span></span>

            </div>
        </div>
    )

};

export function CreateButton( props ){

    const layout = useSelector( layoutSlice );
    // const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <CreateButtonComponent
            { ...props }
            categoryesIsChanged =   { layout.categoryesIsChanged }
            // currentPage =           { navigation.currentPage }

            setCategoryList =       { ( val ) => { dispatch( setCategoryList( val ) ) } }
            setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
