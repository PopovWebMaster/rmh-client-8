
import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdFileName.scss';

import { set_evenstTree_changes_to_store } from './../../../vendors/set_evenstTree_changes_to_store.js';
import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js';

const TdFileNameComponent = ( props ) => {

    let {

        // index,
        // list_length = 0,
        category_id,
        event_id,
        fileName,
        count,
        list,

        isUsed,


    } = props;

    let [ listIsOpen, setListIsOpen ] = useState( false );
    useEffect(() => {
        if( isUsed === false ){
            setListIsOpen( false );
        }
    }, [ isUsed ]);

    const chack = ( e ) => {
        set_evenstTree_changes_to_store({
            category_id,
            event_id,
            fileName,
            changeObject: {
                isUsed: !isUsed
            }
        });
    };

    const createFileList = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let {
                startTime,
            } = item;

            return (
                <div
                    className = 'fileList_item'
                    key = { index }
                >
                    <span className = 'FLI_time'>{ convert_sec_to_time( startTime ) }</span>
                    <span className = 'FLI_fileName'>{ fileName }</span>

                    
                    
                </div>
            );

        } );

        return div;




        

    }



    
    return (
        <td className = 'TdFileName'>
            <div>
                <input
                    type =      'checkbox'
                    disabled = { count === 0? true: false }
                    value =     { true }
                    checked =   { isUsed }
                    onChange =  { chack }
                />
                <input
                    type =      'text'
                    className = { `TdFileName_inp ${isUsed? 'isUsed': ''}` }
                    value =     { fileName }
                    onChange =  { () => {} }

                />
            </div>
            { isUsed? (<div className = 'fileList'>

                <div
                    className = 'allListBtn'
                    onClick = { () => { setListIsOpen( !listIsOpen ) } }
                >
                    <span className = { listIsOpen? 'icon-angle-up': 'icon-angle-down' }></span>
                </div>

                { listIsOpen? createFileList( list ): '' }

            </div>): '' }

        </td>
    )

};

export function TdFileName( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <TdFileNameComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
