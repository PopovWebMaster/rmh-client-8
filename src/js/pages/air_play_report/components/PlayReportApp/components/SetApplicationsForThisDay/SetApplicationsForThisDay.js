
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportAnalyticsSlise } from './../../../../../../redux/playReportAnalyticsSlise.js';
import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';


import './SetApplicationsForThisDay.scss';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { check_file_name_for_extension } from './../../../../../../helpers/check_file_name_for_extension.js';

import { AnalitycsEventsTreeClass } from './../../../../../../classes/AnalitycsEventsTreeClass.js';




const SetApplicationsForThisDayComponent = ( props ) => {

    let {
        isOpen,
        evenstTree,

        dateListSelected,


    } = props;

    // let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        if( isOpen ){

            // console.dir( 'dateListSelected' );
            // console.dir( dateListSelected );
            // console.dir( 'evenstTree' );
            // console.dir( evenstTree );
            send_request_to_server({
                route: 'get-release-list-for-one-day',
                data: {
                    YYYY_MM_DD: dateListSelected,
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){

                        if( response.release_list.length > 0 ){

                            let AnalitycsEventsTree = new AnalitycsEventsTreeClass();
                            AnalitycsEventsTree.CreateFromStore();
                            AnalitycsEventsTree.SetReleaseCount( response.release_list );
                            AnalitycsEventsTree.SetEventsTreeToStore();


                            // console.dir( AnalitycsEventsTree );
                            // AnalitycsEventsTree.SetChanges({
                            //     category_id,
                            //     event_id,
                            //     fileName,
                            //     changeObject,
                            // });

                            // AnalitycsEventsTree.SetEventsTreeToStore();
                                
                        };

                        


                    }


                    // let fileName = '';
                    // let fileName = '';
                    // let fileName = 'PRK_REK_SHUBY_GORLOVKA_20251107_1113.';


                    // check_file_name_for_extension( fileName );






                }
            });




            // setIsReady( true );

        }else{
            // setIsReady( false );
        }




    }, [ isOpen ] );


    
    return (<></>)

};

export function SetApplicationsForThisDay( props ){

    const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    const playReport = useSelector( playReportSlice );

    // const dispatch = useDispatch();

    return (
        <SetApplicationsForThisDayComponent
            { ...props }
            evenstTree =        { playReportAnalytics.evenstTree }
            dateListSelected =  { playReport.dateListSelected }

            
            // setSearchPeriod = { ( val ) => { dispatch( setSearchPeriod( val ) ) } }

        />
    );


}
