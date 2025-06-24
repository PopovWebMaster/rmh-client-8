
import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './GrigItemWrap.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';
import { StartTimeWithEdit } from './components/StartTimeWithEdit/StartTimeWithEdit.js';

const GrigItemWrapComponent = ( props ) => {

    let {
        startTime,
        durationTime,
        isCompletd = false,
        isKeyPoint = false,
        id = null,

        children,
    } = props;

        



    let [ isError, setIsError ] = useState( false );

    useEffect( () => {
        if( durationTime >= 0 ){
            setIsError( false );
        }else{

            console.dir( 'props' );
    console.dir( props );
            setIsError( true );
        };
    }, [ durationTime ] );


    let text_seccess = 'Свободно:';
    let text_error = 'Ошибка, нарушение хронометража! Превышен на ';

    const getDuration = ( val ) => {
        if( val >= 0 ){
            return convert_sec_to_time( durationTime )
        }else{
            return convert_sec_to_time( durationTime * -1 );
        };

    };



    
    return (
        <div className = 'grigItem'>
            <div className = { `grigItemWrap ${ isCompletd? 'isCompletd': '' } ${ isError? 'errorTime': '' }` }>
                { isCompletd? (
                    <div className = 'grigItemTime'>
                        <StartTimeWithEdit 
                            startTime =     { startTime }
                            isKeyPoint =    { isKeyPoint }
                            id =            { id }
                        />
                        <span className = 'ETS_duration'>{ convert_sec_to_time( durationTime ) }</span>
                    </div>
                ): (

                    <div className = 'grigItemTimeRemains'>
                        <span className = 'text'>{ isError? text_error: text_seccess }</span>
                        <span className = 'time'>{ getDuration( durationTime ) }</span>
                    </div>
                ) }
                
                <div className = 'grigItemBody'>
                    { children }
                </div>
            </div>
        </div>
    )

};

export function GrigItemWrap( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <GrigItemWrapComponent
            { ...props }
            // gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
