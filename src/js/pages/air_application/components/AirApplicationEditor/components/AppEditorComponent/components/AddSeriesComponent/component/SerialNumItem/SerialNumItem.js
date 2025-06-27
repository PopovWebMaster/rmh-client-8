
import React, { useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SerialNumItem.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { get_last_serial_num } from './../../vendors/get_last_serial_num.js';

const SerialNumItemComponent = ( props ) => {

    let {
        isOpen,
        
        numFrom,
        numTo,
        setNumFrom,
        setNumTo,

    } = props;

    let [ minValue, setMinValue ] = useState( 1 );

    useEffect( () => {
        if( isOpen ){
            let min_val = get_last_serial_num();
            setMinValue( min_val );

            setNumFrom( min_val + 1 );
            setNumTo( min_val + 1 );

        }else{
            setMinValue( 1 );
            setNumFrom( 1 );
            setNumTo( 1 );
        };

    }, [ isOpen ] );

    const change_num_from = ( e ) => {
        let num = Number( e.target.value );

        if( num > minValue ){
            if( num < 1000 ){
                if( num <= numTo ){
                    setNumFrom( num );
                }else{
                    setNumFrom( num );
                    setNumTo( num );
                };
            };
        };
        
    }

    const change_num_to = ( e ) => {
        let num = Number( e.target.value );
        if( num > minValue && num >= numFrom ){
            if( num < 1000 ){
                setNumTo( num );
            };
        };
    }

    return (
        <div className = 'ASC_item_serial_num'>
            <h3>Номер серии:</h3>

            <span>с:</span>

            <input 
                type = 'number'
                value = { numFrom }
                onChange = { change_num_from }
            />

            <span>по:</span>
            <input 
                type = 'number'
                value = { numTo }
                onChange = { change_num_to }
            />

            <span className = 'ASC_item_serial_num_count'>всего серий: { numTo - numFrom + 1 }</span>
        </div>

    )

};

export function SerialNumItem( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <SerialNumItemComponent
            { ...props }
            // currentAppNum =     { application.currentAppNum }
            // currentAppName =    { application.currentAppName }
            // currentAppType =    { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
