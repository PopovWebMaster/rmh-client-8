
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


// import './SetDataFromHtmlMeta.scss';

import { selectorData as commonSlice, setCurrentPage, setToken } from './../../redux/commonSlice.js';
import {
    selectorData as companySlice,
    setCurrentCompanyAlias,
    setCurrentCompanyName,
    setCompanyList,
    setCurrentCompanyType,
    setCompanyProgramSystem,
    

} from './../../redux/companySlice.js';

const SetDataFromHtmlMetaComponent = ( props ) => {

    let {
        children,
        setCurrentPage,
        setCurrentCompanyAlias,
        setCurrentCompanyName,
        setCurrentCompanyType,
        setToken,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect(() => {
        let isError = false;

        let companyAlias = '';
        let companyName = '';
        let companyType = '';
        let page = '';

        if( document.querySelector('meta[name="company-alias"]') ){
            companyAlias = document.querySelector('meta[name="company-alias"]').content;
        }else{
            console.error( 'В meta нет "company-alias"' );
            isError = true;
        };

        if( document.querySelector('meta[name="company-name"]') ){
            companyName = document.querySelector('meta[name="company-name"]').content;
        }else{
            console.error( 'В meta нет "company-name"' );
            isError = true;
        };

        if( document.querySelector('meta[name="company-type"]') ){
            companyType = document.querySelector('meta[name="company-type"]').content;
        }else{
            console.error( 'В meta нет "company-type"' );
            isError = true;
        };

        if( document.querySelector('meta[name="page"]') ){
            page = document.querySelector('meta[name="page"]').content;
        }else{
            console.error( 'В meta нет "page"' );
            isError = true;
        };

        if( document.querySelector('meta[name="csrf-token"]') ){
            token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            setToken( token );
        };

        

        if( isError ){

        }else{
            setCurrentPage( page );

            setCurrentCompanyAlias( companyAlias );
            setCurrentCompanyName( companyName );
            setCurrentCompanyType( companyType );

            setIsReady( true );

        };


    }, [])



    return (<>{ isReady? children: '' }</>)

};


export function SetDataFromHtmlMeta( props ){

    // const userInfo = useSelector( userInfoSlice );
    const dispatch = useDispatch();

    return (
        <SetDataFromHtmlMetaComponent
            { ...props }
            // userInfo = { userInfo }
            setCurrentPage =          { ( val ) => { dispatch( setCurrentPage( val ) ) } }
            setCurrentCompanyAlias =  { ( val ) => { dispatch( setCurrentCompanyAlias( val ) ) } }
            setCurrentCompanyName =   { ( val ) => { dispatch( setCurrentCompanyName( val ) ) } }
            setCurrentCompanyType =   { ( val ) => { dispatch( setCurrentCompanyType( val ) ) } }
            setCompanyProgramSystem = { ( val ) => { dispatch( setCompanyProgramSystem( val ) ) } }
            setCompanyList =          { ( val ) => { dispatch( setCompanyList( val ) ) } }
            setToken =          { ( val ) => { dispatch( setToken( val ) ) } }


            



        />
    );


}
