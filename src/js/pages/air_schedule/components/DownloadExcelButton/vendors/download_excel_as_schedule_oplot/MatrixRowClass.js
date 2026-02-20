
import { get_event_by_id } from './../../../../../../helpers/get_event_by_id.js';

import { COLOR } from './../download_excel_as_schedule_oplot/excel_config.js';


export class MatrixRowClass {
    constructor(){

        this.startTime = 0;
        this.duration = 0;
        this.releaseInfo = '';
        this.notes = '';
        this.isKeyPoint = false;
        this.textColor = 'auto';
        this.cellBackground = null;


        this.highlight_files = {};




        this.SetStartTime = this.SetStartTime.bind(this);
        this.SetDuration = this.SetDuration.bind(this);
        this.SetReleaseInfo = this.SetReleaseInfo.bind(this);
        this.AddNotes = this.AddNotes.bind(this);
        

        this.SetReleaseInfoFromEvent = this.SetReleaseInfoFromEvent.bind(this);
        this.SetIsKeyPoint = this.SetIsKeyPoint.bind(this);
        this.SetReleaseInfoFromRelease = this.SetReleaseInfoFromRelease.bind(this);
        this.SetNotesFromRelease = this.SetNotesFromRelease.bind(this);
        this.GetData = this.GetData.bind(this);
        this.GetDataForEmpty = this.GetDataForEmpty.bind(this);

        this.SetCellBackground = this.SetCellBackground.bind(this);
        this.SetTextColor = this.SetTextColor.bind(this);
        this.SetHighlightFiles = this.SetHighlightFiles.bind(this);











    }

    SetHighlightFiles( highlight_files ){
        this.highlight_files = highlight_files;
    }

    SetCellBackground( cellBackground ){
        this.cellBackground = cellBackground;
    }

    SetTextColor( textColor ){
        this.textColor = textColor;
    }
            

    SetIsKeyPoint( isKeyPoint ){
        this.isKeyPoint = isKeyPoint;

    }

    SetStartTime( startTime ){
        this.startTime = startTime;
    }

    SetDuration( duration ){
        this.duration = duration;
    }

    SetReleaseInfo( releaseInfo ){
        // this.releaseInfo = `${this.releaseInfo} ${releaseInfo}`;
        this.releaseInfo = releaseInfo;

    }

    SetReleaseInfoFromEvent( eventId ){
        let { name } = get_event_by_id( eventId );
        this.SetReleaseInfo( name );
    }

    SetReleaseInfoFromRelease( release, eventId = null ){
        let {
            releaseName,
            file_list
        } = release;

        let releaseInfo = '';
        if( file_list.length > 0 ){

            let fileName = file_list[ file_list.length - 1 ];

            if( this.highlight_files[ fileName ] ){
                if( this.highlight_files[ fileName ].isUsed === true ){
                    if( this.cellBackground === COLOR.RED ){
                        this.textColor = 'FFFFFF';
                    }else{
                        this.textColor = COLOR.RED;
                    };
                };
            };

            releaseInfo = fileName;
        }else{
            releaseInfo = releaseName;
        };

        if( eventId !== null ){
            let { name } = get_event_by_id( eventId );

            releaseInfo = `${name} / ${releaseInfo}`;
        }

        this.releaseInfo = releaseInfo;
    }

    AddNotes( notes ){
        this.notes = `${this.notes} ${notes}`;
    }

    SetNotesFromScheduleEvent( scheduleEvent ){
        let {
            cutPart,
            finalNotes,
            firstSegmentId,
            // gridEventId,
            // isKeyPoint,
            is_premiere,
        } = scheduleEvent;
        let result = '';

        if( firstSegmentId !== null ){
            result = `Порезка ${cutPart}`;
        };

        if( is_premiere === true ){
            result = `${result}, ПРЕМЬЕРА!`;
        };

        if( result === '' ){
            result = finalNotes;
        }else{
            result = `${result}, ${ finalNotes }`;
        };

        this.AddNotes( result );

    }

    SetNotesFromRelease( release ){
        let {
            air_notes
        } = release;

        this.AddNotes( air_notes );

    }

    GetData(){

        return {
            startTime:      this.startTime,
            duration:       this.duration,
            releaseInfo:    this.releaseInfo,
            notes:          this.notes,
            isKeyPoint:     this.isKeyPoint,
            isEmpty:        false,

            textColor:     this.textColor,
            cellBackground:     this.cellBackground,


        };

    }

    GetDataForEmpty(){
        let data = this.GetData();
        data.isEmpty = true;
        return data;

    }
}

