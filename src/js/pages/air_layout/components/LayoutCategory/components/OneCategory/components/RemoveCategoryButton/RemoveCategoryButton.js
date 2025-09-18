
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemoveCategoryButton.scss';

import { selectorData as layoutSlice, setCategoryesIsChanged, setCategoryList } from './../../../../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../../../redux/spinnerSlice.js';
import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWConfirm } from './../../../../../../../../components/AlertWindowContainer/AWConfirm/AWConfirm.js';

// import { AWRemoveConfirmComponent } from './../../../../../../../../components/AlertWindowContainer/AWRemoveConfirmComponent/AWRemoveConfirmComponent.js';


import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

const RemoveCategoryButtonComponent = ( props ) => {

    let {
        categoryId,
        categoryesIsChanged,
        eventList,
        categoryListById,

        setSpinnerIsActive,
        setCategoryList,
        setCategoryesIsChanged,


    } = props;

    let [ isOpen, setIsOpen] = useState( false );
    let [ categoryName, setCategoryName ] = useState( '' );
    let [ eventsNames, setEventsNames ] = useState( [] );

    useEffect( () => {
        if( categoryListById[ categoryId ] ){
            setCategoryName( categoryListById[ categoryId ].name );
        }else{
            setCategoryName( '' );
            
        };
    }, [ categoryId, categoryListById ] );

    useEffect( () => {
        if( isOpen ){
            let arr = [];
            for( let i = 0; i < eventList.length; i++ ){
                if( eventList[ i ].category_id === categoryId ){
                    arr.push( eventList[ i ].name );
                };
            };
            setEventsNames( arr );


        }else{
            setEventsNames( [] );
        };

    }, [ isOpen ] );


    const click = () => {
        setIsOpen( true )
    }

    const remove_category = () => {
        setIsOpen( false );

        setSpinnerIsActive( true );

        send_request_to_server({
            route: 'remove-category',
            data: {
                categoryId,
            },
            successCallback: ( response ) => {
                // console.dir( 'response' );
                // console.dir( response );

                if( response.ok ){
                    setSpinnerIsActive( false );
                    setCategoryList( response.list );
                    setCategoryesIsChanged( false );
                    setIsOpen( false );
                };
            }
        });

    }

    const createEventsNames = ( arr ) => {
        let str = '';
        for( let i = 0; i < arr.length; i++ ){
            if( arr[ i + 1 ]){
                str = `${str} "${arr[i]}",`;
            }else{
                str = `${str} "${arr[i]}"`;
            };
        }
        return str;

    }


    return (
        <>
            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                width = '25em'
                height = '15em'
            >
                <AWConfirm
                    type =              'warning'
                    continueHandler =   { remove_category }
                    cancelHandler =     { () => { setIsOpen( false ) } }
                    titleContinue =     { eventsNames.length > 0? null: 'Удалить' }
                >
                    <>{ eventsNames.length > 0? (<>
                        <p>К категории "{categoryName}" привязаны события: { createEventsNames( eventsNames ) }</p>
                        
                        <p>Для удаления категории, необходимо отвязать все эти события</p>
                    </>): <p>Пожалуйста, подтвердите удаление категории "{categoryName}"</p>}</>

                </AWConfirm>

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
            // categoryList = { layout.categoryList }
            categoryListById = { layout.categoryListById }
            eventList = { layout.eventList }


            categoryesIsChanged = { layout.categoryesIsChanged }


            setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }
            setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
