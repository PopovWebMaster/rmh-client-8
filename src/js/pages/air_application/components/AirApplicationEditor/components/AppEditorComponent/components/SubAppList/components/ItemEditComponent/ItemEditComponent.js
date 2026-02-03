
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemEditComponent.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

const ItemEditComponentComponent = ( props ) => {

    let {
        children
        
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    return (
        <div className = 'SA_ItemEditComponent'>
            <span 
                className = 'icon-edit'
                onClick = { () => { setIsOpen( true ) } }
            ></span>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     { '40em' }
                height =    { '60em' }
            >
                <>{ children }</>

            </AlertWindowContainer>
        </div>
    )

};

export function ItemEditComponent( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemEditComponentComponent
            { ...props }
            // currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
