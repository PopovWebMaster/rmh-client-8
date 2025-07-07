// CharTable


import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CharTable.scss';


import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../../../redux/companySlice.js';


import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';



const CharTableComponent = ( props ) => {

    let {
        dayList,

    } = props;

    console.dir( 'dayList' );
    console.dir( dayList );




    return (
       <ScrollContainer>
            <div className = 'SEC_body_center_wrap'>

                
            </div>
        </ScrollContainer>
    )

};

export function CharTable( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <CharTableComponent
            { ...props }

            currentApplicationId = { application.currentApplicationId }
            application = { application }

            currentCompanyAlias = { company.currentCompanyAlias }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


            setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
