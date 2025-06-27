// ItemReportInDetail


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubReportInDetail.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';


const ItemSubReportInDetailComponent = ( props ) => {

    let {
        id,
        application_id,
        
    } = props;

    const click = () => {
        alert('click');
    }


    
    
    return (
        <div className = 'SA_ItemSubReportInDetail'>

            <span 
                className = 'SA_ItemSubReportInDetail_btn'
                onClick = { click }
            >Отчёт</span>
           

        </div>
    )

};

export function ItemSubReportInDetail( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubReportInDetailComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
