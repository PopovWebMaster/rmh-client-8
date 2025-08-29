
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AccessRightEdit.scss';

import { selectorData as adminSlice } from './../../../../../../../../../../../../redux/adminSlice.js';

import { ScrollContainer } from './../../../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';

const AccessRightEditComponent = ( props ) => {

    let {

        allList,
        userList,
        setUserList,


        userId,
        userCompanyList,
        setUserCompanyList,
        admin,
        companies,
        currentCompanyAlias,
    } = props;

    console.dir( 'admin' );
    console.dir( admin );

    // const click = ( alias ) => {
    //     if( alias === currentCompanyAlias ){

    //     }else{
    //         if( userCompanyList.indexOf( alias ) === -1 ){
    //             setUserCompanyList( [ ...userCompanyList, alias ] );

    //         }else{
    //             let arr = [];
    //             for( let i = 0; i < userCompanyList.length; i++ ){
    //                 if( userCompanyList[ i ] === alias ){

    //                 }else{
    //                     arr.push( userCompanyList[ i ] );
    //                 };

    //             };
    //             setUserCompanyList( arr );
    //         }
    //     };


    // };

    const click = ( val ) => {

        if( userList.indexOf( val ) === -1 ){
            setUserList( [ ...userList, val ] );
        }else{
            let arr = [];
            for( let i = 0; i < userList.length; i++ ){
                if( userList[ i ] === val ){

                }else{
                    arr.push( userList[ i ] );
                };

            };
            setUserList( arr );
        };

    };

    let getTitle = ( str ) => {
        return str.replaceAll( '_', ' ' );
    };

    const create = ( all_list, user_list ) => {

        let div = all_list.map( ( item, index ) => {
            
            let chackStatus = user_list.indexOf( item ) === -1? false: true;

            return (
                <div
                    className = 'access_item'
                    key = { index }
                >

                    <div
                        className = 'access_item_chak'
                        onClick = { () => { click( item ) } } 
                    >
                        { chackStatus? (<span className = 'icon-ok-3 icon'></span>): '' }
                        
                    </div>

                    <div className = 'access_item_name'>
                        <span>{ getTitle( item ) }</span>
                    </div>

                </div>
            );

        } );

        return div;

    }



    return (
        <div className = 'ACE_AccessRightEdit'>

            <ScrollContainer>

                { create( allList, userList ) }



            </ScrollContainer>

          

        </div>
    )

};

export function AccessRightEdit( props ){

    const admin = useSelector( adminSlice );
    
    // const dispatch = useDispatch();

    return (
        <AccessRightEditComponent
            { ...props }
            admin = { admin }
            companies = { admin.companies }
            currentCompanyAlias = { admin.currentCompanyAlias }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
