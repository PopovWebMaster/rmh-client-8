
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneKetEventGroup.scss';

import { selectorData as layoutSlice, setKeyPointsCurrentEventId } from './../../../../../../../redux/layoutSlice.js';


const OneKetEventGroupComponent = ( props ) => {

    let {
        category_id,
        list,

        categoryListById,

        setKeyPointsCurrentEventId,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ categoryName, setCategoryName ] = useState( '' );
    let [ categoryStyle, setCategoryStyle ] = useState( {} );

    useEffect( () => {

        if( categoryListById[ category_id ] ){
            let {
                name,
                colorBG,
                colorText,
            } = categoryListById[ category_id ];
            setCategoryName( name );
            setCategoryStyle( {
                backgroundColor: colorBG,
                color: colorText,
            } );

        }


    }, [ category_id ] );



    const clickCategory = () => {
        setIsOpen( !isOpen );
    };

    const clickEvent = ( eventId ) => {
        setKeyPointsCurrentEventId( eventId );

    }

    let getAllCountFromItem = ( item ) => {
        let { gridEvents } = item;
        let res = 0;
        for( let dayNum = 0; dayNum < 7; dayNum++ ){
            res = res + gridEvents[ dayNum ].length;
        };
        return res;
    }


    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let { id, style, name } = item;

            // console.dir( 'item' );
            // console.dir( item );

            let allCpunt = getAllCountFromItem( item );


            return (
                <div
                    className = 'keyEventWrap'
                    key = { index }
                    onClick = { () => { clickEvent( id ) } }
                    title = { name }
                >

                    { allCpunt === 0? '': (
                        <div className = 'gridAllCount'>
                            <span>{allCpunt}</span>
                        </div>
                    ) }

                    <span style = { style }>
                        { name }
                    </span>
                </div>
            );

        } );

        return div;

    }

   

    
    return (
        <div className = 'oneKetEventGroup'>
            <h4 
                className = 'keyCategory'
                onClick = { clickCategory }
            >
                <span className = { `keyCategory_icon ${isOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                <span 
                    className = 'keyCategory_name'
                    style =     { categoryStyle }
                >{ categoryName }</span>
            </h4>

            { isOpen? (
                <div className = 'keyEventItem'>
                    { create( list ) }
                </div>
            ): '' }

            
            
        </div>

    )

};

export function OneKetEventGroup( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <OneKetEventGroupComponent
            { ...props }

            categoryListById = { layout.categoryListById }
            // keyPointsCurrentEventId = { layout.keyPointsCurrentEventId }
            // categoryListById = { layout.categoryListById }

            setKeyPointsCurrentEventId = { ( val ) => { dispatch( setKeyPointsCurrentEventId( val ) ) } }


        />
    );


}
