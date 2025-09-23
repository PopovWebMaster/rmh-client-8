
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ManagerSelectedButton.scss';

import { selectorData as applicationSlice, setCurrentManagerId } from './../../../../../../redux/applicationSlice.js';

import { ScrollContainer } from './../../../../../../components/ScrollContainer/ScrollContainer.js';

import { access_right } from './../../../../../../helpers/access_right.js';



const ManagerSelectedButtonComponent = ( props ) => {

    let {
        managersList,
        managersById,
        currentManagerId,
        setCurrentManagerId,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ isSelected, setIsSelected ] = useState( false );

    useEffect( () => {

        if( access_right( 'application_other_managers_see' ) ){
            setIsSelected( true );
        }else{
            setIsSelected( false );
        };

    }, [] );

    
    const click = () => {
        if( isSelected ){
            setIsOpen( !isOpen );
        };
    }

    const set_meneger_id = ( id ) => {
        setCurrentManagerId( id );
    };

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let { name, id } = item;

            return ( 
                <div 
                    className = 'MSB_drop_down_item'
                    key = { index }
                    onClick = { () => { set_meneger_id( id ) } }
                >
                    <span
                        
                    >{ name }</span> 
                </div> 
            )
        } );

        return div;

    };

    const get_cuttent_name = ( val ) => {
        let result = '';

        if( val === null ){
            result = '--Все--';
        }else{
            if( managersById[ val ] ){
                let { name } = managersById[ val ];
                result = name;
            }else{
                result = 'Этого не должно быть здесь!!!';
            };
        };

        return result;

    };
    
    return (
        <div 
            className = { `managerSelectedButton ${isSelected? 'isSelected': ''}` }
            onClick = { click }
        >
            <span className = 'icon-address-card-o managerSelectedButton_icon'></span>
            <span className = 'managerSelectedButton_title'>Менеджер:</span>
            <span className = 'managerSelectedButton_name'>{ get_cuttent_name( currentManagerId ) }</span>

            { isSelected? (<span className = { `${isOpen? 'icon-up-open-1': 'icon-down-open-1'} managerSelectedButton_arrow` }></span>): '' }
            
            { isSelected? isOpen? (

                <div className = 'MSB_drop_down'>

                    <ScrollContainer>
                        <div 
                            className = 'MSB_drop_down_item'
                            onClick = { () => { set_meneger_id( null ) } }
                        >
                            <span>--Все--</span>
                        </div>

                        { create( managersList ) }

                    </ScrollContainer>

                </div>

            ): '': '' }




        </div>

    )

};

export function ManagerSelectedButton( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <ManagerSelectedButtonComponent
            { ...props }
            managersList =      { application.managersList }
            managersById =      { application.managersById }

            currentManagerId = { application.currentManagerId }


            setCurrentManagerId = { ( val ) => { dispatch( setCurrentManagerId( val ) ) } }


        />
    );


}
