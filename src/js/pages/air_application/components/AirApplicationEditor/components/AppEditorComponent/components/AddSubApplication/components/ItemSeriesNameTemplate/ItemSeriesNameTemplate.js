import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemSeriesNameTemplate.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';


const ItemSeriesNameTemplateComponent = ( props ) => {

    let {
        isOpen,
        nameTemplate,
        setNameTemplate,
        numFrom,
        numTo,
        applicationName,
        serialNames,
        setSerialNames,

    } = props;

    let [ value, setValue ] = useState( '' );


    let inputRef = useRef();

    let numberMetka = '{number}';


    useEffect( () => {
        if( isOpen ){
           setValue( `${applicationName}. Серия - {number}` );

        }else{
            setSerialNames( {} );
            setValue( '' );
            setNameTemplate( '' );
        };

    }, [ isOpen ] );

    useEffect( () => {
        updateNames();
    }, [
        value,
        numFrom,
        numTo,
    ] );

    const acceptName = () => {
        
    };

    const updateNames = () => {
        let obj = {}
        let from = Number( numFrom );
        let to = Number( numTo );

        for( let i = from; i <= to; i++ ){
            // obj[ i ] = value.replace( /-/g, '.' );
            obj[ i ] = value.replace( /{number}/g, i );

        };

        setSerialNames( obj );

    }

    const enter = ( e ) => {
        if( e.which === 13 ){
            acceptName();
            inputRef.current.blur();
        };
    };

    const blur = () => {
        acceptName();
    }


    const change = ( e ) => {
        let val = e.target.value;
        if( val.indexOf( '{number}' ) !== -1 ){
            setValue( val );
        };
        

    };

    const change_item = ( e, key ) => {
        let val = e.target.value;
        let obj = { ...serialNames };
        obj[ key ] = val;
        setSerialNames( obj );

    }

    const create = ( obj ) => {

        let arr = Object.keys( obj );

        let inputs = arr.map(( item, index ) => {
            return (
                <input
                    type =      'text'
                    key =       { index }
                    className = 'NSA_ISNT_list_inp'
                    value =     { obj[ item ] }
                    onChange = { ( e ) => { change_item( e, item ) } }

                />
            );

        });

        return inputs;


    }



    return (
        <div className = 'NSA_item_serial_name_template'>
            <h3>Названия серии:</h3>

            <input 
                type =          'text'
                
                ref =           { inputRef }
                value =         { value }
                onChange =      { change }
                maxLength =     { 255 }
                onKeyDown =     { enter }
                onBlur =        { blur }
                placeholder =   { 'без имени выпуска ничего не выйдет' }
            />

            <div className = 'NSA_ISNT_list'>
                <ScrollContainer height = '8em'>
                    { create( serialNames ) }
                </ScrollContainer>

            </div>

            
        </div>

    )

};

export function ItemSeriesNameTemplate( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSeriesNameTemplateComponent
            { ...props }
            // currentAppNum =     { application.currentAppNum }
            // currentAppName =    { application.currentAppName }
            // currentAppType =    { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
