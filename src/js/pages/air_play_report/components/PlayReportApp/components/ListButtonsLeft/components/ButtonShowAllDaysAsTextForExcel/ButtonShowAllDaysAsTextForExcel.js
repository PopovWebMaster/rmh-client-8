// ButtonShowAllDaysAsTextForExcel


import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './ButtonShowAllDaysAsTextForExcel.scss';

import { ButtonLeft } from './../ButtonLeft/ButtonLeft.js';

import { ShowAsTextComponent } from './../ShowAsTextComponent/ShowAsTextComponent.js';


import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { get_content_as_table_from_list } from './../../../../vendors/get_content_as_table_from_list.js';


const ButtonShowAllDaysAsTextForExcelComponent = ( props ) => {

    let {
        filteredList,
        entireList,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ content, setContent ] = useState( '' );

    const click = () => {

        let content_txt = get_content_as_table_from_list( { list: entireList }  );

        setContent( content_txt );
        setIsOpen( true );

    };

    
    return (
        <div className = 'PRL_ButtonShowAllDaysAsTextForExcel'>
            

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
                // text = { <>Показать <span className = 'PRL_ButtonLeft_textSecond'>ВСЕ ДНИ</span> как текст</> }
                text = { <>Показать текст <span className = 'PRL_ButtonLeft_textSecond'>ВСЕ ДНИ</span></> }

                click = { click }
            />
        </div>
    )

};

export function ButtonShowAllDaysAsTextForExcel( props ){

    const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <ButtonShowAllDaysAsTextForExcelComponent
            { ...props }
            filteredList = { playReport.filteredList }
            playReport = { playReport }
            entireList = { playReport.entireList }


            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

