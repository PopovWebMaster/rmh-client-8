
import React, { useRef, useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutBodyRightArea.scss';
import { TopButtons } from './components/TopButtons/TopButtons.js';
import { EventsDragList } from './components/EventsDragList/EventsDragList.js';
import { FreeReleaseDrag } from './components/FreeReleaseDrag/FreeReleaseDrag.js';



const LayoutBodyRightAreaComponent = ( props ) => {

    let {

    } = props;

    let [ activeTab, setActiveTab ] = useState( 'events' ); // 'free_release' 'events'

    const create = ( val ) => {
        let result = '';

        switch( val ){

            case 'events':
                result = <EventsDragList />

                break;

            case 'free_release':
                result = <FreeReleaseDrag />
                break;
        };

        return result;

    }

    return (
        <div className = 'layoutBodyRightArea'>

            <TopButtons
                activeTab =     { activeTab }
                setActiveTab =  { setActiveTab }
            />

            { create( activeTab ) }
           
        </div>
    )

};

export function LayoutBodyRightArea( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutBodyRightAreaComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
