
import React, { useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ItemPeriod.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { get_date_now_value } from './vendors/get_date_now_value.js';



const ItemPeriodComponent = ( props ) => {

    let {
        isOpen,
        
        dataFrom,
        dataTo,
        setDataFrom,
        setDataTo,

    } = props;

    let [ minDate, setMinDate ] = useState( '' );


    useEffect( () => {
        if( isOpen ){

            let nowDate = get_date_now_value();

            setMinDate( nowDate );
            setDataFrom( nowDate );
            setDataTo( nowDate );

        }else{

        };

    }, [ isOpen ] );

    const change_date_from = ( e ) => {
        let val = e.target.value;
        let date = new Date( val );
        let from_ms = date.getTime();

        let date_2 = new Date( dataTo );
        let to_ms = date_2.getTime();
        if( from_ms <= to_ms ){
            setDataFrom( val );
        }else{
            setDataFrom( val );
            setDataTo( val );
        };
    };

    const change_date_to = ( e ) => {
        let val = e.target.value;
        let date = new Date( val );
        let to_ms = date.getTime();

        let date_2 = new Date( dataFrom );
        let from_ms = date_2.getTime();
        if( to_ms >= from_ms ){
            setDataTo( val );
        };

    };





    return (
        <div className = 'NS_item_period_num'>
            <h3>Период размещения:</h3>

            <span>с</span>

            <input 
                type = 'date'
                value =     { dataFrom }
                min =       { minDate }
                onChange =  { change_date_from }
            />

            <span>по</span>
            <input 
                type = 'date'
                value =     { dataTo }
                min =       { dataFrom }
                onChange =  { change_date_to }
                />
        </div>

    )

};

export function ItemPeriod( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemPeriodComponent
            { ...props }
            // currentAppNum =     { application.currentAppNum }
            // currentAppName =    { application.currentAppName }
            // currentAppType =    { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
