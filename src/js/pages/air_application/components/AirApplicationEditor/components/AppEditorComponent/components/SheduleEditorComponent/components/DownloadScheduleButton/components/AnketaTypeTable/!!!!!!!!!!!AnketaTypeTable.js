

import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AnketaTypeTable.scss';

// import { selectorData as applicationSlice  } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AWTextarea } from './../../../../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';

const AnketaTypeTableComponent = ( props ) => {

    let {
        tableHeader,
        setTableHeader,

    } = props;

    


    return (
        <div  className = 'SEC_AnketaTypeTable'>
            

        </div>
    )

};

export function AnketaTypeTable( props ){

    // const application = useSelector( applicationSlice );

    // const dispatch = useDispatch();

    return (
        <AnketaTypeTableComponent
            { ...props }

            // currentApplicationId = { application.currentApplicationId }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
