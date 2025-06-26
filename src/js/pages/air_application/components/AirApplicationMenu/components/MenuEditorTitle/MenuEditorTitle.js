
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './MenuEditorTitle.scss';

import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';
import { selectorData as applicationSlice } from './../../../../../../redux/applicationSlice.js';


const MenuEditorTitleComponent = ( props ) => {

    let {
        currentApplicationId,
        applicationById,

    } = props;
    let [ appName, setAppName ] = useState( '' );

    useEffect( () => {
        if( currentApplicationId === null ){
            setAppName( '' );
        }else{
            if( applicationById[ currentApplicationId ] ){
                let name = applicationById[ currentApplicationId ].name;
                setAppName( name );
            }else{
                setAppName( '' );
            };
        };

    }, [currentApplicationId] );

    return (<>
        { currentApplicationId === null? '': (
            <div className = 'AM_MenuEditorTitle'>
                <span className = 'icon icon-edit'></span>
                <span className = 'title'>{ appName }</span>
            </div>
        ) }
    </>)

};

export function MenuEditorTitle( props ){

    const company = useSelector( companySlice );
    const application = useSelector( applicationSlice );


    // const dispatch = useDispatch();

    return (
        <MenuEditorTitleComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            currentApplicationId = { application.currentApplicationId }
            applicationById = { application.applicationById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
