
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


// import './SetDataFromHtmlMeta.scss';

import { 
    selectorData as commonSlice,
    setPage,
    setCompanyAlias,
    setCompanyName,
    setCompanyType,
    setCompanyProgramSystem,
    setCompanyList,

} from './../../redux/commonSlice.js';

const SetDataFromHtmlMetaComponent = ( props ) => {

    let {
        children,

        setPage,
        setCompanyAlias,
        setCompanyName,
        setCompanyType,
        setCompanyProgramSystem,
        setCompanyList,

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

        if( isError ){

        }else{
            setPage( page );
            setCompanyAlias( companyAlias );
            setCompanyName( companyName );
            setCompanyType( companyType );

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
            setPage =                   { ( val ) => { dispatch( setPage( val ) ) } }
            setCompanyAlias =           { ( val ) => { dispatch( setCompanyAlias( val ) ) } }
            setCompanyName =            { ( val ) => { dispatch( setCompanyName( val ) ) } }
            setCompanyType =            { ( val ) => { dispatch( setCompanyType( val ) ) } }
            setCompanyProgramSystem =   { ( val ) => { dispatch( setCompanyProgramSystem( val ) ) } }
            setCompanyList =            { ( val ) => { dispatch( setCompanyList( val ) ) } }


        />
    );


}
