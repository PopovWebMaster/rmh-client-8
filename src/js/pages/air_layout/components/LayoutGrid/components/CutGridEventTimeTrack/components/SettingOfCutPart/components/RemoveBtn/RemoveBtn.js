
import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './RemoveBtn.scss';

// import { selectorData as layoutSlice }    from './../../../../../../../../../../redux/layoutSlice.js';

const RemoveBtnComponent = ( props ) => {

    let {

        gridEventsParts,
        index,
        setGridEventsParts,

    } = props;

    let [ isShow, setIsShow ] = useState( false );

    useEffect( () => {
        if( gridEventsParts[ index - 1 ] ){
            setIsShow( true );
        }else{
            setIsShow( false );
        };

    }, [ gridEventsParts, index ] );

    const click = () => {

        let arr = [];

        let next_cut_part = 1;

        for( let i = 0; i < gridEventsParts.length; i++ ){
            if( index === i ){
                let { durationTime } = gridEventsParts[ i ];
                arr[ i - 1 ].durationTime = arr[ i - 1 ].durationTime + durationTime;
            }else{
                let item = { ...gridEventsParts[ i ] }
                item.cutPart = next_cut_part;
                next_cut_part++;
                arr.push( item );
            };
        };
        if( arr.length === 1 ){
            arr[ 0 ].cutPart = null;
            arr[ 0 ].firstSegmentId = null;
        };

        setGridEventsParts( arr );

    };


    return (<>{ isShow? (
        <div className = 'AOASGE_RemoveBtn'>
            <span
                onClick = { click }
            >удалить</span>
        </div>

    ): ''}</>
        
    )

};

export function RemoveBtn( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <RemoveBtnComponent
            { ...props }
            // eventList = { layout.eventList }
            // eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
