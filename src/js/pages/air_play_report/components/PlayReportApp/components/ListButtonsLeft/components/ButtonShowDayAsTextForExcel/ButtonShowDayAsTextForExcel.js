
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './ButtonShowDayAsTextForExcel.scss';

import { ButtonLeft } from './../ButtonLeft/ButtonLeft.js';

import { ShowAsTextComponent } from './../ShowAsTextComponent/ShowAsTextComponent.js';


import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { get_content_as_table_from_list } from './../../../../vendors/get_content_as_table_from_list.js';


const ButtonShowDayAsTextForExcelComponent = ( props ) => {

    let {
        filteredList,
        dateListSelected,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ content, setContent ] = useState( '' );

    const click = () => {

        let content_txt = get_content_as_table_from_list( { list: filteredList }  );

        setContent( content_txt );
        setIsOpen( true );

    };

    
    return (
        <div className = 'PRL_ButtonShowAllAsTextForExcel'>
            

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                title =     'Текст для вставки в Excel'
                width =     '95vw'
                height =    '95vh'
            >
                <ShowAsTextComponent
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }
                    content = { content }
                    setContent = { setContent }

                />

            </AlertWindowContainer>

            <ButtonLeft 
                icon = 'icon-eye-4'
                text = { <>Показать текст <span className = 'PRL_ButtonLeft_textSecond'>ЭТОТ ДЕНЬ</span></> }
                click = { click }
            />
        </div>
    )

};

export function ButtonShowDayAsTextForExcel( props ){

    const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <ButtonShowDayAsTextForExcelComponent
            { ...props }
            filteredList = { playReport.filteredList }
            dateListSelected = { playReport.dateListSelected }

            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

