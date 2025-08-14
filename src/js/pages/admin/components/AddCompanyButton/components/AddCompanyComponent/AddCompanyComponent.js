
import React, { useState, useEffect } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddCompanyComponent.scss';

import { selectorData as adminSlice, setCompanies } from './../../../../../../redux/adminSlice.js';
import { setSpinnerIsActive} from './../../../../../../redux/spinnerSlice.js';


import { AWButtonAdd } from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';
import { AWInputText } from './../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWShowErrors } from './../../../../../../components/AlertWindowContainer/AWShowErrors/AWShowErrors.js';
 
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

const AddCompanyComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        defaultProgramSystem,
        defaultCompanyType,
        companies,

        setCompanies,
        setSpinnerIsActive,

    } = props;

    let [ errors, setErrors ] = useState( [] );

    let [ companyName, setCompanyName ] = useState( '' );
    let [ city, setCity ] = useState( '' );

    let [ companyAlias, setCompanyAlias ] = useState( '' );
    let [ legalName, setLegalName ] = useState( '' );


    let [ programSystem, setProgramSystem ] = useState( defaultProgramSystem );
    let [ companyType, setCompanyType ] = useState( defaultCompanyType );




    useEffect( () => {
        if( isOpen ){

        }else{
            setCompanyName( '' );
            setCompanyAlias( '' );
            setProgramSystem( defaultProgramSystem );
            setCompanyType( defaultCompanyType );
            setCompanyName( '' );
            setCity( '' );
            setLegalName( '' );
            setErrors( [] );

        };


    }, [ isOpen ] );

    const validate = () => {
        let isReady = true;
        let errorsArr = [];

        if( companyName.trim() === '' ){
            isReady = false;
            errorsArr.push( 'Имя компании не заполнено' );
        }else{
            if( companyAlias.trim() === '' ){
                isReady = false;
                errorsArr.push( 'Поле alias не заполнено!' );
                errorsArr.push( 'alias - это то, что будет использовано в адресной строке, без него вообще никак. И он должен быть уникальным, и без пробелов, и малелькими буквами, и только латинскими. Числа и тире можно.' );
            }else{
                const regex = /^([a-zA-Z0-9 _-]+)$/;
                if( regex.test( companyAlias.trim() ) === false ){
                    isReady = false;
                    errorsArr.push( 'alias - не валидный' );
                }else{
                    for( let i = 0; i < companies.length; i++ ){
                        let {
                            company_alias,
                            company_legal_name,
                            company_name,
                        } = companies[ i ];
                        if( company_alias === companyAlias.trim() ){
                            isReady = false;
                            errorsArr.push( 'alias - должен быть уникальным, а этот нет!' );
                            break;
                        };
                        if( company_name === companyName.trim() ){
                            isReady = false;
                            errorsArr.push( 'Имя компании - должено быть уникальным, а это нет!' );
                            break;
                        };
                    };
                };
            };
        };

        setErrors( errorsArr );

        return isReady = true;

    }



    const click = () => {

        if( validate() ){

            setSpinnerIsActive( true );

            send_request_to_server({
                route: 'add-new-company',
                data: {
                    name:        `${companyName}`.trim(),
                    city:        `${city}`.trim(),
                    alias:       `${companyAlias}`.trim(),
                    legalName:   `${legalName}`.trim(),
                    programSystem:`${programSystem}`.trim(),
                    type:        `${companyType}`.trim(),
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );
                    let { companies } = response;
                    setCompanies( companies );
                    setIsOpen( false );

                    setSpinnerIsActive( false );
                },
            });



        }

        
    };

    const change_company_name = ( e ) => {
        setErrors( [] );
        let val = e.target.value;
        setCompanyName( val );
    }

    const change_program_system = ( e ) => {
        setErrors( [] );
        let val = e.target.value;
        setProgramSystem( val );
    }

    const change_company_type = ( e ) => {
        setErrors( [] );
        let val = e.target.value;
        setCompanyType( val );
    }

    const change_company_alias = ( e ) => {
        setErrors( [] );
        let val = e.target.value.trim();

        const regex = /^([a-zA-Z0-9 _-]+)$/;
        if( regex.test( val ) ){
            setCompanyAlias( val );
        };
        
    }

    const change_company_legal_name = ( e ) => {
        setErrors( [] );
        let val = e.target.value;
        setLegalName( val );

    }

    const change_company_city = ( e ) => {
        setErrors( [] );
        let val = e.target.value;
        setCity( val );

    }
    


    return (
        <div className = 'addCompanyComponent'>

            <AWShowErrors
                errors = { errors }
            />

            <AWInputText
                title = 'Имя компании'
                value = {   companyName }
                onChange = { change_company_name }
            />

            <AWInputText
                title = 'Юридическое имя компании'
                value = {   legalName }
                onChange = { change_company_legal_name }
            />

            <AWInputText
                title = 'alias'
                value = {   companyAlias }
                onChange = { change_company_alias }
            />

            <AWInputText
                title = 'Город'
                value = {   city }
                onChange = { change_company_city }
            />

            <AWInputText
                title = 'program system'
                value = {  programSystem }
                onChange = { change_program_system }
            />

            <AWInputText
                title = 'Тип компании (tv, radio, press )'
                value = {  companyType }
                onChange = { change_company_type }
            />
            

            <AWButtonAdd 
                isReady =       { true }
                clickHandler =  { click }
            />

        </div>
        

    )

};


export function AddCompanyComponent( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <AddCompanyComponentComponent
            { ...props }
            defaultProgramSystem =  { admin.defaultProgramSystem }
            defaultCompanyType =    { admin.defaultCompanyType }
            companies =    { admin.companies }


            setCompanies = { ( arr ) => { dispatch( setCompanies( arr ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            

            

        />
    );


}
