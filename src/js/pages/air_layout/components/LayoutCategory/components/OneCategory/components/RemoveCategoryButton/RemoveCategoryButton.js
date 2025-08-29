
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemoveCategoryButton.scss';

import { selectorData as layoutSlice, setCategoryesIsChanged, setCategoryList } from './../../../../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../../../redux/spinnerSlice.js';
import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWRemoveConfirmComponent } from './../../../../../../../../components/AlertWindowContainer/AWRemoveConfirmComponent/AWRemoveConfirmComponent.js';


import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

const RemoveCategoryButtonComponent = ( props ) => {

    let {
        categoryId,
        // id,
        // name,
        // prefix,
        // colorText,
        // colorBG,

        // categoryList,

        // setCategoryesIsChanged,
        // setCategoryList,
        // setSpinnerIsActive,

    } = props;

    let [ isOpen, setIsOpen] = useState( false );




    // const remove_category = () => {
    //     setIsOpen( false );

    //     setSpinnerIsActive( true );

    //     send_request_to_server({
    //         route: 'remove-category',
    //         data: {
    //             categoryId: id,
    //         },
    //         successCallback: ( response ) => {
    //             console.dir( 'response' );
    //             console.dir( response );

    //             if( response.ok ){
    //                 setSpinnerIsActive( false );
    //                 setCategoryList( response.list );
    //                 setCategoryesIsChanged( false );
    //                 setIsOpen( false );
    //             };
    //         }
    //     });

    // }


    const click = () => {
        setIsOpen( true )
    }


    return (
        <>
            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                width = '25em'
                height = '10em'
            >
                <>{ categoryId }</>
            </AlertWindowContainer>

            <div 
                className = 'LC_OneCategory_canel'
                onClick = { click }
            >
                <span className = 'icon-cancel-2'></span>
            </div>

        </>

    )

};

export function RemoveCategoryButton( props ){

    const layout = useSelector( layoutSlice );

    const dispatch = useDispatch();

    return (
        <RemoveCategoryButtonComponent
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
