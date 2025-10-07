
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './YesOrNoTitle.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';


const YesOrNoTitleComponent = ( props ) => {

    let {
        title,
        booleanValue,
        
    } = props;



    const getTitle = ( val ) => {

        let title = '';
        let className = '';
        let classNameIcon = '';

        if( val ){
            title = 'Есть';
            className = 'SA_YesOrNoTitle_yes';
            classNameIcon = 'icon-ok-3 icon'
        }else{
            title = 'Нет';
            className = 'SA_YesOrNoTitle_no';
            classNameIcon = 'icon'
        };

        return (
            <span className = 'SA_YesOrNoTitle_title'>
                <span className = { classNameIcon }></span>
                <span className = { className }>{ title }</span>
            </span>
        );

    }

    return (
        <h3 className = 'SA_YesOrNoTitle'>{ title }: { getTitle( booleanValue ) }</h3>

    )

};

export function YesOrNoTitle( props ){

    // const application = useSelector( applicationSlice );
    // const dispatch = useDispatch();

    return (
        <YesOrNoTitleComponent
            { ...props }
            // currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
