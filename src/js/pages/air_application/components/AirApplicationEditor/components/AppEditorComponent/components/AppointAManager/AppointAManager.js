
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AppointAManager.scss';

import { selectorData as applicationSlice, setCurrentManagerId, setCurrentAppManagerId, setCurrentAppIsChanged } from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as userInfoSlice } from './../../../../../../../../redux/userInfoSlice.js';



import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';



const AppointAManagerComponent = ( props ) => {

    let {
        managersList,
        managersById,
        currentManagerId,
        setCurrentManagerId,


        application,

        currentApplicationId,
        applicationById,

        currentAppManagerId,
        setCurrentAppManagerId,
        setCurrentAppIsChanged,

        user_position,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    useEffect( () => {

        // if( access_right( 'application_other_managers_see' ) ){
        //     setIsSelected( true );
        // }else{
        //     setIsSelected( false );
        // };

    }, [] );

    
    const click = () => {
        setIsOpen( !isOpen );

        console.dir( 'application' );
        console.dir( application );

    }

    const set_meneger_id = ( id ) => {
        // setCurrentManagerId( id );

        setCurrentAppManagerId( id );
        setCurrentAppIsChanged( true );
    };

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let { name, id } = item;

            return ( 
                <div 
                    className = 'AAM_drop_down_item'
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
            result = '--не назначен или удалён--';
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
        <>{ user_position === 'admin'? (
            <div 
                className = 'appointAManager isSelected'
                onClick = { click }
            >
                <span className = 'icon-address-card-o appointAManager_icon managerSelectedButton_icon'></span>
                <span className = 'appointAManager_title'>Менеджер:</span>
                <span className = 'appointAManager_name'>{ get_cuttent_name( currentAppManagerId ) }</span>

                <span className = { `${isOpen? 'icon-up-open-1': 'icon-down-open-1'} appointAManager_arrow` }></span>
                
                { isOpen? (

                    <div className = 'AAM_drop_down'>

                        <ScrollContainer height = '10em' >
                            { create( managersList ) }
                        </ScrollContainer>

                    </div>

                ): '' }
            </div>  
        ): '' }</>


    )

};

export function AppointAManager( props ){

    const application = useSelector( applicationSlice );
    const userInfo = useSelector( userInfoSlice );



    
    const dispatch = useDispatch();

    return (
        <AppointAManagerComponent
            { ...props }
            managersList =      { application.managersList }
            managersById =      { application.managersById }

            currentManagerId = { application.currentManagerId }

            application = { application }

            currentApplicationId = { application.currentApplicationId }
            applicationById = { application.applicationById }

            currentAppManagerId = { application.currentAppManagerId  }

            user_position = { userInfo.user_position  }





            setCurrentManagerId = { ( val ) => { dispatch( setCurrentManagerId( val ) ) } }
            setCurrentAppManagerId = { ( val ) => { dispatch( setCurrentAppManagerId( val ) ) } }
            setCurrentAppIsChanged = { ( val ) => { dispatch( setCurrentAppIsChanged( val ) ) } }





        />
    );


}
