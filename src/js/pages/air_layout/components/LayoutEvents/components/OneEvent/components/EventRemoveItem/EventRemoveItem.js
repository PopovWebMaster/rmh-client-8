
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventRemoveItem.scss';

import { selectorData as layoutSlice, setEventList, setGridDayEventsList }    from './../../../../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../../../redux/spinnerSlice.js';
import { AlertWindowContainer }     from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWRemoveConfirmComponent } from './../../../../../../../../components/AlertWindowContainer/AWRemoveConfirmComponent/AWRemoveConfirmComponent.js';
import { AWConfirm } from './../../../../../../../../components/AlertWindowContainer/AWConfirm/AWConfirm.js';


import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';

const EventRemoveItemComponent = ( props ) => {

    let {
        id,
        name,
        
        setEventList,
        setSpinnerIsActive,
        setGridDayEventsList,

    } = props;

    let [ isOpen, setIsOpen] = useState( false );
    let [ isConditions, setIsConditions ] = useState( false );
    let [ gridEventsLength, setGridEventsLength ] = useState( 0 );
    let [ applicationsLength, setApplicationsLength ] = useState( 0 );


    let [ isJoke, setIsJoke ] = useState( false );
    let [ isNotJoke, setIsNotJoke ] = useState( false );





    

    useEffect( () => {
        if( isOpen ){

        }else{
            setIsConditions( false );
            setGridEventsLength( 0 );
            setApplicationsLength( 0 );
            setIsJoke( false );
            setIsNotJoke( false );
        };

    }, [ isOpen ] );

    const remove_event = () => {
        // setIsOpen( false );
        
        setSpinnerIsActive( true );

        // remove the event anyway
        
        send_request_to_server({
            route: `remove-event`,
            data: { 
                eventId: id,

            },

            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){

                    setSpinnerIsActive( false );

                    if( response.isCondition ){
                        setIsConditions( true );
                        setGridEventsLength( response.gridEventsLength );
                        setApplicationsLength( response.applicationsLength );

                    }else{

                        setEventList( response.eventsList );
                        setGridDayEventsList( response.gridEventsList );

                        setIsOpen( false );
                    };



                    // setSpinnerIsActive( false );

                    // setEventList( response.eventsList );
                    // setGridDayEventsList( response.gridEventsList );

                    // setIsOpen( false );
                };

            },
        });
    }

    const remove_event_anyway = () => {
        setSpinnerIsActive( true );
        send_request_to_server({
            route: `remove-event`,
            data: { 
                eventId: id,
                removeAnyway: true,
            },

            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){

                    setSpinnerIsActive( false );

                    setEventList( response.eventsList );
                    setGridDayEventsList( response.gridEventsList );

                    setIsOpen( false );

                };

            },
        });
    };


    const getAnywayRemoveText = ( gridLength, appLength ) => {
        let result = '';
        if( gridLength > 0 && appLength > 0 ){
            result = `К событию привязаны события сетки (${gridLength}шт.) и заявки (${appLength}шт.). При удалении оного, из сетки будет удалено всё, к чему привязано данное событие, и все его заявки останутся без графика.`
        }else{
            if( gridLength > 0 ){
                result = `К событию привязаны события сетки (${gridLength}шт.). Заявок нет. При удалении оного, из сетки будет удалено всё, к чему привязано данное событие.`
            }else if( appLength > 0 ){
                result = `К событию привязаны заявки (${appLength}шт.). При удалении оного, заявки останутся без графика.`
            };
        };

        return result

    }

    const click = () => {
        access_right( 'layout_event_remove', () => {
            setIsOpen( true );
        } );
    }



    return (
    <div className = 'LE_EventRemoveItem_wrap'>

        <AlertWindowContainer
            isOpen = { isOpen }
            setIsOpen = { setIsOpen }
            width = '23em'
            height = '15em'
        >

            {/* <AWRemoveConfirmComponent 
                setIsOpen =     { setIsOpen }
                removeHandler = { remove_event }
            /> */}

            <>{
                isConditions? isJoke? isNotJoke? (
                    <AWConfirm
                        text =              { 'А, если серьёзно, то удаление события, к которому хотя бы что-то привязано – плохая практика. Можно легко что-то важное упустить и наделать дел в эфире. Не рекомендуется так делать! Но, если вы уверены, что удаление необходимо, то под звон ваших стальных нервов я это выполню.' }
                        type =              'warning'
                        continueHandler =   { remove_event_anyway }
                        cancelHandler =     { () => { setIsOpen( false ) } }
                        titleContinue =     'Выполнить удаление' 
                        titlecancel =       { 'Отмена' }
                    />
                ):(
                    <AWConfirm
                        text =              { 'Ха, шутка! Нельзя удалить событие к которому привязано хотя бы что-то.' }
                        type =              'confirm'
                        continueHandler =   { () => { setIsNotJoke( true ) } }
                        cancelHandler =     { () => {} }
                        titleContinue =     'Лайк' 
                        titlecancel =       { null }
                    />
                ): (
                    <AWConfirm
                        text =              { getAnywayRemoveText( gridEventsLength, applicationsLength ) }
                        type =              'warning'
                        continueHandler =   { () => { setIsJoke( true ) } }
                        cancelHandler =     { () => { setIsOpen( false ) } }
                        titleContinue =     'Точно удалить' 
                        titlecancel =       'Отмена'
                    />
                ): (


                    <AWConfirm
                        text =              { `Вы действительно хотите удалить событие "${name}"?` }
                        type =              'warning'
                        continueHandler =   { remove_event }
                        cancelHandler =     { () => { setIsOpen( false ) } }
                        titleContinue =     'Удалить' 
                        titlecancel =       'Отмена'
                    />  
                )
            }</>





        </AlertWindowContainer>

        { access_right( 'layout_event_remove' )? (
            <div 
                className = 'LE_EventRemoveItem'
                onClick =   { click }
            >
                <span className = 'icon-cancel-2'></span>
            </div> 
        ): '' }


                

    </div>)

};

export function EventRemoveItem( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <EventRemoveItemComponent
            { ...props }

            setEventList = { ( val ) => { dispatch( setEventList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }


            


        />
    );


}
