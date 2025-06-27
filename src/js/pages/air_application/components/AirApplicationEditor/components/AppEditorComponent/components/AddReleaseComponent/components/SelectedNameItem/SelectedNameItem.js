
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SelectedNameItem.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
// import { selectorData as layoutSlice }      from './../../../../../../../../../../redux/layoutSlice.js';


const SelectedNameItemComponent = ( props ) => {

    let {
        releaseName,

    } = props;

    let [ value, setValue ] = useState( releaseName );

    useEffect( () => {
        setValue( releaseName );

    }, [ releaseName ] );

    const change = ( e  ) => {
        let val = e.target.value;
        setValue( val );
    }



    return (
        <div className = 'ARC_item_name'>
            <h3>Название выпуска:</h3>

            <input 
                type = 'text'
                value = { value }
                onChange = { change }
            
            />
            

        </div>

    )

};

export function SelectedNameItem( props ){

    // const application = useSelector( applicationSlice );
    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <SelectedNameItemComponent
            { ...props }
            // currentAppCategoryId =  { application.currentAppCategoryId }
            // categoryListById =    { layout.categoryListById }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
