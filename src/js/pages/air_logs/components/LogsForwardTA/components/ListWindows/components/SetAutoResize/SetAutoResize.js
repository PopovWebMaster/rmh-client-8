
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { 
        selectorData as logsForwardTASlise,
        setWindowLeftWidth,
        setWindowRightWidth,

} from './../../../../../../../../redux/logsForwardTASlise.js';

import './SetAutoResize.scss';


const SetAutoResizeComponent = ( props ) => {

    let {
        children,

        minWidth,
        processedListOfLogsMain,
        processedListOfLogsBackup,
        setWindowLeftWidth,
        setWindowRightWidth,
    } = props;

    useEffect( () => { 

        let main_is_full = processedListOfLogsMain.length > 0? true: false;
        let backup_is_full = processedListOfLogsBackup.length > 0? true: false;

        if( main_is_full && backup_is_full ){
            setWindowLeftWidth( 50 );
            setWindowRightWidth( 50 );
        }else{
            if( main_is_full ){
                setWindowLeftWidth( 100 - minWidth );
                setWindowRightWidth( minWidth );
            }else if( backup_is_full ){
                setWindowLeftWidth( minWidth );
                setWindowRightWidth( 100 - minWidth );
            }else{
                setWindowLeftWidth( 50 );
                setWindowRightWidth( 50 );
            };
        }


    }, [
        processedListOfLogsMain,
        processedListOfLogsBackup,
    ] );

    return (
        <>{ children }</>
    )

};

export function SetAutoResize( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    const dispatch = useDispatch();

    return (
        <SetAutoResizeComponent
            { ...props }
            minWidth = { logsForwardTA.minWidth }
            processedListOfLogsMain = { logsForwardTA.processedListOfLogsMain }
            processedListOfLogsBackup = { logsForwardTA.processedListOfLogsBackup }

            setWindowLeftWidth = { ( callback ) => { dispatch( setWindowLeftWidth( callback ) ) } }
            setWindowRightWidth = { ( callback ) => { dispatch( setWindowRightWidth( callback ) ) } }


        />
    );


}
