
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

        let title_ = '';
        let className = '';
        let classNameIcon = '';

        if( val ){
            title_ = 'Есть';
            className = 'SA_YesOrNoTitle_yes';
            classNameIcon = 'icon-ok-3 icon'
        }else{
            title_ = 'Нет';
            className = 'SA_YesOrNoTitle_no';
            classNameIcon = 'icon'
        };

        return (
            <span className = 'SA_YesOrNoTitle_title'>
                <span className = { classNameIcon }></span>
                <span className = { className }>{ title_ }</span>
            </span>
        );

    }

    return (
        <h3 className = { `SA_YesOrNoTitle ${ booleanValue? 'isYes': ''}` }><span className = 'titleText'  >{ title }</span>: { getTitle( booleanValue ) }</h3>

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
