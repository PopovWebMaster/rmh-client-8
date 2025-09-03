
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './UserCompanyEdit.scss';

import { selectorData as adminSlice } from './../../../../../../../../../../../../redux/adminSlice.js';

import { ScrollContainer } from './../../../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';

const UserCompanyEditComponent = ( props ) => {

    let {
        userCompanyList,
        setUserCompanyList,
        companies,
        currentCompanyAlias,
    } = props;

    const click = ( alias ) => {
        if( alias === currentCompanyAlias ){

        }else{
            if( userCompanyList.indexOf( alias ) === -1 ){
                setUserCompanyList( [ ...userCompanyList, alias ] );

            }else{
                let arr = [];
                for( let i = 0; i < userCompanyList.length; i++ ){
                    if( userCompanyList[ i ] === alias ){

                    }else{
                        arr.push( userCompanyList[ i ] );
                    };
                };
                setUserCompanyList( arr );
            }
        };

    };

    const create = ( company_list, user_list ) => {
        let div = company_list.map( ( item, index ) => {
            let { company_alias, company_name, company_type } = item;

            let chackStatus = user_list.indexOf( company_alias ) === -1? false: true;
            let isNative = currentCompanyAlias === company_alias;

            return (
                <div
                    className = 'compamy_item'
                    key = { index }
                >

                    <div
                        className = { `compamy_item_chak ${isNative? 'isNative': ''}` }
                        onClick = { () => { click( company_alias ) } } 
                    >
                        { chackStatus? (<span className = 'icon-ok-3 icon'></span>): '' }
                        
                    </div>

                    <div className = 'compamy_item_isNative'>
                        { isNative? <span>native</span>: '' }
                    </div>

                    <div className = 'compamy_item_name'>
                        <span>{ company_name }</span>
                    </div>

                    

                    <div className = 'compamy_item_type'>
                        <span>{ company_type }</span>
                    </div>

                </div>
            );

        } );

        return div;

    }

    return (
        <div className = 'ACE_UserCompanyEdit'>

            <ScrollContainer>

                { create( companies, userCompanyList ) }

            </ScrollContainer>

        </div>
    )

};

export function UserCompanyEdit( props ){

    const admin = useSelector( adminSlice );
    // const dispatch = useDispatch();

    return (
        <UserCompanyEditComponent
            { ...props }
            companies = { admin.companies }
            currentCompanyAlias = { admin.currentCompanyAlias }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
