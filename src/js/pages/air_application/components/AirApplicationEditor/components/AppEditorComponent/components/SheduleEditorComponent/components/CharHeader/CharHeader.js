//
import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CharHeader.scss';


import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../../../redux/companySlice.js';

import { CHAR_TYPE } from './../../../../../../../../../../config/application.js';


const CharHeaderComponent = ( props ) => {

    let {
        charType,
        releareCount,
        releareName,
        category,
        event, 


    } = props;

    const getCharTitle = ( type  ) => {
        let result = 'Слепой график'

        if( type === CHAR_TYPE.BLOCK ){
            result = `${event.name}`
        }else if( type === CHAR_TYPE.FILE ){
            result = `${event.name}`
        };
        return result;
        

    }
    const getStyle = ( type ) => {
        let result = {
            backgroundColor: '#fff2e4',
            color: '#e76969',
            borderColor: '#dfdfdf',
        };

        if( type === CHAR_TYPE.BLOCK ){
            result.backgroundColor = '#00000000';
            result.borderColor = category.colorBg;
            result.color = category.colorBg;
        }else if( type === CHAR_TYPE.FILE ){
            result.backgroundColor = category.colorBg;
            result.borderColor = category.colorBg;
            result.color = category.colorText;
        };

        return result;

    }



    return (

        <div className = 'SEC_header'>

            <div className = 'SEC_header_col'>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title'>Выпуск:</span>
                    <span className = 'SEC_row_name'>{ releareName }</span>
                </h2>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title'>График:</span>
                    <span 
                        className = 'SEC_row_name'
                        style = { getStyle( charType ) }
                    >{ getCharTitle( charType ) }</span>
                </h2>
            </div>
            

        </div>

               
    )

};

export function CharHeader( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <CharHeaderComponent
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
