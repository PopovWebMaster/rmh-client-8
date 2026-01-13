
import React, { useRef, useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutBodyCenterArea.scss';

import { UpdateOneDayGridList } from './../UpdateOneDayGridList/UpdateOneDayGridList';
import { set_max_height_em_for_empty_time_segment } from './vendors/set_max_height_em_for_empty_time_segment.js';

import { ListBySectors } from './../ListBySectors/ListBySectors.js';
import { SetCountersDataFromLayout } from './../../../../../../components/PageBodyCounters/SetCountersDataFromLayout.js';

import { ScrollContainer } from './../../../../../../components/ScrollContainer/ScrollContainer.js';

import { LBCA_ScrollButtons } from './LBCA_ScrollButtons/LBCA_ScrollButtons.js';


const LayoutBodyCenterAreaComponent = ( props ) => {

    let {

    } = props;

    let refEd = useRef();

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        set_max_height_em_for_empty_time_segment( refEd.current.parentElement );
        setIsReady( true );
    }, [] );

    
    return (
        <div 
            className = 'layoutBodyCenterArea'
            ref = { refEd }
        >
            <LBCA_ScrollButtons />
            
            <ScrollContainer>
                { isReady? (
                    <UpdateOneDayGridList>
                        <SetCountersDataFromLayout>
                            <ListBySectors />
                        </SetCountersDataFromLayout>
                    </UpdateOneDayGridList>
                ): '' }

            </ScrollContainer>
                
        </div>
    )

};

export function LayoutBodyCenterArea( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutBodyCenterAreaComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
