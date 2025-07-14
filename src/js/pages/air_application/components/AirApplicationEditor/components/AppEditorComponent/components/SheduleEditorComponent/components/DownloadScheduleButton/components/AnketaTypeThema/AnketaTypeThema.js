

import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AnketaTypeThema.scss';

// import { selectorData as applicationSlice  } from './../../../../../../../../../../../../redux/applicationSlice.js';

const AnketaTypeThemaComponent = ( props ) => {

    let {
        

    } = props;




    return (
        <div  className = 'SEC_AnketaTypeThema'>
            AnketaTypeThema

        </div>
    )

};

export function AnketaTypeThema( props ){

    // const application = useSelector( applicationSlice );

    // const dispatch = useDispatch();

    return (
        <AnketaTypeThemaComponent
            { ...props }

            // currentApplicationId = { application.currentApplicationId }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
