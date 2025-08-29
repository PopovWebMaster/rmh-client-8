
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemEditContainer.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


const ItemEditContainerComponent = ( props ) => {

    let {
        children,

        closeHandler = () => {},

        openHandler = () => {},
        // closeHandler = () => {},
        
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    useEffect( () => {
        if( isOpen === false ){
            closeHandler();
        }else{
            openHandler();
        };

    }, [ isOpen ] );


    
    return (
        <div className = 'ACE_ItemEditComponent'>
            <span 
                className = 'icon-edit'
                onClick = { () => { setIsOpen( true ) } }
            ></span>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     { '40em' }
                height =    { '40em' }
            >
                <>{ children }</>
            </AlertWindowContainer>
        </div>
    )

};

export function ItemEditContainer( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemEditContainerComponent
            { ...props }
            // currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
