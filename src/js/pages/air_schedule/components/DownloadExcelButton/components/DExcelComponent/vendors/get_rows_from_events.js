import store from './../../../../../../../redux/store.js';

import { convert_sec_to_time } from './../../../../../../../helpers/convert_sec_to_time.js';

export const get_rows_from_events = ( used_events ) => {

    let result = [];

    let { layout } = store.getState();
    let { eventListById } = layout;

    for( let i = 0; i < used_events.length; i++ ){
        let {
            eventId,
            durationTime,
            cutPart,
            firstSegmentId,
            gridEventId,
            notes,
            startTime,
            withOnlyApplications,
            releases,
            finalNotes,

        } = used_events[ i ];

        let startTimeStr = convert_sec_to_time( startTime, true );
        let releaseName = '';
        
        let releaseDurationStr = durationTime;
        let allNotes = finalNotes;

        let eventName = '';
        if( eventListById[ eventId ] ){
            eventName = eventListById[ eventId ].name;
        };

        if( releases[ 0 ] ){
            let reseaseData = getReleaseData( releases[ 0 ], cutPart, finalNotes );
            releaseName =           reseaseData.releaseName;
            releaseDurationStr =    reseaseData.releaseDurationStr;
            allNotes =              reseaseData.allNotes;
        };



        let pushItem = ( cell_0, cell_1, cell_2, cell_3, cell_4 ) => {
            result.push([ cell_0, cell_1, cell_2, cell_3, cell_4 ]);
        };

        if( withOnlyApplications ){
            if( releases.length > 0 ){
                pushItem( startTimeStr, eventName, releaseName, convert_sec_to_time( releaseDurationStr ), allNotes, );

                for( let i = 1; i < releases.length; i++ ){
                    let reseaseData = getReleaseData( releases[ i ], cutPart, finalNotes );
                    let relName =       reseaseData.releaseName;
                    let relDuretion =   reseaseData.releaseDurationStr;
                    let relAllNotes =   reseaseData.allNotes;
                    pushItem( '', '', relName, convert_sec_to_time( relDuretion ), relAllNotes, );
                };

                // pushItem( '', '', '', 'formula', '', );
                pushItem( '', '', '', '', '', );

            };
        }else{
            pushItem( startTimeStr, eventName, releaseName, convert_sec_to_time( releaseDurationStr ), allNotes, );
            // pushItem( '', '', '', 'formula', '', );
            pushItem( '', '', '', '', '', );

        };

    }


    return result;

}

function getReleaseData( release, cutPart, notes ){
    let cutName = '';
    if( cutPart !== null ){
        cutName = `(порезка ${cutPart})`;
    };
    let fileName = '';
    if( release.file_list.length > 0 ){
        fileName = release.file_list[ release.file_list.length - 1 ];
    };
    let releaseName = `${ release.applicationName } / ${release.releaseName} / ${fileName} ${cutName}`;

    // let releaseDurationStr = convert_sec_to_time( release.releaseDuration );
    let releaseDurationStr = release.releaseDuration;


    // let allNotes = `${ notes }, ${ release.air_notes }`;

    let allNotes = '';
    if( notes.trim() === '' ){
        allNotes = release.air_notes;
    }else{
        allNotes = `${ notes }, ${ release.air_notes }`;
    };



    return {
        releaseName,
        releaseDurationStr,
        allNotes
    }
}

// YYYY_MM_DD: "2025-07-30"
// air_notes: ""
// applicationName: "Югстрой"
// application_id: 6
// category_id: 9
// event_id: 11
// file_list: [],
// grid_event_id: 148
// id: 630
// manager_id: 1
// releaseDuration: 25
// releaseName: "Кирпичи"
// startTime: 25019
// sub_application_id: 8