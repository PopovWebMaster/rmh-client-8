
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveCategoryChanges.scss';

import { selectorData as layoutSlice, setCategoryesIsChanged, setCategoryList } from './../../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { PageBodySaveButton } from './../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';


const SaveCategoryChangesComponent = ( props ) => {

    let {
        categoryesIsChanged,
        categoryList,
        setCategoryList,
        setCategoryesIsChanged,
        setSpinnerIsActive,

    } = props;

    useEffect(() => {
        if( categoryesIsChanged ){
            window.onbeforeunload = ( ev ) => {
                ev.preventDefault();
                ev.returnValue = 'Are you sure you want to close?';
                // return 
            };
        }else{
            window.onbeforeunload = null
        };
    }, [ categoryesIsChanged ]);


    const click = () => {
        
        if( categoryesIsChanged ){

            setSpinnerIsActive( true );

            console.dir( 'categoryList' );
            console.dir( categoryList );


            send_request_to_server({
                route: 'save-category-list',
                data: {
                    list: categoryList,
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );
                    if( response.ok ){
                        setSpinnerIsActive( false );
                        setCategoryesIsChanged( false );
                        setCategoryList( response.list )
                    };
                },
            });

        };

    }
    
    return (
        <PageBodySaveButton 
            isChanged = { categoryesIsChanged }
            clickHandler = { click }
        />
    )

};

export function SaveCategoryChanges( props ){

    const layout = useSelector( layoutSlice );
    // const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <SaveCategoryChangesComponent
            { ...props }
            categoryesIsChanged = { layout.categoryesIsChanged }

            // currentPage = { navigation.currentPage }
            categoryList = { layout.categoryList }

            setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }
            setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
