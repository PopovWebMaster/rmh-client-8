
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as companySlice } from './../../../../redux/companySlice.js';
// import { ProgramSystemName } from './components/ProgramSystemName/ProgramSystemName.js';

import './LogsByProgramSystem.scss';

import { COMPANY_PROGRAM_SYSTEM } from './../../../../config/company.js';

import { LogsForwardTA } from './../LogsForwardTA/LogsForwardTA.js';
// import { PageNoCreatedInfo } from './components/PageNoCreatedInfo/PageNoCreatedInfo.js';

import { InfoContainer } from './../../../../components/InfoContainer/InfoContainer.js';

const LogsByProgramSystemComponent = ( props ) => {

    let {
        companyProgramSystem,
    } = props;

    const selectComponent = ( system ) => {

        switch( system ){
            case COMPANY_PROGRAM_SYSTEM.FORWARD_TA:
                return <LogsForwardTA />

            default:
                return (
                    <InfoContainer margin = {'2em 0'}>
                        <p>Возможность использовать логи от <span style = {{ fontWeight: 'bold'}}>"{ companyProgramSystem }"</span> ещё находится на стадии разработки.</p>
                        <p>Приносим свои извинения.</p>
                    </InfoContainer>
                );
        };

    }
    
    return (
        <div className = 'logsByProgramSystem'>
            {/* <ProgramSystemName /> */}

            <div className = 'programSystemName'>
                <span>{ companyProgramSystem }</span>
            </div>

            { selectComponent( companyProgramSystem ) }

        </div>
    )

};

export function LogsByProgramSystem( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LogsByProgramSystemComponent
            { ...props }
            companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
