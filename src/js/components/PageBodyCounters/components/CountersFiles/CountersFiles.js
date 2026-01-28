// CountersFiles


// CountersHoursList

// CountersDayList

import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CountersFiles.scss';

import { selectorData as countersSlise } from './../../../../redux/countersSlise.js';
import { ScrollContainer } from './../../../ScrollContainer/ScrollContainer.js';

// import { convert_sec_to_time } from './../../../../helpers/convert_sec_to_time.js';
import { get_event_by_id } from './../../../../helpers/get_event_by_id.js';


const CountersFilesComponent = ( props ) => {

    let {
        counterListFiles,
        
    } = props;



    const createFiles = ( obj ) => {
        let arr = Object.keys( obj );
        let div = arr.map( ( fileName, index ) => {
            let {
                // category,
                count,
                duration,
                // events,
            } = obj[ fileName ];


            return (

                <h4
                    key = { index }
                    className = 'PBC_CHF_item_fileName'
                >
                    <span
                        title = { fileName }
                        className = 'PBC_CHF_item_file_name'
                    >{ fileName }</span>

                    <span className = 'PBC_CHF_item_file_count'>
                        <span className = 'PBC_CHF_item_file_count_val'>
                            { count }
                        </span>
                    </span>
                    
                </h4>
            );
        } );

        return div;
    }

    const createEvents = ( obj ) => {
        let arr = Object.keys( obj );

        let div = arr.map( ( event_id, index ) => {
            let {
                count,
                files,
            } = obj[ event_id ];

            let {
                style,
                name
            } = get_event_by_id( event_id )



            return (
                <React.Fragment key = { index }>
                    <h4
                        
                        className = 'PBC_CHF_item_event'
                    >
                        <span
                            className = 'PBC_CHF_item_ev_name'
                            style = { style }
                            title = { name }
                        >{ name }</span>

                        <span className = 'PBC_CHF_item_ev_count'>
                            <span className = 'PBC_CHF_item_ev_count_val'>{ count }</span>

                            
                        </span>
                    </h4>

                    { createFiles( files ) }
                
                </React.Fragment>
            );
        } );

        return div;

    }

    const create = ( obj ) => {
        let arr = Object.keys( obj );

        let div = arr.map( ( catedory_id, index ) => {
            let {
                category,
                count,
                events,
            } = obj[ catedory_id ];
            let {
                colorBG,
                colorText,
                name,
            } = category;


            return (
                <div 
                    className = 'PBC_CHF_item'
                    key = { index }
                >
                    {/* <h4>
                        <span className = 'PBC_CHF_item_cat_count'>{ count }</span>
                        <span
                            className = 'PBC_CHF_item_cat_name'
                            style = {{
                                backgroundColor: colorBG,
                                color: colorText,
                            }}
                        >{ name }</span>
                    </h4> */}

                    { createEvents( events ) }
                </div>
            );
        } );

        return div;
        

    }





    
    return (
        <div className = 'PBC_CountersFiles'>

            <ScrollContainer>

                { create( counterListFiles ) }

            </ScrollContainer>

        </div>

    )

};

export function CountersFiles( props ){

    const counters = useSelector( countersSlise );
    // const dispatch = useDispatch();

    return (
        <CountersFilesComponent
            { ...props }
            counterList = { counters.counterList }
            counterListFiles = { counters.counterListFiles }


            // setCurrentCounterType = { ( val ) => { dispatch( setCurrentCounterType( val ) ) } }


        />
    );


}
