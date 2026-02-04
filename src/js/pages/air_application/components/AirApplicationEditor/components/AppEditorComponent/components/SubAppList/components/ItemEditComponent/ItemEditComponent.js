
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemEditComponent.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

const ItemEditComponentComponent = ( props ) => {

    let {
        children,

        buttonType = 'by_edit_button', // or 'by_body'

        width = '40em',
        height = '40vh',

        
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const clickBody = ( e ) => {
        if( e.target.className === 'SA_ItemEditComponent SA_byBody' ){
            setIsOpen( true )
        };
    }

    const clickBtn = () => {
        setIsOpen( true )
    }

    return (
        <div 
            className = { `SA_ItemEditComponent ${buttonType === 'by_body'? 'SA_byBody': ''}`  }
            onClick = { clickBody }
        >

            { buttonType === 'by_edit_button'? (
                <span 
                    className = 'icon-edit'
                    onClick = { clickBtn }
                ></span>
            ): '' }
            

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     { width }
                height =    { height }
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
