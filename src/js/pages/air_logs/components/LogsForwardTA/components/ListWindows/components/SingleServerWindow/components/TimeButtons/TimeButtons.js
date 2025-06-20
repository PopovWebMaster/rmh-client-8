
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../../../../../redux/logsForwardTASlise.js';

import './TimeButtons.scss';

const TimeButtonsComponent = ( props ) => {

    let {

        borderMoverWidtnPx,

    } = props;

    let TIME_LIST = [
        '0:00',
        '7:00',
        '7:30',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '19:30',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
    ];

    const click = ( val ) => {

        let arr = val.split( ':' );
        let h = Number( arr[0] );
        let m = Number( arr[1] );
        let sec = ( m * 60 ) + ( h * 3600 );


        let SSW_List = document.querySelectorAll( '.SSW_List' );

        if( SSW_List[ 0 ] ){
            let list = SSW_List[ 0 ].querySelectorAll( '.SSL_itemMovie_time' );
            let is_start = false;

            for( let i = 0; i < list.length; i++ ){
                let input = list[ i ].querySelector( '.SSL_itemMovie_time input' );
                let value = input.value;
                
                let arr_2 = value.split( ':' );
                let t_h = Number( arr_2[0] );
                let t_m = Number( arr_2[1] );
                let sec_2 =  ( t_h * 3600 ) + ( t_m * 60 );

                if( is_start === false ){
                    if( sec_2 < 1800 ){
                        is_start = true;
                    };
                };
                if( is_start ){
                    if( sec_2 >= sec ){

                        input.scrollIntoView({ behavior: 'smooth' })

                        break;
                    };
                };

            };
        };

        if( SSW_List[ 1 ] ){
            let list = SSW_List[ 1 ].querySelectorAll( '.SSL_itemMovie_time' );
            let is_start = false;

            for( let i = 0; i < list.length; i++ ){
                let input = list[ i ].querySelector( '.SSL_itemMovie_time input' );
                let value = input.value;
                
                let arr_2 = value.split( ':' );
                let t_h = Number( arr_2[0] );
                let t_m = Number( arr_2[1] );
                let sec_2 =  ( t_h * 3600 ) + ( t_m * 60 );

                if( is_start === false ){
                    if( sec_2 < 1800 ){
                        is_start = true;
                    };
                };
                if( is_start ){
                    if( sec_2 >= sec ){

                        input.scrollIntoView({ behavior: 'smooth' })

                        break;
                    };
                };

            };
        };






    }



    const create = () => {
        let li = TIME_LIST.map( ( item, index) => {

            return (
            <li key = { index } >
                <span
                    onClick = { () => { click( item ) } }
                >
                    { item }
                </span>
            </li>);

        } );

        return li;

    }

    return (

        <div className = 'FTA_List_TimeButtons'>
            <ul>
                { create() }
            </ul>
        </div>
    )

};

export function TimeButtons( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <TimeButtonsComponent
            { ...props }

            borderMoverWidtnPx = { logsForwardTA.borderMoverWidtnPx }


            // setSelectedAll = { ( val ) => { dispatch( setSelectedAll( val ) ) } }

        />
    );


}
